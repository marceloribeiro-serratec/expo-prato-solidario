import { createContext, useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";

import { getData, storeData } from "../services/storage";
import { authActions } from "../actions/auth.actions";
import { supabase } from "../services/supabase";
import {
    toastLoginErro,
    toastLoginContaNaoMigrada,
    toastLoginSucesso,
    toastErro,
} from "@/utils/toast";

WebBrowser.maybeCompleteAuthSession();

interface AuthContextData {
    user: User | null;
    profile: Profile | null;
    signIn: (email: string, password: string) => Promise<Profile | null>;
    signInWithGoogle: () => Promise<boolean>;
    signOut: () => void;
    loading: boolean;
}

type User = {
    id?: string;
    email: string | null;
    token: string;
    name?: string | null;
    avatarUrl?: string | null;
    role?: string | null;
};

type Profile = {
    id?: string;
    name: string;
    profile: string;
    email?: string | null;
    role?: string | null;
};

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function getErrorMessage(error: unknown) {
    if (error instanceof Error) {
        return error.message;
    }

    if (typeof error === "string") {
        return error;
    }

    return "Erro desconhecido.";
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [profile, setProfile] = useState<Profile | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadStorageData() {
            const storagedUser = await getData("@user");

            const storagedProfile = await getData("@profile");

            const storagedToken = await getData("@token");

            if (storagedUser) {
                setUser(storagedUser);
                setProfile(storagedProfile);
                setToken(storagedToken);
                return;
            }

            const { data } = await supabase.auth.getSession();

            if (data.session) {
                await persistSessionData(data.session, "email");
            }
        }

        loadStorageData();
    }, []);

    useEffect(() => {}, [user]);

    async function persistAuthData(authUser: User, authProfile: Profile, authToken: string) {
        setUser(authUser);
        setProfile(authProfile);
        setToken(authToken);
        await storeData("@user", authUser);
        await storeData("@profile", authProfile);
        await storeData("@token", authToken);
    }

    async function getClienteProfile(email: string | null) {
        if (!email) {
            return null;
        }

        const { data, error } = await supabase
            .from("clientes")
            .select("id,nome,email,role")
            .eq("email", email)
            .maybeSingle();

        if (error) {
            console.error("Erro ao buscar perfil do cliente:", error);
            return null;
        }

        return data;
    }

    async function persistSessionData(
        session: NonNullable<Awaited<ReturnType<typeof supabase.auth.getSession>>["data"]["session"]>,
        authProvider: string
    ) {
        const cliente = await getClienteProfile(session.user.email ?? null);
        const name =
            cliente?.nome ??
            session.user.user_metadata?.full_name ??
            session.user.user_metadata?.name ??
            session.user.email ??
            "Usuario";
        const role = cliente?.role ?? session.user.user_metadata?.role ?? "user";

        const authUser: User = {
            id: session.user.id,
            email: session.user.email ?? null,
            token: session.access_token,
            name,
            avatarUrl: session.user.user_metadata?.avatar_url ?? null,
            role,
        };

        const authProfile: Profile = {
            id: cliente?.id ?? session.user.id,
            name,
            email: session.user.email ?? null,
            profile: authProvider,
            role,
        };

        await persistAuthData(authUser, authProfile, session.access_token);

        return authProfile;
    }

    async function signIn(email: string, password: string) {
        setLoading(true);
        const normalizedEmail = email.trim().toLowerCase();

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: normalizedEmail,
                password,
            });

            if (error) {
                throw error;
            }

            if (!data.session) {
                throw new Error("Sessao do Supabase nao retornada.");
            }

            const authProfile = await persistSessionData(data.session, "email");
            toastLoginSucesso(authProfile.name);
            return authProfile;
        } catch (error) {
            console.error("Erro ao fazer login com email e senha:", error);

            const cliente = await getClienteProfile(normalizedEmail);
            const errorMessage =
                error instanceof Error ? error.message.toLowerCase() : "";

            if (
                cliente &&
                errorMessage.includes("invalid login credentials")
            ) {
                toastLoginContaNaoMigrada();
                return null;
            }

            toastLoginErro();
            return null;
        } finally {
            setLoading(false);
        }
    }

    async function signInWithGoogle() {
        setLoading(true);

        try {
            const redirectTo = AuthSession.makeRedirectUri({
                scheme: "expo-prato-solidario",
                native: "expo-prato-solidario://auth/callback",
                path: "auth/callback",
            });

            console.log("Supabase Google redirect:", redirectTo);

            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                    redirectTo,
                    skipBrowserRedirect: true,
                },
            });

            if (error) {
                throw error;
            }

            if (!data.url) {
                throw new Error("URL de autenticacao do Google nao retornada.");
            }

            const result = await WebBrowser.openAuthSessionAsync(data.url, redirectTo);

            if (result.type !== "success") {
                return false;
            }

            const redirectUrl = new URL(result.url);
            const params = new URLSearchParams(
                redirectUrl.hash ? redirectUrl.hash.substring(1) : redirectUrl.search
            );

            const code = params.get("code");
            if (code) {
                const { data: sessionData, error: exchangeError } =
                    await supabase.auth.exchangeCodeForSession(code);

                if (exchangeError) {
                    throw exchangeError;
                }

                const session = sessionData.session;
                if (!session) {
                    throw new Error("Sessao do Supabase nao retornada.");
                }

                const authProfile = await persistSessionData(session, "google");
                toastLoginSucesso(authProfile.name);

                return true;
            }

            const accessToken = params.get("access_token");
            const refreshToken = params.get("refresh_token");

            if (!accessToken || !refreshToken) {
                throw new Error("Tokens do Supabase nao retornados no OAuth.");
            }

            const { data: sessionData, error: sessionError } =
                await supabase.auth.setSession({
                    access_token: accessToken,
                    refresh_token: refreshToken,
                });

            if (sessionError) {
                throw sessionError;
            }

            const session = sessionData.session;
            if (!session) {
                throw new Error("Sessao do Supabase nao retornada.");
            }

            const authProfile = await persistSessionData(session, "google");
            toastLoginSucesso(authProfile.name);

            return true;
        } catch (error) {
            console.error(error);
            toastErro(getErrorMessage(error), "Erro ao fazer login com Google");
            return false;
        } finally {
            setLoading(false);
        }
    }

    async function signOut() {
        await supabase.auth.signOut();
        setUser(null);
        setProfile(null);
        setToken(null);
        storeData("@user", null);
        storeData("@profile", null);
        storeData("@token", null);
    }

    authActions.signOut = signOut;

    return (
        <AuthContext.Provider
            value={{ user, profile, signIn, signInWithGoogle, signOut, loading }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// hook personalizado
export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

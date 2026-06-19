import { createContext, useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { Alert } from "react-native";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";

import { getData, storeData } from "../services/storage";
import { authActions } from "../actions/auth.actions";
import api from "../services/api";
import { supabase } from "../services/supabase";

WebBrowser.maybeCompleteAuthSession();

interface AuthContextData {
    user: User | null;
    profile: Profile | null;
    signIn: (email: any, password: any) => void;
    signInWithGoogle: () => Promise<boolean>;
    signOut: () => void;
    loading: boolean;
}

type User = {
    email: string | null;
    password?: string;
    token: string;
    name?: string | null;
    avatarUrl?: string | null;
};

type Profile = {
    name: string;
    profile: string;
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

    function signIn(email: string, password: string) {
        setLoading(true);

        api.post("/login", {
            email: `${email}`,
            password: `${password}`,
        })
            .then((response) => {
                persistAuthData(response.data, response.data, response.data.token);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                alert("Erro ao fazer login");
                setLoading(false);
            });
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

                const authUser: User = {
                    email: session.user.email ?? null,
                    token: session.access_token,
                    name:
                        session.user.user_metadata?.full_name ??
                        session.user.user_metadata?.name ??
                        null,
                    avatarUrl: session.user.user_metadata?.avatar_url ?? null,
                };

                await persistAuthData(
                    authUser,
                    {
                        name: authUser.name ?? authUser.email ?? "Usuario",
                        profile: "google",
                    },
                    session.access_token
                );

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

            const authUser: User = {
                email: session.user.email ?? null,
                token: session.access_token,
                name:
                    session.user.user_metadata?.full_name ??
                    session.user.user_metadata?.name ??
                    null,
                avatarUrl: session.user.user_metadata?.avatar_url ?? null,
            };

            await persistAuthData(
                authUser,
                {
                    name: authUser.name ?? authUser.email ?? "Usuario",
                    profile: "google",
                },
                session.access_token
            );

            return true;
        } catch (error) {
            console.error(error);
            Alert.alert(
                "Erro ao fazer login com Google",
                getErrorMessage(error)
            );
            return false;
        } finally {
            setLoading(false);
        }
    }

    function signOut() {
        setUser(null);
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

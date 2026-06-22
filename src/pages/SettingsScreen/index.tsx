import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    Bell,
    CircleHelp,
    LockKeyhole,
    LogOut,
    Mail,
    Moon,
    ShieldCheck,
    UserRoundCog,
} from "lucide-react-native";

import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { COLORS } from "@/constants/colors";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { SettingsOption } from "../../components/SettingsOption";
import { settingsScreen } from "./style";

export function SettingsScreen() {
    const { user, profile, signOut, isConnected } = useAuth();
    const { colors, isDarkMode, setDarkMode } = useTheme();
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [emailEnabled, setEmailEnabled] = useState(false);

    const isLoggedIn = Boolean(user);
    const avatarUrl = user?.avatarUrl;
    const userName = profile?.name ?? user?.name ?? "Usuario nao conectado";
    const userEmail = profile?.email ?? user?.email ?? "Entre para ver seus dados";
    const isUserOnline = isLoggedIn && isConnected;

    return (
        <SafeAreaView
            style={[
                settingsScreen.container,
                { backgroundColor: colors.background },
            ]}
        >
            <View
                style={[
                    settingsScreen.headerContainer,
                    {
                        backgroundColor: colors.background,
                        borderBottomColor: colors.border,
                    },
                ]}
            >
                <Header
                    title="Configuracoes"
                    titleColor={COLORS.red}
                    iconColor={COLORS.red}
                    hiddenIcons={["search", "refresh", "plus", "user"]}
                    showMenu
                />
            </View>

            <ScrollView
                contentContainerStyle={settingsScreen.content}
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={[
                        settingsScreen.accountCard,
                        {
                            backgroundColor: colors.surface,
                            borderColor: colors.border,
                        },
                    ]}
                >
                    {avatarUrl ? (
                        <Image
                            source={{ uri: avatarUrl }}
                            style={settingsScreen.accountAvatar}
                            resizeMode="cover"
                        />
                    ) : (
                        <View style={settingsScreen.accountIcon}>
                            <UserRoundCog color={COLORS.white} size={28} />
                        </View>
                    )}

                    <View style={settingsScreen.accountInfo}>
                        <Text
                            style={[
                                settingsScreen.accountName,
                                { color: colors.text },
                            ]}
                        >
                            {userName}
                        </Text>
                        <Text
                            style={[
                                settingsScreen.accountEmail,
                                { color: colors.mutedText },
                            ]}
                        >
                            {userEmail}
                        </Text>
                    </View>

                    <View
                        style={[
                            settingsScreen.statusBadge,
                            !isUserOnline && settingsScreen.offlineBadge,
                        ]}
                    >
                        <Text
                            style={[
                                settingsScreen.statusText,
                                !isUserOnline && settingsScreen.offlineText,
                            ]}
                        >
                            {isUserOnline ? "Online" : "Offline"}
                        </Text>
                    </View>
                </View>

                <View style={settingsScreen.section}>
                    <Title color={colors.text} size={20} fontWeight="700">
                        Preferencias
                    </Title>

                    <SettingsOption
                        title="Notificacoes"
                        description="Receber avisos sobre pedidos e doacoes"
                        icon={<Bell color={COLORS.green_dark} size={22} />}
                        value={notificationsEnabled}
                        onValueChange={setNotificationsEnabled}
                    />

                    <SettingsOption
                        title="E-mails"
                        description="Receber novidades e comprovantes no e-mail"
                        icon={<Mail color={COLORS.green_dark} size={22} />}
                        value={emailEnabled}
                        onValueChange={setEmailEnabled}
                    />

                    <SettingsOption
                        title="Modo escuro"
                        description="Usar visual com menos brilho"
                        icon={<Moon color={COLORS.green_dark} size={22} />}
                        value={isDarkMode}
                        onValueChange={setDarkMode}
                    />
                </View>

                <View style={settingsScreen.section}>
                    <Title color={colors.text} size={20} fontWeight="700">
                        Conta e seguranca
                    </Title>

                    <SettingsOption
                        title="Dados pessoais"
                        description="Nome, e-mail e informacoes do perfil"
                        icon={<UserRoundCog color={COLORS.green_dark} size={22} />}
                    />

                    <SettingsOption
                        title="Privacidade"
                        description="Controle de dados e preferencias da conta"
                        icon={<ShieldCheck color={COLORS.green_dark} size={22} />}
                    />

                    <SettingsOption
                        title="Senha e acesso"
                        description="Gerenciar credenciais de login"
                        icon={<LockKeyhole color={COLORS.green_dark} size={22} />}
                    />
                </View>

                <View style={settingsScreen.section}>
                    <Title color={colors.text} size={20} fontWeight="700">
                        Suporte
                    </Title>

                    <SettingsOption
                        title="Central de ajuda"
                        description="Perguntas frequentes e contato"
                        icon={<CircleHelp color={COLORS.green_dark} size={22} />}
                    />

                    <SettingsOption
                        title="Sair da conta"
                        description="Encerrar a sessao neste dispositivo"
                        icon={<LogOut color={COLORS.red} size={22} />}
                        onPress={signOut}
                        danger
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

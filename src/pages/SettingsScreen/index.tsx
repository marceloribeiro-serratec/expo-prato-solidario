import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
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
import { SettingsOption } from "./components/SettingsOption";
import { settingsScreen } from "./style";

export function SettingsScreen() {
    const { user, profile, signOut, isConnected } = useAuth();
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [emailEnabled, setEmailEnabled] = useState(false);
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);

    const userName = profile?.name ?? user?.name ?? "Usuario";
    const userEmail = profile?.email ?? user?.email ?? "email nao informado";

    return (
        <SafeAreaView style={settingsScreen.container}>
            <View style={settingsScreen.headerContainer}>
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
                <View style={settingsScreen.accountCard}>
                    <View style={settingsScreen.accountIcon}>
                        <UserRoundCog color={COLORS.white} size={28} />
                    </View>

                    <View style={settingsScreen.accountInfo}>
                        <Text style={settingsScreen.accountName}>{userName}</Text>
                        <Text style={settingsScreen.accountEmail}>{userEmail}</Text>
                    </View>

                    <View
                        style={[
                            settingsScreen.statusBadge,
                            !isConnected && settingsScreen.offlineBadge,
                        ]}
                    >
                        <Text
                            style={[
                                settingsScreen.statusText,
                                !isConnected && settingsScreen.offlineText,
                            ]}
                        >
                            {isConnected ? "Online" : "Offline"}
                        </Text>
                    </View>
                </View>

                <View style={settingsScreen.section}>
                    <Title color={COLORS.gray_700} size={20} fontWeight="700">
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
                        value={darkModeEnabled}
                        onValueChange={setDarkModeEnabled}
                    />
                </View>

                <View style={settingsScreen.section}>
                    <Title color={COLORS.gray_700} size={20} fontWeight="700">
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
                    <Title color={COLORS.gray_700} size={20} fontWeight="700">
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

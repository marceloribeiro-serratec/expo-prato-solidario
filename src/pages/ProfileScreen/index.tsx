import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    HeartHandshake,
    LogOut,
    Mail,
    ShieldCheck,
    UserRound,
    Utensils,
} from "lucide-react-native";

import { CardDados } from "@/components/CardDados";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { COLORS } from "@/constants/colors";
import { useAuth } from "@/contexts/AuthContext";
import { ProfileActionItem } from "./components/ProfileActionItem";
import { profileScreen } from "./style";

const fallbackAvatarUrl =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=180&h=180&fit=crop&crop=face";

export function ProfileScreen() {
    const { user, profile, signOut } = useAuth();

    const userName = profile?.name ?? user?.name ?? "Usuario";
    const userEmail = profile?.email ?? user?.email ?? "email nao informado";
    const userRole = profile?.role ?? user?.role ?? "user";
    const authProvider = profile?.profile ?? "email";

    return (
        <SafeAreaView style={profileScreen.container}>
            <View style={profileScreen.headerContainer}>
                <Header
                    title="Perfil"
                    titleColor={COLORS.red}
                    iconColor={COLORS.red}
                    hiddenIcons={["search", "refresh", "plus", "user"]}
                    showMenu={true}
                />
            </View>

            <ScrollView
                contentContainerStyle={profileScreen.content}
                showsVerticalScrollIndicator={false}
            >
                <View style={profileScreen.profileCard}>
                    <View style={profileScreen.avatarContainer}>
                        <Image
                            source={{ uri: user?.avatarUrl ?? fallbackAvatarUrl }}
                            style={profileScreen.avatar}
                            resizeMode="cover"
                        />
                    </View>

                    <Text style={profileScreen.name}>{userName}</Text>
                    <Text style={profileScreen.email}>{userEmail}</Text>

                    <View style={profileScreen.badge}>
                        <Text style={profileScreen.badgeText}>
                            Nivel 5 - Doador solidario
                        </Text>
                    </View>
                </View>

                <View style={profileScreen.stats}>
                    <CardDados
                        titulo="Refeicoes doadas"
                        subtitulo="124"
                        corFundoCard={COLORS.green_light}
                        corFundoIcone={COLORS.green_dark}
                        icone={<Utensils color={COLORS.white} size={26} />}
                    />
                    <CardDados
                        titulo="Impacto social"
                        subtitulo="R$ 248,00"
                        corFundoCard={COLORS.info_light}
                        corFundoIcone={COLORS.info_base}
                        icone={<HeartHandshake color={COLORS.white} size={26} />}
                    />
                </View>

                <View style={profileScreen.section}>
                    <Title color={COLORS.gray_700} size={20} fontWeight="700">
                        Dados da conta
                    </Title>

                    <ProfileActionItem
                        title="Informacoes pessoais"
                        description={userName}
                        icon={<UserRound color={COLORS.green_dark} size={22} />}
                    />
                    <ProfileActionItem
                        title="E-mail"
                        description={userEmail}
                        icon={<Mail color={COLORS.green_dark} size={22} />}
                    />
                    <ProfileActionItem
                        title="Acesso"
                        description={`${userRole} via ${authProvider}`}
                        icon={<ShieldCheck color={COLORS.green_dark} size={22} />}
                    />
                </View>

                <View style={profileScreen.section}>
                    <ProfileActionItem
                        title="Sair da conta"
                        description="Encerrar a sessao neste dispositivo"
                        icon={<LogOut color={COLORS.red} size={22} />}
                        onPress={signOut}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

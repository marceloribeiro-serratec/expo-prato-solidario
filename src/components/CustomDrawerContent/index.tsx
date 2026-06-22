import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { House, Info, Settings, UserRound, Utensils } from "lucide-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { COLORS } from "@/constants";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { customDrawer } from "./style";

const fallbackAvatarUrl =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=face";

const drawerItems = [
    {
        label: "Home",
        routeName: "AppTabs",
        Icon: House,
    },
    {
        label: "Perfil",
        routeName: "Perfil",
        Icon: UserRound,
    },
    {
        label: "Configuracoes",
        routeName: "Configuracoes",
        Icon: Settings,
    },
    {
        label: "Sobre Nós",
        routeName: "Sobre",
        Icon: Info,
    },
    {
        label: "Produtos",
        routeName: "Menu",
        Icon: Utensils,
    },
] as const;

export function CustomDrawerContent({
    navigation,
    state,
}: DrawerContentComponentProps) {
    const { user, profile } = useAuth();
    const { colors } = useTheme();
    const activeRouteName = state.routeNames[state.index];
    const userName = profile?.name ?? user?.name ?? user?.email ?? "Usuário";
    const avatarSource = {
        uri: user?.avatarUrl ?? fallbackAvatarUrl,
    };

    return (
        <View
            style={[
                customDrawer.container,
                { backgroundColor: colors.background },
            ]}
        >
            <View
                style={[
                    customDrawer.profile,
                    { borderBottomColor: colors.border },
                ]}
            >
                <View style={customDrawer.avatar}>
                    <Image
                        source={avatarSource}
                        style={customDrawer.avatarImage}
                        resizeMode="cover"
                    />
                </View>

                <Text style={customDrawer.profileTitle}>{userName}</Text>
                <Text
                    style={[
                        customDrawer.profileSubtitle,
                        { color: colors.drawerText },
                    ]}
                >
                    124 Refeições Doadas
                </Text>

                <View
                    style={[
                        customDrawer.levelBadge,
                        { backgroundColor: colors.activeBackground },
                    ]}
                >
                    <Text style={customDrawer.levelText}>Nível 5</Text>
                </View>
            </View>

            <View style={customDrawer.nav}>
                {drawerItems.map(({ label, routeName, Icon }) => {
                    const isActive = activeRouteName === routeName;

                    return (
                        <TouchableOpacity
                            key={routeName}
                            style={[
                                customDrawer.navItem,
                                isActive && {
                                    backgroundColor: colors.activeBackground,
                                },
                            ]}
                            onPress={() => navigation.navigate(routeName)}
                            accessibilityRole="button"
                            accessibilityLabel={label}
                        >
                            <Icon
                                size={21}
                                color={
                                    isActive
                                        ? COLORS.green_dark
                                        : colors.drawerText
                                }
                            />
                            <Text
                                style={[
                                    customDrawer.navText,
                                    { color: colors.drawerText },
                                    isActive && customDrawer.navTextActive,
                                ]}
                            >
                                {label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            <View
                style={[
                    customDrawer.footer,
                    { borderTopColor: colors.border },
                ]}
            >
                <Text style={customDrawer.footerText}>Prato Solidário</Text>
            </View>
        </View>
    );
}

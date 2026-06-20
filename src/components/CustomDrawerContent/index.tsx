import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { BarChart3, House, Info, Settings, Utensils } from "lucide-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { COLORS } from "@/constants";
import { useAuth } from "@/contexts/AuthContext";
import { customDrawer } from "./style";
import { HouseHeart } from "lucide-react-native/icons";

const fallbackAvatarUrl =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=face";

const drawerItems = [
    {
        label: "Home",
        routeName: "Home",
        Icon: House,
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
    const activeRouteName = state.routeNames[state.index];
    const userName = profile?.name ?? user?.name ?? user?.email ?? "Usuário";
    const avatarSource = {
        uri: user?.avatarUrl ?? fallbackAvatarUrl,
    };

    return (
        <View style={customDrawer.container}>
            <View style={customDrawer.profile}>
                <View style={customDrawer.avatar}>
                    <Image
                        source={avatarSource}
                        style={customDrawer.avatarImage}
                        resizeMode="cover"
                    />
                </View>

                <Text style={customDrawer.profileTitle}>{userName}</Text>
                <Text style={customDrawer.profileSubtitle}>
                    124 Refeições Doadas
                </Text>

                <View style={customDrawer.levelBadge}>
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
                                isActive && customDrawer.navItemActive,
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
                                        : customDrawer.inactiveIcon.color
                                }
                            />
                            <Text
                                style={[
                                    customDrawer.navText,
                                    isActive && customDrawer.navTextActive,
                                ]}
                            >
                                {label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            <View style={customDrawer.footer}>
                <Text style={customDrawer.footerText}>Prato Solidário</Text>
            </View>
        </View>
    );
}

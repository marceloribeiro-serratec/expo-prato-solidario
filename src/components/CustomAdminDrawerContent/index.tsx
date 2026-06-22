import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { BarChart3, Settings, LogOut } from "lucide-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "@/constants";
import { useAuth } from "@/contexts/AuthContext";
import { customDrawer } from "../CustomDrawerContent/style";

const fallbackAvatarUrl =
    "https://static.vecteezy.com/ti/vetor-gratis/p1/7166516-boss-administrator-head-avatar-profile-icon-with-tie-symbol-vector-illustration-vetor.jpg";

const drawerItems = [
    {
        label: "Painel de Controle",
        routeName: "Control",
        Icon: Settings,
    },
    {
        label: "Histórico de Vendas",
        routeName: "History",
        Icon: BarChart3,
    },
] as const;

export function CustomAdminDrawerContent({
    navigation,
    state,
}: DrawerContentComponentProps) {
    const { user, profile, signOut } = useAuth();
    const activeRouteName = state.routeNames[state.index];
    const userName = profile?.name ?? user?.name ?? user?.email ?? "Usuário";
    const avatarSource = {
        uri: user?.avatarUrl ?? fallbackAvatarUrl,
    };

    function logout() {
        signOut();
    }

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
                <TouchableOpacity 
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingVertical: 8,
                    }}
                    onPress={logout}
                    accessibilityRole="button"
                    accessibilityLabel="Deslogar"
                >
                    <LogOut size={22} color={COLORS.black} />
                    <Text style={{ 
                        color: COLORS.black, 
                        marginLeft: 8, 
                        fontWeight: '600',
                        fontSize: 20 
                    }}>
                        Sair
                    </Text>
                </TouchableOpacity>
                <Text style={customDrawer.footerText}>Prato Solidário</Text>
            </View>
        </View>
    );
}
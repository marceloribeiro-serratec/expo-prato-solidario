import { CustomDrawerContent } from "@/components/CustomDrawerContent";
import ProdutosScreen from "@/pages/ProdutosScreen";
import { ProfileScreen } from "@/pages/ProfileScreen";
import { SettingsScreen } from "@/pages/SettingsScreen";
import { SobreNosScreen } from "@/pages/SobreNosScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { BottomTabsRoutes } from "./BottomTabsRoutes";
import { UserRole } from "./type";

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export type RootDrawerParamList = {
    AppTabs: undefined;
    Perfil: undefined;
    Configuracoes: undefined;
    Sobre: undefined;
    Menu: undefined;
};

interface DrawerRoutesProps {
    role?: UserRole;
}

export function DrawerRoutes({ role = "user" }: DrawerRoutesProps) {
    const isPublic = role === "public";

    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerPosition: "left",
                drawerStyle: {
                    width: 280,
                    backgroundColor: "transparent",
                },
                overlayColor: "rgba(0, 0, 0, 0.18)",
            }}
        >
            <Drawer.Screen
                name="AppTabs"
                options={{ drawerLabel: "Home" }}
            >
                {() => <BottomTabsRoutes role={role} />}
            </Drawer.Screen>

            {!isPublic && (
                <>
                    <Drawer.Screen
                        name="Perfil"
                        component={ProfileScreen}
                        options={{ drawerLabel: "Perfil" }}
                    />
                    <Drawer.Screen
                        name="Configuracoes"
                        component={SettingsScreen}
                        options={{ drawerLabel: "Configuracoes" }}
                    />
                </>
            )}

            <Drawer.Screen
                name="Sobre"
                component={SobreNosScreen}
                options={{ drawerLabel: "Sobre" }}
            />
            <Drawer.Screen
                name="Menu"
                component={ProdutosScreen}
                options={{ drawerLabel: "Menu" }}
            />
        </Drawer.Navigator>
    );
}

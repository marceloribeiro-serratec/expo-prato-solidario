import { CustomDrawerContent } from "@/components/CustomDrawerContent";
import ProdutosScreen from "@/pages/ProdutosScreen";
import { SobreNosScreen } from "@/pages/SobreNosScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { BottomTabsRoutes } from "./BottomTabsRoutes";

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export type RootDrawerParamList = {
    Home: undefined;
    Sobre: undefined;
    Menu: undefined;
};

export function DrawerRoutes() {
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
            <Drawer.Screen name="Home" component={BottomTabsRoutes} />
            <Drawer.Screen name="Sobre" component={SobreNosScreen} />
            <Drawer.Screen name="Menu" component={ProdutosScreen} />
        </Drawer.Navigator>
    );
}

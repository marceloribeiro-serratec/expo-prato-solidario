import { CustomAdminDrawerContent } from "@/components/CustomAdminDrawerContent";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ControlScreen } from "@/pages/ControlScreen";
import { HistoryScreen } from "@/pages/HistoryScreen";

const AdminDrawer = createDrawerNavigator<RootDrawerParamList>();

export type RootDrawerParamList = {
    Control: undefined;
    History: undefined;
};

export function AdminDrawerRoutes() {
    return (
        <AdminDrawer.Navigator
            drawerContent={(props) => <CustomAdminDrawerContent {...props} />}
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
            <AdminDrawer.Screen name="Control" component={ControlScreen} />
            <AdminDrawer.Screen name="History" component={HistoryScreen} />
        </AdminDrawer.Navigator>
    );
}
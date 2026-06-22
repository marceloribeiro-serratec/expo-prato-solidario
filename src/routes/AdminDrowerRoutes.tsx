import { createDrawerNavigator } from "@react-navigation/drawer";
import { ControlScreen } from "@/pages/ControlScreen";
import { HistoryScreen } from "@/pages/HistoryScreen";

const AdminDrawer = createDrawerNavigator();

export function AdminDrawerRoutes() {
    return (
        <AdminDrawer.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
        <AdminDrawer.Screen
            name="Control"
            component={ControlScreen}
        />

        <AdminDrawer.Screen
            name="History"
            component={HistoryScreen}
        />
        </AdminDrawer.Navigator>
    );
}
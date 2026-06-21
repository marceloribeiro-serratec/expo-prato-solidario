import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "@/contexts/AuthContext";
import { OfflineScreen } from "@/pages/OfflineScreen";

import { StackRoutes } from "./StackRoutes";

export function Routes() {
    const { isConnected } = useAuth();

    if (!isConnected) {
        return <OfflineScreen />;
    }

    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    );
}

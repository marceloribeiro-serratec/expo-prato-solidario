import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { OfflineScreen } from "@/pages/OfflineScreen";

import { StackRoutes } from "./StackRoutes";

export function Routes() {
    const { isConnected } = useAuth();
    const { colors, isDarkMode } = useTheme();

    const navigationTheme = {
        dark: isDarkMode,
        colors: {
            primary: colors.text,
            background: colors.background,
            card: colors.surface,
            text: colors.text,
            border: colors.border,
            notification: colors.text,
        },
        fonts: {
            regular: { fontFamily: "System", fontWeight: "400" as const },
            medium: { fontFamily: "System", fontWeight: "500" as const },
            bold: { fontFamily: "System", fontWeight: "700" as const },
            heavy: { fontFamily: "System", fontWeight: "800" as const },
        },
    };

    if (!isConnected) {
        return <OfflineScreen />;
    }

    return (
        <NavigationContainer theme={navigationTheme}>
            <StackRoutes />
        </NavigationContainer>
    );
}

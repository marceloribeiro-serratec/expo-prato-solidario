import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { PageContainerProps } from "./type";

import { COLORS } from "@/constants/colors";
import { pageContainerStatic } from "./style";

export function PageContainerStatic({
    children,
    backgroundColor,
    edges,
    paddingBottom,
    statusBarBackgroundColor,
    statusBarStyle = "light",
}: PageContainerProps) {
    return (
        <SafeAreaView
            edges={edges}
            style={[
                pageContainerStatic.container,
                backgroundColor && { backgroundColor },
                paddingBottom !== undefined && { paddingBottom },
            ]}
        >
            <StatusBar
                backgroundColor={statusBarBackgroundColor ?? COLORS.white}
                style={statusBarStyle}
                translucent={false}
            />
            {children}
        </SafeAreaView>
    );
}

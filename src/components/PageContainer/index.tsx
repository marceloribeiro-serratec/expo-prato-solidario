import { StatusBar } from "expo-status-bar";
import { pageContainer } from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import { PageContainerProps } from "./type";

export function PageContainer({
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
                pageContainer.container,
                backgroundColor && { backgroundColor },
                paddingBottom !== undefined && { paddingBottom },
            ]}
        >
            <StatusBar
                backgroundColor={statusBarBackgroundColor}
                style={statusBarStyle}
                translucent={false}
            />
            {children}
        </SafeAreaView>
    );
}

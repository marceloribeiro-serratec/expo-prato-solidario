import { ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "expo-image";

import { PageContainerProps } from "./type";
import { COLORS } from "@/constants/colors";
import { pageContainer } from "./style";

export function PageContainerScroll({
    children,
    backgroundColor,
    paddingBottom,
    statusBarBackgroundColor,
    statusBarStyle = "dark",
}: PageContainerProps) {
    return (
        <SafeAreaView
            style={[
                pageContainer.container,
                backgroundColor && { backgroundColor },
            ]}
        >
            <ImageBackground
                source={require("../../../assets/welcome.png")}
                style={pageContainer.backgroundImage}
                contentFit="cover"
            >
                <StatusBar
                    backgroundColor={statusBarBackgroundColor ?? COLORS.black}
                    style={statusBarStyle}
                    translucent={false}
                />
                <ScrollView
                    style={pageContainer.scroll}
                    contentContainerStyle={[
                        pageContainer.content,
                        paddingBottom !== undefined && { paddingBottom },
                    ]}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    {children}
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
}

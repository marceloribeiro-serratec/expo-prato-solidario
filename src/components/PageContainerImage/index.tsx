import { StatusBar } from "expo-status-bar";
import { pageContainer } from "./style";
import { ImageBackground } from "expo-image";
import { PageContainerImageProps } from "./type";

export function PageContainerImage({
    children,
    backgroundColor,
    edges,
    paddingBottom,
    statusBarBackgroundColor,
    statusBarStyle = "light",
}: PageContainerImageProps) {
    return (
        <ImageBackground
            source={require("@/assets/images/background.png")}
            style={[
                pageContainer.container,
                backgroundColor && { backgroundColor },
                paddingBottom !== undefined && { paddingBottom },
            ]}
            contentFit="cover"
        >
            <StatusBar
                backgroundColor={statusBarBackgroundColor}
                style={statusBarStyle}
                translucent={false}
            />
            {children}
        </ImageBackground>
    );
}

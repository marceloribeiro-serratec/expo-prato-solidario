import { StatusBar } from "expo-status-bar";
import { COLORS } from "@/constants/colors";
import { pageContainerImage } from "./style";
import { ImageBackground } from "expo-image";
import { PageContainerImageProps } from "./type";

export function PageContainerImage({
    children,
    paddingBottom,
    statusBarBackgroundColor,
    statusBarStyle = "light",
}: PageContainerImageProps) {
    return (
        <ImageBackground
            source={require("../../../assets/welcome.png")}
            style={[
                pageContainerImage.container,
                paddingBottom !== undefined && { paddingBottom },
            ]}
            contentFit="cover"
        >
            <StatusBar
                backgroundColor={statusBarBackgroundColor ?? COLORS.black}
                style={statusBarStyle}
                translucent={false}
            />
            {children}
        </ImageBackground>
    );
}

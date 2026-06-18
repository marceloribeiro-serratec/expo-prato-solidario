import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

import { PageContainerImage } from "@/components/PageContainerImage";

import { welcomeScreen } from "./style";

export function WelcomeScreen() {
    return (
        <PageContainerImage>
            <BlurView
                intensity={20}
                tint="default"
                experimentalBlurMethod="dimezisBlurView"
                style={welcomeScreen.blur}
            />
            <LinearGradient
                colors={["rgba(255,255,255,0.7)", "rgba(0,0,0,0.3)","rgba(0,0,0,0.9)"]}
                style={welcomeScreen.gradient}
            >
            </LinearGradient>
        </PageContainerImage>
    );
}

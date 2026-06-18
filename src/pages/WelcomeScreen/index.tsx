import {View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { PageContainerImage } from "@/components/PageContainerImage";
import { LogoImage } from "@/components/LogoImage";
import { Title } from "@/components/Title";

import { welcomeScreen } from "./style";
import { COLORS } from "@/constants";
import { Line } from "@/components/Line";

export function WelcomeScreen() {
    return (
        <PageContainerImage>
            <LinearGradient
                colors={[
                    "rgba(255,255,255,0.9)",
                    "rgba(0,0,0,0.5)",
                    "rgba(0,0,0,0.9)",
                ]}
                style={welcomeScreen.gradient}
            >
                <View style={welcomeScreen.container}>
                    <View style={welcomeScreen.logoContainer}>
                        <LogoImage iconSize={40} />
                    </View>
                    <Title size={28} color={COLORS.white} fontWeight="bold">
                        Prato Solidário
                    </Title>
                    <Line />
                </View>
            </LinearGradient>
        </PageContainerImage>
    );
}

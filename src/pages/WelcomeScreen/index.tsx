import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

import { PageContainerImage } from "@/components/PageContainerImage";

import { welcomeScreen } from "./style";
import { LogoImage } from "@/components/LogoImage";
import React from "react";
import { Platform, View } from "react-native";

export function WelcomeScreen() {
    return (
        <PageContainerImage>
            {Platform.OS === "android" ? (
                <View style={welcomeScreen.androidBlurFallback} />
            ) : (
                <BlurView
                    intensity={30}
                    tint="default"
                    style={welcomeScreen.blur}
                />
            )}
            <LinearGradient
                colors={["rgba(255,255,255,0.9)", "rgba(0,0,0,0.3)","rgba(0,0,0,0.9)"]}
                style={welcomeScreen.gradient}
            >
                <View style={welcomeScreen.logoContainer}>
                    <LogoImage iconSize={40}/>
                </View>   
            </LinearGradient>
        </PageContainerImage>
    );
}

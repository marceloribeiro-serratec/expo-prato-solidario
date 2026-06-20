import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";

import { Routes } from "@/routes";
import { AuthProvider } from "@/contexts/AuthContext";

export default function App() {
    const [isSplashVisible, setIsSplashVisible] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsSplashVisible(false);
        }, 1200);

        return () => clearTimeout(timeoutId);
    }, []);

    if (isSplashVisible) {
        return (
            <GestureHandlerRootView style={styles.root}>
                <View style={styles.splashContainer}>
                    <Image
                        source={require("./assets/splash.png")}
                        style={styles.splashImage}
                        contentFit="contain"
                    />
                </View>
            </GestureHandlerRootView>
        );
    }

    return (
        <GestureHandlerRootView style={styles.root}>
            <AuthProvider>
                <Routes />
            </AuthProvider>
            <Toast />
        </GestureHandlerRootView>
        
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    splashContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
    },
    splashImage: {
        width: 200,
        height: 200,
    },
});

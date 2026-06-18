import { StyleSheet } from "react-native";

export const loginScreen = StyleSheet.create({
    container: {
        paddingVertical: 42,
        paddingHorizontal: 24,
        justifyContent: "center",
        flex: 1,
    },
    gradient: {
        flex: 1,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 24,
    },
    titleContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    subtitleContainer: {
        marginTop: 54,
    },
});

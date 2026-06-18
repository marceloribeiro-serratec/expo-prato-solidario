import { COLORS } from "@/constants";
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
    formContainer: {
        marginTop: 42,
        backgroundColor: COLORS.white,
        padding: 24,
        borderRadius: 8,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    subtitleContainer: {
        marginTop: 54,
    },
    signupContainer: {
        marginTop: 40,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 4,
    },
    signupText: {
        width: "auto",
        paddingTop: 0,
        lineHeight: 22,
    },
    signupButton: {
        height: "auto",
        paddingVertical: 0,
        paddingHorizontal: 0,
    },
});

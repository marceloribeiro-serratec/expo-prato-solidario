import { COLORS } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const loginForm = StyleSheet.create({
     input: {
        fontSize: 16,
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 6,
        backgroundColor: COLORS.white,
    },
    label: {
        fontSize: 16,
        color: COLORS.black,
        marginBottom: 10,
    },
    errorText: {
        fontSize: 14,
        textAlign: "left",
        color: "red",
        marginTop: 4,
    },
     buttonForgetPassword: {
        width: "100%",
        height: 50,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    areaForgotPassword: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: 240
    },
    section: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 2
    },
    paragraph: {
        color: COLORS.red,
        fontSize: 16
    },
    inputIcon: {
        position: "absolute",
        top: 47,
        left: 10,
        zIndex: 1,
    },
})
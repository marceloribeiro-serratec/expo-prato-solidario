import { COLORS } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const loginForm = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.gray_300,
        borderRadius: 6,
        paddingHorizontal: 14,
    },
     input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 14,
        paddingHorizontal: 10,
        color: COLORS.black,
    },
    label: {
        fontSize: 16,
        color: COLORS.black,
    },
    errorText: {
        fontSize: 14,
        textAlign: "left",
        color: "red",
        marginTop: 4,
    },
     buttonForgetPassword: {
        width: "100%",
        height: 40,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    areaForgotPassword: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: 270
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
        top: 17,
        left: 10,
        zIndex: 1,
    },
})

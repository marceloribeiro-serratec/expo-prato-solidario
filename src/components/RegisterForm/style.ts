import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

export const registerForm = StyleSheet.create({
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
})
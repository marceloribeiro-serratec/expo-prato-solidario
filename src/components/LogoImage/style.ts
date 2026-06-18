import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

export const logoImage = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: 80,
        height: 80,
        borderRadius: 18,
        backgroundColor: COLORS.red,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
});

import { COLORS } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: "100%",
        fontSize: 14,
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: COLORS.gray_300,
        borderRadius: 8,
        paddingHorizontal: 12,
        color: COLORS.gray_700,
        marginTop: 6,    
    },
    focused: {
        borderColor: COLORS.red,
    }
});

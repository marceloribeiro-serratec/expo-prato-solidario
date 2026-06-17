import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.gray_200,
        borderWidth: 1,
        borderColor: COLORS.gray_300,
        height: 48,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 24,
        width:294
    },
});

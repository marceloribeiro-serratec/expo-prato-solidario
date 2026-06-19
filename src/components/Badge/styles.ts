import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.info_light,
        borderRadius: 12,
        paddingHorizontal: 16,
        height: 32,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        width: 120
    }
});

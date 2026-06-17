import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.info_light,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 4,
        height: 25,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 4
    }
});

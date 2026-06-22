import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

export const styles = StyleSheet.create({
    container: {
        borderWidth: 1.5,
        borderColor: COLORS.gray_400,
        borderStyle: 'dashed',
        borderRadius: 16,
        backgroundColor: COLORS.gray_200,
        paddingVertical: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconWrapper: {
        marginBottom: 12,
        position: 'relative',
    },
    plusBadge: {
        position: 'absolute',
        top: -4,
        right: -10,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.brown,
    },
});
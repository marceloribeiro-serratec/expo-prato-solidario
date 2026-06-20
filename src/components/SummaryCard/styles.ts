import { StyleSheet } from "react-native";
import { COLORS } from "@/constants";

export const styles = StyleSheet.create({
    card: {
        width: 240,
        height: 148,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 3,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    accent: {
        width: 8,
        height: '100%',
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },
    content: {
        flex: 1,
        paddingLeft: 12,
        paddingRight: 16,
        justifyContent: 'center',
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    infoRow: {
        marginBottom: 2,
    },
    title: {
        fontSize: 16,
        fontWeight: '400',
        color: COLORS.info_medium,
    },
    meta: {
        fontSize: 14,
        fontWeight: '700',
        color: COLORS.info_medium,
    },
    value: {
        fontSize: 24,
        fontWeight: '600',
    }
});
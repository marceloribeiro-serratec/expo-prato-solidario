import { StyleSheet } from "react-native";
import { COLORS } from "@/constants";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.white,
        borderRadius: 12,
        padding: 16,
        marginVertical: 8,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    id: { 
        color: COLORS.red, 
        fontWeight: 'bold', 
        fontSize: 16 
    },
    statusBadge: {
        backgroundColor: COLORS.green_light,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
    },
    statusText: { 
        color: COLORS.green, 
        fontSize: 14, 
        fontWeight: '700' 
    },
    customer: { 
        fontSize: 18, 
        fontWeight: 'bold', 
        color: COLORS.gray_600 
    },
    details: { 
        fontSize: 14, 
        color: COLORS.gray_400, 
        marginBottom: 4 
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginTop: 4,
    },
    contributionBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.green_soft,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
    },
    contributionContent: {
        marginLeft: 12,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    contributionText: { 
        fontSize: 11, 
        color: COLORS.gray_500,
        fontWeight: 'bold',
        textTransform: 'uppercase', 
    },
    contributionValue: { 
        fontSize: 16, 
        fontWeight: 'bold', 
        color: COLORS.green_dark,
    },
    totalBox: { 
        alignItems: 'flex-end' 
    },
    totalLabel: { 
        fontSize: 14, 
        color: COLORS.gray_500 
    },
    totalValue: { 
        fontSize: 22, 
        fontWeight: 'bold', 
        color: COLORS.red 
    },
});
import { COLORS } from '@/constants';
import { StyleSheet } from 'react-native';

export const categoryCard = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray_100,
        borderWidth: 1,
        borderColor: COLORS.gray_300,
        borderRadius: 12,
        padding: 12,
        width: 160,
        height: 120,
        alignItems: "center",
        justifyContent: "center",
    },
    iconContainer: {
        width: 60,
        height: 60,
        borderRadius: 20,
        backgroundColor: COLORS.green_light,
        alignItems: "center",
        justifyContent: "center",
    },
});

import { COLORS } from '@/constants';
import { StyleSheet } from 'react-native';

export const categoryCard = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray_100,
        borderWidth: 1,
        borderColor: COLORS.gray_300,
        borderRadius: 12,
        padding: 12,
        width: 80,
        height: 80,
        alignItems: "center",
        justifyContent: "center",
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.green_light,
        alignItems: "center",
        justifyContent: "center",
    },
});

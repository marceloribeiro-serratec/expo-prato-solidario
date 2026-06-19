import { COLORS } from '@/constants';
import { StyleSheet } from 'react-native';

export const categoryCard = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray_100,
        borderWidth: 1,
        borderColor: COLORS.gray_300,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
})
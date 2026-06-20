import { COLORS } from '@/constants';
import { StyleSheet } from 'react-native';

export const categoryCard = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray_100,
        borderWidth: 1,
        borderColor: COLORS.gray_300,
        borderRadius: 12,
        padding: 12,
        width: 180,
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        elevation: 3,
    },
    imageContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: COLORS.danger_light,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
    },
});

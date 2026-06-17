import { COLORS } from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const pageContainer = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        paddingHorizontal: 12,
        paddingTop: 24,
        paddingBottom: 24,
    }
});
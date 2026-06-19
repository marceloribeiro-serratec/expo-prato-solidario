import { COLORS } from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const pageContainerStatic = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: COLORS.white,
        paddingHorizontal: 12,
    }
});
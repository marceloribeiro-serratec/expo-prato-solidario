import { COLORS } from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const pageContainer = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white,
    },
    scroll: {
        flex: 1,
    },
    content: {
        flexGrow: 1,
        justifyContent: 'center',
    },
});

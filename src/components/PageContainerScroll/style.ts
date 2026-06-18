import { COLORS } from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const pageContainer = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    backgroundImage: {
        flex: 1,
    },
    scroll: {
        flex: 1,
    },
    content: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 12,
        paddingTop: 24,
        paddingBottom: 24,
    },
});

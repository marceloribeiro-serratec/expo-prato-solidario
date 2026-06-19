import { StyleSheet, Platform, StatusBar } from 'react-native';
import { COLORS } from '@/constants/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray_100,
    },
    headerContainer: {
        backgroundColor: COLORS.white,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight! + 20 : 50,
        paddingHorizontal: 20,
        paddingBottom: 20,
        // Isso garante que o header herde o comportamento de alinhamento
    },
});
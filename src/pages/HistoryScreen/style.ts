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
    },
    cardsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        marginTop: 20,
        justifyContent: 'space-between',
    },
    scrollContainer: {
    paddingHorizontal: 20,
    gap: 16,
    marginTop: 20,
    },
});
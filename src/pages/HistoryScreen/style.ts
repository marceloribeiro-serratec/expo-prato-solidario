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
        paddingTop: 16,
        paddingBottom: 16,
    },
    filterRow: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        marginTop: 16,
        alignItems: 'center',
        gap: 8,
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: COLORS.red,
    },
    defaultFilterButton: {
        backgroundColor: COLORS.gray_400,
    },
    activeFilterButton: {
        backgroundColor: COLORS.red,
    },
    optionsRow: {
        flexDirection: 'row',
        gap: 8,
    },
    option: {
        backgroundColor: COLORS.gray_200,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
    },
    activeOption: {
        backgroundColor: COLORS.red,
    },
    text: { 
        color: COLORS.gray_600 
    },
    activeText: { 
        color: COLORS.white, 
        fontWeight: '600' 
    },
    listContainer: {
        flex: 1,
        width: '100%',
    }
});
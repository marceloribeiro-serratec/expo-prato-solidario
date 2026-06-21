import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const aboutScreen = StyleSheet.create({
    bannerSection: {
        width: '100%',
        height: 200, 
        overflow: 'hidden'
    },
    bannerImage: {
        width: '100%',
        height: '100%',
    },
    contentSection: {
        padding: 24,
        flexDirection: 'column',
        gap: 16, 
    },
    sectionTitle: {
        color: COLORS.gray_700,
        fontSize: 18,
        fontWeight: '600',
        marginTop: 8,
    },
    paragraph: {
        color: COLORS.gray_600,
        fontSize: 16,
        lineHeight: 24, 
        textAlign: 'left',
    },
    highlightText: {
        color: COLORS.red, 
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 24,
        marginBottom: 32,
        textAlign: 'center',
    },
    cardsContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
        marginTop: 16,
        marginBottom: 16,
        width: '100%',
    },
    headerContainer: {
        backgroundColor: COLORS.gray_100,
        paddingHorizontal: 12,
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray_200,
        justifyContent: 'center', 
    }
    
});
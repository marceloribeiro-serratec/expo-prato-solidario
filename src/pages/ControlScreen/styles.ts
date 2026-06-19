import { StyleSheet, Platform, StatusBar } from 'react-native';
import { COLORS } from '@/constants/colors';

export const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    headerContainer: {
        marginTop: -10,
        backgroundColor: COLORS.white,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight! + 20 : 50,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    titleContainer: {
        width: '90%',
        alignSelf: 'center',
        gap: 8,
    },
    buttonFotoContainer: {
        marginTop: 24,
    },
    buttonContainer: {
        marginTop: 30,
        gap: 15,
        width: "100%",
        alignItems: "center",
    }
})
import { StyleSheet, Platform, StatusBar } from 'react-native';
import { COLORS } from '@/constants/colors';

export const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    headerContainer: {
        marginTop: -40,
        backgroundColor: COLORS.white,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight! : 40,
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
    },
    cardsContainer: {
        marginTop: 20,
        marginBottom: 40,
        width: "100%",
    },
    lista: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        gap: 16,
        alignItems: "center",
        flexDirection: "row",
    },
    ordenacaoContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    ordenacaoButtons: {
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        marginTop: 15, 
        gap: 8 ,
    },
    image: {
        width: 250, 
        height: 180, 
        borderRadius: 16, 
        alignSelf: 'center'
    }
})
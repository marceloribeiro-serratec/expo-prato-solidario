import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center' 
    },
    container: {
        width: '90%',
        maxHeight: '80%',
        backgroundColor: COLORS.gray_100,
        borderRadius: 16,
        padding: 20,
        borderWidth: 2,
        borderColor: COLORS.red 
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: COLORS.red,
        textAlign: 'center',
        marginBottom: 15 
    },
    formContainer: {
        marginVertical: 10
    },
    inputGroup: {
        marginBottom: 15
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    button: {
        flex: 1,
        padding: 12,
        borderRadius: 12,
        alignItems: 'center',
        marginHorizontal: 5
    },
    btnPrimary: {
        backgroundColor: COLORS.red 
    },
    btnSecondary: {
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.red
    },
    btnTextPrimary: {
        color: COLORS.white,
        fontWeight: 'bold'
    },
    btnTextSecondary: {
        color: COLORS.red,
        fontWeight: 'bold'
    },
    message: {
        fontSize: 16,
        textAlign: "center",
        marginVertical: 20,
    },
})
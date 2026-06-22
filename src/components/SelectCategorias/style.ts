import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    // O botão que imita o Input de texto
    selectButton: {
        height: 54, // Altura padrão de inputs modernos
        borderWidth: 1,
        borderColor: COLORS.gray_400, // Altere para a cor da borda do seu Input padrão se houver
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor: COLORS.white,
        marginTop: 5,
    },
    selectButtonText: {
        fontSize: 16,
    },
    
    // --- ESTILOS DO MODAL INTERNO (Seguindo o ModalDinamico) ---
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)', // Mesmo blackout do ModalDinamico
        justifyContent: 'center', // Centralizado igual ao seu original
        alignItems: 'center',
    },
    modalContainer: {
        width: '90%',
        maxHeight: '70%',
        backgroundColor: COLORS.gray_100,
        borderRadius: 16,
        padding: 20,
        borderWidth: 2,
        borderColor: COLORS.red, // Borda vermelha idêntica ao ModalDinamico
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.red,
        textAlign: 'center',
        marginBottom: 15,
    },
    listaContainer: {
        marginVertical: 10,
    },
    
    // --- OPÇÕES DA LISTA ---
    opcaoItem: {
        paddingVertical: 16,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray_300, // Linha sutil separando as categorias
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    opcaoText: {
        fontSize: 16,
        color: COLORS.black,
    },
    opcaoTextAtiva: {
        fontSize: 16,
        color: COLORS.red,
        fontWeight: 'bold',
    },
})
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    imagem: {
        width: "100%",
        height: 250,
    },

    conteudo: {
        padding: 20,
    },

    nome: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },

    preco: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#D62828",
        marginBottom: 20,
    },

    titulo: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 10,
    },

    descricao: {
        fontSize: 16,
        lineHeight: 24,
        color: "#555",
    },
});
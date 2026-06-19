import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        overflow: "hidden",
        marginBottom: 16,
        elevation: 3,
    },

    imagem: {
        width: "100%",
        height: 180,
    },

    conteudo: {
        padding: 12,
    },

    topo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 8,
    },

    nome: {
        flex: 1,
        fontSize: 20,
        fontWeight: "700",
        color: "#222",
        marginRight: 10,
    },

    preco: {
        fontSize: 18,
        fontWeight: "700",
        color: "#D90429",
    },

    descricao: {
        fontSize: 14,
        color: "#666",
        marginBottom: 12,
    },

    botaoTexto: {
        color: "#fff",
        fontWeight: "600",
    },
});
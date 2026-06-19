import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
        backgroundColor: "#F5F5F5",
    },

    input: {
        backgroundColor: "#EAEAEA",
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 20,
    },

    categoriasContainer: {
        marginBottom: 20,
    },

    categoria: {
        backgroundColor: "#EAEAEA",
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 20,
        marginRight: 10,
    },

    categoriaSelecionada: {
        backgroundColor: "#C8102E",
    },

    textoCategoria: {
        color: "#333",
        fontWeight: "500",
    },

    textoCategoriaSelecionada: {
        color: "#FFF",
    },

    metaCard: {
        backgroundColor: "#2EAD62",
        borderRadius: 12,
        padding: 16,
    },

    metaTitulo: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
    },

    metaDescricao: {
        color: "#FFF",
        marginBottom: 20,
    },

    metaRodape: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    metaInfo: {
        color: "#FFF",
        fontWeight: "600",
    },
});
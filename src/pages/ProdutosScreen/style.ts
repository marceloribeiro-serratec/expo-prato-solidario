import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray_100,
        paddingHorizontal: 16,
    },

    headerContainer: {
        backgroundColor: COLORS.gray_100,
        paddingHorizontal: 8,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray_200,
        justifyContent: "center",
        // Isso garante que o header herde o comportamento de alinhamento
    },

    input: {
        backgroundColor: "#ECECEC",
        borderRadius: 10,
        paddingHorizontal: 14,
        height: 50,
        marginBottom: 16,
    },

    categoriasContainer: {
        paddingBottom: 12,
    },

    categoria: {
        backgroundColor: "#E7E7E7",
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 20,
        marginRight: 10,
        height: 40,
        justifyContent: "center",
    },

    categoriaSelecionada: {
        backgroundColor: "#D90429",
    },

    textoCategoria: {
        color: "#555",
        fontWeight: "500",
    },

    textoCategoriaSelecionada: {
        color: "#fff",
        fontWeight: "700",
    },

    metaCard: {
        backgroundColor: "#35A853",
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
    },

    metaTitulo: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "700",
        marginBottom: 8,
    },

    metaDescricao: {
        color: "#fff",
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 12,
    },

    metaRodape: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    metaInfo: {
        color: "#fff",
        fontWeight: "600",
    },
});
import { StyleSheet } from "react-native";
import { COLORS } from "@/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gray_100",
    },
    scrollContainer: {
        flex: 1,
    },
    imagem: {
        width: "100%",
        height: 300,
    },
    conteudo: {
        padding: 16,
    },
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 10,
    },
    nome: {
        flex: 1,
        fontSize: 22,
        fontWeight: "bold",
        color: "#1a1a1a",
    },
    preco: {
        fontSize: 22,
        fontWeight: "bold",
        color: "red",
    },
    avaliacaoContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 6,
        marginBottom: 16,
    },
    estrela: {
        color: "#b8860b",
        fontSize: 16,
        marginRight: 4,
    },
    avaliacaoTexto: {
        fontSize: 14,
        color: "#676767",
        fontWeight: "500",
    },
    descricao: {
        fontSize: 15,
        lineHeight: 22,
        color: "#4A4A4A",
        marginBottom: 20,
    },

    cardSocial: {
        backgroundColor: "#19793C",
        borderRadius: 12,
        padding: 16,
        marginTop: 10,
        marginBottom: 30,
    },
    cardSocialTitulo: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
        opacity: 0.9,
        letterSpacing: 0.5,
    },
    cardSocialPorcentagem: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 4,
    },
    cardSocialDescricao: {
        color: "#fff",
        fontSize: 14,
        lineHeight: 20,
        opacity: 0.9,
    },

    rodape: {
        flexDirection: "row",
        padding: 16,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#F0F0F0",
        alignItems: "center",
        gap: 12,
    },
    contadorContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#E6E5E5",
        borderRadius: 25,
        paddingHorizontal: 8,
        height: 50,
    },
    botaoContador: {
        width: 32,
        height: 32,
        justifyContent: "center",
        alignItems: "center",
    },
    textoBotaoContador: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
    },
    quantidadeTexto: {
        fontSize: 16,
        fontWeight: "bold",
        paddingHorizontal: 12,
        color: "#333",
    },
    botaoCarrinho: {
        flex: 1,
        backgroundColor: "red",
        borderRadius: 12,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    textoBotaoCarrinho: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    subtotalBotao: {
        color: "#fff",
        fontSize: 11,
        opacity: 0.8,
    },
});
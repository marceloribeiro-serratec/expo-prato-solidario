import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        gap: 18,
        minHeight: 120,
        width: 280,
        maxWidth: 340,
        padding: 22,
        borderRadius: 16,
    },
    icone: {
        width: 52,
        height: 52,
        borderRadius: 26,
        alignItems: "center",
        justifyContent: "center",
    },
    conteudo: {
        flexDirection: "column",
        gap: 4,
        flex: 1,
    },
    titulo: {
        fontSize: 14,
        fontWeight: "400",
    },
    subtitulo: {
        fontSize: 18,
        fontWeight: "700",
        color: "#222",
    },
});
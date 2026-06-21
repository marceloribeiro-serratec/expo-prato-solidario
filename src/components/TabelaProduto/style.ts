import { StyleSheet } from "react-native";
import { COLORS } from "@/constants";

export const styles = StyleSheet.create({
    tabela: {
        marginHorizontal: 20,
        borderWidth: 2,
        borderColor: COLORS.gray_300, 
        borderRadius: 10,
        overflow: "hidden",
    },
    header: {
        flexDirection: "row",
        backgroundColor: COLORS.gray_200,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: COLORS.gray_300, 
    },
    headerText: {
        width: 120,
        fontWeight: "bold",
        textAlign: "center",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: COLORS.gray_300, 
        paddingVertical: 14,
    },
    cell: {
        width: 120,
        textAlign: "center",
    },
    status: {
        width: 120,
        alignItems: "center",
    },
    acoes: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    acoesButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.gray_300,
    },
    produto: {
        width: 220,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    imagem: {
        width: 55,
        height: 50,
        borderRadius: 8,
        marginRight: 10,
    },
    nome: {
        flex: 1,
        fontSize: 15,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 22,
        alignItems: "center",
        paddingVertical: 16,
    },
    footerText: {
        fontSize: 15,
        fontWeight: "600",
    },
    pagina: {
        fontSize: 18,
        fontWeight: "bold",
    },
})
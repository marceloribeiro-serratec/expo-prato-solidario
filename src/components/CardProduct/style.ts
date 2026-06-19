import { StyleSheet } from "react-native" 
import { COLORS } from "@/constants/colors"


export const cardProductStyles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.white,
        borderRadius: 12,
        overflow: "hidden",
        width: 200,
        shadowColor: COLORS.black,
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    imagem: {
        width: "100%",
        height: 130,
    },
    indisponivel: {
        opacity: 0.5,
    },
    badgeDesconto: {
        position: "absolute",
        top: 8,
        right: 8,
    },
    badgeIndisponivel: {
        position: "absolute",
        top: 8,
        left: 8,
    },
    info: {
        padding: 10,
        gap: 4,
    },
    precos: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        marginTop: 2,
    },
    precoOriginal: {
        fontSize: 11,
        color: COLORS.gray_400,
        textDecorationLine: "line-through",
    },
    rodape: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
})
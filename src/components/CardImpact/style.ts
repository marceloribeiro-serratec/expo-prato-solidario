import { StyleSheet } from "react-native";

export const cardImpact = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        borderRadius: 10,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        flex: 1,
    },
    subtitle: {
        width: "auto",
        paddingTop: 2,
        lineHeight: 20,
    },
});

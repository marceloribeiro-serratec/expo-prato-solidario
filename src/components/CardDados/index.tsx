import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import { COLORS } from "@/constants/colors";

type CardDadoProps = {
    titulo: string;
    subtitulo: string;
    corFundoCard: string;
    corFundoIcone: string;
    icone: React.ReactNode;
};

export function CardDados({ 
    titulo, 
    subtitulo, 
    corFundoCard, 
    corFundoIcone, 
    icone 
}: CardDadoProps) {
    return (
        <View style={[styles.card, { backgroundColor: corFundoCard }]}>
            <View style={[styles.icone, { backgroundColor: corFundoIcone }]}>
                {icone}
            </View>
            <View style={styles.conteudo}>
                <Text style={[styles.titulo, { color: COLORS.gray_600 }]}>{titulo}</Text>
                <Text style={[styles.subtitulo, { color: COLORS.gray_700 }]}>{subtitulo}</Text>
            </View>
        </View>
    );
}
import { View, Image, Text, TouchableOpacity } from "react-native"
import { ShoppingCart } from "lucide-react-native"

import { COLORS } from "@/constants/colors"
import { Title } from "@/components/Title"
import { Subtitle } from "@/components/Subtitle"
import { Badge } from "@/components/Badge"
import { Button } from "@/components/Button"

import { cardProductStyles as styles } from "./style"
import { CardProductProps } from "./type"

export function CardProduct({
    id,
    nome,
    descricao,
    preco,
    imagem_url,
    desconto,
    disponibilidade = true,
    onAddToCart,
}: CardProductProps) {
    const precoFinal = desconto
        ? preco - (preco * desconto) / 100
        : preco

    const formatarPreco = (valor: number) =>
        `R$ ${valor.toFixed(2).replace(".", ",")}`

    return (
        <View style={[
            styles.container,
            !disponibilidade && styles.indisponivel,
        ]}>
            <Image
                source={{ uri: imagem_url }}
                style={styles.imagem}
                resizeMode="cover"
            />

            {desconto && disponibilidade && (
                <View style={styles.badgeDesconto}>
                    <Badge color={COLORS.red}>
                        <Title color={COLORS.white} size={10} fontWeight="bold">
                            -{desconto}%
                        </Title>
                    </Badge>
                </View>
            )}

            {!disponibilidade && (
                <View style={styles.badgeIndisponivel}>
                    <Badge color={COLORS.gray_500}>
                        <Title color={COLORS.white} size={10} fontWeight="bold">
                            Indisponível
                        </Title>
                    </Badge>
                </View>
            )}

            <View style={styles.info}>
                <Title color={COLORS.gray_700} size={13} fontWeight="bold">
                    {nome}
                </Title>
                <Subtitle
                    color={COLORS.gray_500}
                    numberOfLines={2}
                >
                    {descricao}
                </Subtitle>
            </View>

            <View style={styles.rodape}>
                <View style={styles.precos}>
                    {desconto && (
                        <Text style={styles.precoOriginal}>
                            {formatarPreco(preco)}
                        </Text>
                    )}
                    <Title
                        color={COLORS.green_dark}
                        size={14}
                        fontWeight="bold">
                        {formatarPreco(precoFinal)}
                    </Title>
                </View>

                <Button
                    color={disponibilidade ? COLORS.red : COLORS.gray_400}
                    onPress={() => disponibilidade && onAddToCart(id)}
                    disabled={!disponibilidade}
                    style={{ width: 36, height: 36, borderRadius: 8, padding: 0 }}
                >
                    <ShoppingCart
                        color={COLORS.white}
                        size={18}
                    />
                </Button>
            </View>
        </View>
    )
}
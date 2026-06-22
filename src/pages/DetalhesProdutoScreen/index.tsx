import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { RootStackParamList } from "@/routes/type";
import { styles } from "./style";
import { toastProdutoAdicionado } from "@/utils/toast";
import { useCart } from "@/hooks/useCart";

type DetalhesRouteProp = RouteProp<RootStackParamList, "detalhesProduto">;

export function DetalhesProdutoScreen() {
    const route = useRoute<DetalhesRouteProp>();
    const { produto } = route.params;

    const { addToCart } = useCart();

    function handleAddToCart() {
        addToCart({
            id: String(produto.id),
            name: produto.nome,
            price: Number(produto.preco),
            image: produto.imagem_url ? { uri: produto.imagem_url } : undefined,
            description: produto.descricao,
        });

        toastProdutoAdicionado(produto.nome);
    }

    const [quantidade, setQuantidade] = useState(1);

    const aumentarQuantidade = () => setQuantidade(quantidade + 1);
    const diminuirQuantidade = () => {
        if (quantidade > 1) setQuantidade(quantidade - 1);
    };

    // Cálculos
    const precoUnitario = Number(produto.preco);
    const subtotal = precoUnitario * quantidade;
    const contribuicaoSocial = subtotal * 0.03;

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <Image
                    source={{ uri: produto.imagem_url }}
                    style={styles.imagem}
                    resizeMode="cover" // preenche todo o espaço disponível, mas mantendo proporção
                />

                <View style={styles.conteudo}>
                    <View style={styles.headerRow}>
                        <Text style={styles.nome}>{produto.nome}</Text>
                        <Text style={styles.preco}>
                            R$ {precoUnitario.toFixed(2).replace(".", ",")}
                        </Text>
                    </View>

                    <View style={styles.avaliacaoContainer}>
                        <Text style={styles.estrela}>★</Text>
                        <Text style={styles.avaliacaoTexto}>
                            4.9 (120+ avaliações)
                        </Text>
                    </View>

                    <Text style={styles.descricao}>{produto.descricao}</Text>

                    <View style={styles.cardSocial}>
                        <Text style={styles.cardSocialTitulo}>
                            IMPACTO SOCIAL DIRETO
                        </Text>
                        <Text style={styles.cardSocialPorcentagem}>
                            3% Contribuição
                        </Text>
                        <Text style={styles.cardSocialDescricao}>
                            Ao comprar este prato, R${" "}
                            {contribuicaoSocial.toFixed(2).replace(".", ",")}{" "}
                            será destinado à ONG Refettorio Gastromotiva para
                            combater a fome urbana.
                        </Text>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.rodape}>
                <View style={styles.contadorContainer}>
                    <TouchableOpacity
                        style={styles.botaoContador}
                        onPress={diminuirQuantidade}
                    >
                        <Text style={styles.textoBotaoContador}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.quantidadeTexto}>{quantidade}</Text>

                    <TouchableOpacity
                        style={styles.botaoContador}
                        onPress={aumentarQuantidade}
                    >
                        <Text style={styles.textoBotaoContador}>+</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.botaoCarrinho}
                    onPress={handleAddToCart}
                >
                    <Text style={styles.textoBotaoCarrinho}>
                        Adicionar ao Carrinho
                    </Text>
                    <Text style={styles.subtotalBotao}>
                        Subtotal: R$ {subtotal.toFixed(2).replace(".", ",")}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
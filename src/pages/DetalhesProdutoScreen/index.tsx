import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { useCart } from "@/hooks/useCart";
import { NavigationProps, RootStackParamList } from "@/routes/type";
import { toastProdutoAdicionado } from "@/utils/toast";
import { styles } from "./style";

type DetalhesRouteProp = RouteProp<RootStackParamList, "detalhesProduto">;

export function DetalhesProdutoScreen() {
    const navigation = useNavigation<NavigationProps>();
    const route = useRoute<DetalhesRouteProp>();
    const { produto } = route.params;

    const { addToCart, cart, updateQuantity } = useCart();
    const productId = String(produto.id);
    const cartItem = cart.find((item) => String(item.id) === productId);
    const quantidade = cartItem?.quantity ?? 0;

    const precoUnitario = Number(produto.preco);
    const subtotal = precoUnitario * quantidade;
    const contribuicaoSocial = subtotal * 0.03;

    function getProductCartData() {
        return {
            id: productId,
            name: produto.nome,
            price: precoUnitario,
            image: produto.imagem_url ? { uri: produto.imagem_url } : undefined,
            description: produto.descricao,
        };
    }

    function aumentarQuantidade() {
        addToCart(getProductCartData());
    }

    function diminuirQuantidade() {
        if (quantidade > 0) {
            updateQuantity(productId, "decrement");
        }
    }

    function handleAddToCart() {
        toastProdutoAdicionado(produto.nome);
        navigation.navigate("cart");
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <Image
                    source={{ uri: produto.imagem_url }}
                    style={styles.imagem}
                    resizeMode="cover"
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

import { RouteProp, useRoute } from "@react-navigation/native";
import { Image, ScrollView, Text, View } from "react-native";

import { RootStackParamList } from "@/routes/type";
import { styles } from "./style";

type DetalhesRouteProp = RouteProp<RootStackParamList, "detalhesProduto">;

export function DetalhesProdutoScreen() {
    const route = useRoute<DetalhesRouteProp>();

    const { produto } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Image
                source={{ uri: produto.imagem_url }}
                style={styles.imagem}
                resizeMode="cover"
            />

            <View style={styles.conteudo}>
                <Text style={styles.nome}>{produto.nome}</Text>

                <Text style={styles.preco}>
                    R$ {Number(produto.preco).toFixed(2)}
                </Text>

                <Text style={styles.titulo}>Descrição</Text>

                <Text style={styles.descricao}>{produto.descricao}</Text>
            </View>
        </ScrollView>
    );
}
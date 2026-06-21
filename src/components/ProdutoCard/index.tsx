import { Image, Text, View } from "react-native";
import { Button } from "../Button";
import { styles } from "./style";
import { TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "@/routes/type";

type ProdutoCardProps = {
    data: any;
};

export const ProdutoCard = ({ data }: ProdutoCardProps) => {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={() =>
                navigation.navigate("detalhesProduto", {
                    produto: data,
                })
            }
        >
            <Image
                source={{ uri: data.imagem_url }}
                style={styles.imagem}
                resizeMode="cover"
            />

            <View style={styles.conteudo}>
                <View style={styles.topo}>
                    <Text style={styles.nome}>{data.nome}</Text>

                    <Text style={styles.preco}>
                        R$ {Number(data.preco).toFixed(2)}
                    </Text>
                </View>

                <Text numberOfLines={2} style={styles.descricao}>
                    {data.descricao}
                </Text>

                <Button color="red">
                    <Text style={styles.botaoTexto}>Adicionar</Text>
                </Button>
            </View>
        </TouchableOpacity>
    );
};
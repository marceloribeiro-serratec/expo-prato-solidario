import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from "react-native";

import { styles } from "./style";
import { Categoria } from "./type";

export default function ProdutosScreen() {
    const [busca, setBusca] = useState("");
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(1);

    const categorias: Categoria[] = [
        { id: 1, nome: "Pizzas Salgadas" },
        { id: 2, nome: "Pizzas Doces" },
        { id: 3, nome: "Saladas" },
        { id: 4, nome: "Hamburges" },
        { id: 5, nome: "Bebidas" },
        { id: 6, nome: "Carnes" },
        { id: 7, nome: "Tortas" },
        { id: 8, nome: "Frutos do mar" },
        { id: 9, nome: "Salgados" },
        { id: 10, nome: "Sushi" },
        { id: 13, nome: "Massas" },
    ];

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Buscar pratos..."
                value={busca}
                onChangeText={setBusca}
                style={styles.input}
            />

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriasContainer}
            >
                {categorias.map((categoria) => (
                    <TouchableOpacity
                        key={categoria.id}
                        onPress={() => setCategoriaSelecionada(categoria.id)}
                        style={[
                            styles.categoria,

                            categoriaSelecionada === categoria.id &&
                                styles.categoriaSelecionada,
                        ]}
                    >
                        <Text
                            style={[
                                styles.textoCategoria,

                                categoriaSelecionada === categoria.id &&
                                    styles.textoCategoriaSelecionada,
                            ]}
                        >
                            {categoria.nome}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={styles.metaCard}>
                <Text style={styles.metaTitulo}>Meta de Hoje</Text>

                <Text style={styles.metaDescricao}>
                    Cada pedido dos "Favoritos Sociais" nos ajuda a doar uma
                    refeição.
                </Text>

                <View style={styles.metaRodape}>
                    <Text style={styles.metaInfo}>362 refeições doadas</Text>

                    <Text style={styles.metaInfo}>Meta: 500</Text>
                </View>
            </View>
        </View>
    );
}
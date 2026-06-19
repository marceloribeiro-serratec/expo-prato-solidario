import { useEffect, useState } from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    FlatList,
} from "react-native";

import { styles } from "./style";
import { Categoria, Produto } from "./type";
import { produtoService } from "@/services/produtoService";
import { ProdutoCard } from "@/components/ProdutoCard";

export default function ProdutosScreen() {
    const [busca, setBusca] = useState("");
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(1);
    const [produtos, setProdutos] = useState<Produto[]>([]);

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

    const produtosMock: Produto[] = [
        {
            id: 1,
            id_categoria: 3,
            nome: "Harvest Bowl",
            descricao:
                "Base de quinoa fresca com legumes assados da estação, brotos orgânicos e molho especial.",
            preco: 14.5,
            imagem_url:
                "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
        },
        {
            id: 2,
            id_categoria: 13,
            nome: "Tagliatelle de Trufas",
            descricao:
                "Massa artesanal envolvida em azeite de trufas brancas, cogumelos silvestres e parmesão.",
            preco: 18.9,
            imagem_url:
                "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
        },
        {
            id: 3,
            id_categoria: 4,
            nome: "Future Burger",
            descricao:
                "Hambúrguer 100% vegetal, cheddar vegano, maionese defumada e cebola roxa.",
            preco: 16.2,
            imagem_url:
                "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        },
        {
            id: 4,
            id_categoria: 7,
            nome: "Torta Berry Zenith",
            descricao:
                "Massa crocante recheada com creme de baunilha e frutas vermelhas frescas.",
            preco: 9.5,
            imagem_url:
                "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
        },
        {
            id: 5,
            id_categoria: 1,
            nome: "Pizza Margherita",
            descricao:
                "Molho de tomate italiano, mussarela de búfala e folhas frescas de manjericão.",
            preco: 32.9,
            imagem_url:
                "https://images.unsplash.com/photo-1513104890138-7c749659a591",
        },
        {
            id: 6,
            id_categoria: 2,
            nome: "Pizza de Chocolate",
            descricao:
                "Chocolate ao leite derretido, morangos frescos e raspas de chocolate branco.",
            preco: 38.9,
            imagem_url:
                "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
        },
        {
            id: 7,
            id_categoria: 10,
            nome: "Combo Sushi Premium",
            descricao:
                "Seleção especial com sashimis, niguiris e hot rolls preparados na hora.",
            preco: 49.9,
            imagem_url:
                "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
        },
        {
            id: 8,
            id_categoria: 5,
            nome: "Limonada Tropical",
            descricao:
                "Limonada refrescante preparada com hortelã fresca e toque de maracujá.",
            preco: 7.9,
            imagem_url:
                "https://images.unsplash.com/photo-1621263764928-df1444c5e859",
        },
    ];

    const carregarDados = async () => {
        try {
            const listaProdutos = await produtoService.listar();
            setProdutos(listaProdutos);
            console.log("Produtos carregados do Supabase:", listaProdutos);
        } catch (error) {
            alert("Erro: Não foi possível carregar os produtos.");
        }
    };

    useEffect(() => {
        setProdutos(produtosMock);
        // carregarDados();
    }, []);

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

            <FlatList
                data={produtos}
                renderItem={({ item }) => <ProdutoCard data={item} />}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
            />
        </View>
    );
}
import { Produto } from "../../services/produtoService";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { StatusBadge } from "../StatusBadge";
import { formatCurrency } from "../../utils/formatCurrency";
import { WIDTHSTABLE } from "@/constants/widthsTable";
import { COLORS } from "@/constants";
import { Feather } from "@expo/vector-icons";

interface LinhaProdutoProps {
    produto: Produto;
    categoriasMap: Record<number, string>;

    onEditar: (produto: Produto) => void;
    onExcluir: (id: number) => void;
    onAlterarStatus: (
        id: number,
        disponibilidade: boolean
    ) => void;
}

export function LinhaProduto({
    produto,
    categoriasMap,
    onEditar,
    onExcluir,
    onAlterarStatus,
}: LinhaProdutoProps) {
    return (
        <View style={styles.row}>
           <View style={[styles.produto, { width: WIDTHSTABLE.produto}]}>
                <Image
                    source={{ uri: produto.imagem_url }}
                    style={styles.imagem}
                    resizeMode="cover"
                />
                <Text
                    numberOfLines={2}
                    style={styles.nome}
                >
                    {produto.nome}
                </Text>
            </View>

            <Text style={[styles.cell, { width: WIDTHSTABLE.categoria}]}>
                {categoriasMap[produto.id_categoria]}
            </Text>
            <Text style={[styles.cell, { width: WIDTHSTABLE.preco}]}>
                {formatCurrency(produto.preco)}
            </Text>
            <Text style={[styles.cell, { width: WIDTHSTABLE.quantidade}]}>
                {produto.quantidade}
            </Text>

            <View style={[styles.status, { width: WIDTHSTABLE.status}]}>
                <StatusBadge
                    ativo={produto.disponibilidade}
                    onPress={() =>
                        onAlterarStatus(
                            produto.id!,
                            produto.disponibilidade
                        )
                    }
                />
            </View>

            <View style={[styles.acoes, { width: WIDTHSTABLE.acoes}]}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => onEditar(produto)}
                    style={styles.acoesButton}
                >
                    <Feather
                        name="edit-2"
                        size={20}
                        color={COLORS.black}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => onExcluir(produto.id!)}
                    style={styles.acoesButton}
                >
                    <Feather
                        name="trash-2"
                        size={20}
                        color={COLORS.black}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}
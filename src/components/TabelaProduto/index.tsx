import React, { useState } from "react";
import { styles } from './style';
import { View, Text, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Produto } from "../../services/produtoService";
import { LinhaProduto } from "./linhaProduto";
import { WIDTHSTABLE } from "@/constants/widthsTable";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "@/constants";

interface Props {
    produtos: Produto[];

    categoriasMap: Record<number, string>;

    onEditar: (produto: Produto) => void;

    onExcluir: (id: number) => void;

    onAlterarStatus: (
        id: number,
        disponibilidade: boolean
    ) => void;
}

export function TabelaProdutos({
    produtos,
    categoriasMap,
    onEditar,
    onExcluir,
    onAlterarStatus,
}: Props) {

    const [paginaAtual, setPaginaAtual] = useState(1);
    const itensPorPagina = 5;

    const totalPaginas = Math.ceil(
        produtos.length / itensPorPagina
    );

    const indiceInicial = (paginaAtual - 1) * itensPorPagina;

    const indiceFinal = indiceInicial + itensPorPagina;

    const produtosPaginados = produtos.slice(indiceInicial, indiceFinal);

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator>

            <View style={styles.tabela}>

                {/* Cabeçalho */}

                <View style={styles.header}>
                    <Text style={[styles.headerText, { width: WIDTHSTABLE.produto }]}>Produto</Text>
                    <Text style={[styles.headerText, { width: WIDTHSTABLE.categoria }]}>Categoria</Text>
                    <Text style={[styles.headerText, { width: WIDTHSTABLE.preco }]}>Preço</Text>
                    <Text style={[styles.headerText, { width: WIDTHSTABLE.quantidade }]}>Qtd</Text>
                    <Text style={[styles.headerText, { width: WIDTHSTABLE.status }]}>Status</Text>
                    <Text style={[styles.headerText, { width: WIDTHSTABLE.acoes }]}>Ações</Text>
                </View>

                {/* Tabela */}
                <FlatList
                    data={produtosPaginados}
                    keyExtractor={(item) => item.id!.toString()}
                    renderItem={({ item }) => (
                        <LinhaProduto
                            produto={item}
                            categoriasMap={categoriasMap}
                            onEditar={onEditar}
                            onExcluir={onExcluir}
                            onAlterarStatus={onAlterarStatus}
                        />
                    )}
                />

                {/* Paginação */}
                <View style={styles.footer}>
                    <TouchableOpacity
                        disabled={paginaAtual === 1}
                        onPress={() =>
                            setPaginaAtual(
                                paginaAtual - 1
                            )
                        }
                    >
                        <Feather
                            name="chevron-left"
                            size={24}
                            color={COLORS.red}
                        />
                    </TouchableOpacity>
                    <Text style={styles.pagina}>
                        Página {paginaAtual} de {totalPaginas}
                    </Text>
                    <TouchableOpacity
                        disabled={
                            paginaAtual === totalPaginas
                        }
                        onPress={() =>
                            setPaginaAtual(
                                paginaAtual + 1
                            )
                        }
                    >
                        <Feather
                            name="chevron-right"
                            size={24}
                            color={COLORS.red}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}
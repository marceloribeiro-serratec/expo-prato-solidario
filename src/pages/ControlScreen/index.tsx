import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, FlatList, ScrollView, Image } from 'react-native';
import { styles } from './styles';
import { COLORS } from "@/constants/colors";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { Search } from 'lucide-react-native';

import { useControlScreen } from '@/hooks/useControlScreen';
import { useCamera } from '@/hooks/useCamera';
import { OpcoesFiltro, FiltrosId } from '@/types/controlScreen';

import { ModalDinamico, CampoModal } from '../../components/ModalDinamico';
import { ButtonFoto } from '@/components/ButtonFoto';
import { Title } from '@/components/Title';
import { Header } from '@/components/Header';
import { Button } from "@/components/Button";
import { CardDados } from '@/components/CardDados';
import { TabelaProdutos } from '@/components/TabelaProduto';
import { ButtonOrdenacao } from '@/components/ButtonOrdenacao';
import { SearchContainer } from '@/components/SearchContainer';
import { SearchBar } from '@/components/SearchBar';

// Campos do Modal Inserir/Alterar produto
const newProduto: CampoModal[] = [
    { key: 'nome', label: 'Nome', placeholder: 'Digite o nome do produto' },
    { key: 'descricao', label: 'Descrição', placeholder: 'Digite a descrição' },
    { key: 'id_categoria', label: 'Categoria', placeholder: 'Digite o id de Categoria', keyboardType: 'numeric' },
    { key: 'preco', label: 'Preço', placeholder: '0.00', keyboardType: 'numeric' },
    { key: 'imagem_url', label: 'Imagem (URL)', placeholder: 'http://...' },
    { key: 'quantidade', label: 'Quantidade', placeholder: '0', keyboardType: 'numeric' },
];

// Campos Modal Inserir categoria
const novaCategoria: CampoModal[] = [
    { key: 'nome', label: 'Nome', placeholder: 'Digite o nome da categoria' },
];

const opcoesDeFiltragem: OpcoesFiltro[] = [
    { id: 'original', title: 'Original' },
    { id: 'quantidade', title: 'Quantidade' },
    { id: 'preco', title: 'Preço' },
    { id: 'alfabetica', title: 'Alfabética' },
];

export function ControlScreen() {
    const ctrl = useControlScreen();
  
   const { imagemProduto, imagemProdutoUrl, abrirCamera, limparImagem } = useCamera((url) => {
        ctrl.handleInputChange('imagem_url', url);
    });

    const dadosCards = [
        {
            id: '1',
            titulo: 'Impacto Gerado',
            subtitulo: `${ctrl.totalRefeicoes} ${ctrl.totalRefeicoes === 1 ? 'Refeição' : 'Refeições'}`,
            corFundoCard: COLORS.green_light,
            corFundoIcone: '#74DB9A',
            icone: <Feather name="heart" size={24} color={COLORS.white} />,
        },
        {
            id: '2',
            titulo: 'Baixo Estoque',
            subtitulo: `${ctrl.totalBaixoEstoque} ${ctrl.totalBaixoEstoque === 1 ? 'Item' : 'Itens'}`,
            corFundoCard: COLORS.gray_300,
            corFundoIcone: COLORS.gray_400,
            icone: <FontAwesome name="archive" size={20} color={COLORS.white} />,
        },
        {
            id: '3',
            titulo: 'Vendas no mês',
            subtitulo: `${ctrl.totalVendasMes} ${ctrl.totalVendasMes === 1 ? 'Venda' : 'Vendas'}`,
            corFundoCard: '#E0B1B6',
            corFundoIcone: '#FF3030',
            icone: <Feather name="trending-up" size={22} color={COLORS.white} />,
        },
    ];

    return (
        <SafeAreaView style={styles.pageContainer}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <Header
                        title="Prato Solidário"
                        titleColor={COLORS.red}
                        hiddenIcons={['search', 'refresh', 'plus', 'shoppingCart']}
                        iconColor={COLORS.red}
                        showMenu={true}
                    />
                </View>

                <View style={styles.titleContainer}>
                    <Title color={COLORS.black} size={26} fontWeight="bold">Controle Produtos</Title>
                    <Title color={COLORS.brown} size={16} fontWeight="regular">
                        Cadastre uma nova opção culinária e defina o impacto social positivo.
                    </Title>
                </View>

                <View style={styles.buttonFotoContainer}>
                    {imagemProduto ? (
                        <>
                            <Image source={{ uri: imagemProduto }} style={styles.image} />
                            <Button
                                color={COLORS.red}
                                activeOpacity={0.8}
                                style={{ width: '40%', height: 50, borderRadius: 12, alignSelf: 'center', marginTop: 10 }}
                                onPress={limparImagem}
                            >
                                <Text style={{ color: COLORS.white, fontSize: 13, fontWeight: '500' }}>
                                    Remover Foto
                                </Text>
                            </Button>
                        </>
                    ) : (
                        <ButtonFoto onPress={abrirCamera} style={{ width: '90%', paddingVertical: 65, alignSelf: 'center' }} />
                    )}
                </View>

                <View style={styles.buttonContainer}>
                    <Button color={COLORS.red} activeOpacity={0.8} style={{ width: '90%', height: 60, borderRadius: 12 }} onPress={() => ctrl.setModalVisibleCategoria(true)}>
                        <FontAwesome name="save" size={20} color={COLORS.white} />
                        <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: '500', marginLeft: 6 }}>Cadastrar Categoria</Text>
                    </Button>

                    <Button color={COLORS.red} activeOpacity={0.8} style={{ width: '90%', height: 60, borderRadius: 12 }} onPress={() => ctrl.abrirModalCriar(imagemProdutoUrl)}>
                        <FontAwesome name="save" size={20} color={COLORS.white} />
                        <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: '500', marginLeft: 6 }}>Cadastrar Produto</Text>
                    </Button>

                    <SearchContainer>
                        <Search color={COLORS.gray_400} size={20} />
                        <SearchBar placeholder="Buscar por Produto..." value={ctrl.search} onChangeText={ctrl.setSearch} />
                    </SearchContainer>
                </View>

                <View style={styles.ordenacaoContainer}>
                    <Title color={COLORS.black} size={22} fontWeight="bold">Ordenação</Title>
                    <View style={styles.ordenacaoButtons}>
                        {opcoesDeFiltragem.map((item) => {
                            const isActive = ctrl.filtroAtivo === item.id;
                            return (
                                <ButtonOrdenacao
                                    key={item.id}
                                    titulo={item.title}
                                    isActive={isActive}
                                    direcao={isActive ? ctrl.classificacao : 'desativado'}
                                    onPress={() => ctrl.controleBotaoAtivo(item.id)}
                                />
                            );
                        })}
                    </View>
                </View>

                <TabelaProdutos
                    produtos={ctrl.produtosExibidos}
                    categoriasMap={ctrl.categoriasMap}
                    onEditar={ctrl.abrirModalEditar}
                    onExcluir={(id) => {
                        const produto = ctrl.produtosExibidos.find(p => p.id === id);
                        if (produto) {
                            ctrl.setProdutoSelecionado(produto);
                            ctrl.setModalVisibleDeletar(true);
                        }
                    }}
                    onAlterarStatus={ctrl.alterarStatus}
                />

                <View style={styles.cardsContainer}>
                    <FlatList
                        data={dadosCards}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.lista}
                        renderItem={({ item }) => (
                            <CardDados
                                titulo={item.titulo}
                                subtitulo={item.subtitulo}
                                corFundoCard={item.corFundoCard}
                                corFundoIcone={item.corFundoIcone}
                                icone={item.icone}
                            />
                        )}
                    />
                </View>
            </ScrollView>

            <ModalDinamico
                visible={ctrl.modalVisibleProduto}
                title={ctrl.modo === 'criar' ? 'Adicionar Produto' : 'Alterar Produto'}
                fields={newProduto}
                formValues={ctrl.modalData}
                onValueChange={ctrl.handleInputChange}
                primaryButtonText={ctrl.modo === 'criar' ? 'Adicionar Produto' : 'Salvar Alterações'}
                secondaryButtonText="Cancelar"
                onPrimaryPress={ctrl.modo === 'criar' ? ctrl.criarProduto : ctrl.editarProduto}
                onSecondaryPress={() => { ctrl.setModalData({}); ctrl.setModalVisibleProduto(false); }}
            />

            <ModalDinamico
                visible={ctrl.modalVisibleCategoria}
                title="Adicionar Categoria"
                fields={novaCategoria}
                formValues={ctrl.modalData}
                onValueChange={ctrl.handleInputChange}
                primaryButtonText="Adicionar"
                secondaryButtonText="Cancelar"
                onPrimaryPress={ctrl.criarCategoria}
                onSecondaryPress={() => { ctrl.setModalData({}); ctrl.setModalVisibleCategoria(false); }}
            />

            <ModalDinamico
                visible={ctrl.modalVisibleDeletar}
                title="Excluir Produto"
                message="Deseja realmente excluir este produto?"
                primaryButtonText="Excluir"
                secondaryButtonText="Cancelar"
                onPrimaryPress={ctrl.deletarProduto}
                onSecondaryPress={() => ctrl.setModalVisibleDeletar(false)}
            />
        </SafeAreaView>
    );
}
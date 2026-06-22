import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import { View, Text, FlatList, ScrollView, Image } from 'react-native';
import { ModalDinamico, CampoModal } from '../../components/ModalDinamico';
import { produtoService, Produto } from '@/services/produtoService';
import { refeicaoService } from '@/services/refeicaoService';
import { pedidoService } from '@/services/pedidoService';
import { categoriaService, Categoria } from '@/services/categoriaService';
import { bucketProdutosService } from '@/services/bucketProdutosService';
import { ButtonFoto } from '@/components/ButtonFoto';
import { Title } from '@/components/Title';
import { Header } from '@/components/Header';
import { COLORS } from "@/constants/colors";
import { Button } from "@/components/Button";
import { CardDados } from '@/components/CardDados';
import { Feather, FontAwesome } from "@expo/vector-icons";
import { TabelaProdutos } from '@/components/TabelaProduto';
import { ButtonOrdenacao, SortDirection } from '@/components/ButtonOrdenacao';
import { Search } from 'lucide-react-native';
import { SearchContainer } from '@/components/SearchContainer';
import { SearchBar } from '@/components/SearchBar';
import { toastProcutoCriado, toastErroCriar, toastErroDeletar, toastProdutoDeletado,
    toastProdutoAtualizado, toastErroAtualizar, toastErro, toastCategoriaCriada, 
    toastSucesso} from '@/utils/toast';
import * as ImagePicker from 'expo-image-picker';

type TelaDadosProps = {
    totalBaixoEstoque: number;
    totalRefeicoes: number;
    totalVendasMes: number;
};

type FiltrosId = 'original' | 'quantidade' | 'preco' | 'alfabetica';

interface OpcoesFiltro {
    id: FiltrosId;
    title: string;
}

export function ControlScreen() {
    const [search, setSearch] = useState('');
    const [modalVisibleProduto, setModalVisibleProduto] = useState(false);
    const [modalVisibleDeletar, setModalVisibleDeletar] = useState(false);
    const [modalVisibleCategoria, setModalVisibleCategoria] = useState(false);
    const [modo, setModo] = useState<"criar" | "editar">("criar");
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [totalRefeicoes, setTotalRefeicoes] = useState<number>(0);
    const [totalVendasMes, setTotalVendasMes] = useState<number>(0);
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);
    const totalBaixoEstoque = produtos.filter(produto => produto.quantidade < 8).length;
    const [filtroAtivo, setFiltroAtivo] = useState<FiltrosId>('original');
    const [classificacao, setClassificacao] = useState<SortDirection>('crescente');
  
    // Salva temporariamente os dados digitados
    const [modalData, setModalData] = useState<Record<string, string>>({});

    const carregarDados = async () => {
        try {
            const [listaProdutos, listaCategorias, totalMeals, totalVendas] = await Promise.all([
                produtoService.listar(),
                categoriaService.listar(),
                refeicaoService.buscarTotal(),
                pedidoService.buscarTotalMesAtual(),
            ]);

            setProdutos(listaProdutos);
            setCategorias(listaCategorias);
            setTotalRefeicoes(totalMeals);
            setTotalVendasMes(totalVendas);
        } catch (error) {
            toastErro("Não foi possível carregar as informações do painel.");
        }
    };

    useEffect(() => {
        carregarDados();
    }, []);

    const categoriasMap: Record<number, string> = Object.fromEntries(
        categorias.map((cat) => [
            cat.id!,
            cat.nome,
        ])
    );

    // Campos do Modal Inserir/Alterar produto
    const newProduto: CampoModal[] = [
        { key: 'nome', label: 'Nome', placeholder: 'Digite o nome do produto' },
        { key: 'descricao', label: 'Descrição', placeholder: 'Digite a descrição' },
        { key: 'id_categoria', label: 'Categoria', placeholder: 'Digite o id de Categoria', keyboardType: 'numeric' },
        { key: 'preco', label: 'Preço', placeholder: '0.00', keyboardType: 'numeric' },
        { key: 'imagem_url', label: 'Imagem (URL)', placeholder: 'http://...' },
        { key: 'quantidade', label: 'Quantidade', placeholder: '0', keyboardType: 'numeric' },
    ];

    // Campos do Modal Inserir Categoria
    const novaCategoria: CampoModal[] = [
        { key: 'nome', label: 'Nome', placeholder: 'Digite o nome da categoria' },
    ]

    // Atualiza dinamicamente a chave correspondente no estado
    const handleInputChange = (key: string, value: string) => {
        setModalData(prev => ({ ...prev, [key]: value }));
    };

    const abrirModalCriar = () => {
        setModo("criar");
        setModalData({imagem_url: imagemProdutoUrl ?? "",});
        setModalVisibleProduto(true);
    };

    const abrirModalEditar = (produto: Produto) => {
        setProdutoSelecionado(produto);
        setModo("editar");
        setModalData({
            nome: produto.nome,
            descricao: produto.descricao,
            id_categoria: produto.id_categoria.toString(),
            preco: produto.preco.toString(),
            imagem_url: produto.imagem_url,
            quantidade: produto.quantidade.toString(),
        });

        setModalVisibleProduto(true);
    };

    const criarProduto = async() => {
        try {
            if (!modalData.nome || !modalData.preco || !modalData.id_categoria) {
                alert("Por favor, preencha pelo menos Nome, Preço e ID da Categoria para o teste.");
                return;
            }

            const novoProduto: Produto = {
                nome: modalData.nome,
                descricao: modalData.descricao || "Sem descrição",
                id_categoria: Number(modalData.id_categoria),
                preco: Number(modalData.preco),
                imagem_url: modalData.imagem_url || "https://via.placeholder.com/150",
                quantidade: modalData.quantidade ? Number(modalData.quantidade) : 0,
                disponibilidade: true,
                desconto: 0
            };

            await produtoService.inserir(novoProduto);
            limparImagem();
            setModalData({});
            setModalVisibleProduto(false);
            carregarDados();
            toastProcutoCriado(novoProduto.nome);
        } catch(erro) {
            toastErroCriar("produto");
        }
    };

    const editarProduto = async () => {
        try {
            if (!produtoSelecionado) return;
            const dados: Partial<Produto> = {
                nome: modalData.nome,
                descricao: modalData.descricao,
                preco: Number(modalData.preco),
                id_categoria: Number(modalData.id_categoria),
                imagem_url: modalData.imagem_url,
                quantidade: Number(modalData.quantidade),
            };

            await produtoService.editar(produtoSelecionado.id!, dados);

            setModalVisibleProduto(false);
            setProdutoSelecionado(null);
            toastProdutoAtualizado(modalData.nome);
            setModalData({});
            carregarDados();
        } catch (erro) {
            toastErroAtualizar("produto");
        }
    };

    const deletarProduto = async () => {
        try {
            if (!produtoSelecionado?.id) return;
            await produtoService.deletar(produtoSelecionado.id);

            const nomeDeletado = produtoSelecionado.nome;
            setModalVisibleDeletar(false);
            setProdutoSelecionado(null);
            carregarDados(); 
            toastProdutoDeletado(nomeDeletado);
         } catch (erro) {
            toastErroDeletar("produto");
         }
    };

    const alterarStatus = async (id: number, disponibilidade: boolean) => {
        try {
            await produtoService.alterarDisponibilidade(
                id,
                !disponibilidade
            );
            carregarDados();
        } catch(erro) {
            toastErro("Erro ao alterar disponibilidade");
        }
    };

    const criarCategoria = async() => {
        try {
            await categoriaService.inserir({ nome: modalData.nome });
            toastCategoriaCriada(modalData.nome);
            setModalData({});
            setModalVisibleCategoria(false);
        } catch (error) {
            toastErroCriar("categoria");
        }
    };

    const dadosCards = [
        {
            id: "1",
            titulo: "Impacto Gerado",
            subtitulo: `${totalRefeicoes} ${totalRefeicoes === 1 ? 'Refeição' : 'Refeições'}`,
            corFundoCard: COLORS.green_light,
            corFundoIcone: "#74DB9A",
            icone: <Feather name="heart" size={24} color={COLORS.white} />
        },
        {
            id: "2",
            titulo: "Baixo Estoque",
            subtitulo: `${totalBaixoEstoque} ${totalBaixoEstoque === 1 ? 'Item' : 'Itens'}`,
            corFundoCard: COLORS.gray_300,
            corFundoIcone: COLORS.gray_400,
            icone: <FontAwesome name="archive" size={20} color={COLORS.white} />
        },
        {
            id: "3",
            titulo: "Vendas no mês",
            subtitulo: `${totalVendasMes} ${totalVendasMes === 1 ? 'Venda' : 'Vendas'}`,
            corFundoCard: "#E0B1B6",
            corFundoIcone: "#FF3030",
            icone: <Feather name="trending-up" size={22} color={COLORS.white} />
        }
    ];

    const opcoesDeFiltragem: OpcoesFiltro[] = [
        { id: 'original', title: 'Original' },
        { id: 'quantidade', title: 'Quantidade' },
        { id: 'preco', title: 'Preço' },
        { id: 'alfabetica', title: 'Alfabética' },
    ];

    const controleBotaoAtivo = (fieldId: FiltrosId) => {
        if (filtroAtivo === fieldId) {
            setClassificacao(prev => prev === 'crescente' ? 'decrescente' : 'crescente');
        } else {
            setFiltroAtivo(fieldId);
            setClassificacao('crescente');
        }
    };

    const getProdutosOrdenados = (): Produto[] => {
        const produtosCopiados = [...produtos];

        return produtosCopiados.sort((a, b) => {
            let valorA: string | number;
            let valorB: string | number;

            switch (filtroAtivo) {
                case 'original':
                    valorA = a.id ?? 0;
                    valorB = b.id ?? 0;
                    break;
                case 'quantidade':
                    valorA = a.quantidade;
                    valorB = b.quantidade;
                    break;
                case 'preco':
                    valorA = a.preco;
                    valorB = b.preco;
                    break;
                case 'alfabetica':
                    valorA = a.nome.toLowerCase();
                    valorB = b.nome.toLowerCase();
                    break;
                default:
                    return 0;
            }

            if (typeof valorA === 'string' && typeof valorB === 'string') {
                return classificacao === 'crescente' 
                    ? valorA.localeCompare(valorB) 
                    : valorB.localeCompare(valorA);
            }

            return classificacao === 'crescente' 
                ? (valorA as number) - (valorB as number) 
                : (valorB as number) - (valorA as number);
        });
    };

    const produtosExibidos = getProdutosOrdenados();

    const produtosFiltradosEExibidos = produtosExibidos.filter(produto => 
        produto.nome.toLowerCase().includes(search.toLowerCase())
    );

    // Câmera
    const [imagemProduto, setImagemProduto] = useState<string | null>(null);
    const [imagemProdutoUrl, setImagemProdutoUrl] = useState<string | null>(null);

    const abrirCamera = async () => {
        const permissao =
            await ImagePicker.requestCameraPermissionsAsync();

        if (!permissao.granted) {
            toastErro("Sem permissão para acessar a câmera");
            return;
        }

        const resultado =
            await ImagePicker.launchCameraAsync({
                mediaTypes: ['images'],
                quality: 0.8,
                allowsEditing: true,
            });

        if (!resultado.canceled) {
            const uri = resultado.assets[0].uri;

            setImagemProduto(uri);

            try {
                const url = await bucketProdutosService.uploadProdutoImagem(uri);

                setImagemProdutoUrl(url);
                console.log(url);

                setModalData(prev => ({
                    ...prev,
                    imagem_url: url,
                }));

                toastSucesso("Imagem enviada!");
            } catch (error) {
                console.error(error);
                toastErro("Erro ao enviar imagem");
            }
        }
    };

    const limparImagem = () => {
        setImagemProduto(null);
        setImagemProdutoUrl(null);

        setModalData(prev => ({
            ...prev,
            imagem_url: '',
        }));
    };

    return (
        <View style={styles.pageContainer}>
            <ScrollView>
                {/* Header */}
                <View style={styles.headerContainer}>
                    <Header 
                        title="Prato Solidário" 
                        titleColor={COLORS.red}
                        hiddenIcons={['search', 'refresh', 'plus','shoppingCart']}
                        iconColor={COLORS.red}
                        showMenu={true}
                    />
                </View>

                {/* Título */}
                <View style={styles.titleContainer}>
                    <Title color={COLORS.black} size={26} fontWeight="bold">Controle Produtos</Title>
                    <Title color={COLORS.brown} size={16} fontWeight="regular">
                        Cadastre uma nova opção culinária e defina o impacto social positivo.
                    </Title>
                </View>
                <View style={styles.buttonFotoContainer}>
                    {
                        imagemProduto ? (
                            <>
                                <Image source={{ uri: imagemProduto }}style={styles.image}/>
                                <Button
                                    color={COLORS.red}
                                    activeOpacity={0.8}
                                    style={{ width: "40%", height: 50, borderRadius: 12, alignSelf: 'center', marginTop: 10 }}
                                    onPress={limparImagem}
                                >
                                    <Text style={{ color: COLORS.white, fontSize: 13, fontWeight: "500"}}>
                                        Remover Foto
                                    </Text>
                                </Button>
                            </>
                        ) : (
                            <ButtonFoto onPress={abrirCamera} style={{ width: '90%', paddingVertical: 65, alignSelf: 'center' }} />
                        )
                    }          
                </View>

                {/* Botões */}
                <View style={styles.buttonContainer}>
                    <Button 
                        color={COLORS.red}
                        activeOpacity={0.8}
                        style={{ width: "90%", height: 60, borderRadius: 12 }}
                        onPress={() => setModalVisibleCategoria(true)}
                    >
                        <FontAwesome name="save" size={20} color={COLORS.white} />
                        <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: "500", marginLeft: 6 }}>
                            Cadastrar Categoria
                        </Text>
                    </Button>
                    <Button 
                        color={COLORS.red}
                        activeOpacity={0.8}
                        style={{ width: "90%", height: 60, borderRadius: 12 }}
                        onPress={abrirModalCriar}
                    >    
                        <FontAwesome name="save" size={20} color={COLORS.white} />
                        <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: "500", marginLeft: 6 }}>
                            Cadastrar Produto
                        </Text>
                    </Button>

                    <SearchContainer>
                        <Search color={COLORS.gray_400} size={20} />
                        <SearchBar 
                            placeholder="Buscar por Produto..." 
                            value={search}
                            onChangeText={setSearch} 
                        />
                    </SearchContainer>
                </View>

                {/* Botões de Ordenação */}
                <View style={styles.ordenacaoContainer}>
                    <Title color={COLORS.black} size={22} fontWeight="bold">Ordenação</Title>

                    <View style={styles.ordenacaoButtons}>
                        {opcoesDeFiltragem.map((item) => {
                            const isActive = filtroAtivo === item.id;
                            return (
                                <ButtonOrdenacao
                                    key={item.id}
                                    titulo={item.title}
                                    isActive={isActive}
                                    direcao={isActive ? classificacao : 'desativado'}
                                    onPress={() => controleBotaoAtivo(item.id)}
                                />
                            );
                        })}
                    </View>
                </View>

                {/* Tabela */}
                <TabelaProdutos
                    produtos={produtosFiltradosEExibidos}
                    categoriasMap={categoriasMap}
                    onEditar={abrirModalEditar}
                    onExcluir={(id) => {

                        const produto = produtos.find(
                            (p) => p.id === id
                        );

                        if (produto) {
                            setProdutoSelecionado(produto);
                            setModalVisibleDeletar(true);
                        }
                    }}
                    onAlterarStatus={alterarStatus}
                />


                {/* Cards das Informações */}
                <View style={styles.cardsContainer}>
                    <FlatList
                        data={dadosCards}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
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

            {/* Modal para inserir/alterar produto */}
            <ModalDinamico
                visible={modalVisibleProduto}
                title={modo === "criar" ? "Adicionar Produto" : "Alterar Produto"}
                fields={newProduto}
                formValues={modalData}
                onValueChange={handleInputChange}
                primaryButtonText={
                    modo === "criar"
                        ? "Adicionar Produto"
                        : "Salvar Alterações"
                }
                secondaryButtonText="Cancelar"
                onPrimaryPress={
                    modo === "criar"
                        ? criarProduto
                        : editarProduto
                }
                onSecondaryPress={() => {
                    setModalData({});
                    setModalVisibleProduto(false);
                }}
            />

            {/* Modal para adicionar categoria */}
            <ModalDinamico
                  visible={modalVisibleCategoria}
                  title="Adicionar Categoria"
                  fields={novaCategoria}
                  formValues={modalData}
                  onValueChange={handleInputChange}
                  primaryButtonText="Adicionar"
                  secondaryButtonText="Cancelar"
                  onPrimaryPress={criarCategoria}
                  onSecondaryPress={() => {
                      setModalData({});
                      setModalVisibleCategoria(false);
                  }}
            />  

            {/* Modal para deletar produto */}
            <ModalDinamico
                visible={modalVisibleDeletar}
                title="Excluir Produto"
                message="Deseja realmente excluir este produto?"
                primaryButtonText="Excluir"
                secondaryButtonText="Cancelar"
                onPrimaryPress={deletarProduto}
                onSecondaryPress={() => setModalVisibleDeletar(false)}
            />
        </View>
    );
}
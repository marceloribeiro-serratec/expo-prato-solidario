import { useState, useEffect } from 'react';
import { Produto, produtoService } from '@/services/produtoService';
import { Categoria, categoriaService } from '@/services/categoriaService';
import { refeicaoService } from '@/services/refeicaoService';
import { pedidoService } from '@/services/pedidoService';
import { FiltrosId } from '@/types/controlScreen';
import { SortDirection } from '@/components/ButtonOrdenacao';   
import { getProdutosOrdenados } from '@/utils/productSort';
import {
    toastProcutoCriado, toastErroCriar, toastErroDeletar, toastProdutoDeletado,
    toastProdutoAtualizado, toastErroAtualizar, toastErro, toastCategoriaCriada,
} from '@/utils/toast';

export function useControlScreen() {
    const [search, setSearch] = useState('');
    const [modalVisibleProduto, setModalVisibleProduto] = useState(false);
    const [modalVisibleDeletar, setModalVisibleDeletar] = useState(false);
    const [modalVisibleCategoria, setModalVisibleCategoria] = useState(false);
    const [modo, setModo] = useState<'criar' | 'editar'>('criar');
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [totalRefeicoes, setTotalRefeicoes] = useState(0);
    const [totalVendasMes, setTotalVendasMes] = useState(0);
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);
    const [filtroAtivo, setFiltroAtivo] = useState<FiltrosId>('original');
    const [classificacao, setClassificacao] = useState<SortDirection>('crescente');
    const [modalData, setModalData] = useState<Record<string, string>>({});

    const totalBaixoEstoque = produtos.filter(p => p.quantidade < 8).length;

    const categoriasMap: Record<number, string> = Object.fromEntries(
        categorias.map(cat => [cat.id!, cat.nome])
    );

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
        } catch {
            toastErro("Não foi possível carregar as informações do painel.");
        }
    };

    useEffect(() => { carregarDados(); }, []);

    const handleInputChange = (key: string, value: string) => {
        setModalData(prev => ({ ...prev, [key]: value }));
    };

    const abrirModalCriar = (imagemUrl?: string | null) => {
        setModo('criar');
        setModalData({ imagem_url: imagemUrl ?? '' });
        setModalVisibleProduto(true);
    };

    const abrirModalEditar = (produto: Produto) => {
        setProdutoSelecionado(produto);
        setModo('editar');
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

    const criarProduto = async () => {
        try {
            if (!modalData.nome || !modalData.preco || !modalData.id_categoria) {
                alert("Por favor, preencha pelo menos Nome, Preço e ID da Categoria.");
                return;
            }

            const novoProduto: Produto = {
                nome: modalData.nome,
                descricao: modalData.descricao || 'Sem descrição',
                id_categoria: Number(modalData.id_categoria),
                preco: Number(modalData.preco),
                imagem_url: modalData.imagem_url || 'https://via.placeholder.com/150',
                quantidade: modalData.quantidade ? Number(modalData.quantidade) : 0,
                disponibilidade: true,
                desconto: 0,
            };

            await produtoService.inserir(novoProduto);
            setModalData({});
            setModalVisibleProduto(false);
            carregarDados();
            toastProcutoCriado(novoProduto.nome);
        } catch {
            toastErroCriar('produto');
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
        } catch {
            toastErroAtualizar('produto');
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
        } catch {
            toastErroDeletar('produto');
        }
    };

    const alterarStatus = async (id: number, disponibilidade: boolean) => {
        try {
            await produtoService.alterarDisponibilidade(id, !disponibilidade);
            carregarDados();
        } catch {
            toastErro('Erro ao alterar disponibilidade');
        }
    };

    const criarCategoria = async () => {
        try {
            await categoriaService.inserir({ nome: modalData.nome });
            toastCategoriaCriada(modalData.nome);
            setModalData({});
            setModalVisibleCategoria(false);
        } catch {
            toastErroCriar('categoria');
        }
    };

    const controleBotaoAtivo = (fieldId: FiltrosId) => {
        if (filtroAtivo === fieldId) {
            setClassificacao(prev => prev === 'crescente' ? 'decrescente' : 'crescente');
        } else {
            setFiltroAtivo(fieldId);
            setClassificacao('crescente');
        }
    };

    const produtosExibidos = getProdutosOrdenados(produtos, filtroAtivo, classificacao)
        .filter(p => p.nome.toLowerCase().includes(search.toLowerCase()));

    return {
        // estado
        search, setSearch,
        modalVisibleProduto, setModalVisibleProduto,
        modalVisibleDeletar, setModalVisibleDeletar,
        modalVisibleCategoria, setModalVisibleCategoria,
        modo, modalData, handleInputChange,
        setModalData,
        produtoSelecionado, setProdutoSelecionado,
        categorias, categoriasMap,
        totalRefeicoes, totalVendasMes, totalBaixoEstoque,
        filtroAtivo, classificacao,
        produtosExibidos,
        // ações
        abrirModalCriar, abrirModalEditar,
        criarProduto, editarProduto, deletarProduto,
        alterarStatus, criarCategoria, controleBotaoAtivo,
    };
}
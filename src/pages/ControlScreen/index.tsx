import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import { View, Button } from 'react-native';
import { ModalDinamico, CampoModal } from '../../components/ModalDinamico';
import { produtoService, Produto } from '@/services/produtoService';
import { categoriaService, Categoria } from '@/services/categoriaService';

export function ControlScreen() {
    const [modalVisibleProduto, setModalVisibleProduto] = useState(false);
    const [modalVisibleDeletar, setModalVisibleDeletar] = useState(false);
    const [modalVisibleCategoria, setModalVisibleCategoria] = useState(false);

    const [modo, setModo] = useState<"criar" | "editar">("criar");
  
    // Salva temporariamente os dados digitados
    const [modalData, setModalData] = useState<Record<string, string>>({});

    const [produtos, setProdutos] = useState<Produto[]>([]);

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
        carregarDados();
    }, []);

    // Campos do Modal Inserir/Alterar produto
    const novoProduto: CampoModal[] = [
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
        setModalData({});
        setModalVisibleProduto(true);
    };

    const abrirModalEditar = () => {
      setModo("editar");
      setModalData({
          nome: "Pizza Calabresa",
          descricao: "Pizza grande",
          categoria: "1",
          preco: "79.90",
          imagem: "pizza.com.italia",
          quantidade: "10",
      });
      setModalVisibleProduto(true);
    };

    const criarProduto = async() => {
        if (!modalData.nome || !modalData.preco || !modalData.id_categoria) {
            alert("Por favor, preencha pelo menos Nome, Preço e ID da Categoria para o teste.");
            return;
        }

        const novoProduto: Produto = {
            nome: modalData.nome,
            descricao: modalData.descricao || "Sem descrição", // Evita nulos se o usuário não digitar
            id_categoria: Number(modalData.id_categoria),
            preco: Number(modalData.preco),
            imagem_url: modalData.imagem_url || "https://via.placeholder.com/150", // URL padrão de teste
            quantidade: modalData.quantidade ? Number(modalData.quantidade) : 0,
            disponibilidade: true,
            desconto: 0
        };

        await produtoService.inserir(novoProduto);
        alert(`${novoProduto.nome} foi cadastrado.`);
        setModalData({});
        setModalVisibleProduto(false);
        carregarDados();
    };

    const editarProduto = () => {
        console.log("Produto Alterado:", modalData);
        setModalData({});
        setModalVisibleProduto(false);
    };

    const deletarProduto = () => {
        console.log("Produto Removido:");
        setModalVisibleDeletar(false);
    };

    const criarCategoria = async() => {
        try {
            await categoriaService.inserir({ nome: modalData.nome });
            alert("Categoria cadastrada!");
            setModalData({});
            setModalVisibleCategoria(false);
        } catch (error) {
            alert("Erro: Falha ao cadastrar categoria.");
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Adicionar Produto" onPress={abrirModalCriar} />
            <Button title="Deletar Produto" onPress={() => setModalVisibleDeletar(true)} />
            <Button title="Adicionar Categoria" onPress={() => setModalVisibleCategoria(true)} />
            <Button title="Editar Produto" onPress={abrirModalEditar} />

            {/* Modal para inserir/alterar produto */}
            <ModalDinamico
                visible={modalVisibleProduto}
                title={modo === "criar" ? "Adicionar Produto" : "Alterar Produto"}
                fields={novoProduto}
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
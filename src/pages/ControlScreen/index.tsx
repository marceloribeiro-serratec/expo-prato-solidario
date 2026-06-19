import React, { useState } from 'react';
import { styles } from './styles';
import { View, Button } from 'react-native';
import { ModalDinamico, CampoModal } from '../../components/ModalDinamico';

export function ControlScreen() {
    const [modalVisibleProduto, setModalVisibleProduto] = useState(false);
    const [modalVisibleDeletar, setModalVisibleDeletar] = useState(false);
    const [modalVisibleCategoria, setModalVisibleCategoria] = useState(false);

    const [modo, setModo] = useState<"criar" | "editar">("criar");
  
    // Salva temporariamente os dados digitados
    const [modalData, setModalData] = useState<Record<string, string>>({});

    // Campos do Modal Inserir/Alterar produto
    const novoProduto: CampoModal[] = [
        { key: 'nome', label: 'Nome', placeholder: 'Digite o nome do produto' },
        { key: 'descricao', label: 'Descrição', placeholder: 'Digite a descrição' },
        { key: 'categoria', label: 'Categoria', placeholder: 'Digite o id de Categoria', keyboardType: 'numeric' },
        { key: 'preco', label: 'Preço', placeholder: '0.00', keyboardType: 'numeric' },
        { key: 'imagem', label: 'Imagem (URL)', placeholder: 'http://...' },
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

    const criarProduto = () => {
        console.log("Produto Inserido:", modalData);
        setModalData({});
        setModalVisibleProduto(false);
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

    const criarCategoria = () => {
        console.log("Categoria Inserida:", modalData);
        setModalData({});
        setModalVisibleCategoria(false);
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
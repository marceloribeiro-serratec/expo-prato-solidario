import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { api } from "./api";

export interface Produto {
    id?: number;
    id_categoria: number;
    nome: string;
    descricao: string;
    preco: number;
    imagem_url: string;
    disponibilidade: boolean;
    quantidade: number;
    desconto: number;
}

export const produtoService = {
    listar: async(): Promise<Produto[]> => {
        try {
            const response = await api.get<Produto[]>("/produtos");
            return response.data;
        } catch(error) {
            console.error("Erro técnico ao buscar produtos:", error);
            throw error;
        }
    },

    inserir: async(produto: Produto): Promise<void> => {
        try {
            const response = await api.post("/produtos", produto);
        } catch(error) {
            console.error("Erro técnico ao cadastrar produto:", error);
            throw error;
        }
    },

    editar: async (id: number | string, produto: Partial<Produto>): Promise<void> => {
        try {
            const response = await api.patch(`/produtos?id=eq.${id}`, produto);
        } catch (error) {
            console.error("Erro ao editar:", error);
            throw error;
        }
    },

    deletar: async (id: number | string): Promise<void> => {
        try {
            await api.delete(`/produtos?id=eq.${id}`);
        } catch (error) {
            console.error("Erro ao deletar:", error);
            throw error;
        }
    },

    alterarDisponibilidade: async (id: number | string, disponibilidade: boolean): Promise<void> => {
        try {
            const response = await api.patch(`/produtos?id=eq.${id}`, { disponibilidade });
        } catch (error) {
            console.error("Erro ao alterar disponibilidade:", error);
            throw error;
        }
    }
}
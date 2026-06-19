import { api } from "./api";

export interface Categoria {
    id?: number;
    nome: string;
}

export const categoriaService = {
    listar: async(): Promise<Categoria[]> => {
        try {
            const response = await api.get<Categoria[]>("/categorias");
            return response.data;
        } catch(error) {
            console.error("Erro técnico ao buscar categorias:", error);
            throw error;
        }
    },

    inserir: async(produto: Categoria): Promise<void> => {
        try {
            const response = await api.post("/categorias", produto);
        } catch(error) {
            console.error("Erro técnico ao cadastrar categoria:", error);
            throw error;
        }
    },
}
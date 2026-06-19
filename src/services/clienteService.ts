import { api } from './api';

export interface Cliente {
    id?: number;
    nome: string;
    email: string;
    telefone: string;
    cpf: string;
    role?: 'user' | 'admin';
    senha?: string;
}

export const clienteService = {
    cadastrar: async (cliente: Cliente): Promise<Cliente> => {
        try {
            const response = await api.post<Cliente>("/clientes", cliente);
            return response.data;
        } catch (error) {
            console.error("Erro técnico ao cadastrar cliente:", error);
            throw error;
        }
    },
}
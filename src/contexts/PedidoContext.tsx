import api from '@/services/api'; 
import { Pedido } from '@/types/pedido-types'; // Importe a interface que criamos

export const historicoVendaService = {
  listarHistorico: async (): Promise<Pedido[]> => {
    try {
      const query = "select=id,data,valor_total,clientes(nome)";
      
      const { data } = await api.get<Pedido[]>(`/pedidos?${query}`);
      
      return data || [];  
    } catch (error) {
      console.error("Erro ao listar histórico:", error);
      throw error; 
    }
  }
};
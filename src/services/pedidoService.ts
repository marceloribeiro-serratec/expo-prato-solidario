import { api } from "./api";

export interface Pedido {
    id?: number;
    id_cliente: string;
    data: string;
    valor_total: number;
    clientes?: {
        nome: string;
    }; 
}

export const pedidoService = {
    criarPedido: async (pedido: Pedido): Promise<Pedido> => {
        try {
            const response = await api.post<Pedido>("/pedidos", pedido);
            return response.data;
        } catch (error) {
            console.error("Erro técnico ao cadastrar pedido:", error);
            throw error;
        }
    },

    listarHistorico: async (): Promise<Pedido[]> => {
        try {
            const query = "select=id,data,valor_total,clientes(nome)";
            const response = await api.get<Pedido[]>(`/pedidos?${query}`);
            return response.data || [];
        } catch (error) {
            console.error("Erro técnico ao buscar histórico de vendas:", error);
            throw error;
        }
    },

    buscarTotalMesAtual: async (): Promise<number> => {
        try {
            const agora = new Date();
            const ano = agora.getFullYear();
            const mes = String(agora.getMonth() + 1).padStart(2, '0'); 
            const primeiroDiaDoMes = `${ano}-${mes}-01`;

            const response = await api.get("/pedidos", {
                headers: {
                    "Prefer": "count=exact",
                },
                params: {
                    limit: 0,
                    data: `gte.${primeiroDiaDoMes}`
                }
            });

            const contentRange = response.headers["content-range"];
            
            if (contentRange) {
                const total = parseInt(contentRange.split("/")[1], 10);
                return isNaN(total) ? 0 : total;
            }
            
            return 0;
        } catch (error) {
            console.error("Erro técnico ao buscar total de pedidos do mês:", error);
            return 0;
        }
    }
}
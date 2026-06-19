import { api } from './api';

export interface RefeicaoSolidaria {
    id?: number;
    data?: string;
}

export const refeicaoService = {
    buscarTotal: async (): Promise<number> => {
        try {
            const response = await api.get("/refeicao_solidaria", {
                headers: {
                    "Prefer": "count=exact", // Informa ao supabase para calcular a contagem exata dos registros
                },
                params: {
                    limit: 0,
                }
            });

            const contentRange = response.headers["content-range"];
        
            if (contentRange) {
                const total = parseInt(contentRange.split("/")[1], 10);
                return isNaN(total) ? 0 : total;
            }
            return 0;
        } catch (error) {
            console.error("Erro técnico ao buscar total de refeições solidárias:", error);
            return 0;
        }
    }
}
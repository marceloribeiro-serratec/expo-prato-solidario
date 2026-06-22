// src/providers/PedidoProvider.tsx
import { useState, useEffect } from "react";
import { PedidoContext } from "../contexts/PedidoContext";
import { pedidoService, Pedido } from "../services/pedidoService";

export function PedidoProvider({ children }: { children: React.ReactNode }) {
    const [pedidos, setPedidos] = useState<Pedido[]>([]); // Inicializado como array vazio
    const [loading, setLoading] = useState(true);

    async function carregarPedidos() {
        try {
            setLoading(true);
            const data = await pedidoService.listarHistorico();
            
            // Se 'data' for undefined ou null, garantimos que seja um array []
            setPedidos(data || []); 
        } catch (error) {
            console.error("Erro ao carregar pedidos:", error);
            setPedidos([]); // Em caso de erro, garantimos que seja um array vazio
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        carregarPedidos();
    }, []);

    return (
        <PedidoContext.Provider value={{ pedidos, loading, refresh: carregarPedidos }}>
            {children}
        </PedidoContext.Provider>
    );
}
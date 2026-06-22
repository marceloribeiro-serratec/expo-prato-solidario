import { useState, useEffect } from "react";
import { PedidoContext } from "../contexts/PedidoContext";
import { pedidoService, Pedido } from "../services/pedidoService";

export function PedidoProvider({ children }: { children: React.ReactNode }) {
    const [pedidos, setPedidos] = useState<Pedido[]>([]);
    const [loading, setLoading] = useState(true);

    async function carregarPedidos() {
        try {
            setLoading(true);
            const data = await pedidoService.listarHistorico();
            setPedidos(data || []); 
        } catch (error) {
            console.error("Erro ao carregar pedidos:", error);
            setPedidos([]);
        } finally {
            setLoading(false);
        }
    }

    return (
        <PedidoContext.Provider value={{ pedidos, loading, refresh: carregarPedidos }}>
            {children}
        </PedidoContext.Provider>
    );
}
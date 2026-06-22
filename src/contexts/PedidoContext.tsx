import { createContext } from "react";
import { Pedido } from "@/services/pedidoService";

// Definimos o formato que o hook vai retornar
interface PedidoContextData {
    pedidos: Pedido[];
    loading: boolean;
    refresh: () => Promise<void>;
}

export const PedidoContext = createContext<PedidoContextData>({
    pedidos: [],
    loading: true,
    refresh: async () => {},
});
import { useContext } from "react";
import { PedidoContext } from "../contexts/PedidoContext";

export const usePedidos = () => {
    const context = useContext(PedidoContext);
    if (!context) {
        throw new Error("usePedidos deve ser usado dentro de um PedidoProvider");
    }
    return context;
};
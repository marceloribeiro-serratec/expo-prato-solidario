export interface Pedido {
  id: string;
  id_cliente: string;
  data: string;
  valor_total: number;
  cliente: {
    nome: string;
  };
}
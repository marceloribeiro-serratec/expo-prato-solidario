export type Categoria = {
    id: number;
    nome: string;
};

export type Produto = {
    id?: number | undefined;
    id_categoria: number;
    nome: string;
    descricao: string;
    preco: number;
    imagem_url: string;
};
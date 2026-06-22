export type FiltrosId = 'original' | 'quantidade' | 'preco' | 'alfabetica';

export interface OpcoesFiltro {
    id: FiltrosId;
    title: string;
}

export type SortState = {
    filtroAtivo: FiltrosId;
    classificacao: 'crescente' | 'decrescente';
};
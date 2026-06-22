import { Produto } from '@/services/produtoService';
import { FiltrosId } from '@/types/controlScreen';
import { SortDirection } from '@/components/ButtonOrdenacao';

export function getProdutosOrdenados(
    produtos: Produto[],
    filtroAtivo: FiltrosId,
    classificacao: SortDirection
): Produto[] {
    return [...produtos].sort((a, b) => {
        let valorA: string | number;
        let valorB: string | number;

        switch (filtroAtivo) {
            case 'original':
                valorA = a.id ?? 0;
                valorB = b.id ?? 0;
                break;
            case 'quantidade':
                valorA = a.quantidade;
                valorB = b.quantidade;
                break;
            case 'preco':
                valorA = a.preco;
                valorB = b.preco;
                break;
            case 'alfabetica':
                valorA = a.nome.toLowerCase();
                valorB = b.nome.toLowerCase();
                break;
            default:
                return 0;
        }

        if (typeof valorA === 'string' && typeof valorB === 'string') {
            return classificacao === 'crescente'
                ? valorA.localeCompare(valorB)
                : valorB.localeCompare(valorA);
        }

        return classificacao === 'crescente'
            ? (valorA as number) - (valorB as number)
            : (valorB as number) - (valorA as number);
    });
}
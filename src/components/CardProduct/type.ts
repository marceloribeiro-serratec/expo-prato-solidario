export interface CardProductProps {
    id: number
    nome: string
    descricao: string
    preco: number
    imagem_url: string
    desconto?: number | null
    disponibilidade?: boolean
    id_categoria?: number
    quantidade?: number
    onAddToCart: (id: number) => void
}
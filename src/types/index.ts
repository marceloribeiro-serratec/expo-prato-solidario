export type PontoColeta = {
    id: number
    nome: string
    tipo: 'coleta' | 'distribuicao'
    endereco: string
    latitude: number
    longitude: number
    descricao: string
    quentinhas_entregues: number
    ativo: boolean
}
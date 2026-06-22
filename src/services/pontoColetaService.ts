import { api } from "./api"
import { PontoColeta } from "@/types"

export async function buscarPontosColeta(): Promise<PontoColeta[]> {
     const response = await api.get<PontoColeta[]>("pontos_coleta", {
        params: { ativo: true },
    })

    return response.data
}


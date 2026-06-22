import { useState, useEffect } from "react"
import { View, Linking } from "react-native"
import MapView, { Marker, Callout } from "react-native-maps"
import { Navigation } from "lucide-react-native"
import Loading from "@/components/Loading"
import { ErrorMessage } from "@/components/ErrorMessage"
import { Title } from "@/components/Title"
import { Subtitle } from "@/components/Subtitle"
import { PageContainer } from "@/components/PageContainer"
import { pontosFicticios } from "@/data/pontosFicticios"
import { PontoColeta } from "@/types"
import { COLORS } from "@/constants/colors"
import { toastErroBuscar } from "@/utils/toast"
import { mapaScreenStyles as styles } from "./style"

export function MapaScreen() {
    const [pontos, setPontos] = useState<PontoColeta[]>([])
    const [loading, setLoading] = useState(true)
    const [erro, setErro] = useState(false)

    async function carregarPontos() {
        try {
            setLoading(true)
            setErro(false)

            const dados = pontosFicticios

            setPontos(dados)
        } catch (error) {
            setErro(true)
            toastErroBuscar("pontos de distribuição")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        carregarPontos()
    }, [])

    function abrirRota(latitude: number, longitude: number) {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`
        Linking.openURL(url)
    }

    if (loading) return <Loading size={0} />
    if (erro) return <ErrorMessage onTentar={carregarPontos} />

    return (
        <PageContainer>
            <View style={styles.header}>
                <Title color={COLORS.gray_700} size={20} fontWeight="bold">
                    Pontos de Distribuição
                </Title>
                <Subtitle>{pontos.length} pontos ativos na cidade</Subtitle>
            </View>

            <MapView
                style={styles.mapa}
                initialRegion={{
                    latitude: pontos[0]?.latitude || -22.2816,
                    longitude: pontos[0]?.longitude || -42.5311,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
            >
                {pontos.map((ponto, index) => (
                    <Marker
                        key={`${ponto.id}-${index}`}
                        coordinate={{
                            latitude: ponto.latitude,
                            longitude: ponto.longitude,
                        }}
                        pinColor={COLORS.red}
                    >
                        <Callout
                            onPress={() => abrirRota(ponto.latitude, ponto.longitude)}
                        >
                            <View style={styles.callout}>
                                <Title color={COLORS.gray_700} size={14} fontWeight="bold">
                                    {ponto.nome}
                                </Title>
                                <Subtitle fontSize={12}>{ponto.endereco}</Subtitle>
                                <Subtitle fontSize={12}>
                                    {ponto.tipo === 'coleta'
                                        ? 'Ponto de coleta'
                                        : `${ponto.quentinhas_entregues} quentinhas entregues`}
                                </Subtitle>
                                <View style={styles.linkRota}>
                                    <Navigation size={12} color={COLORS.red} />
                                    <Subtitle fontSize={11} color={COLORS.red}>
                                        Toque para traçar rota
                                    </Subtitle>
                                </View>
                            </View>
                        </Callout>
                    </Marker>
                ))}
            </MapView>
        </PageContainer>
    )
}
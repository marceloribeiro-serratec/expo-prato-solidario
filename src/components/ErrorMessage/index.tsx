import { View, TouchableOpacity } from "react-native"
import { AlertCircle } from "lucide-react-native"

import { COLORS } from "@/constants/colors"
import { Title } from "@/components/Title"
import { Subtitle } from "@/components/Subtitle"

import { errorMessageStyles as styles } from "./style"
import { ErrorMessageProps } from "./type"

export function ErrorMessage({
    mensagem = "Não foi possível carregar os dados. Verifique sua conexão.",
    onTentar,
}: ErrorMessageProps) {
    return (
        <View style={styles.container}>

            <View style={styles.icone}>
                <AlertCircle
                    color={COLORS.red}
                    size={48}
                />
            </View>

            <Title
                color={COLORS.gray_700}
                size={16}
                fontWeight="bold"
                align="center"
            >
                Algo deu errado
            </Title>

            <Subtitle
                color={COLORS.gray_500}
                style={{ textAlign: "center" }}
            >
                {mensagem}
            </Subtitle>

            {onTentar && (
                <TouchableOpacity
                    style={styles.botao}
                    onPress={onTentar}
                    activeOpacity={0.8}
                >
                    <Title color={COLORS.white} size={14} fontWeight="bold">
                        Tentar novamente
                    </Title>
                </TouchableOpacity>
            )}

        </View>
    )
}
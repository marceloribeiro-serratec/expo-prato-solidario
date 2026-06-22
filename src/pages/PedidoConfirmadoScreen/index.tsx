import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import QRCode from "react-native-qrcode-svg";
import { Text, TouchableOpacity, View } from "react-native";

import { COLORS } from "@/constants/colors";
import { NavigationProps, RootStackParamList } from "@/routes/type";
import { formatCurrency } from "@/utils/formatCurrency";
import { styles } from "./style";

type PedidoConfirmadoRouteProp = RouteProp<
    RootStackParamList,
    "pedidoConfirmado"
>;

export function PedidoConfirmadoScreen() {
    const navigation = useNavigation<NavigationProps>();
    const route = useRoute<PedidoConfirmadoRouteProp>();
    const { codigoPedido, data, impactoSocial, total } = route.params;

    const qrCodeValue = JSON.stringify({
        codigoPedido,
        total,
        impactoSocial,
        data,
    });

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Pedido confirmado</Text>
                <Text style={styles.subtitle}>
                    Apresente este QR Code para retirada ou conferência da sua
                    refeição.
                </Text>

                <View style={styles.qrCodeContainer}>
                    <QRCode
                        value={qrCodeValue}
                        size={220}
                        color={COLORS.black}
                        backgroundColor={COLORS.white}
                    />
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.label}>Código do pedido</Text>
                    <Text style={styles.orderCode}>{codigoPedido}</Text>

                    <Text style={styles.label}>Total pago</Text>
                    <Text style={styles.value}>{formatCurrency(total)}</Text>

                    <Text style={styles.label}>Impacto social gerado</Text>
                    <Text style={styles.impactValue}>
                        {formatCurrency(impactoSocial)}
                    </Text>
                </View>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigation.reset({
                        index: 0,
                        routes: [{ name: "home" }],
                    })
                }
                accessibilityRole="button"
                accessibilityLabel="Voltar para a home"
            >
                <Text style={styles.buttonText}>Voltar para o início</Text>
            </TouchableOpacity>
        </View>
    );
}

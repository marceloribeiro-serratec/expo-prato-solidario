import { CartHeaderButton } from "@/components/CartHeaderButton";
import { COLORS } from "@/constants/colors";
import { CartScreen } from "@/pages/CartScreen";
import { ControlScreen } from "@/pages/ControlScreen";
import { DetalhesProdutoScreen } from "@/pages/DetalhesProdutoScreen";
import { PedidoConfirmadoScreen } from "@/pages/PedidoConfirmadoScreen";
import ProdutosScreen from "@/pages/ProdutosScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DrawerRoutes } from "./DrawerRoutes";
import { RootStackParamList, UserRole } from "./type";

const Stack = createNativeStackNavigator<RootStackParamList>();

interface PrivateRoutesProps {
    role: Exclude<UserRole, "public">;
}

export function PrivateRoutes({ role }: PrivateRoutesProps) {
    const isAdmin = role === "admin";

    return (
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen
                name="home"
                options={{ headerShown: false }}
            >
                {() => <DrawerRoutes role={role} />}
            </Stack.Screen>
            {isAdmin && (
                <Stack.Screen
                    name="control"
                    component={ControlScreen}
                    options={{ headerShown: false }}
                />
            )}
            <Stack.Screen
                name="product"
                component={ProdutosScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="cart"
                component={CartScreen}
                options={{
                    headerShown: true,
                    title: "Meu Carrinho",
                    headerTintColor: COLORS.red,
                    headerTitleStyle: { color: COLORS.red },
                }}
            />
            <Stack.Screen
                name="detalhesProduto"
                component={DetalhesProdutoScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    title: "Detalhes do Produto",
                    headerTintColor: COLORS.red,
                    headerTitleStyle: { color: COLORS.red },
                    headerRight: () => <CartHeaderButton navigation={navigation} />,
                })}
            />
            <Stack.Screen
                name="pedidoConfirmado"
                component={PedidoConfirmadoScreen}
                options={{
                    headerShown: true,
                    title: "Pedido confirmado",
                    headerTintColor: COLORS.red,
                    headerTitleStyle: { color: COLORS.red },
                }}
            />
        </Stack.Navigator>
    );
}

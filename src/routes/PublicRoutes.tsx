import { CartHeaderButton } from "@/components/CartHeaderButton";
import { COLORS } from "@/constants/colors";
import { CartScreen } from "@/pages/CartScreen";
import { DetalhesProdutoScreen } from "@/pages/DetalhesProdutoScreen";
import { LoginScreen } from "@/pages/LoginScreen";
import { PedidoConfirmadoScreen } from "@/pages/PedidoConfirmadoScreen";
import ProdutosScreen from "@/pages/ProdutosScreen";
import { RegisterScreen } from "@/pages/RegisterScreen";
import { WelcomeScreen } from "@/pages/WelcomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DrawerRoutes } from "./DrawerRoutes";
import { RootStackParamList } from "./type";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function PublicRoutes() {
    return (
        <Stack.Navigator initialRouteName="welcome">
            <Stack.Screen
                name="welcome"
                component={WelcomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="home"
                options={{ headerShown: false }}
            >
                {() => <DrawerRoutes role="public" />}
            </Stack.Screen>
            <Stack.Screen
                name="login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="register"
                component={RegisterScreen}
                options={{ headerShown: false }}
            />
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

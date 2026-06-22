import { LoginScreen } from "@/pages/LoginScreen";
import { WelcomeScreen } from "@/pages/WelcomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./type";
import { RegisterScreen } from "@/pages/RegisterScreen";
import { ControlScreen } from "@/pages/ControlScreen";
import ProdutosScreen from "@/pages/ProdutosScreen";
import { CartScreen } from "@/pages/CartScreen";
import { DrawerRoutes } from "./DrawerRoutes";
import { DetalhesProdutoScreen } from "@/pages/DetalhesProdutoScreen";
import { CartHeaderButton } from "@/components/CartHeaderButton";
import { COLORS } from "@/constants/colors";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function StackRoutes() {
    return (
        <Stack.Navigator initialRouteName="welcome">
            <Stack.Screen
                name="welcome"
                component={WelcomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="home"
                component={DrawerRoutes}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="register"
                component={RegisterScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="control"
                component={ControlScreen}
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
                    headerTitleStyle: {
                        color: COLORS.red,
                    },
                }}
            />
            <Stack.Screen
                name="detalhesProduto"
                component={DetalhesProdutoScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    title: "Detalhes do Produto",
                     headerTintColor: COLORS.red,
                    headerTitleStyle: {
                        color: COLORS.red,
                    },
                    headerRight: () => <CartHeaderButton navigation={navigation} />,
                })}
            />
        </Stack.Navigator>
    );
}

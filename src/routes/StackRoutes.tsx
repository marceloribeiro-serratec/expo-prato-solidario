import { LoginScreen } from "@/pages/LoginScreen";
import { WelcomeScreen } from "@/pages/WelcomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./type";
import { RegisterScreen } from "@/pages/RegisterScreen";
import { CartScreen } from "@/pages/CartScreen";
import { DrawerRoutes } from "./DrawerRoutes";
import { DetalhesProdutoScreen } from "@/pages/DetalhesProdutoScreen";

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
                name="cart"
                component={CartScreen}
                options={{ headerShown: true, title: "Meu Carrinho" }}
            />
            <Stack.Screen
                name="detalhesProduto"
                component={DetalhesProdutoScreen}
                options={{ headerShown: true, title: "Detalhes do Produto" }}
            />
        </Stack.Navigator>
    );
}

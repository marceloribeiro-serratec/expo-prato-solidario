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
import { Text, TouchableOpacity, View } from "react-native";
import { ShoppingCart } from "lucide-react-native";
import { COLORS } from "@/constants/colors";
import { header } from "@/components/Header/style";
import { useCart } from "@/hooks/useCart";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<RootStackParamList>();

type StackNavigation = NativeStackNavigationProp<RootStackParamList>;

function CartHeaderButton({ navigation }: { navigation: StackNavigation }) {
    const { cart } = useCart();
    const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <TouchableOpacity
            style={header.cartIconContainer}
            onPress={() => navigation.navigate("cart")}
            accessibilityRole="button"
            accessibilityLabel="Abrir carrinho"
        >
            <ShoppingCart color={COLORS.info_medium} size={24} />
            {cartItemsCount > 0 && (
                <View style={header.cartBadge}>
                    <Text style={header.cartBadgeText}>
                        {cartItemsCount > 99 ? "99+" : cartItemsCount}
                    </Text>
                </View>
            )}
        </TouchableOpacity>
    );
}

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
                options={{ headerShown: true, title: "Meu Carrinho" }}
            />
            <Stack.Screen
                name="detalhesProduto"
                component={DetalhesProdutoScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    title: "Detalhes do Produto",
                    headerRight: () => <CartHeaderButton navigation={navigation} />,
                })}
            />
        </Stack.Navigator>
    );
}

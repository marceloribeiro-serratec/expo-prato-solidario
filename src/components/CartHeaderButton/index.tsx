import { TouchableOpacity, View, Text } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCart } from "@/hooks/useCart";
import { RootStackParamList } from "@/routes/type";

import { COLORS } from "@/constants";
import { header } from "../Header/style";
import { ShoppingCart } from "lucide-react-native";

type StackNavigation = NativeStackNavigationProp<RootStackParamList>;

export function CartHeaderButton({ navigation }: { navigation: StackNavigation }) {
    const { cart } = useCart();
    const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <TouchableOpacity
            style={header.cartIconContainer}
            onPress={() => navigation.navigate("cart")}
            accessibilityRole="button"
            accessibilityLabel="Abrir carrinho"
        >
            <ShoppingCart color={COLORS.red} size={24} />
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
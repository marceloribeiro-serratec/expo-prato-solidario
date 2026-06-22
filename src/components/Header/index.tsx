import { Text, TouchableOpacity, View } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import {
    CirclePlus,
    CircleUserRound,
    Menu,
    RefreshCcw,
    Search,
    ShoppingCart,
} from "lucide-react-native";

import { Title } from "../Title";
import { COLORS } from "@/constants/colors";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/hooks/useCart";
import { NavigationProps } from "@/routes/type";
import { header } from "./style";

interface HeaderProps {
    title?: string;
    titleColor?: string;
    iconColor?: string;
    hiddenIcons?: string[];
    showMenu?: boolean;
}

export function Header({
    title = "Home",
    titleColor = COLORS.white,
    iconColor = COLORS.info_medium,
    hiddenIcons = [],
    showMenu = false,
}: HeaderProps = {}) {
    const navigation = useNavigation<NavigationProps>();
    const { cart } = useCart();
    const { user, profile } = useAuth();

    const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
    const userName = profile?.name ?? user?.name ?? user?.email ?? "";

    function renderUserArea() {
        if (hiddenIcons.includes("user")) {
            return null;
        }

        if (!user) {
            return (
                <TouchableOpacity
                    onPress={() => navigation.navigate("login")}
                    accessibilityRole="button"
                    accessibilityLabel="Ir para login"
                >
                    <CircleUserRound color={iconColor} size={22} />
                </TouchableOpacity>
            );
        }

        return (
            <View style={header.welcomeContainer}>
                <Text style={[header.welcomeText, { color: iconColor }]}>
                    Bem-vindo
                </Text>
                <Text
                    style={[header.userNameText, { color: iconColor }]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    {userName}
                </Text>
            </View>
        );
    }

    return (
        <View style={header.container}>
            <View style={header.titleContainer}>
                {showMenu && (
                    <TouchableOpacity
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                        accessibilityRole="button"
                        accessibilityLabel="Abrir menu"
                    >
                        <Menu color={iconColor} size={24} />
                    </TouchableOpacity>
                )}

                <Title color={titleColor} size={20}>
                    {title}
                </Title>
            </View>

            <View style={header.containerIcons}>
                {!hiddenIcons.includes("search") && <Search color={iconColor} size={20} />}
                {!hiddenIcons.includes("refresh") && <RefreshCcw color={iconColor} size={16} />}
                {!hiddenIcons.includes("plus") && <CirclePlus color={iconColor} size={20} />}
                {renderUserArea()}
                {!hiddenIcons.includes("shoppingCart") && (
                    <TouchableOpacity
                        style={header.cartIconContainer}
                        onPress={() => navigation.navigate("cart")}
                        accessibilityRole="button"
                        accessibilityLabel="Abrir carrinho"
                    >
                        <ShoppingCart color={iconColor} size={24} />
                        {cartItemsCount > 0 && (
                            <View style={header.cartBadge}>
                                <Text style={header.cartBadgeText}>
                                    {cartItemsCount > 99 ? "99+" : cartItemsCount}
                                </Text>
                            </View>
                        )}
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}

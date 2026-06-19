import { View, TouchableOpacity } from "react-native";
import { Title } from "../Title";

import { COLORS } from "@/constants/colors";
import {
    Menu,
    CirclePlus,
    CircleUserRound,
    RefreshCcw,
    Search,
    ShoppingCart,
} from "lucide-react-native";

import { header } from "./style";

// Adicionamos uma interface para definir o que pode ser alterado
interface HeaderProps {
    title?: string; // Opcional
    titleColor?: string; // Opcional
    iconColor?: string; // Opcional
    hiddenIcons?: string[]; // Lista de icones para escolha
    showMenu?: boolean; // Menu hamburger
    onPressMenu?: () => void;
}

export function Header({
    title = "Home", // Se não passar nada, assume "Home"
    titleColor = COLORS.white, // valor padrão
    iconColor = COLORS.info_medium, // Se não passar nada, assume a cor original
    hiddenIcons = [], // Se não passar nada, mostra todos
    showMenu = false,
    onPressMenu,
}: HeaderProps = {}) {
    // = {} permite que o componente seja chamado sem props
    return (
        <View style={header.container}>
            <View
                style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
            >
                {showMenu && (
                    <TouchableOpacity onPress={onPressMenu}>
                        <Menu color={iconColor} size={24} />
                    </TouchableOpacity>
                )}
                <Title color={titleColor} size={20}>
                    {title}
                </Title>
            </View>
                <View style={header.containerIcons}>
                    {!hiddenIcons.includes('search') && <Search color={iconColor} size={20} />}
                    {!hiddenIcons.includes('refresh') && <RefreshCcw color={iconColor} size={16} />}
                    {!hiddenIcons.includes('plus') && <CirclePlus color={iconColor} size={20} />}
                    {!hiddenIcons.includes('user') && <CircleUserRound color={iconColor} size={22} />}
                    {!hiddenIcons.includes('shoppingCart') && <ShoppingCart color={iconColor} size={24} />}
                </View>
        </View>
    );
}

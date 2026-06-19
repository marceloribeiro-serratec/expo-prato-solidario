import { View } from "react-native";
import { categoryCard } from "./style";
import { Hamburger } from "lucide-react-native";
import { COLORS } from "@/constants";
import { Title } from "../Title";

export function CategoryCard() {
    return (
        <View style={categoryCard.container}>
            <View style={categoryCard.iconContainer}>
                <Hamburger color={COLORS.green_dark} size={24} />
            </View>
            <Title color={COLORS.black} size={18} fontWeight={600}>
                Hamburguer
            </Title>
        </View>
    );
}

import { View } from "react-native";
import { categoryCard } from "./style";
import { Hamburger } from "lucide-react-native";
import { COLORS } from "@/constants";
import { Title } from "../Title";

interface CategoryCardProps {
    icon: React.ReactNode;
    title: string;
    background?: string;
}

export function CategoryCard({ icon, title, background }: CategoryCardProps) {
    return (
        <View style={categoryCard.container}>
            <View style={[categoryCard.iconContainer, { backgroundColor: background }]}>
                {icon}
            </View>
            <Title color={COLORS.black} size={16} fontWeight={600}>
                {title}
            </Title>
        </View>
    );
}

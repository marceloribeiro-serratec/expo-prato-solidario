import { View } from "react-native";
import { ReactNode } from "react";

import { cardImpact } from "./style";
import { COLORS } from "@/constants/colors";
import { Title } from "../Title";
import { Subtitle } from "../Subtitle";
import { HandHeart } from "lucide-react-native";

interface CardImpactProps {
   title?: string;
   subtitle?: string;
   variant?: "opacity" | "normal";
   icon?: ReactNode;
}

const cardImpactVariants = {
    opacity: {
        backgroundContainer: "rgba(0,109,55,0.4)",
        backgroundIcon: COLORS.success_light,
        iconColor: COLORS.green_dark,
        titleColor: COLORS.success_light,
        subtitleColor: COLORS.white,
    },
    normal: {
        backgroundContainer: COLORS.success_light,
        backgroundIcon: COLORS.green_dark,
        iconColor: COLORS.white,
        titleColor: COLORS.green_dark,
        subtitleColor: COLORS.green_dark,
    },
};

export function CardImpact({
    title = "+1.2k refeições",
    subtitle = "Doadas esta semana na sua região.",
    variant = "opacity",
    icon,
}: CardImpactProps) {
    const variantStyles = cardImpactVariants[variant];
    
    return (
        <View
            style={[
                cardImpact.container,
                { backgroundColor: variantStyles.backgroundContainer },
            ]}
        >
            <View
                style={[
                    cardImpact.iconContainer,
                    { backgroundColor: variantStyles.backgroundIcon },
                ]}
            >
                {icon ? icon : <HandHeart color={variantStyles.iconColor} size={30} />}
            </View>
            <View style={cardImpact.content}>
                <Title color={variantStyles.titleColor}>{title}</Title>
                <Subtitle
                    color={variantStyles.subtitleColor}
                    style={cardImpact.subtitle}
                >
                    {subtitle}
                </Subtitle>
            </View>
        </View>
    );
}

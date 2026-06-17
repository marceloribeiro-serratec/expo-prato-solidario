import { View } from "react-native";

import { Title } from "../Title";
import { COLORS } from "@/constants";

import { cardMyWork } from "./style";
import { CardMyWorkProps } from "./type";

export function CardMyWork({ children, color, icon: Icon }: CardMyWorkProps) {
    return (
        <View style={cardMyWork.container}>
            <View
                style={[cardMyWork.containerIcon, { backgroundColor: color }]}
            >
                <Icon size={18} color={COLORS.white} />
            </View>
            <View>
                <Title color={COLORS.white} fontWeight="regular" size={14}>
                    {children}
                </Title>
            </View>
        </View>
    );
}

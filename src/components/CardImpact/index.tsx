import { View, Text } from "react-native";

import { cardImpact } from "./style";
import { COLORS } from "@/constants/colors";
import { Title } from "../Title";
import { Subtitle } from "../Subtitle";
import { HandHeart } from "lucide-react-native";

export function CardImpact() {
    return (
        <View style={ cardImpact.container }>
            <View style={{ backgroundColor: COLORS.success_light, width: 40, height: 40, borderRadius: 20, alignItems: "center", justifyContent: "center" }}>
                <HandHeart color={ COLORS.green_dark } size={ 30 } />
            </View>
            <View>
                <Title color={ COLORS.success_light }>+1.2K refeições</Title>
                <Subtitle color={ COLORS.gray_100 }>Doadas esta semana em sua regiâo</Subtitle>
            </View>
        </View>
    );
}
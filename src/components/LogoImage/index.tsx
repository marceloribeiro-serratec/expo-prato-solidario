import { View } from "react-native";
import { Utensils } from "lucide-react-native";

import { COLORS } from "@/constants";

import { logoImage } from "./style";

export function LogoImage({ iconSize }: { iconSize?: number }) {
    return (
        <View style={logoImage.container}>
            <Utensils color={COLORS.white} size={iconSize} />
        </View>
    );
}

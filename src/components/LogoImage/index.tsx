import { COLORS } from "@/constants";
import { View } from "react-native";
import { logoImage } from "./style";
import React from "react";
import { Utensils } from "lucide-react-native";

export function LogoImage({ iconSize }: { iconSize?: number }) {
    return (
        <View style={logoImage.container}>
            <Utensils color={COLORS.white} size={iconSize ? iconSize : 82} />
        </View>
    );
}

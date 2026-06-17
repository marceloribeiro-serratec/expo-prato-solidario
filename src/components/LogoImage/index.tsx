import { COLORS } from "@/constants";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View } from "react-native";
import { logoImage } from "./style";

export function LogoImage({ iconSize }: { iconSize?: number }) {
    return (
        <View style={logoImage.container}>
            <FontAwesome
                name="github"
                size={iconSize ? iconSize : 82}
                color={COLORS.white}
            />
        </View>
    );
}

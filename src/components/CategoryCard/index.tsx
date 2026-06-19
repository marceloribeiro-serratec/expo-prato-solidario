import { View, Text } from "react-native";
import { category, categoryCard } from "./style";
import { ButtonIcon } from "../ButtonIcon";

export function CategoryCard() {
    return (
        <View style={ category.container}>
             <View
                style={[
                    categoryCard.iconContainer,
                    { backgroundColor: variantStyles.backgroundIcon },
                ]}
            >
                <Icon color={variantStyles.iconColor} size={30} />
            </View>
        </View>
    )
}
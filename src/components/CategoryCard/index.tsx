import { Image, ImageSourcePropType, View } from "react-native";
import { categoryCard } from "./style";
import { COLORS } from "@/constants";
import { Title } from "../Title";
import { CategoryCardProps } from "./type";

export function CategoryCard({ image, title, id }: CategoryCardProps) {
    return (
        <View style={categoryCard.container} key={id}>
            <View style={categoryCard.imageContainer}>
                <Image
                    source={image}
                    style={categoryCard.image}
                    resizeMode="cover"
                />
            </View>
            <Title color={COLORS.black} size={16} fontWeight={600}>
                {title}
            </Title>
        </View>
    );
}

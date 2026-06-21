import { ImageSourcePropType } from "react-native";

export type EmphasisCardProps = {
    id: string;
    image: ImageSourcePropType;
    title: string;
    price: string;
    priceValue: number;
    description: string;
    time: string;
    onAddToCart?: () => void;
};

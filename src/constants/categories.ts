import { ImageSourcePropType } from "react-native";

interface Category {
    id: string;
    image: ImageSourcePropType;
    title: string;
}

export const CATEGORIES: Category[] = [
    {
        id: "1",
        title: "Hamburguer",
        image: {
            uri: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop&crop=center",
        },
    },
    {
        id: "2",
        title: "Saladas",
        image: require("../../assets/salada_grega.png"),
    },
    {
        id: "3",
        title: "Massas Artesanais",
        image: require("../../assets/strognoff.png"),
    },
];

import { Hamburger,Salad, Wheat } from "lucide-react-native";
import { COLORS } from "./colors";
import React from "react";

interface Category {
    id: string;
    icon: React.ReactNode;
    title: string;
    background?: string;
}

export const CATEGORIES: Category[] = [
    {
        id: "1",
        title: "Hamburguer",
        icon: React.createElement(Hamburger, { color: COLORS.red, size: 30 }),
        background: COLORS.danger_light,
    },
    {
        id: "2",
        title: "Saladas",
        icon: React.createElement(Salad, { color: COLORS.green, size: 30 }),
        background: COLORS.green_light,
    },
    {
        id: "3",
        title: "Massas Artesanais",
        icon: React.createElement(Wheat, { color: COLORS.blue, size: 30 }),
        background: COLORS.info_light,
    },
];
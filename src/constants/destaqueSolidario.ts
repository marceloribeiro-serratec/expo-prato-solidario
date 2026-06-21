import { EmphasisCardProps } from "../components/EmphasisCard/type";

export const DESTAQUES_SOLIDARIOS: EmphasisCardProps[] = [
    {
        id: "1",
        image: require("../../assets/strognoff.png"),
        title: "Strogonoff\nClássico",
        price: "R$\n34,90",
        priceValue: 34.9,
        description: "Carne selecionada, arroz e...",
        time: "25-35 min",
    },
    {
        id: "2",
        image: require("../../assets/salada_grega.png"),
        title: "Salada Grega\nPremium",
        price: "R$\n28,50",
        priceValue: 28.5,
        description: "Mix de folhas, feta e azeitonas",
        time: "15-20 min",
    },
];

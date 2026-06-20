import React, { useState } from "react";
import { TextInput, View, Image, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Search } from "lucide-react-native";

import { SearchContainer } from "@/components/SearchContainer";
import { PageContainerStatic } from "@/components/PageContainerStatic";
import { Header } from "@/components/Header";
import { Badge } from "@/components/Badge";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";

import { COLORS } from "@/constants";
import { homeScreen } from "./style";
import { Button } from "@/components/Button";
import { CardImpact } from "@/components/CardImpact";
import { CategoryCard } from "@/components/CategoryCard";
import { CATEGORIES } from "@/constants/categories";
import { EmphasisCard } from "@/components/EmphasisCard";
import { DESTAQUES_SOLIDARIOS } from "@/constants/destaqueSolidario";
import { useCart } from "@/hooks/useCart";
import { toastProdutoAdicionado } from "@/utils/toast";

export function HomeScreen() {
    const [searchQuery, setSearchQuery] = useState("");
    const { addToCart } = useCart();

    function handleAddDestaqueToCart(destaque: typeof DESTAQUES_SOLIDARIOS[number]) {
        const productName = destaque.title.replace(/\s+/g, " ");

        addToCart({
            id: destaque.id,
            name: productName,
            price: destaque.priceValue,
            image: destaque.image,
            description: destaque.description,
        });
        toastProdutoAdicionado(productName);
    }

    return (
        <PageContainerStatic
            statusBarStyle="dark"
            statusBarBackgroundColor={COLORS.gray_100}
        >
            <View style={homeScreen.headerContainer}>
                <Header
                    title="Prato Solidário"
                    titleColor={COLORS.red}
                    iconColor={COLORS.red}
                    hiddenIcons={["search", "refresh", "plus", "user"]}
                    showMenu={true}
                />
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                <View>
                    <Image
                        source={require("../../../assets/hero_home.png")}
                        style={homeScreen.image}
                        resizeMode="cover"
                    />
                    <View style={homeScreen.imageDescription}>
                        <Badge color={COLORS.green_dark}>
                            <Text style={homeScreen.badgeText}>
                                Impacto Real
                            </Text>
                        </Badge>
                        <Title color={COLORS.white} size={28}>
                            Cada prato alimenta uma história.
                        </Title>
                        <Subtitle color={COLORS.gray_100}>
                            Ao comprar hoje, você doa uma refeição.
                        </Subtitle>
                    </View>
                </View>
                <SearchContainer>
                    <Search size={20} color={COLORS.gray_600} />
                    <TextInput
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        placeholder="O que vamos pedir hoje?"
                        placeholderTextColor={COLORS.gray_500}
                        style={homeScreen.searchInput}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </SearchContainer>

                <View style={homeScreen.containercategorias}>
                    <Title color={COLORS.black} size={28} fontWeight="500">
                        Categorias
                    </Title>
                    <Button>
                        <Title color={COLORS.red} size={18} fontWeight="400">
                            ver tudo
                        </Title>
                    </Button>
                </View>

                <View
                    style={homeScreen.containerCardCategorias}
                >
                    {CATEGORIES.map((category) => (
                        <CategoryCard
                            id={category.id}
                            title={category.title}
                            image={category.image}
                        />
                    ))}
                </View>

                <View>
                    <CardImpact
                        title="Sua comunidade agradece!"
                        subtitle="Você já ajudou a doar 12 refeições este mês."
                        variant="normal"
                    />
                </View>
                <View style={homeScreen.containercategorias}>
                    <Title color={COLORS.black} size={28} fontWeight="500">
                        Destaques Solidários
                    </Title>
                </View>
                <View>
                    {DESTAQUES_SOLIDARIOS.map((destaque) => (
                        <EmphasisCard
                            key={destaque.id}
                            id={destaque.id}
                            image={destaque.image}
                            title={destaque.title}
                            price={destaque.price}
                            priceValue={destaque.priceValue}
                            description={destaque.description}
                            time={destaque.time}
                            onAddToCart={() => handleAddDestaqueToCart(destaque)}
                        />
                    ))}
                </View>
            </ScrollView>
        </PageContainerStatic>
    );
}

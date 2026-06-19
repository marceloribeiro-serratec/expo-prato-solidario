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

export function HomeScreen() {
    const [searchQuery, setSearchQuery] = useState("");

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
                    onPressMenu={() => alert("Menu")}
                />
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {/* Conteúdo da HomeScreen */}
                <View>
                    <Image
                        source={require("../../../assets/hero_home.png")}
                        style={{
                            width: 370,
                            height: 200,
                            borderRadius: 12,
                            alignSelf: "center",
                            marginTop: 20,
                        }}
                        resizeMode="cover"
                    />
                    <View
                        style={{
                            position: "absolute",
                            left: 30,
                            right: 40,
                            bottom: 20,
                        }}
                    >
                        <Badge color={COLORS.green_dark}>
                            <Text
                                style={{
                                    color: COLORS.white,
                                    fontWeight: "seimibold",
                                }}
                            >
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

                <View
                    style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                        marginVertical: 20,
                    }}
                >
                    <Title color={COLORS.black} size={28} fontWeight="500">
                        Categorias
                    </Title>
                    <Button>
                        <Title color={COLORS.red} size={18} fontWeight="400">
                            ver tudo
                        </Title>
                    </Button>
                </View>

                <View>
                    <CardImpact
                        title="Sua comunidade agradece!"
                        subtitle="Você já ajudou a doar 12 refeições este mês."
                        variant="normal"
                    />
                </View>
            </ScrollView>
        </PageContainerStatic>
    );
}

import React, { useState } from "react";
import { View } from "react-native";

import { Header } from "@/components/Header";
import { PageContainer } from "@/components/PageContainer";
import { COLORS } from "@/constants";
import { homeScreen } from "./style";
import { ScrollView } from "react-native-gesture-handler";
import { SearchContainer } from "@/components/SearchContainer";
import { Search } from "lucide-react-native";
import { Input } from "@/components/Input";
import { PageContainerStatic } from "@/components/PageContainerStatic";

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
                <SearchContainer>
                    <Search size={20} color={COLORS.gray_600} />
                    <Input
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        placeholder="O que vamos pedir hoje?"
                        style={{ marginLeft: 10 }}
                    />
                </SearchContainer>
            </ScrollView>
        </PageContainerStatic>
    );
}

import { View } from "react-native";

import { Header } from "@/components/Header";
import { PageContainer } from "@/components/PageContainer";
import { COLORS } from "@/constants";
import { homeScreen } from "./style";
import { ScrollView } from "react-native-gesture-handler";
import { SearchContainer } from "@/components/SearchContainer";
import { Search } from "lucide-react-native";
import { Input } from "@/components/Input";
import React from "react";
import { PageContainerStatic } from "@/components/PageContainerStatic";

export function HomeScreen() {
    return (
        <PageContainerStatic statusBarStyle="dark">
            <View style={homeScreen.headerContainer}>
                <Header 
                    title="Prato Solidário" 
                    titleColor={COLORS.red}
                    hiddenIcons={['search', 'refresh', 'plus']}
                    iconColor={COLORS.red}
                    showMenu={true}
                    onPressMenu={() => alert('Menu')} 
                />
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {/* Conteúdo da HomeScreen */}
                <SearchContainer>
                    <Search size={20} color={COLORS.gray_600} />
                    <Input placeholder="O que vamos pedir hoje?" style={{ marginLeft: 10 }} />
                </SearchContainer>
            </ScrollView>
        </PageContainerStatic>
    );
}
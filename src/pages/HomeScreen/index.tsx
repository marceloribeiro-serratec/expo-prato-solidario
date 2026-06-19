import { View } from "react-native";

import { Header } from "@/components/Header";
import { PageContainer } from "@/components/PageContainer";
import { COLORS } from "@/constants";
import { homeScreen } from "./style";

export function HomeScreen() {
    return (
        <PageContainer>
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
        </PageContainer>
    );
}
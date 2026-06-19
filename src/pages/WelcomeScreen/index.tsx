import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { PageContainerImage } from "@/components/PageContainerImage";
import { LogoImage } from "@/components/LogoImage";
import { Title } from "@/components/Title";
import { Line } from "@/components/Line";
import { Subtitle } from "@/components/Subtitle";
import { Button } from "@/components/Button";

import { welcomeScreen } from "./style";
import { COLORS } from "@/constants";
import { CardImpact } from "@/components/CardImpact";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "@/routes/type";


export function WelcomeScreen() {

    const navigation = useNavigation<NavigationProps>();

     function handleNavigateToLogin() {
        navigation.navigate("login");
    }

    return (
        <PageContainerImage>
            <LinearGradient
                colors={[
                    "rgba(255,255,255,0.9)",
                    "rgba(0,0,0,0.5)",
                    "rgba(0,0,0,0.9)",
                ]}
                style={welcomeScreen.gradient}
            >
                <View style={welcomeScreen.container}>
                    <View style={welcomeScreen.logoContainer}>
                        <LogoImage iconSize={40} />
                    </View>
                    <View style={welcomeScreen.titleContainer}>
                        <Title size={28} color={COLORS.white} fontWeight="bold">
                            Prato Solidário
                        </Title>
                        <Line />
                    </View>

                    <View style={welcomeScreen.subtitleContainer}>
                        <Title size={26} color={COLORS.white} fontWeight="500">
                            Alimente seu corpo e
                        </Title>
                        <Title
                            size={26}
                            color={COLORS.success_light}
                            fontWeight="500"
                        >
                            transforme vidas.
                        </Title>
                    </View>

                    <View>
                        <Subtitle
                            fontSize={18}
                            color={COLORS.gray_200}
                            fontWeight="300"
                            paddingTop={26}
                        >
                            Cada pedido no PratoSolidário financia uma refeição
                            nutrtiva para quem mais precisa na sua comunidade
                            local.
                        </Subtitle>
                    </View>

                    <CardImpact />
                    
                    <View style={{ marginTop: 34 }}>
                        <Button color={COLORS.red} onPress={handleNavigateToLogin}>
                            <Title
                                color={COLORS.white}
                                size={14}
                                fontWeight="bold"
                            >
                                ENTRAR
                            </Title>
                        </Button>
                    </View>
                    <View style={{ marginTop: 60, alignItems: "center" }}>
                        <Subtitle color={COLORS.gray_400} fontSize={12}>
                            Ao continuar, você aceita nossos{" "}
                            <Text style={{ textDecorationLine: "underline" }}>
                                Termos de Uso
                            </Text>{" "}
                            e a{" "}
                            <Text style={{ textDecorationLine: "underline" }}>
                                Política de Privacidade.
                            </Text>
                            .
                        </Subtitle>
                    </View>
                </View>
            </LinearGradient>
        </PageContainerImage>
    );
}

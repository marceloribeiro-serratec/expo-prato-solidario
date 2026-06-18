import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Subtitle } from "@/components/Subtitle";
import { PageContainerImage } from "@/components/PageContainerImage";
import { LogoImage } from "@/components/LogoImage";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";

import { COLORS } from "@/constants/colors";

import { loginScreen } from "./style";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "@/routes/type";
import { LoginForm } from "@/components/LoginForm";

export function LoginScreen() {
    const navigation = useNavigation<NavigationProps>();

    return (
        <PageContainerImage statusBarStyle="light" statusBarBackgroundColor={COLORS.black}>
            <LinearGradient
                colors={[
                    "rgba(255,255,255,0.9)",
                    "rgba(255,255,255,0.6)",
                    "rgba(255,255,255,0.9)",
                ]}
                style={loginScreen.gradient}
            >
                <View style={loginScreen.container}>
                    <View style={loginScreen.logoContainer}>
                        <LogoImage iconSize={40} />
                    </View>
                    <View style={loginScreen.titleContainer}>
                        <Title size={28} color={COLORS.red} fontWeight="bold">
                            Prato Solidário
                        </Title>
                        <Subtitle
                            fontSize={17}
                            color={COLORS.black}
                            textAlign="center"
                        >
                            Comida boa faz o bem para o corpo e para a alma.
                        </Subtitle>
                    </View>

                    <View style={loginScreen.formContainer}>
                        <LoginForm />
                    </View>

                    <View style={loginScreen.signupContainer}>
                        <Subtitle
                            color={COLORS.black}
                            fontSize={16}
                            style={loginScreen.signupText}
                        >
                            Não tem uma conta?
                        </Subtitle>
                        <View>
                            <Button
                                color={COLORS.transparent}
                                style={loginScreen.signupButton}
                                onPress={() => navigation.navigate("register")}
                            >
                                <Title color={COLORS.red} size={16}>
                                    Criar conta
                                </Title>
                            </Button>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </PageContainerImage>
    );
}

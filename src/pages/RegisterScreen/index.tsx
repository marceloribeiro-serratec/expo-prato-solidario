import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Subtitle } from "@/components/Subtitle";
import { LogoImage } from "@/components/LogoImage";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import { PageContainerScroll } from "@/components/PageContainerScroll";
import { RegisterForm } from "@/components/RegisterForm";

import { COLORS } from "@/constants/colors";

import { registerScreen } from "./style";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "@/routes/type";

export function RegisterScreen() {
    const navigation = useNavigation<NavigationProps>();

    return (
        <PageContainerScroll statusBarStyle="light" statusBarBackgroundColor={COLORS.black}>
            <LinearGradient
                colors={[
                    "rgba(255,255,255,0.9)",
                    "rgba(255,255,255,0.6)",
                    "rgba(255,255,255,0.9)",
                ]}
                style={registerScreen.gradient}
            >
                <View style={registerScreen.container}>
                    <View style={registerScreen.logoContainer}>
                        <LogoImage iconSize={40} />
                    </View>
                    <View style={registerScreen.titleContainer}>
                        <Title size={28} color={COLORS.red} fontWeight="bold">
                            Prato Solidário
                        </Title>
                        <Subtitle
                            fontSize={17}
                            color={COLORS.black}
                            textAlign="center"
                        >
                            Transforme cada refeição em um ato de generosidade.
                        </Subtitle>
                    </View>

                    <View style={registerScreen.formContainer}>
                        <RegisterForm />
                    </View>

                    <View style={registerScreen.signupContainer}>
                        <Subtitle
                            color={COLORS.black}
                            fontSize={16}
                            style={registerScreen.signupText}
                        >
                            Já tem uma conta?
                        </Subtitle>
                        <View>
                            <Button
                                color={COLORS.transparent}
                                style={registerScreen.signupButton}
                                onPress={() => navigation.navigate("login")}
                            >
                                <Title color={COLORS.red} size={16}>
                                    Fazer login
                                </Title>
                            </Button>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </PageContainerScroll>
    );
}

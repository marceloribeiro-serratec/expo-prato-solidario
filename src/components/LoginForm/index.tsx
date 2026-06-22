import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "../Button";
import { ButtonIcon } from "../ButtonIcon";
import { Divisor } from "../Divisor";
import { IconInput } from "../IconInput";
import { Title } from "../Title";
import { COLORS } from "@/constants/colors";
import { useAuth } from "@/contexts/AuthContext";
import { NavigationProps } from "@/routes/type";
import { loginForm } from "./style";
import Loading from "../Loading";

const loginFormSchema = z.object({
    email: z
        .string()
        .nonempty({ message: "O campo email é obrigatório" })
        .email({
            message: "O campo email deve ser um email válido",
        }),
    senha: z
        .string()
        .nonempty({ message: "O campo senha é obrigatório" })
        .min(8, { message: "O campo senha deve ter no mínimo 8 caracteres" })
        .max(20, {
            message: "O campo de senha deve ter no máximo 20 caracteres",
        }),
});

type LoginFormData = z.infer<typeof loginFormSchema>;

export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const { signIn, signInWithGoogle, loading } = useAuth();
    const navigation = useNavigation<NavigationProps>();

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            senha: "",
        },
    });

    async function onSubmit(data: LoginFormData) {
        const profile = await signIn(data.email, data.senha);

        if (profile) {
            reset();
            navigation.reset({
                index: 0,
                routes: [{ name: profile.role === "admin" ? "admin" : "home", }],
            });
        }
    }

    async function handleLoginWithGoogle() {
        const logged = await signInWithGoogle();

        if (logged) {
            navigation.reset({
                index: 0,
                routes: [{ name: "home" }],
            });
        }
    }

    return (
        <View>
            <View style={{ marginBottom: 16 }}>
                <Text style={loginForm.label}>Email</Text>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={loginForm.inputContainer}>
                            <IconInput iconName="mail" />
                            <TextInput
                                placeholder="Digite seu email..."
                                placeholderTextColor="#999"
                                style={loginForm.input}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        </View>
                    )}
                />

                {errors.email && (
                    <Text style={loginForm.errorText}>
                        {errors.email.message}
                    </Text>
                )}
            </View>

            <View>
                <View style={loginForm.areaForgotPassword}>
                    <Text style={loginForm.label}>Senha</Text>
                    <TouchableOpacity style={loginForm.buttonForgetPassword}>
                        <Text style={loginForm.paragraph}>
                            esqueci minha senha
                        </Text>
                    </TouchableOpacity>
                </View>
                <Controller
                    control={control}
                    name="senha"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={loginForm.inputContainer}>
                            <IconInput
                                iconName={showPassword ? "unlock" : "lock"}
                            />
                            <TextInput
                                placeholder="Digite sua senha..."
                                placeholderTextColor="#999"
                                style={loginForm.input}
                                keyboardType="default"
                                autoCapitalize="none"
                                autoCorrect={false}
                                onBlur={onBlur}
                                secureTextEntry={!showPassword}
                                onChangeText={onChange}
                                value={value}
                            />
                            <IconInput
                                iconName={showPassword ? "eye-off" : "eye"}
                                action={() =>
                                    setShowPassword((current) => !current)
                                }
                            />
                        </View>
                    )}
                />

                {errors.senha && (
                    <Text style={loginForm.errorText}>
                        {errors.senha.message}
                    </Text>
                )}
            </View>
            <View style={{ marginTop: 24 }}>
                <Button
                    color={COLORS.red}
                    onPress={handleSubmit(onSubmit)}
                    disabled={loading}
                >
                    <Title color={COLORS.white} size={14} fontWeight="bold">
                        {loading ? (
                            <Loading size={16} color={COLORS.white} />
                        ) : (
                            "Entrar"
                        )}
                    </Title>
                </Button>
                <Divisor />
                <ButtonIcon
                    variant="google"
                    onPress={handleLoginWithGoogle}
                    disabled={loading}
                />
            </View>
        </View>
    );
}

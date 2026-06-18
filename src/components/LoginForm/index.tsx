import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "../Button";
import { Title } from "../Title";
import { IconInput } from "../IconInput";
import { COLORS } from "@/constants/colors";

import { loginForm } from "./style";
import { Divisor } from "../Divisor";
import { ButtonIcon } from "../ButtonIcon";

const loginFormSchema = z.object({
    email: z
        .string()
        .nonempty({ message: "O campo nome é obrigatorio" })
        .email({
            message: "O campo nome deve ser um email valido",
        }),
    senha: z
        .string()
        .nonempty({ message: " O campo senha é obrogatorio" })
        .min(8, { message: "O campo senha deve ter no minmo de 8 caracteres" })
        .max(20, {
            message: " O campo de senha deve ter no maximo de 20 caracteres",
        }),
});

export function LoginForm() {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            senha: "",
        },
    });

    function handleShowPassword() {
        setShowPassword(!showPassword);
    }

    function onSubmit(data: z.infer<typeof loginFormSchema>) {
        console.log(data);

        reset();
    }

    function handleLoginWithGoogle() {
       alert("Login com Google");
    }

    return (
        <View>
            <View style={{ marginBottom: 16 }}>
                <Text style={loginForm.label}>Email</Text>
                <Controller
                    control={control}
                    name="email"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Digite seu email..."
                            placeholderTextColor="#999"
                            style={[
                                loginForm.input,
                                { paddingLeft: 50, paddingRight: 10 },
                            ]}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                        />
                    )}
                />

                <IconInput iconName="mail" />

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
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Digite sua senha..."
                            placeholderTextColor="#999"
                            style={[
                                loginForm.input,
                                { paddingLeft: 50, paddingRight: 10 },
                            ]}
                            keyboardType="default"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onBlur={onBlur}
                            secureTextEntry={showPassword}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                        />
                    )}
                />

                <IconInput
                    iconName={showPassword ? "eye-off" : "eye"}
                    action={handleShowPassword}
                />

                {errors.senha && (
                    <Text style={loginForm.errorText}>
                        {errors.senha.message}
                    </Text>
                )}
            </View>
            <View style={{ marginTop: 24 }}>
                <Button color={COLORS.red} onPress={handleSubmit(onSubmit)}>
                    <Title color={COLORS.white} size={14} fontWeight="bold">
                        Entrar
                    </Title>
                </Button>
                <Divisor />
                <ButtonIcon variant="google" onPress={handleLoginWithGoogle}/>
            </View>
        </View>
    );
}

import { View, Text, TextInput } from "react-native";

import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react-native";

import { IconInput } from "../IconInput";
import { useState } from "react";
import { Button } from "../Button";
import { Title } from "../Title";
import { COLORS } from "@/constants";
import { registerForm } from "./style";
import { CardImpact } from "../CardImpact";

const registerFormSchema = z
    .object({
        nome: z
            .string()
            .nonempty("Nome é obrigatório")
            .min(3, "Nome deve ter pelo menos 3 caracteres")
            .regex(/^[a-zA-Z\s]+$/, "Nome deve conter apenas letras e espaços"),
        email: z
            .string()
            .nonempty("E-mail é obrigatório")
            .email("E-mail inválido"),
        senha: z
            .string()
            .min(8, "Senha deve ter pelo menos 8 caracteres")
            .max(20, "Senha deve ter no máximo 20 caracteres")
            .nonempty("Senha é obrigatória"),
        confirmarSenha: z
            .string()
            .nonempty("Confirmação de senha é obrigatória"),
    })
    .refine((data) => data.senha === data.confirmarSenha, {
        message: "As senhas não coincidem",
        path: ["confirmarSenha"],
    });

export function RegisterForm() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] =
        useState<boolean>(false);

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<z.infer<typeof registerFormSchema>>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            nome: "",
            email: "",
            senha: "",
            confirmarSenha: "",
        },
    });

    function handleShowPassword() {
        setShowPassword(!showPassword);
    }

    function handleShowConfirmPassword() {
        setShowConfirmPassword(!showConfirmPassword);
    }

    function onSubmit(data: z.infer<typeof registerFormSchema>) {
        console.log(data);
        reset();
    }

    return (
        <View>
            <Title color={COLORS.red} size={24} fontWeight="bold">
                Criar Conta
            </Title>
            <View style={{ marginBottom: 8, marginTop: 16 }}>
                <Text style={registerForm.label}>Nome Completo</Text>
                <Controller
                    control={control}
                    name="nome"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={registerForm.inputContainer}>
                            <IconInput iconName="user" />
                            <TextInput
                                placeholder="como quer ser chamado"
                                placeholderTextColor="#999"
                                style={[
                                    registerForm.input,
                                    { paddingLeft: 50, paddingRight: 10 },
                                ]}
                                keyboardType="default"
                                autoCapitalize="none"
                                autoCorrect={false}
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                value={value}
                            />
                        </View>
                    )}
                />

                {errors.nome && (
                    <Text style={registerForm.errorText}>
                        {errors.nome.message}
                    </Text>
                )}
            </View>

            <View style={{ marginBottom: 8 }}>
                <Text style={registerForm.label}>E-mail</Text>
                <Controller
                    control={control}
                    name="email"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={registerForm.inputContainer}>
                            <IconInput iconName="mail" />
                            <TextInput
                                placeholder="seu@email.com"
                                placeholderTextColor="#999"
                                style={[
                                    registerForm.input,
                                    { paddingLeft: 50, paddingRight: 10 },
                                ]}
                                keyboardType="default"
                                autoCapitalize="none"
                                autoCorrect={false}
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                value={value}
                            />
                        </View>
                    )}
                />

                {errors.email && (
                    <Text style={registerForm.errorText}>
                        {errors.email.message}
                    </Text>
                )}
            </View>

            <View style={{ marginBottom: 8 }}>
                <Text style={registerForm.label}>senha</Text>
                <Controller
                    control={control}
                    name="senha"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={registerForm.inputContainer}>
                            <IconInput
                                iconName={showPassword ? "eye-off" : "eye"}
                                action={handleShowPassword}
                            />
                            <TextInput
                                placeholder="mínimo 8 caracteres"
                                placeholderTextColor="#999"
                                style={[
                                    registerForm.input,
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
                        </View>
                    )}
                />

                {errors.senha && (
                    <Text style={registerForm.errorText}>
                        {errors.senha.message}
                    </Text>
                )}
            </View>

            <View style={{ marginBottom: 8 }}>
                <Text style={registerForm.label}>Confirmar senha</Text>
                <Controller
                    control={control}
                    name="confirmarSenha"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={registerForm.inputContainer}>
                            <IconInput
                                iconName={
                                    showConfirmPassword ? "eye-off" : "eye"
                                }
                                action={handleShowConfirmPassword}
                            />
                            <TextInput
                                placeholder="Repita sua senha"
                                placeholderTextColor="#999"
                                style={[
                                    registerForm.input,
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
                        </View>
                    )}
                />

                {errors.confirmarSenha && (
                    <Text style={registerForm.errorText}>
                        {errors.confirmarSenha.message}
                    </Text>
                )}
            </View>

            <View style={{ marginTop: 24 }}>
                <Button color={COLORS.red} onPress={handleSubmit(onSubmit)}>
                    <Title color={COLORS.white} size={14} fontWeight="bold">
                        Criar minha conta
                    </Title>
                </Button>
            </View>

            <CardImpact
                title="Faça a diferença"
                subtitle="Ao se cadastrar, você ajuda a combater a insegurança alimentar em sua cidade."
                variant="normal"
            />
        </View>
    );
}

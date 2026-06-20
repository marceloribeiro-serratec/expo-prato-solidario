import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import { Button } from "../Button";
import { CardImpact } from "../CardImpact";
import { IconInput } from "../IconInput";
import { Title } from "../Title";
import { COLORS } from "@/constants";
import { clienteService } from "@/services/clienteService";
import { supabase } from "@/services/supabase";
import {
    toastCadastroDuplicado,
    toastCadastroErro,
    toastCadastroSucesso,
} from "@/utils/toast";
import { registerForm } from "./style";
import Loading from "../Loading";

const registerFormSchema = z
    .object({
        nome: z
            .string()
            .trim()
            .nonempty("Nome é obrigatório")
            .min(3, "Nome deve ter pelo menos 3 caracteres")
            .regex(
                /^[A-Za-zÀ-ÿ\s]+$/,
                "Nome deve conter apenas letras e espaços",
            ),
        email: z
            .string()
            .trim()
            .nonempty("E-mail é obrigatório")
            .email("E-mail inválido"),
        telefone: z
            .string()
            .trim()
            .nonempty("Telefone é obrigatório")
            .refine(
                (value) => value.replace(/\D/g, "").length >= 10,
                "Telefone deve ter DDD e número",
            ),
        cpf: z
            .string()
            .trim()
            .nonempty("CPF é obrigatório")
            .refine(
                (value) => value.replace(/\D/g, "").length === 11,
                "CPF deve ter 11 dígitos",
            ),
        senha: z
            .string()
            .nonempty("Senha é obrigatória")
            .min(8, "Senha deve ter pelo menos 8 caracteres")
            .max(20, "Senha deve ter no máximo 20 caracteres"),
        confirmarSenha: z
            .string()
            .nonempty("Confirmação de senha é obrigatória"),
    })
    .refine((data) => data.senha === data.confirmarSenha, {
        message: "As senhas não coincidem",
        path: ["confirmarSenha"],
    });

type RegisterFormData = z.infer<typeof registerFormSchema>;

export function RegisterForm() {
    const [hidePassword, setHidePassword] = useState(true);
    const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            nome: "",
            email: "",
            telefone: "",
            cpf: "",
            senha: "",
            confirmarSenha: "",
        },
    });

    async function onSubmit(data: RegisterFormData) {
        try {
            const email = data.email.trim().toLowerCase();
            const telefone = data.telefone.replace(/\D/g, "");
            const cpf = data.cpf.replace(/\D/g, "");

            const { error: signUpError } = await supabase.auth.signUp({
                email,
                password: data.senha,
                options: {
                    data: {
                        nome: data.nome,
                        name: data.nome,
                        telefone,
                        cpf,
                        role: "user",
                    },
                },
            });

            if (signUpError) {
                throw signUpError;
            }

            await clienteService.cadastrar({
                nome: data.nome,
                email,
                telefone,
                cpf,
                role: "user",
            });

            await supabase.auth.signOut();

            toastCadastroSucesso();
            reset();
        } catch (error) {
            console.error("Erro ao cadastrar cliente:", error);

            if (
                typeof error === "object" &&
                error !== null &&
                "response" in error &&
                typeof error.response === "object" &&
                error.response !== null &&
                "status" in error.response &&
                error.response.status === 409
            ) {
                toastCadastroDuplicado();
                return;
            }

            if (
                error instanceof Error &&
                error.message.toLowerCase().includes("already registered")
            ) {
                toastCadastroDuplicado();
                return;
            }

            toastCadastroErro();
        }
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
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={registerForm.inputContainer}>
                            <IconInput iconName="user" />
                            <TextInput
                                placeholder="Como quer ser chamado"
                                placeholderTextColor="#999"
                                style={[
                                    registerForm.input,
                                    { paddingLeft: 20, paddingRight: 10 },
                                ]}
                                keyboardType="default"
                                autoCapitalize="words"
                                autoCorrect={false}
                                onBlur={onBlur}
                                onChangeText={onChange}
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
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={registerForm.inputContainer}>
                            <IconInput iconName="mail" />
                            <TextInput
                                placeholder="seu@email.com"
                                placeholderTextColor="#999"
                                style={[
                                    registerForm.input,
                                    { paddingLeft: 20, paddingRight: 10 },
                                ]}
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
                    <Text style={registerForm.errorText}>
                        {errors.email.message}
                    </Text>
                )}
            </View>

            <View style={{ marginBottom: 8 }}>
                <Text style={registerForm.label}>Telefone</Text>
                <Controller
                    control={control}
                    name="telefone"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={registerForm.inputContainer}>
                            <IconInput iconName="phone" />
                            <TextInput
                                placeholder="(00) 00000-0000"
                                placeholderTextColor="#999"
                                style={[
                                    registerForm.input,
                                    { paddingLeft: 20, paddingRight: 10 },
                                ]}
                                keyboardType="phone-pad"
                                autoCapitalize="none"
                                autoCorrect={false}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        </View>
                    )}
                />
                {errors.telefone && (
                    <Text style={registerForm.errorText}>
                        {errors.telefone.message}
                    </Text>
                )}
            </View>

            <View style={{ marginBottom: 8 }}>
                <Text style={registerForm.label}>CPF</Text>
                <Controller
                    control={control}
                    name="cpf"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={registerForm.inputContainer}>
                            <IconInput iconName="file-text" />
                            <TextInput
                                placeholder="000.000.000-00"
                                placeholderTextColor="#999"
                                style={[
                                    registerForm.input,
                                    { paddingLeft: 20, paddingRight: 10 },
                                ]}
                                keyboardType="number-pad"
                                autoCapitalize="none"
                                autoCorrect={false}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        </View>
                    )}
                />
                {errors.cpf && (
                    <Text style={registerForm.errorText}>
                        {errors.cpf.message}
                    </Text>
                )}
            </View>

            <View style={{ marginBottom: 8 }}>
                <Text style={registerForm.label}>Senha</Text>
                <Controller
                    control={control}
                    name="senha"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={registerForm.inputContainer}>
                            <IconInput
                                iconName={hidePassword ? "eye" : "eye-off"}
                                action={() =>
                                    setHidePassword((current) => !current)
                                }
                            />
                            <TextInput
                                placeholder="Mínimo 8 caracteres"
                                placeholderTextColor="#999"
                                style={[
                                    registerForm.input,
                                    { paddingLeft: 20, paddingRight: 10 },
                                ]}
                                keyboardType="default"
                                autoCapitalize="none"
                                autoCorrect={false}
                                onBlur={onBlur}
                                secureTextEntry={hidePassword}
                                onChangeText={onChange}
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
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={registerForm.inputContainer}>
                            <IconInput
                                iconName={
                                    hideConfirmPassword ? "eye" : "eye-off"
                                }
                                action={() =>
                                    setHideConfirmPassword(
                                        (current) => !current,
                                    )
                                }
                            />
                            <TextInput
                                placeholder="Repita sua senha"
                                placeholderTextColor="#999"
                                style={[
                                    registerForm.input,
                                    { paddingLeft: 20, paddingRight: 10 },
                                ]}
                                keyboardType="default"
                                autoCapitalize="none"
                                autoCorrect={false}
                                onBlur={onBlur}
                                secureTextEntry={hideConfirmPassword}
                                onChangeText={onChange}
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
                <Button
                    color={COLORS.red}
                    onPress={handleSubmit(onSubmit)}
                    disabled={isSubmitting}
                >
                    <Title color={COLORS.white} size={14} fontWeight="bold">
                        {isSubmitting ? (
                            <Loading size={18} color={COLORS.white} />
                        ) : (
                            "Criar minha conta"
                        )}
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

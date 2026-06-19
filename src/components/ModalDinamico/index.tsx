import React from 'react';
import { COLORS } from "@/constants/colors";
import { Modal, View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { styles } from "./styles";
import { Label } from '../Label';
import { Input } from '../Input';

// Estrutura de cada campo que utiliza labels/inputs
export interface CampoModal {
    key: string;
    label: string;
    placeholder?: string;
    keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad'; // Tipo de teclado utilizado pelo Input
    secureTextEntry?: boolean;
}

interface ModalProps {
    visible: boolean;
    title: string;
    message?: string;
    fields?: CampoModal[];
    formValues?: Record<string, string>; // Valores atuais dos campos do formulário
    onValueChange?: (key: string, value: string) => void; // Atualiza o valor de um campo do formulário
    primaryButtonText: string;
    secondaryButtonText: string;
    onPrimaryPress: () => void;
    onSecondaryPress: () => void;
}

export const ModalDinamico: React.FC<ModalProps> = ({
    visible,
    title,
    message,
    fields = [],
    formValues = {},
    onValueChange,
    primaryButtonText,
    secondaryButtonText,
    onPrimaryPress,
    onSecondaryPress,
}) => {
    return(
        <Modal visible={visible} transparent animationType="fade">
            <KeyboardAvoidingView style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>{title}</Text>

                    {/* Exibe uma mensagem opcional */}
                    {message && (
                      <Label color={COLORS.gray_600}>
                          {message}
                      </Label>
                    )}

                    {/* Renderiza os campos dinamicamente, caso existam */}
                    {fields.length > 0 && (
                        <ScrollView
                            style={styles.formContainer}
                            showsVerticalScrollIndicator={false}
                        >
                            {fields.map((field) => (
                                <View key={field.key} style={styles.inputGroup}>
                                    <Label color={COLORS.gray_600}>
                                        {field.label}
                                    </Label>

                                    <Input
                                        placeholder={field.placeholder}
                                        keyboardType={field.keyboardType || "default"}
                                        secureTextEntry={field.secureTextEntry}
                                        value={formValues[field.key] || ""}
                                        onChangeText={(text) =>
                                            onValueChange?.(field.key, text)
                                        }
                                    />
                                </View>
                            ))}
                        </ScrollView>
                    )}

                    {/* BOTÕES */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.btnSecondary]}
                            onPress={onSecondaryPress}
                        >
                            <Text style={styles.btnTextSecondary}>
                                {secondaryButtonText}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, styles.btnPrimary]}
                            onPress={onPrimaryPress}
                        >
                            <Text style={styles.btnTextPrimary}>
                                {primaryButtonText}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    )
}
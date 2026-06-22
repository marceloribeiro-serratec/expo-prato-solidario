import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import { COLORS } from "@/constants/colors";
import { Feather } from "@expo/vector-icons";
import { Label } from '../Label';
import { styles } from './style';

interface CategoriaOpcao {
    id: string;
    nome: string;
}

interface SelectCategoriasProps {
    label: string;
    categorias: Record<string, string>;
    selectedValue: string;
    onValueChange: (value: string) => void;
    placeholder?: string;
}

export const SelectCategorias: React.FC<SelectCategoriasProps> = ({
    label,
    categorias,
    selectedValue,
    onValueChange,
    placeholder = "Selecione uma categoria"
}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const listaCategorias: CategoriaOpcao[] = Object.entries(categorias).map(([id, nome]) => ({
        id,
        nome,
    }));

    const labelSelecionado = categorias[selectedValue] || placeholder;

    return (
        <View style={styles.container}>
            <Label color={COLORS.gray_600}>{label}</Label>
            
            <TouchableOpacity 
                style={styles.selectButton}
                onPress={() => setModalVisible(true)}
                activeOpacity={0.7}
            >
                <Text style={[
                    styles.selectButtonText, 
                    { color: selectedValue ? COLORS.black : COLORS.gray_400 }
                ]}>
                    {labelSelecionado}
                </Text>
                <Feather name="chevron-down" size={20} color={COLORS.gray_600} />
            </TouchableOpacity>

            {/* Modal de Opções */}
            <Modal visible={modalVisible} transparent animationType="fade">
                <TouchableOpacity 
                    style={styles.overlay} 
                    activeOpacity={1} 
                    onPress={() => setModalVisible(false)}
                >
                    {/* Impede que o clique dentro do container feche o modal */}
                    <TouchableOpacity activeOpacity={1} style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Selecione a Categoria</Text>
                        
                        <FlatList
                            data={listaCategorias}
                            keyExtractor={(item) => item.id}
                            style={styles.listaContainer}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => {
                                const isSelected = selectedValue === item.id;
                                return (
                                    <TouchableOpacity 
                                        style={styles.opcaoItem}
                                        onPress={() => {
                                            onValueChange(item.id);
                                            setModalVisible(false);
                                        }}
                                    >
                                        <Text style={isSelected ? styles.opcaoTextAtiva : styles.opcaoText}>
                                            {item.nome}
                                        </Text>
                                        {isSelected && (
                                            <Feather name="check" size={18} color={COLORS.red} />
                                        )}
                                    </TouchableOpacity>
                                );
                            }}
                        />
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};
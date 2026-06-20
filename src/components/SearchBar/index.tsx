import { TextInput, TextInputProps, StyleSheet } from 'react-native';
import { styles } from './styles';
import { COLORS } from '@/constants';

export function SearchBar(props: TextInputProps) {
    return (
        <TextInput
            {...props} 
            placeholderTextColor={COLORS.gray_400}
            style={styles.input}
        />
    );
}
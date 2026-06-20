import { TextInput, TextInputProps, StyleSheet } from 'react-native';
import { COLORS } from '@/constants/colors';

export function SearchBar(props: TextInputProps) {
    return (
        <TextInput
            {...props} 
            placeholderTextColor={COLORS.gray_400}
            style={styles.input}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        fontSize: 14,
        color: COLORS.gray_700,
        height: '100%',
        paddingLeft: 8,
        textAlignVertical: 'center',
    }
});
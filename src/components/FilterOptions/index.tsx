import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { styles } from "./styles";

export function FilterOptions({ options, active, onSelect }: any) {
    return (
        <View style={styles.container}>
            {options.map((item: string) => (
                <TouchableOpacity 
                    key={item}
                    style={[styles.option, active === item && styles.activeOption]}
                    onPress={() => onSelect(item)}
                >
                    <Text style={[styles.text, active === item && styles.activeText]}>
                        {item}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}
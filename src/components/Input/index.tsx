import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";
import { COLORS } from "@/constants";
import { useState } from "react";

export function Input({ onBlur, onFocus, ...rest }: TextInputProps) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <TextInput
            style={[styles.container, isFocused && styles.focused]}
            placeholderTextColor={COLORS.gray_500}
            onFocus={(event) => {
                setIsFocused(true);
                onFocus?.(event);
            }}
            onBlur={(event) => {
                setIsFocused(false);
                onBlur?.(event);
            }}
            {...rest}
        />
    );
}

import { TouchableOpacity } from "react-native";
import { ButtonProps } from "./type";
import { styles } from "./style";

export function Button({
    children,
    color,
    border,
    borderColor,
    ...rest
}: ButtonProps) {
    const borderStyles = border ? {
        backgroundColor: color,
        borderWidth: border,
        borderColor: borderColor,
        padding: 0,
    } : {
        backgroundColor: color,
    };
    
    return (
        <TouchableOpacity
            style={[
                styles.container,
                borderStyles
            ]}
            {...rest}
        >
            {children}
        </TouchableOpacity>
    );
}

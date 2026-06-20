import { TouchableOpacity } from "react-native";
import { ButtonRoundedProps } from "./type";
import { styles } from "./style";

export function ButtonRounded({
    children,
    color,
    style,
    ...rest
}: ButtonRoundedProps) { 
    return (
        <TouchableOpacity
            style={[
                styles.container,
                color ? { backgroundColor: color } : undefined,
                style,
            ]}
            {...rest}
        >
            {children}
        </TouchableOpacity>
    );
}

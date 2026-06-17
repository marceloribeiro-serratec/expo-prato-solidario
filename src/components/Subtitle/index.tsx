import { ReactNode } from "react";
import { Text } from "react-native";

import { styles } from "./styles";

interface TitleProps extends React.ComponentProps<typeof Text> {
    children: ReactNode;
    color?: string;
    fontSize?: number;
    paddingTop?: number;
}

export function Subtitle({ children, color, fontSize, paddingTop, ...rest }: TitleProps) {
    return (
        <Text style={[styles.subtitle, { color, fontSize, paddingTop}]} {...rest}>
            {children}
        </Text>
    );
}

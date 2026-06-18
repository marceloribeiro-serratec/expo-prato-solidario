import { ReactNode } from "react";
import { Text } from "react-native";

import { styles } from "./styles";

interface TitleProps extends React.ComponentProps<typeof Text> {
    children: ReactNode;
    color?: string;
    fontSize?: number;
    paddingTop?: number;
    textAlign?: "left" | "center" | "right";
    fontWeight?:
        | "normal"
        | "bold"
        | "100"
        | "200"
        | "300"
        | "400"
        | "500"
        | "600"
        | "700"
        | "800"
        | "900";
}

export function Subtitle({
    children,
    color,
    fontSize,
    paddingTop,
    fontWeight,
    textAlign,
    ...rest
}: TitleProps) {
    return (
        <Text
            style={[
                styles.subtitle,
                { color, fontSize, paddingTop, fontWeight, textAlign },
            ]}
            {...rest}
        >
            {children}
        </Text>
    );
}

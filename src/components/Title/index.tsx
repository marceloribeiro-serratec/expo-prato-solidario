import { ReactNode } from "react";
import { Text, TextStyle } from "react-native";

import { title } from "./style";

type FontWeight = NonNullable<TextStyle["fontWeight"]>;
type TitleFontWeight = FontWeight | number | "regular" | "semibold";

interface TitleProps {
    children: ReactNode;
    color: string;
    size?: number;
    fontWeight?: TitleFontWeight;
    align?: TextStyle["textAlign"];
}

function getFontWeight(fontWeight: TitleFontWeight): FontWeight {
    if (fontWeight === "regular") {
        return "normal";
    }

    if (fontWeight === "semibold") {
        return "600";
    }

    if (typeof fontWeight === "number") {
        return String(fontWeight) as FontWeight;
    }

    return fontWeight;
}

export function Title({
    children,
    color,
    size,
    fontWeight,
    align,
}: TitleProps) {
    return (
        <Text
            style={[
                title.title,
                { color },
                size !== undefined ? { fontSize: size } : undefined,
                fontWeight !== undefined
                    ? { fontWeight: getFontWeight(fontWeight) }
                    : undefined,
                align !== undefined ? { textAlign: align } : undefined,
            ]}
        >
            {children}
        </Text>
    );
}

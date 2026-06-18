import { Apple } from "lucide-react-native";

type AppleIconProps = {
    size?: number;
};

export function AppleIcon({ size = 18 }: AppleIconProps) {
    return <Apple color="#000" size={size} />;
}

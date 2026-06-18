import { Feather } from "@react-native-vector-icons/feather";

type FeatherIconName = React.ComponentProps<typeof Feather>["name"];

export interface IconInputProps {
    iconName: FeatherIconName;
    action?: () => void;
}
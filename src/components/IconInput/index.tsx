import { Feather } from "@react-native-vector-icons/feather";

type FeatherIconName = React.ComponentProps<typeof Feather>["name"];

interface IconInputProps {
    iconName: FeatherIconName;
    action?: () => void;
}


export function IconInput({ iconName, action }: IconInputProps) {
    return (
        <Feather
            name={iconName}
            size={20}
            color="#999"
            onPress={action}
        />
    );
}
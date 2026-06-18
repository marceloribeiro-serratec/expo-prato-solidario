import { Feather } from "@react-native-vector-icons/feather";

import { IconInputProps } from "./type";

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
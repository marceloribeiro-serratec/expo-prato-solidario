import { Text, TouchableOpacity, View } from "react-native";
import { ChevronRight } from "lucide-react-native";

import { COLORS } from "@/constants/colors";
import { profileActionItemStyles as styles } from "./style";
import { ProfileActionItemProps } from "./type";


export function ProfileActionItem({
    icon,
    title,
    description,
    onPress,
}: ProfileActionItemProps) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <View style={styles.iconContainer}>{icon}</View>

            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>

            <ChevronRight color={COLORS.gray_400} size={20} />
        </TouchableOpacity>
    );
}

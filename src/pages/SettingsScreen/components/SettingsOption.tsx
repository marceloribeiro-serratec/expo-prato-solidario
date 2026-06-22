import { ReactNode } from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";
import { ChevronRight } from "lucide-react-native";

import { COLORS } from "@/constants/colors";
import { settingsOptionStyles as styles } from "./style";

type SettingsOptionProps = {
    icon: ReactNode;
    title: string;
    description: string;
    value?: boolean;
    onValueChange?: (value: boolean) => void;
    onPress?: () => void;
    danger?: boolean;
};

export function SettingsOption({
    icon,
    title,
    description,
    value,
    onValueChange,
    onPress,
    danger = false,
}: SettingsOptionProps) {
    const hasSwitch = typeof value === "boolean" && onValueChange;

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            activeOpacity={onPress ? 0.8 : 1}
            disabled={!onPress && !hasSwitch}
        >
            <View style={[styles.iconContainer, danger && styles.dangerIcon]}>
                {icon}
            </View>

            <View style={styles.content}>
                <Text style={[styles.title, danger && styles.dangerText]}>
                    {title}
                </Text>
                <Text style={styles.description}>{description}</Text>
            </View>

            {hasSwitch ? (
                <Switch
                    value={value}
                    onValueChange={onValueChange}
                    trackColor={{
                        false: COLORS.gray_300,
                        true: COLORS.green_light,
                    }}
                    thumbColor={value ? COLORS.green_dark : COLORS.gray_400}
                />
            ) : (
                <ChevronRight color={COLORS.gray_400} size={20} />
            )}
        </TouchableOpacity>
    );
}

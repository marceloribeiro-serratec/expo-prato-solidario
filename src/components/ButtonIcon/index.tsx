import React from "react";
import { View } from "react-native";

import { Button } from "../Button";
import { Title } from "../Title";
import { GoogleIcon } from "../GoogleIcon";

import { COLORS } from "@/constants";
import { buttonIcon } from "./style";
import { AppleIcon } from "../AppleIcon";

export function ButtonIcon({variant, onPress}: {variant: "google" | "apple"; onPress: () => void}) {
    return (
        <Button
            color={COLORS.gray_100}
            border={1}
            borderColor={COLORS.gray_300}
            onPress={onPress}
        >
            <View style={buttonIcon.buttonIconText}>
                {variant === "google" ? <GoogleIcon /> : <AppleIcon />}
                <Title color={COLORS.black} size={13} fontWeight={500}>
                    Continue with {variant === "google" ? "Google" : "Apple"}
                </Title>
            </View>
        </Button>
    );
}

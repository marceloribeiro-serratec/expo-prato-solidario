import { ReactNode } from "react";
import { ColorValue, ViewStyle } from "react-native";
import { StatusBarStyle } from "expo-status-bar";

export interface PageContainerProps {
    children: ReactNode;
    backgroundColor?: ColorValue;
    paddingBottom?: ViewStyle["paddingBottom"];
    statusBarBackgroundColor?: string;
    statusBarStyle?: StatusBarStyle;
}

import { ReactNode } from "react";
import { ColorValue, ViewStyle } from "react-native";
import { StatusBarStyle } from "expo-status-bar";
import { Edge } from "react-native-safe-area-context";

export interface PageContainerImageProps {
    children: ReactNode;
    backgroundColor?: ColorValue;
    edges?: Edge[];
    paddingBottom?: ViewStyle["paddingBottom"];
    statusBarBackgroundColor?: string;
    statusBarStyle?: StatusBarStyle;
}

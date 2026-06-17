import { LucideIcon } from "lucide-react-native";
import { ReactNode } from "react";
import { ColorValue } from "react-native";

export interface CardMyWorkProps {
    children: ReactNode;
    color: ColorValue;
    icon: LucideIcon;
}
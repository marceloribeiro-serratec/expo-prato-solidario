import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";

export interface ButtonRoundedProps extends TouchableOpacityProps {
    children: ReactNode;
    color?: string;
    
}
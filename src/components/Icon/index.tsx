import { ReactNode } from "react";
import { IconContainer } from "./styles";

export const ICONS_COLOR = {
  yellowDark: "yellow-200",
  baseText: "black-300",
  yellow: "yellow-300",
  purple: "purple-200",
} as const; //o const faz o typescript entender que esses são valores literais imutáveis, ou seja, cada valor é exatamente aquela string, não qualquer string

export type TIconColor = keyof typeof ICONS_COLOR; //tipo automático baseado nas chaves desse objeto

interface IconProps {
  color: TIconColor;
  icon: ReactNode;
}

export function Icon ({color, icon}: IconProps){
    return <IconContainer iconColor={color}>{icon}</IconContainer>;
}
import { IconType } from "react-icons";

export interface ButtonProps {
  text: string;
  icon?: IconType;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  block?: boolean;
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "error"
    | "info";
  variant?: "filled" | "ghost" | "soft" | "ring" | "gradient";
  type?: "submit" | "button";
  customStyle?: string;
  onClick?: () => void;
  disable?: boolean;
  loading?: boolean;
}

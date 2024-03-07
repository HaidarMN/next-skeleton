import React from "react";
import { getButtonClasses } from "./Button.utils";
import { ButtonProps } from "./Button.props";

export type Size = "sm" | "md" | "lg" | "xl" | "2xl";

export type Color =
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "warning"
  | "error"
  | "info";

export type Variant = "filled" | "ghost" | "soft" | "ring" | "gradient";

export const commonStyle =
  "flex items-center justify-center gap-2 shadow focus:outline-none focus:ring disabled:cursor-not-allowed";

export const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-2 text-sm rounded-md",
  md: "px-4 py-2 text-base rounded-lg",
  lg: "px-5 py-3 text-lg rounded-lg",
  xl: "px-6 py-3 text-xl rounded-xl",
  "2xl": "px-8 py-4 text-xl rounded-xl",
};

export const colorClasses: Record<Color, string> = {
  primary:
    "bg-primary-400 hover:bg-primary-200 disabled:bg-primary-700 focus:ring-primary-200",
  secondary:
    "bg-secondary-500 hover:bg-secondary-300 disabled:bg-secondary-800  focus:ring-secondary-300",
  tertiary:
    "bg-tertiary-400 hover:bg-tertiary-200 disabled:bg-tertiary-700 focus:ring-tertiary-200",
  success:
    "bg-success-400 hover:bg-success-200 disabled:bg-success-700 focus:ring-success-200",
  warning:
    "bg-warning-400 hover:bg-warning-200 disabled:bg-warning-700 focus:ring-warning-200",
  error:
    "bg-error-500 hover:bg-error-300 disabled:bg-error-700 focus:ring-error-300",
  info: "bg-info-500 hover:bg-info-300 disabled:bg-info-700 focus:ring-info-300",
};

export const variantClasses: Record<
  Variant,
  string | ((colorClass: Color) => string)
> = {
  filled: "text-slate-900",
  ghost: (color) => `ring ring-${color}-100  hover:ring-${color}-200`,
  ring: (color) =>
    `ring ring-${color}-600 hover:ring-${color}-700 hover:ring-3 bg-transparant`,
  soft: "bg-opacity-50 hover:bg-opacity-70",
  gradient: (color) =>
    `bg-gradient-to-r from-${color}-400 via-${color}-500 to-${color}-900 hover:from-${color}-300 hover:via-${color}-400 hover:to-${color}-500`,
};

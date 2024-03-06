import { ButtonProps } from "./Button.props";
import {
  commonStyle,
  sizeClasses,
  colorClasses,
  variantClasses,
} from "./Button.style";

export const getButtonClasses = ({
  size,
  variant,
  color,
  customStyle,
}: Pick<ButtonProps, "size" | "variant" | "color" | "customStyle">): string => {
  let classes = commonStyle;

  if (size) {
    classes += ` ${sizeClasses[size]}`;
  }

  if (color) {
    classes += ` ${colorClasses[color]}`;
  }

  if (variant) {
    const variantClass = variantClasses[variant];
    if (typeof variantClass === "function") {
      if (color) {
        classes += ` ${variantClass(color)}`;
      }
    } else {
      classes += ` ${variantClass}`;
    }
  }

  if (customStyle) {
    classes += ` ${customStyle}`;
  }

  return classes;
};

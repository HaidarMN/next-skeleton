import React from "react";
import { ButtonProps } from "./Button.props";
import { getButtonClasses } from "./Button.utils";

const Button: React.FC<ButtonProps> = ({
  text,
  icon: Icon,
  size = "lg",
  block = false,
  color = "primary",
  variant = "filled",
  type = "button",
  customStyle = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${getButtonClasses({ size, variant, color })} ${customStyle} ${block ? "w-full" : ""}`}
    >
      {Icon && <Icon className="button-icon" />}
      {text}
    </button>
  );
};

export default Button;
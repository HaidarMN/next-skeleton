import React from "react";
import { ButtonProps } from "./Button.props";
import { getButtonClasses } from "./Button.utils";
import Loader from "@/components/global/loader/Small";

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
  disable = false,
  loading = false,
}) => {
  return (
    <button
      disabled={disable || loading}
      onClick={onClick}
      type={type}
      className={`${getButtonClasses({ size, variant, color })} ${customStyle} ${block ? "w-full" : ""}`}
    >
      {Icon && <Icon className="button-icon" />}
      {loading ? <Loader /> : text}
    </button>
  );
};

export default Button;

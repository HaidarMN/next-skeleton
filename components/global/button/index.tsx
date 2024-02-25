import React from "react";
import { IconType } from "react-icons";

interface Props {
  text: string;
  icon?: IconType;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  block?: boolean;
  variant?:
    | "primary"
    | "secondaryColor"
    | "secondaryGray"
    | "tertiaryGray"
    | "tertiaryColor";
  type?: "submit" | "button";
  customStyle?: string;
  onClick?: () => void;
}

const Button = ({
  text,
  icon: Icon,
  size,
  block,
  variant,
  type,
  customStyle,
  onClick,
}: Props) => {
  const commonStyle =
    "flex gap-2 rounded-lg shadow border justify-center items-center focus:outline-none focus:ring focus:ring-gray-200 text-sm font-semibold";

  const baseWidth = "10rem";
  const baseHeight = "9px";
  const basePaddingX = "3.5px";
  const basePaddingY = "2px";

  const colors = {
    primary: ["gray-600", "gray-800"],
    secondary: ["gray-100", "gray-200", "gray-50", "gray-800"],
    tertiary: ["transparent", "gray-600", "gray-800", "gray-100"],
  };

  const sizes = {
    sm: `min-w-[${baseWidth}] h-${baseHeight} px-${basePaddingX} py-${basePaddingY}`,
    md: `min-w-[${baseWidth}.5] h-${parseInt(baseHeight) + 1}px px-${
      parseInt(basePaddingX) * 1.25
    } py-${parseFloat(basePaddingY) + 0.25}`,
    lg: `min-w-[${parseInt(baseWidth) + 0.5}rem] h-${
      parseInt(baseHeight) + 2
    }px px-[18px] py-2.5`,
    xl: `w-[${parseInt(baseWidth) + 0.75}rem] h-${
      parseInt(baseHeight) + 3
    }px px-5 py-3`,
    "2xl": `min-w-[${parseInt(baseWidth) + 4.5}rem] h-${
      parseInt(baseHeight) + 5
    }px px-7 py-4`,
  };

  const styles = {
    primary: `bg-${colors.primary[0]} border-${colors.primary[0]} hover:bg-${colors.primary[1]} hover:border-${colors.primary[1]} active:bg-${colors.primary[0]} active:border-${colors.primary[0]} disabled:border-gray-300 disabled:bg-gray-300 text-white`,
    secondaryColor: `bg-${colors.secondary[0]} border-gray-300 hover:bg-${colors.secondary[1]} hover:border-gray-300 active:bg-${colors.secondary[2]} active:border-${colors.secondary[3]} disabled:border-gray-50 disabled:bg-gray-50 disabled:text-gray-400 text-gray-800`,
    secondaryGray: `bg-transparent border-none hover:bg-gray-50 disabled:opacity-75 disabled:text-gray-300 text-gray-600`,
    tertiaryGray: `bg-transparent text-slate-600 disabled:text-gray-300 order-none hover:bg-gray-100 disabled:text-gray-300`,
    tertiaryColor: `bg-transparent text-gray-800 disabled:text-gray-300 border-none hover:bg-gray-100 disabled:opacity-75`,
  };

  const inputClassName = block ? "w-full" : "";
  const selectedStyle = styles[variant || "primary"];
  const selectedSize = sizes[size || "lg"];

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${commonStyle} ${selectedStyle} ${inputClassName} ${selectedSize} ${customStyle}`}
    >
      <span>{Icon && <Icon />}</span>
      {text}
    </button>
  );
};

export default Button;

import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

type props = {
  name: string;
  label?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  error?: string;
  primary?: boolean | false;
  disabled?: boolean | false;
  register: UseFormRegister<FieldValues>;
  passValue?: any; // for pass value to parent
};

const inputClass = (
  icon: React.ReactNode,
  disabled: boolean,
  error: string | undefined,
) => {
  const iconClass = icon ? "rounded-r border-l-0" : "rounded";
  const disabledClass = disabled ? "cursor-not-allowed bg-gray-300" : "";
  const errorClass = error ? "border-red-600" : "border-slate-950";

  return `${iconClass} ${disabledClass} ${errorClass}`;
};

const iconClass = (error: string | undefined) => {
  return error
    ? "border-red-600 bg-red-600 text-white"
    : "border-slate-950 bg-gray-100 text-slate-950";
};

const InputText = ({
  name,
  label,
  placeholder,
  icon,
  error,
  primary = false,
  disabled = false,
  register,
  passValue,
}: props) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <label
        htmlFor={name}
        className="flex flex-row items-start gap-1 text-sm text-slate-950"
      >
        {label}
        {primary && <strong className="text-red-600">*</strong>}
      </label>
      <div className="flex w-full flex-row items-center">
        <div
          className={`flex h-10 items-center justify-center rounded-l border px-3 py-2 ${iconClass(
            error,
          )}`}
        >
          {icon}
        </div>
        <input
          type="text"
          id={name}
          {...register(name)}
          placeholder={placeholder}
          className={`h-10 w-full border p-2 focus:outline-none ${inputClass(
            icon,
            disabled,
            error,
          )}`}
          disabled={disabled}
          onChange={passValue}
        />
      </div>
      {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
  );
};

export default InputText;

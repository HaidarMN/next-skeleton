import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

type props = {
  name: string;
  label?: string;
  placeholder?: string;
  error?: string;
  rows?: number;
  primary?: boolean | false;
  disabled?: boolean | false;
  register?: UseFormRegister<FieldValues>;
  passValue?: () => void; // for pass value to parent
};

const inputClass = (disabled: boolean, error: string | undefined) => {
  const disabledClass = disabled ? "cursor-not-allowed bg-gray-300" : "";
  const errorClass = error ? "border-red-600" : "border-slate-950";

  return `${disabledClass} ${errorClass}`;
};

const InputTextarea = ({
  name,
  label,
  placeholder,
  error,
  rows = 3,
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
        <textarea
          id={name}
          {...(register && register(name))}
          name={name}
          placeholder={placeholder}
          className={`h-full w-full rounded border p-2 focus:outline-none ${inputClass(
            disabled,
            error,
          )}`}
          rows={rows}
          disabled={disabled}
          onChange={passValue}
        ></textarea>
      </div>
      {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
  );
};

export default InputTextarea;

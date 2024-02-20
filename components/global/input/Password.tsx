import React, { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";

type props = {
  name: string;
  label?: string;
  placeholder?: string;
  error?: string;
  primary?: boolean | false;
  disabled?: boolean | false;
  register?: UseFormRegister<FieldValues>;
  passValue?: any; // for pass value to parent
};

const inputClass = (disabled: boolean, error: string | undefined) => {
  const disabledClass = disabled ? "cursor-not-allowed bg-gray-300" : "";
  const errorClass = error ? "border-red-600" : "border-slate-950";

  return `${disabledClass} ${errorClass}`;
};

const iconClass = (error: string | undefined) => {
  return error
    ? "border-red-600 bg-red-600 text-white"
    : "border-slate-950 bg-gray-100 text-slate-950";
};

const InputPassword = ({
  name,
  label,
  placeholder,
  error,
  primary = false,
  disabled = false,
  register,
  passValue,
}: props) => {
  const [currentType, setCurrentType] = useState("password");

  const togglePassword = () => {
    if (currentType === "password") {
      setCurrentType("text");
    } else {
      setCurrentType("password");
    }
  };

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
          <RiLockPasswordLine />
        </div>
        <div className="flex w-full flex-row items-center">
          <input
            type={currentType}
            id={name}
            {...(register && register(name))}
            name={name}
            placeholder={placeholder}
            className={`h-10 w-full border border-x-0 p-2 pr-0 focus:outline-none ${inputClass(
              disabled,
              error,
            )}`}
            disabled={disabled}
            onChange={passValue}
          />
          <div
            onClick={togglePassword}
            className={`flex h-10 cursor-pointer items-center rounded-r border border-l-0 bg-[#FFF] px-2 text-gray-500 ${error ? "border-red-600" : "border-slate-950"}`}
          >
            {currentType == "password" ? <IoEye /> : <IoEyeOff />}
          </div>
        </div>
      </div>
      {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
  );
};

export default InputPassword;

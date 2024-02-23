import React, { useState } from "react";
import { useController } from "react-hook-form";
import Select from "react-select";

type props = {
  name: string;
  label?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  error?: string;
  primary?: boolean | false;
  disabled?: boolean | false;
  passValue?: (e: any) => void; // for pass value to parent
  option: Array<object>;
  control?: any;
};

const InputSelect = ({
  name,
  label,
  placeholder,
  icon,
  error,
  primary = false,
  disabled = false,
  passValue,
  option,
  control,
}: props) => {
  var fieldProps = {} as any;
  if (control) {
    const { field } = useController({
      name,
      control,
    });
    fieldProps = { ...field };
  }

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
        {icon && (
          <div
            className={`flex h-10 items-center justify-center rounded-l border px-3 py-2 ${
              error
                ? "border-red-600 bg-red-600 text-white"
                : "border-slate-950 bg-gray-100 text-slate-950"
            }`}
          >
            {icon}
          </div>
        )}
        <Select
          {...fieldProps}
          id={name}
          placeholder={placeholder}
          classNames={{
            container: () => `!w-full !h-10`,
            control: () =>
              `!border !shadow-none ${icon ? "!rounded-r !border-l-0" : "!rounded"} ${disabled ? "!cursor-not-allowed !bg-gray-300" : null} ${error ? "!border-red-600" : "!border-slate-950"}`,
          }}
          isDisabled={disabled}
          isClearable
          onChange={(e: any) => {
            if (typeof passValue === "function") {
              passValue(e?.value);
            }
            if (control) {
              fieldProps?.onChange(e?.value || null);
            }
          }}
          value={option.find((val: any) => val.value === fieldProps?.value)}
          options={option}
        />
      </div>
      {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
  );
};

export default InputSelect;

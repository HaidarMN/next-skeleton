import React from "react";
import { useController } from "react-hook-form";

type props = {
  name: string;
  label?: string;
  placeholder?: string;
  error?: string;
  rows?: number;
  primary?: boolean | false;
  disabled?: boolean | false;
  control?: any;
  passValue?: (e: any) => void; // for pass value to parent
};

const InputTextarea = ({
  name,
  label,
  placeholder,
  error,
  rows = 3,
  primary = false,
  disabled = false,
  control,
  passValue,
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
      <textarea
        {...fieldProps}
        id={name}
        placeholder={placeholder}
        className={`h-full w-full rounded border p-2 ${disabled ? "cursor-not-allowed bg-gray-300" : null} ${error ? "border-red-600 focus:border-red-600" : "border-slate-950 focus:border-slate-950"}`}
        rows={rows}
        disabled={disabled}
        onChange={(e: any) => {
          if (typeof passValue === "function") {
            passValue(e?.target?.value);
          }
          if (control) {
            fieldProps?.onChange(e?.target?.value);
          }
        }}
      ></textarea>
      {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
  );
};

export default InputTextarea;

import React, { useState } from "react";
import { useController } from "react-hook-form";

type props = {
  name: string;
  label?: string;
  error?: string;
  primary?: boolean | false;
  disabled?: boolean | false;
  control?: any;
  passValue?: (e: any) => void; // for pass value to parent
};

const InputToggle = ({
  name,
  label,
  error,
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
  const [value, setValue] = useState(false);

  return (
    <div className="flex flex-col items-start gap-1">
      <span className="flex flex-row items-start gap-1 text-sm text-slate-950">
        {label}
        {primary && <strong className="text-red-600">*</strong>}
      </span>
      {/* <div className="flex w-full flex-row items-center"> */}
      <input
        {...fieldProps}
        type="checkbox"
        id={name}
        className="hidden"
        disabled={disabled}
        onChange={(e: any) => {
          setValue(e?.target?.checked);
          if (typeof passValue === "function") {
            passValue(value);
          }
          if (control) {
            fieldProps?.onChange(value);
          }
        }}
      />
      <label
        htmlFor={name}
        className={`relative h-6 w-14 cursor-pointer rounded-full before:absolute before:left-0 before:top-0 before:h-6 before:w-6 before:rounded-full before:bg-white before:transition-all before:content-[''] ${value ? "bg-green-600 before:translate-x-full" : "bg-red-600"}`}
      ></label>
      {/* </div> */}
      {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
  );
};

export default InputToggle;

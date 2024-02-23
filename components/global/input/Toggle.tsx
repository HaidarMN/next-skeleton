import React from "react";
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

  return (
    <div className="flex flex-col items-start gap-1">
      <span className="flex flex-row items-start gap-1 text-sm text-slate-950">
        {label}
        {primary && <strong className="text-red-600">*</strong>}
      </span>
      <input
        {...fieldProps}
        type="checkbox"
        id={name}
        className="hidden"
        disabled={disabled}
        onChange={() => {
          if (typeof passValue === "function") {
            passValue(!fieldProps?.value);
          }
          if (control) {
            fieldProps?.onChange(!fieldProps?.value);
          }
        }}
        checked={fieldProps?.value}
      />
      <label
        htmlFor={name}
        className={`relative block h-8 w-16 cursor-pointer rounded-full before:absolute before:left-0 before:top-0 before:h-8 before:w-8 before:rounded-full before:bg-white before:transition-all before:content-[''] ${fieldProps?.value ? "bg-green-600 before:translate-x-full" : "bg-red-600"}`}
      ></label>
      {/* Make sure the width and the height have 2:1 ratio. And dont forget to change the "before" width and height to */}
      {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
  );
};

export default InputToggle;

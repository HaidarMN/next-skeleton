import React, { useState } from "react";
import { useController } from "react-hook-form";
import { FaUpload, FaFileLines } from "react-icons/fa6";

type props = {
  name: string;
  label?: string;
  error?: string;
  primary?: boolean | false;
  disabled?: boolean | false;
  control?: any;
  passValue?: (e: any) => void; // for pass value to parent
  typeFile?: string | Array<string>;
};

const InputFile = ({
  name,
  label,
  error,
  primary = false,
  disabled = false,
  control,
  passValue,
  typeFile = "",
}: props) => {
  var fieldProps = {} as any;
  if (control) {
    const {
      field: { value, ...field },
    } = useController({
      name,
      control,
    });
    fieldProps = { ...field };
  }
  const [fileName, setFileName] = useState("Upload File");

  const toBase64 = (file: any) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });
  const formatFile = async (data: any) => {
    const base64 = await toBase64(data);
    setFileName(data?.name);
    return {
      name: data?.name,
      size: data?.size,
      type: data?.type,
      base64: base64,
    };
  };

  return (
    <div className="flex flex-col items-start gap-1">
      <span className="flex flex-row items-start gap-1 text-sm text-slate-950">
        {label}
        {primary && <strong className="text-red-600">*</strong>}
      </span>
      <div className="flex w-full flex-row items-center">
        <input
          {...fieldProps}
          type="file"
          id={name}
          className="hidden"
          disabled={disabled}
          onChange={async (e: any) => {
            const final_value = await formatFile(e?.target?.files[0]);
            if (typeof passValue === "function") {
              passValue(final_value);
            }
            if (control) {
              fieldProps?.onChange(final_value);
            }
          }}
          accept={typeof typeFile === "string" ? typeFile : typeFile.join(",")}
        />
        <label
          htmlFor={name}
          className={`flex w-full  flex-col items-center justify-center gap-2 rounded-lg border p-4 ${error ? "border-red-600 text-red-600 focus:border-red-600" : "border-slate-950 text-slate-950 focus:border-slate-950"} ${disabled ? "cursor-not-allowed bg-gray-300" : "cursor-pointer bg-white"}`}
        >
          {fileName === "Upload File" ? (
            <FaUpload className="text-4xl" />
          ) : (
            <FaFileLines className="text-4xl" />
          )}
          <span className="text-sm font-bold">{fileName}</span>
        </label>
      </div>
      {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
  );
};

export default InputFile;

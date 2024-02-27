import React from "react";

type props = {
  value: number;
  className: string;
};
const Bar = ({ value, className }: props) => {
  return (
    <div
      className={`relative h-[16px] w-full overflow-hidden rounded-full bg-slate-200 ${className}`}
    >
      <div
        className={`h-full bg-teal-300 transition-[width] duration-500`}
        style={{ width: `${value || 0}%` }}
      ></div>
      <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-sm font-semibold">
        {value || 0}%
      </span>
    </div>
  );
};

export default Bar;

import React from "react";
import { FaCheck } from "react-icons/fa6";
import styles from "./styles.module.scss";
type props = {
  stepNumber: number;
  currentStep: number;
};
const Numbering = ({ stepNumber, currentStep }: props) => {
  return (
    <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full border-[1px] border-slate-50">
      {currentStep > stepNumber ? (
        <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-teal-600 text-sm font-semibold text-white">
          <FaCheck />
        </div>
      ) : (
        <div
          className={`flex h-[48px] w-[48px] items-center justify-center rounded-full text-sm font-semibold ${currentStep == stepNumber ? "bg-teal-300" : "bg-gray-200"}`}
        >
          {stepNumber}
        </div>
      )}
    </div>
  );
};

export default Numbering;

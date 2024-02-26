import React, { ReactNode } from "react";

type props = {
  stepNumber: number;
  currentStep: number;
  children: ReactNode;
};

const MainContent = ({ stepNumber, currentStep, children }: props) => {
  if (stepNumber == currentStep) {
    return <div>{children}</div>;
  }
};

export default MainContent;

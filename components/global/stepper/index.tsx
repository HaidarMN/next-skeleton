import React, { ReactNode, useState } from "react";
import Numbering from "./numbering/numbering";
import MainContent from "./mainContent/mainContent";
import Button from "../button";
import styles from "./styles.module.scss";
type props = {
  steps: Array<object>;
};
const Stepper = ({ steps }: props) => {
  const [currentStep, setCurrentStep] = useState(1);

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <div>
      <div className="mb-4 flex flex-row justify-center gap-12">
        {steps.map((item, index) => {
          return (
            <div
              key={index}
              className={`${styles.stepNumber} ${item.stepNumber < currentStep ? styles.isActive : ""}`}
            >
              <Numbering
                stepNumber={item.stepNumber}
                currentStep={currentStep}
              />
            </div>
          );
        })}
      </div>
      {steps.map((item, index) => {
        return (
          <div key={index} className="mb-4">
            <MainContent stepNumber={item.stepNumber} currentStep={currentStep}>
              {item.content}
            </MainContent>
          </div>
        );
      })}
      {currentStep < steps.length ? (
        currentStep !== 1 ? (
          <div className="flex flex-row items-center justify-center gap-4">
            <Button
              onClick={prevStep}
              text="Previous"
              size="xl"
              variant="primary"
              type="button"
              customStyle="w-1/2"
            />
            <Button
              onClick={nextStep}
              text="Next"
              size="xl"
              variant="primary"
              type="button"
              customStyle="w-1/2"
            />
          </div>
        ) : (
          <div className="flex flex-row items-center justify-center gap-4">
            <Button
              text="Cancel"
              size="xl"
              variant="primary"
              type="button"
              customStyle="w-1/2"
            />
            <Button
              onClick={nextStep}
              text="Next"
              size="xl"
              variant="primary"
              type="button"
              customStyle="w-1/2"
            />
          </div>
        )
      ) : (
        <div className="flex flex-row items-center justify-center gap-4">
          <Button
            onClick={prevStep}
            text="Previous"
            size="xl"
            variant="primary"
            type="button"
            customStyle="w-1/2"
          />
          <Button
            text="Submit"
            size="xl"
            variant="primary"
            type="submit"
            customStyle="w-1/2"
          />
        </div>
      )}
    </div>
  );
};

export default Stepper;

import React, { useState } from "react";

type props = {
  modalTitle: string;
  children: React.ReactNode;
  buttonTrigger: React.ReactElement;
  buttonClose: React.ReactElement;
  buttonAction: React.ReactElement;
  onButtonAction: () => void;
  width?: "sm" | "md" | "lg" | "xl";
};

const Modal = ({
  modalTitle,
  children,
  buttonTrigger,
  buttonClose,
  buttonAction,
  onButtonAction,
  width = "lg",
}: props) => {
  const [isOpen, setIsOpen] = useState(false);

  const getWidth = () => {
    switch (width) {
      case "sm":
        return "max-w-sm";
      case "md":
        return "max-w-md";
      case "lg":
        return "max-w-lg";
      case "xl":
        return "max-w-xl";
      default:
        break;
    }
  };

  return (
    <>
      {React.cloneElement(buttonTrigger, { onClick: () => setIsOpen(!isOpen) })}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex min-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50 p-6">
          <div
            className={`flex max-h-full w-full flex-col gap-4 overflow-y-auto overflow-x-hidden ${getWidth()} animate__animated animate__zoomIn animate__fastest rounded-lg bg-slate-300 p-6`}
          >
            <h1 className="text-xl font-bold text-slate-950">{modalTitle}</h1>

            {children}

            <div className="flex w-full flex-row items-center justify-end gap-4">
              {React.cloneElement(buttonClose, {
                onClick: () => setIsOpen(false),
              })}
              {React.cloneElement(buttonAction, {
                onClick: () => {
                  setIsOpen(false);
                  onButtonAction();
                },
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

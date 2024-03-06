import React from "react";
import ButtonComp from "@/components/global/Button";
import MainLayout from "@/layouts/MainLayout";
import { useEffect, useState } from "react";
import { useLayoutStore } from "@/stores/layout";

const Button = () => {
  const { setIsLoading: setIsLoading, setBreadcrumb: setBreadcrumb } =
    useLayoutStore();

  useEffect(() => {
    setBreadcrumb(["Button Components"]);
  }, []);

  const testing = () => {
    console.log("Hello World!");
  };

  return (
    <MainLayout title="Button Components">
      <div className="flex flex-col gap-2">
        <h2 className="text-secondary-300 text-xl font-bold">Colors</h2>
        <div className="flex flex-row gap-4">
          <ButtonComp text="primary" size="lg" color="primary" />
          <ButtonComp text="secondary" size="lg" color="secondary" />
          <ButtonComp text="tertiary" size="lg" color="tertiary" />
          <ButtonComp text="warning" size="lg" color="warning" />
          <ButtonComp text="error" size="lg" color="error" />
          <ButtonComp text="info" size="lg" color="info" />
          <ButtonComp text="success" size="lg" color="success" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-secondary-300 text-xl font-bold">Variants</h2>
        <div className="flex flex-row gap-4">
          <ButtonComp
            text="filled"
            size="lg"
            color="primary"
            variant="filled"
          />
          <ButtonComp text="ghost" size="lg" color="primary" variant="ghost" />
          <ButtonComp text="soft" size="lg" color="primary" variant="soft" />
          <ButtonComp text="ring" size="lg" color="primary" variant="ring" />
          <ButtonComp
            text="gradient"
            size="lg"
            color="primary"
            variant="gradient"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-secondary-300 text-xl font-bold">Sizes</h2>
        <div className="flex flex-row gap-4">
          <ButtonComp text="sm" size="sm" />
          <ButtonComp text="md" size="md" />
          <ButtonComp text="lg" size="lg" />
          <ButtonComp text="xl" size="xl" />
          <ButtonComp text="2xl" size="2xl" />
        </div>
      </div>
    </MainLayout>
  );
};

export default Button;

import React from "react";
import ButtonComp from "@/components/global/button";
import MainLayout from "@/layouts/MainLayout";
import { useEffect, useState } from "react";
import { useLayoutStore } from "@/stores/layout";

const Button = () => {
  const { setIsLoading: setIsLoading, setBreadcrumb: setBreadcrumb } =
    useLayoutStore();

  useEffect(() => {
    setBreadcrumb(["Table Components"]);
  }, []);

  const testing = () => {
    console.log("Hello World!");
  };

  return (
    <MainLayout title="Button Components">
      <ButtonComp
        onClick={testing}
        text="Jesica"
        size="xl"
        variant="primary"
        type="submit"
        customStyle="w-1/2"
      />
    </MainLayout>
  );
};

export default Button;

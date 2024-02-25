import React from "react";
import TableComp from "@/components/global/table/basic";
import MainLayout from "@/layouts/MainLayout";
import { useEffect, useState } from "react";
import { useLayoutStore } from "@/stores/layout";

const Table = () => {
  const { setIsLoading: setIsLoading, setBreadcrumb: setBreadcrumb } =
    useLayoutStore();

  const headers = ["Name", "Age", "Address"];
  const datas = [
    { Name: "John Doe", Age: 30, Address: "123 Main St" },
    { Name: "Jane Smith", Age: 25, Address: "456 Elm St" },
  ];
  const tableClass =
    "rounded-xl text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400";
  const headerClass =
    "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400";

  useEffect(() => {
    setBreadcrumb(["Table Components"]);
  }, []);

  return (
    <MainLayout title="Table Components">
      <TableComp
        headers={headers}
        datas={datas}
        headersClass={headerClass}
        tableClass={tableClass}
      />
      ;
    </MainLayout>
  );
};

export default Table;

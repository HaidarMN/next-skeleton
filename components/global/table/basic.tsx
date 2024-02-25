import React from "react";

type TableHeader = string | React.ReactNode;
type TableCell = string | number | boolean | React.ReactNode;

type Props = {
  headers: Array<TableHeader>;
  datas: Array<Record<string, TableCell>>;
  tableClass?: string; 
  headersClass?: string;
  variant?:
    | "default"
    | "stripedRows"
    | "stripedCols"
    | "hover"
    | "tertiaryColor"; 
  style?: "border" | "noBorder";
};

const TableComp = ({
  headers,
  datas,
  tableClass = "",
  headersClass = "",
  variant = "default", 
  style = "border", 
}: Props) => {
  const baseTableClass =
    "w-full text-sm text-left text-gray-500 dark:text-gray-400";
  const baseHeaderClass =
    "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400";

  const variants = {
    default: "bg-white dark:bg-gray-800",
    stripedRows: "table-auto stripe-dark:bg-gray-800 dark:border-gray-700",
    stripedCols: "table-fixed",
    hover: "hover:bg-gray-100 dark:hover:bg-gray-700",
    tertiaryColor: "text-gray-900 whitespace-nowrap dark:text-white",
  };

  const variantClass = variants[variant];

  const styleClasses = {
    border: "border-collapse border border-gray-200",
    noBorder: "",
  };

  const finalTableClass = `${baseTableClass} ${tableClass} ${styleClasses[style]}`;
  const finalHeaderClass = `${baseHeaderClass} ${headersClass}`;

  return (
    <div className="relative overflow-x-auto">
      <table className={finalTableClass}>
        <thead className={finalHeaderClass}>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-6 py-3">
                {typeof header === "string" ? header : header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datas.map((data, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${variantClass} ${rowIndex % 2 === 0 ? "" : "bg-gray-50 dark:bg-gray-700"}`}
            >
              {headers.map((header, headerIndex) => {
                const cellData = data[header as keyof typeof data];
                return (
                  <td key={headerIndex} className="px-6 py-4">
                    {typeof cellData === "string" ||
                    typeof cellData === "number" ||
                    typeof cellData === "boolean"
                      ? cellData
                      : cellData}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComp;

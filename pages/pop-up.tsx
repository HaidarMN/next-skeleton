import MainLayout from "@/layouts/MainLayout";

// Stores
import { useLayoutStore } from "@/stores/layout";
import { useEffect } from "react";

const InputForm = () => {
  const { setBreadcrumb: setBreadcrumb, setAlert: setAlert } = useLayoutStore();

  // Function
  const warningAlert = () => {
    setAlert({
      type: "warning",
      title: "Warning",
      message: "This is a warning alert",
      show: true,
    });
  };
  const dangerAlert = () => {
    setAlert({
      type: "danger",
      title: "Danger",
      message: "This is a danger alert",
      show: true,
    });
  };
  const successAlert = () => {
    setAlert({
      type: "success",
      title: "Success",
      message: "This is a success alert",
      show: true,
    });
  };
  const infoAlert = () => {
    setAlert({
      type: "info",
      title: "Info",
      message: "This is an info alert",
      show: true,
    });
  };

  useEffect(() => {
    setBreadcrumb(["Pop Up"]);
  }, []);

  return (
    <MainLayout title="Pop Up">
      <div className="grid grid-cols-2 gap-4 rounded-lg bg-slate-300 p-4">
        <button
          onClick={warningAlert}
          className="rounded border border-yellow-500 px-4 py-2 font-medium text-yellow-500 hover:bg-yellow-500 hover:text-white"
        >
          Warning
        </button>
        <button
          onClick={dangerAlert}
          className="rounded border border-red-500 px-4 py-2 font-medium text-red-500 hover:bg-red-500 hover:text-white"
        >
          Danger
        </button>
        <button
          onClick={successAlert}
          className="rounded border border-green-500 px-4 py-2 font-medium text-green-500 hover:bg-green-500 hover:text-white"
        >
          Success
        </button>
        <button
          onClick={infoAlert}
          className="rounded border border-blue-500 px-4 py-2 font-medium text-blue-500 hover:bg-blue-500 hover:text-white"
        >
          Info
        </button>
      </div>
    </MainLayout>
  );
};

export default InputForm;

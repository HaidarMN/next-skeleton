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

  useEffect(() => {
    setBreadcrumb(["Pop Up"]);
  }, []);

  return (
    <MainLayout title="Pop Up">
      <div className="grid grid-cols-2 gap-4 rounded-lg bg-slate-300 p-4">
        <button
          onClick={warningAlert}
          className="rounded border border-yellow-600 px-4 py-2 font-medium text-yellow-600 hover:bg-yellow-600 hover:text-white"
        >
          Warning
        </button>
        <button
          onClick={dangerAlert}
          className="rounded border border-red-600 px-4 py-2 font-medium text-red-600 hover:bg-red-600 hover:text-white"
        >
          Danger
        </button>
        <button
          onClick={successAlert}
          className="rounded border border-green-600 px-4 py-2 font-medium text-green-600 hover:bg-green-600 hover:text-white"
        >
          Success
        </button>
      </div>
    </MainLayout>
  );
};

export default InputForm;

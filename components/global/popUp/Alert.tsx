import { useLayoutStore } from "@/stores/layout";
import { useEffect, useState } from "react";
import {
  IoClose,
  IoWarning,
  IoCloseCircle,
  IoCheckmarkCircle,
  IoInformationCircle,
} from "react-icons/io5";

const Alert = () => {
  const { alert_option, setAlert: setAlert } = useLayoutStore();
  const [timer, setTimer] = useState(100);
  const [shouldContinue, setShouldContinue] = useState(true);

  const closeAlert = () => {
    setAlert({
      type: "",
      title: "",
      message: "",
      show: false,
    });
    setTimer(100);
    setShouldContinue(false);
  };
  const startTimer = () => {
    return setInterval(() => {
      setTimer((prevTimer) => prevTimer - 0.5);
    }, 25);
  };

  useEffect(() => {
    const interval = startTimer();
    const timeout = setTimeout(() => {
      clearInterval(interval);
      closeAlert();
    }, 5000); // Close after 5 seconds

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [shouldContinue]);

  return (
    <div
      className={`fixed right-4 top-4 flex w-80 flex-col rounded
        ${
          alert_option.type === "warning"
            ? "bg-yellow-50 text-yellow-500"
            : alert_option.type === "danger"
              ? "bg-red-50 text-red-500"
              : alert_option.type === "success"
                ? "bg-green-50 text-green-500"
                : "bg-blue-50 text-blue-500"
        }
      `}
    >
      <div className="flex flex-row items-center justify-between gap-2 px-4 py-2">
        <div className="flex flex-row items-center gap-4">
          {alert_option.type === "warning" ? (
            <IoWarning className="text-4xl" />
          ) : alert_option.type === "danger" ? (
            <IoCloseCircle className="text-4xl" />
          ) : alert_option.type === "success" ? (
            <IoCheckmarkCircle className="text-4xl" />
          ) : (
            <IoInformationCircle className="text-4xl" />
          )}
          <div className="flex h-full flex-col justify-between gap-2">
            <span className="font-bold">{alert_option.title}</span>
            <span className="text-xs">{alert_option.message}</span>
          </div>
        </div>
        <IoClose className="cursor-pointer text-2xl" onClick={closeAlert} />
      </div>
      <div
        className={`rounded-b p-0.5 transition-all ${
          alert_option.type === "warning"
            ? "bg-yellow-500"
            : alert_option.type === "danger"
              ? "bg-red-500"
              : alert_option.type === "success"
                ? "bg-green-500"
                : "bg-blue-500"
        }`}
        style={{ width: `${timer}%` }}
      ></div>
    </div>
  );
};

export default Alert;

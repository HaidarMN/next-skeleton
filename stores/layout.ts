import { create } from "zustand";

type LayoutStore = {
  is_loading: boolean;
  breadcrumbs_list: Array<string>;
  alert_option: {
    type: string;
    title: string;
    message: any;
    show: boolean;
  };
};

type LayoutStoreFunc = {
  setIsLoading: (val: boolean) => void;
  setBreadcrumb: (val: Array<string>) => void;
  setAlert: (val: {
    type: "warning" | "danger" | "success" | "info" | "";
    title: string;
    message: any;
    show: boolean;
  }) => void;
  errorHandler: (val: any) => void;
};

export const useLayoutStore = create<LayoutStore & LayoutStoreFunc>(
  (set, get) => ({
    // Variabel
    is_loading: false,
    breadcrumbs_list: [],
    alert_option: {
      type: "",
      title: "",
      message: "",
      show: false,
    },

    // Function
    setIsLoading: (val: boolean) => set(() => ({ is_loading: val })),
    setBreadcrumb: (val: Array<string>) =>
      set(() => ({ breadcrumbs_list: val })),
    setAlert: async (val: {
      type: string;
      title: string;
      message: any;
      show: boolean;
    }) => {
      if (get().alert_option.show) {
        set({
          alert_option: {
            type: "",
            title: "",
            message: "",
            show: false,
          },
        });
      }

      setTimeout(() => {
        set(() => ({
          alert_option: {
            type: val.type,
            title: val.title,
            message: val.message,
            show: val.show,
          },
        }));
      }, 1);
    },
    errorHandler: (val: any) => {
      if (val?.response?.status === 401) {
        get().setAlert({
          type: "warning",
          title: "Unathorized",
          message: "Please check your account or go back to previous page",
          show: true,
        });
      } else if (val?.response?.status === 403) {
        get().setAlert({
          type: "warning",
          title: "Token Expired",
          message: "Please login again",
          show: true,
        });
      } else if (val?.response?.status >= 500) {
        get().setAlert({
          type: "danger",
          title: "Server Issue",
          message: "Please refresh the page or contact us",
          show: true,
        });
      } else {
        get().setAlert({
          type: "danger",
          title: "Network Issue",
          message: "Please check your network and refresh the page",
          show: true,
        });
      }
    },
  }),
);

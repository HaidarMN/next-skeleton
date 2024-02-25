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
    type: string;
    title: string;
    message: any;
    show: boolean;
  }) => void;
};

export const useLayoutStore = create<LayoutStore & LayoutStoreFunc>((set) => ({
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
  setBreadcrumb: (val: Array<string>) => set(() => ({ breadcrumbs_list: val })),
  setAlert: (val: {
    type: string;
    title: string;
    message: any;
    show: boolean;
  }) =>
    set(() => ({
      alert_option: {
        type: val.type,
        title: val.title,
        message: val.message,
        show: val.show,
      },
    })),
}));

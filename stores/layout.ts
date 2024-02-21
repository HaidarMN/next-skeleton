import { create } from "zustand";

type LayoutStore = {
  is_loading: boolean;
  breadcrumbs_list: Array<string>;
  setIsLoading: (val: boolean) => void;
  setBreadcrumb: (val: Array<string>) => void;
};

export const useLayoutStore = create<LayoutStore>((set) => ({
  // Variabel
  is_loading: false,
  breadcrumbs_list: [],

  // Function
  setIsLoading: (val: boolean) => set(() => ({ is_loading: val })),
  setBreadcrumb: (val: Array<string>) => set(() => ({ breadcrumbs_list: val })),
}));

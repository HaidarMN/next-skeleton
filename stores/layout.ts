import { create } from "zustand";

type LayoutStore = {
  is_loading: boolean;
  setIsLoading: (val: boolean) => void;
};

export const useLayoutStore = create<LayoutStore>((set) => ({
  // Variabel
  is_loading: false,

  // Function
  setIsLoading: (val: boolean) => {
    console.log(val);

    set(() => ({ is_loading: val }));
  },
}));

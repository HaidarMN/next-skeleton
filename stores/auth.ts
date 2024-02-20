import { create } from "zustand";

type AuthStore = {
  user: object;
  token: string | null;
  setAuth: (val: {}) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  // Variabel
  user:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "{}")
      : {},
  token:
    typeof window !== "undefined" ? localStorage.getItem("token") || "" : "",

  // Function
  setAuth: (val: any) => {
    localStorage.setItem("user", JSON.stringify(val));
    localStorage.setItem("token", val.token);

    set(() => ({
      user: val,
      token: val.token,
    }));
  },
}));

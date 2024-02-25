// import { cookies } from "next/headers";
import { create } from "zustand";
import Cookies from "js-cookie";

type AuthStore = {
  user: object;
  token: string;
};

type AuthStoreFunc = {
  setAuth: (val: {}) => void;
  getAuth: () => void;
  removeAuth: () => void;
};

export const useAuthStore = create<AuthStore & AuthStoreFunc>((set) => ({
  // Variabel
  user: {},
  token: "",

  // Function
  setAuth: (val: any) => {
    Cookies.set("user", JSON.stringify(val));
    Cookies.set("token", val.token);
    set(() => ({
      user: val,
      token: val.token,
    }));
  },
  getAuth: () => {
    set(() => ({
      user: JSON.parse(Cookies.get("user") || "{}"),
      token: Cookies.get("token"),
    }));
  },
  removeAuth: () => {
    Cookies.remove("user");
    Cookies.remove("token");

    set(() => ({
      user: {},
      token: "",
    }));
  },
}));

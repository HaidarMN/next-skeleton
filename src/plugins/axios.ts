import Cookies from "js-cookie";
import axios from "axios";
import getConfig from "next/config";
import { useRouter } from "next/navigation";

const createAxiosInstance = () => {
  const { publicRuntimeConfig } = getConfig();

  const instance = axios.create({
    baseURL: publicRuntimeConfig.BASE_URL,
  });

  instance.interceptors.request.use(
    (config) => {
      const token = Cookies.get("token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      return config;
    },
    (error) => Promise.reject(error),
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        useRouter().push("/");
      } else if (error.response.status === 403) {
        Cookies.remove("user");
        Cookies.remove("token");
        useRouter().push("/auth/login");
      }
    },
  );

  return instance;
};

const api = createAxiosInstance();

export default api;

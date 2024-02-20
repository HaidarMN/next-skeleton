import axios from "axios";
import getConfig from "next/config";

const createAxiosInstance = () => {
  const { publicRuntimeConfig } = getConfig();

  const instance = axios.create({
    baseURL: publicRuntimeConfig.BASE_URL,
  });

  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
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
        console.log("Unathorized");
        // return redirect("/profil");
        window.location.href = "/auth/login";
      } else if (error.response.status === 403) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.location.href = "/auth/login";
      }
    },
  );

  return instance;
};

const api = createAxiosInstance();

export default api;

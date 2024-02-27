import type { AppProps } from "next/app";
import "../src/styles/globals.css";
import "animate.css";
import { useLayoutStore } from "@/stores/layout";
import { useAuthStore } from "@/stores/auth";
import { useEffect } from "react";
import Cookies from "js-cookie";

// Components
import Spinner from "@/components/global/loader/Spinner";
import Alert from "@/components/global/popUp/Alert";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }: AppProps) => {
  const { is_loading, alert_option, setAlert: setAlert } = useLayoutStore();
  const { getAuth: getAuth } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    getAuth();

    const cookie_user = Cookies.get("user");
    const cookie_token = Cookies.get("token");
    if (!cookie_user && !cookie_token) {
      setAlert({
        type: "warning",
        title: "Token Expired",
        message: "Please login again",
        show: true,
      });
      router.push("/auth/login");
    }
  }, []);

  return (
    <>
      <Component {...pageProps} />
      {is_loading && <Spinner />}
      {alert_option.show && <Alert />}
    </>
  );
};

export default App;

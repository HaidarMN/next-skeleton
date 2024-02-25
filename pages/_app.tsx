import type { AppProps } from "next/app";
import "../src/styles/globals.css";
import { useLayoutStore } from "@/stores/layout";
import { useAuthStore } from "@/stores/auth";
import { useEffect } from "react";

// Components
import Spinner from "@/components/global/loader/Spinner";
import Alert from "@/components/global/popUp/Alert";

const App = ({ Component, pageProps }: AppProps) => {
  const { is_loading, alert_option } = useLayoutStore();
  const { getAuth: getAuth } = useAuthStore();

  useEffect(() => {
    getAuth();
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

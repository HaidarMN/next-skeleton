import type { AppProps } from "next/app";
import "../src/styles/globals.css";
import { useLayoutStore } from "@/stores/layout";
import Spinner from "@/components/global/loader/Spinner";
import { useAuthStore } from "@/stores/auth";
import { useEffect } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  const { is_loading } = useLayoutStore();
  const { getAuth: getAuth } = useAuthStore();

  useEffect(() => {
    getAuth();
  }, []);

  return (
    <>
      <Component {...pageProps} />
      {is_loading && <Spinner />}
    </>
  );
};

export default App;

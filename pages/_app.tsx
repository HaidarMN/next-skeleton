import type { AppProps } from "next/app";
import "../src/styles/globals.css";
import { useLayoutStore } from "@/stores/layout";
import Spinner from "@/components/global/loader/Spinner";

const App = ({ Component, pageProps }: AppProps) => {
  const { is_loading } = useLayoutStore();

  return (
    <>
      <Component {...pageProps} />
      {is_loading && <Spinner />}
    </>
  );
};

export default App;

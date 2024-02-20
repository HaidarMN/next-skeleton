import getConfig from "next/config";
import Head from "next/head";
import { ReactNode } from "react";

type props = {
  title: string;
  children: ReactNode;
};

const AuthLayout = ({ title, children }: props) => {
  const { publicRuntimeConfig } = getConfig();

  return (
    <div className="bg-slate-950 h-screen text-slate-950 flex flex-col items-center justify-center">
      <Head>
        <title>{`${title} - ${publicRuntimeConfig.APP_TITLE}`}</title>
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default AuthLayout;

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
    <div className="flex h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 text-slate-950">
      <Head>
        <title>{`${title} - ${publicRuntimeConfig.APP_TITLE}`}</title>
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default AuthLayout;

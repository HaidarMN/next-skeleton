import getConfig from "next/config";
import Head from "next/head";
import { ReactNode } from "react";

// Components
import Breadcrumb from "@/components/general/Breadcrumb";
import Sidebar from "@/components/general/Sidebar";

type props = {
  title: string;
  children: ReactNode;
};

const MainLayout = ({ title, children }: props) => {
  const { publicRuntimeConfig } = getConfig();

  return (
    <>
      <Head>
        <title>{`${title} - ${publicRuntimeConfig.APP_TITLE}`}</title>
      </Head>
      <div className="flex">
        <Sidebar />
        <main className="ml-[15rem] flex grow flex-col gap-4 p-8 pt-4">
          <Breadcrumb />
          {children}
        </main>
      </div>
    </>
  );
};

export default MainLayout;

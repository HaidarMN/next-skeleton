import MainLayout from "@/layouts/MainLayout";

// Stores
import { useAuthStore } from "@/stores/auth";
import { useLayoutStore } from "@/stores/layout";
import { useEffect } from "react";

const Home = () => {
  const { user } = useAuthStore();
  const { setBreadcrumb: setBreadcrumb } = useLayoutStore();

  useEffect(() => {
    setBreadcrumb(["Dashboard"]);
  }, []);

  return (
    <MainLayout title="Dashboard">
      <h1 className="text-2xl font-bold text-teal-300">
        Welcome Back, {user.username}
      </h1>
    </MainLayout>
  );
};

export default Home;

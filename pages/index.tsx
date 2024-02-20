import AuthLayout from "@/layouts/AuthLayout";

const Home = () => {
  return (
    <AuthLayout title="index">
      <div className="bg-slate-300 p-4 rounded-lg w-96 flex flex-col items-center gap-4">
        <h1 className="font-bold text-2xl">Welcome Back</h1>
      </div>
    </AuthLayout>
  );
};

export default Home;

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthLayout from "@/layouts/AuthLayout";

// Icons
import { MdOutlineEmail } from "react-icons/md";

// Components
import InputText from "@/components/global/input/Text";
import InputPassword from "@/components/global/input/Password";
import api from "@/src/api/axios";

const validationSchema = yup.object({
  username: yup.string().required().label("Username"),
  password: yup.string().required().label("Password"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "kminchelle",
      password: "0lelplR",
    },
    resolver: yupResolver(validationSchema),
  });

  // Variabel

  // Funtion
  const submitData = async (data: object) => {
    try {
      const response = api.post("/auth/login", data);
      console.log((await response).data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthLayout title="Login">
      <div className="flex w-96 flex-col gap-4 rounded-lg bg-slate-300 p-4">
        <h1 className="text-center text-2xl font-bold">Welcome Back</h1>
        <form
          onSubmit={handleSubmit(submitData)}
          className="flex flex-col gap-4"
        >
          <InputText
            name="username"
            icon={<MdOutlineEmail />}
            register={register}
            label="Username"
            placeholder="Enter your username"
            error={errors.username?.message}
            primary
          />
          <InputPassword
            name="password"
            register={register}
            label="Password"
            placeholder="Enter your password"
            error={errors.password?.message}
            primary
          />

          <button
            type="submit"
            className="rounded border border-slate-950 px-4 py-2 font-medium transition-all duration-200 hover:bg-slate-950 hover:text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;

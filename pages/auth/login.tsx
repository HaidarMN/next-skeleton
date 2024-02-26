import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthLayout from "@/layouts/AuthLayout";

// Stores
import { useAuthStore } from "@/stores/auth";
import { useLayoutStore } from "@/stores/layout";

// Icons
import { MdOutlineEmail } from "react-icons/md";

// Components
import InputText from "@/components/global/input/Text";
import InputPassword from "@/components/global/input/Password";
import api from "@/src/api/axios";
import { useRouter } from "next/router";
import { useState } from "react";
import InputCaptcha from "@/components/global/input/Captcha";

const validationSchema = yup.object({
  username: yup.string().required().label("Username"),
  password: yup.string().required().label("Password"),
});

const Login = () => {
  const {
    control,
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
  const router = useRouter();
  const { setAuth: setAuth } = useAuthStore();
  const {
    setIsLoading: setIsLoading,
    setAlert: setAlert,
    errorHandler: errorHandler,
  } = useLayoutStore();
  const [value, setValue] = useState("");
  const [is_captcha_match, setIsCaptchaMatch] = useState(false);

  // Funtion
  const submitData = async (data: object) => {
    try {
      if (!is_captcha_match) {
        return setAlert({
          type: "warning",
          title: "Captcha Not Match",
          message: "Please check if there is a typo",
          show: true,
        });
      }
      setIsLoading(true);
      const response = await api.post("/auth/login", data);
      if (response?.status === 200) {
        setAuth(response.data);
        router.push("/");
        setAlert({
          type: "success",
          title: "Login Success",
          message: "Welcome aboard! You have successfully logged in",
          show: true,
        });
      }
    } catch (error) {
      errorHandler(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout title="Login">
      <div className="flex w-96 flex-col gap-4 rounded-lg bg-slate-300 p-4">
        <h1 className="text-center text-2xl font-bold">Welcome Back</h1>
        {value && <span>{value}</span>}
        <form
          onSubmit={handleSubmit(submitData)}
          className="flex flex-col gap-4"
        >
          <InputText
            name="username"
            icon={<MdOutlineEmail />}
            control={control}
            label="Username"
            placeholder="Enter your username"
            error={errors.username?.message}
            primary
          />
          <InputPassword
            name="password"
            control={control}
            label="Password"
            placeholder="Enter your password"
            error={errors.password?.message}
            passValue={(e) => setValue(e)}
            primary
          />
          <InputCaptcha passValue={(e) => setIsCaptchaMatch(e)} />

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

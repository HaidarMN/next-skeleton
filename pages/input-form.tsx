import MainLayout from "@/layouts/MainLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useEffect } from "react";

// Stores
import { useLayoutStore } from "@/stores/layout";

// Components
import InputText from "@/components/global/input/Text";
import InputNumber from "@/components/global/input/Number";
import InputTextarea from "@/components/global/input/Textarea";
import InputDatepicker from "@/components/global/input/Datepicker";

const validationSchema = yup.object({
  text: yup.string().required().label("Text"),
  number: yup.number().required().label("Number"),
  textarea: yup.string().required().label("Textarea"),
  datepicker: yup.string().required().label("Datepicker"),
});

const InputForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { setIsLoading: setIsLoading, setBreadcrumb: setBreadcrumb } =
    useLayoutStore();

  // Function
  const submitData = (data: object) => {
    try {
      setIsLoading(true);
      const stringify_data = JSON.stringify(data);
      alert(stringify_data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setBreadcrumb(["Input Form"]);
  }, []);

  return (
    <MainLayout title="Input Form">
      <form
        onSubmit={handleSubmit(submitData)}
        className="grid grid-cols-2 gap-4 rounded-lg bg-slate-300 p-4"
      >
        <InputText
          register={register}
          name="text"
          label="Text"
          placeholder="This is a text input"
          error={errors.text?.message}
          primary
        />
        <InputNumber
          register={register}
          name="number"
          label="Number"
          placeholder="This is a number input"
          error={errors.number?.message}
          primary
        />
        <InputTextarea
          register={register}
          name="textarea"
          label="Textarea"
          placeholder="This is a textarea input"
          error={errors.textarea?.message}
          primary
        />
        <InputDatepicker
          register={register}
          name="datepicker"
          label="Datepicker"
          placeholder="This is a datepicker input"
          error={errors.datepicker?.message}
          primary
          time
        />
      </form>
    </MainLayout>
  );
};

export default InputForm;

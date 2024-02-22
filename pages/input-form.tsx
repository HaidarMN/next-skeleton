import MainLayout from "@/layouts/MainLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useEffect, useState } from "react";

// Stores
import { useLayoutStore } from "@/stores/layout";

// Components
import InputText from "@/components/global/input/Text";
import InputNumber from "@/components/global/input/Number";
import InputTextarea from "@/components/global/input/Textarea";
import InputDatepicker from "@/components/global/input/Datepicker";
import InputSelect from "@/components/global/input/Select";

const validationSchema = yup.object({
  text: yup.string().required().label("Text"),
  number: yup.number().required().label("Number"),
  textarea: yup.string().required().label("Textarea"),
  datepicker: yup.string().required().label("Datepicker"),
  select: yup.string().required().label("Select"),
});

const InputForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { setIsLoading: setIsLoading, setBreadcrumb: setBreadcrumb } =
    useLayoutStore();
  const [value, setValue] = useState(null);

  // Variabel
  const options_list = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  // Function
  const submitData = async (data: object) => {
    try {
      setIsLoading(true);
      const stringify_data = JSON.stringify(data);
      alert(stringify_data);
      console.log(data);
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
      {value && <span className="text-white">{value}</span>}
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
        <InputSelect
          control={control}
          name="select"
          label="Select"
          placeholder="This is a select input"
          error={errors.select?.message}
          option={options_list}
          passValue={(e) => setValue(e)}
          primary
        />
        <button type="submit">APAPA</button>
      </form>
    </MainLayout>
  );
};

export default InputForm;

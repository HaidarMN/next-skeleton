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
import InputRadio from "@/components/global/input/Radio";
import InputCheckbox from "@/components/global/input/Checkbox";
import InputFile from "@/components/global/input/File";
import InputToggle from "@/components/global/input/Toggle";

const validationSchema = yup.object({
  text: yup.string().required().label("Text"),
  number: yup.number().required().label("Number"),
  textarea: yup.string().required().label("Textarea"),
  datepicker: yup.string().required().label("Datepicker"),
  select: yup.array().required().label("Select"),
  radio: yup.string().required().label("Radio"),
  checkbox: yup.array().required().label("Checkbox"),
  file: yup.object().required().label("File"),
  toggle: yup.boolean().required().label("Toggle"),
});

const InputForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      text: "text",
      number: 123,
      textarea: "textarea",
      datepicker: "02-07-2024 11:26",
      select: ["strawberry"],
      radio: "vanilla",
      checkbox: ["strawberry"],
      toggle: true,
    },
    resolver: yupResolver(validationSchema),
  });
  const { setIsLoading: setIsLoading, setBreadcrumb: setBreadcrumb } =
    useLayoutStore();

  // Variabel
  const options_list = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [value, setValue] = useState(null);

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
      <form
        onSubmit={handleSubmit(submitData)}
        className="grid grid-cols-2 gap-4 rounded-lg bg-slate-300 p-4"
      >
        {/* {value} */}
        <InputText
          control={control}
          name="text"
          label="Text"
          placeholder="This is a text input"
          error={errors.text?.message}
          primary
        />
        <InputNumber
          control={control}
          name="number"
          label="Number"
          placeholder="This is a number input"
          error={errors.number?.message}
          primary
        />
        <InputTextarea
          control={control}
          name="textarea"
          label="Textarea"
          placeholder="This is a textarea input"
          error={errors.textarea?.message}
          primary
        />
        <InputDatepicker
          control={control}
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
          options={options_list}
          multi
          primary
        />
        <InputRadio
          control={control}
          name="radio"
          label="Radio"
          options={options_list}
          error={errors.radio?.message}
          primary
        />
        <InputCheckbox
          control={control}
          name="checkbox"
          label="Checkbox"
          options={options_list}
          error={errors.checkbox?.message}
          primary
        />
        <InputFile
          control={control}
          name="file"
          label="File"
          error={errors.file?.message}
          primary
        />
        <InputToggle
          control={control}
          name="toggle"
          label="Toggle"
          error={errors.toggle?.message}
          passValue={(e) => console.log(e)}
          primary
        />
        <button type="submit">APAPA</button>
      </form>
    </MainLayout>
  );
};

export default InputForm;

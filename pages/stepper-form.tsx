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
import Stepper from "@/components/global/stepper";

const validationSchema = yup.object({
  text: yup.string().required().label("Text"),
  number: yup.number().required().label("Number"),
  textarea: yup.string().required().label("Textarea"),
  datepicker: yup.string().required().label("Datepicker"),
  select: yup.string().required().label("Select"),
});

const StepperForm = () => {
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
    setBreadcrumb(["Stepper Form"]);
  }, []);

  const steps = [
    {
      stepNumber: 1,
      content: (
        <div className="grid grid-cols-1 gap-4 rounded-lg bg-slate-300 p-4 md:grid-cols-2">
          form 1
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
        </div>
      ),
    },
    {
      stepNumber: 2,
      content: (
        <div className="grid grid-cols-1 gap-4 rounded-lg bg-slate-300 p-4 md:grid-cols-2">
          form 2
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
        </div>
      ),
    },
    {
      stepNumber: 3,
      content: (
        <div className="grid grid-cols-1 gap-4 rounded-lg bg-slate-300 p-4 md:grid-cols-2">
          form 3
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
        </div>
      ),
    },
  ];
  return (
    <MainLayout title="Input Form">
      {value && <span className="text-white">{value}</span>}
      <form onSubmit={handleSubmit(submitData)}>
        <Stepper steps={steps} />
      </form>
    </MainLayout>
  );
};

export default StepperForm;

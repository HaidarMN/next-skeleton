import { useEffect, useState } from "react";
import { IoRefresh } from "react-icons/io5";
import InputText from "./Text";

type props = {
  passValue: (e: any) => void;
};

const InputCaptcha = ({ passValue }: props) => {
  // Variabel
  const [captcha, setCaptcha] = useState("");
  const [decoration_class, setDecorationClass] = useState("");
  const [style_class, setSytleClass] = useState("");
  const [type_class, setTypeClass] = useState("");

  // Fucntion
  const generateCaptcha = () => {
    setCaptcha("");
    const randomchar =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#&";
    const decoration = ["underline", "line-through"];
    const style = ["italic", "not-italic"];
    const decoration_type = [
      "decoration-solid",
      "decoration-double",
      "decoration-dotted",
      "decoration-dashed",
      "decoration-wavy",
    ];

    for (let i = 0; i < 5; i++) {
      setCaptcha(
        (prevVal) =>
          (prevVal += randomchar.charAt(Math.random() * randomchar.length)),
      );
    }

    // Generate Class
    const random_decoration = Math.floor(Math.random() * decoration.length);
    const random_style = Math.floor(Math.random() * style.length);
    const random_decoration_type = Math.floor(
      Math.random() * decoration_type.length,
    );

    // Add classes
    setDecorationClass(decoration[random_decoration]);
    setSytleClass(style[random_style]);
    setTypeClass(decoration_type[random_decoration_type]);
  };
  const checkInputIsMatchCaptcha = (e: string) => {
    if (e === captcha) {
      passValue(true);
    } else {
      passValue(false);
    }
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full flex-row items-center gap-2 text-slate-950">
        <span
          className={`h-10 w-4/5 select-none rounded border border-slate-950 bg-white px-4 py-2 text-center text-xl font-semibold tracking-[.25em] ${decoration_class} ${style_class} ${type_class}`}
        >
          {captcha}
        </span>
        <IoRefresh
          onClick={generateCaptcha}
          className="h-10 w-1/5 cursor-pointer rounded border border-slate-950 bg-white px-4 py-2"
        />
      </div>

      <InputText
        name="captcha-input"
        passValue={(e) => checkInputIsMatchCaptcha(e)}
      />
    </div>
  );
};

export default InputCaptcha;

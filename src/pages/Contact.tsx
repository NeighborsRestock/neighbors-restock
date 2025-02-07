import FloatingLabelInput from "@/components/FloatingInput/FloatingInput";
import Icons from "@/components/Icons/Icons";
import { ParallaxHero } from "@/components/ParallaxHero/ParallexHero";
import { testBorder } from "@/config/constants";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const Contact = () => {
  const [value, setValue] = useState("");
  const [isSubmitActive, setIsSubmitActive] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    if (e.target.value !== "" && !isSubmitActive) {
      setIsSubmitActive(true);
    } else if (e.target.value === "" && isSubmitActive) {
      setIsSubmitActive(false);
    }
  };

  return (
    <ParallaxHero>
      <main className=" w-full h-full font-sans p-[100px]">
        <section className="size-full">
          <form
            action=""
            className="size-full flex *:flex-1 gap-[7vw] justify-between items-center"
          >
            <section className="*:mb-[20px] h-full flex flex-col justify-evenly">
              <FloatingLabelInput id={"Name"} label={"Name"} />
              <FloatingLabelInput
                id={"Email"}
                type="email"
                // pattern=".+@example\.com"
                label={"Email"}
              />
              <FloatingLabelInput id={"Company"} label={"Company"} />
              <FloatingLabelInput id={"Phone"} type="tel" label={"Phone"} />
            </section>
            <section
              className={`${testBorder()} text-2xl font-exo h-full flex rounded-[35px]`}
            >
              <textarea
                onChange={handleChange}
                className="h-full w-full focus:outline-none resize-none bg-transparent p-5"
                name="Message"
                value={value}
                placeholder="Message Us"
              />
              <div className="h-[70%] self-center w-[50px] relative overflow-hidden">
                <button
                  className={cn(`${isSubmitActive ? "bg-green-500 left-0" : "left-[100%]"} 
                    transition-transform transition-all px-[2px] duration-300 ease-in-out bg-blue-600 rounded-l-[35px]
                    size-full absolute`)}
                >
                  <Icons
                    iconName={"SUBMIT"}
                    className={`size-auto`}
                  />
                </button>
              </div>
            </section>
          </form>
        </section>
      </main>
    </ParallaxHero>
  );
};

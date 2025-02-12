import FloatingLabelInput from "@/components/FloatingInput/FloatingInput";
import Icons from "@/components/Icons/Icons";
import { ParallaxHero } from "@/components/ParallaxHero/ParallexHero";
import { CONTACT_US_SUBTEXT, CONTACT_US_TITLE } from "@/config/constants";
import useContactForm from "@/hooks/useContactForm";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const Contact = () => {
  const [value, setValue] = useState("");
  const [isSubmitActive, setIsSubmitActive] = useState(false);
  const { handleFormChange, handleFormSubmit } = useContactForm();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    if (e.target.value !== "" && !isSubmitActive) {
      setIsSubmitActive(true);
    } else if (e.target.value === "" && isSubmitActive) {
      setIsSubmitActive(false);
    }
  };

  return (
    <main className="min-h-screen">
      <ParallaxHero>
        <section className="flex flex-col desktop:h-screen size-full font-sans px-[100px] pb-[150px] pt-[75px] tablet:pt-[20px] mobile:pt-[15px] mobile:px-[40px]">
          <section className="text-center py-[50px]">
            <h1 className="text-4xl tablet:text-2xl font-exo pb-[20px] font-semibold">
              {CONTACT_US_TITLE}
            </h1>
            <h4 className="font-exo text-xl">{CONTACT_US_SUBTEXT}</h4>
          </section>
          <section className="size-full">
            <form
              action=""
              className="size-full flex *:flex-1 gap-[7vw] tablet:flex-col justify-between items-center"
            >
              <section className="*:mb-[20px] tablet:w-full h-full flex flex-col justify-evenly">
                <FloatingLabelInput
                  onFieldChange={handleFormChange}
                  id={"Name"}
                  label={"Name"}
                />
                <FloatingLabelInput
                  onFieldChange={handleFormChange}
                  id={"Email"}
                  type="email"
                  label={"Email"}
                />
                <FloatingLabelInput
                  onFieldChange={handleFormChange}
                  id={"Company"}
                  label={"Company"}
                />
                <FloatingLabelInput
                  onFieldChange={handleFormChange}
                  id={"Phone"}
                  type="tel"
                  label={"Phone"}
                />
              </section>
              <section className="text-2xl h-full tablet:text-[20px] tablet:w-full border-white border-[1px] border-solid font-exo h-full flex rounded-[35px] overflow-hidden">
                <textarea
                  onChange={(e) => handleFormChange(e, () => handleChange(e))}
                  className="size-full tablet:h-[300px] focus:outline-none resize-none bg-transparent p-5"
                  name="Message"
                  value={value}
                  placeholder="Message Us"
                />
                <div className="h-full min-h-[170px] self-center w-[50px] relative">
                  <button
                    onClick={handleFormSubmit}
                    className={cn(`${isSubmitActive ? "bg-green-500 left-0 rounded-l-[500%]" : "left-[100%]"} 
                    transition-transform transition-all px-[2px] duration-300 ease-in-out 
                    bg-blue-600 hover:bg-blue-800
                    size-full absolute flex justify-center items-center`)}
                  >
                    <Icons
                      iconName={"SUBMIT"}
                      className={`size-[30px] *:size-full`}
                    />
                  </button>
                </div>
              </section>
            </form>
          </section>
        </section>
      </ParallaxHero>
    </main>
  );
};

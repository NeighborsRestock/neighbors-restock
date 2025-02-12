import FloatingLabelInput from "@/components/FloatingInput/FloatingInput";
import Icons from "@/components/Icons/Icons";
import { ParallaxHero } from "@/components/ParallaxHero/ParallexHero";
import { CONTACT_US_SUBTEXT, CONTACT_US_TITLE } from "@/config/constants";
import useDeviceSize from "@/hooks/useDeviceSize";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const Contact = () => {
  const [value, setValue] = useState("");
  const [isSubmitActive, setIsSubmitActive] = useState(false);
  const deviceWidth = useDeviceSize()
  const isDesktop = deviceWidth === 'desktop' 

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
        <section className="h-auto flex flex-col size-full font-sans tablet:px-[25px] px-[100px] pb-[150px] pt-[75px]">
          <section className="text-center py-[50px]">
            {isDesktop && <h1 className="text-4xl font-exo pb-[20px] font-semibold">
              {CONTACT_US_TITLE}
            </h1>}
            <h4 className="font-exo text-xl">{CONTACT_US_SUBTEXT}</h4>
          </section>
          <section className="size-full">
            <form
              action=""
              className="size-full tablet:flex-col flex *:flex-1 gap-[7vw] justify-between items-center"
            >
              <section className="*:mb-[20px] tablet:w-full h-full flex flex-col justify-evenly">
                <FloatingLabelInput id={"Name"} label={"Name"} />
                <FloatingLabelInput
                  id={"Email"}
                  type="email"
                  label={"Email"}
                />
                <FloatingLabelInput id={"Company"} label={"Company"} />
                <FloatingLabelInput id={"Phone"} type="tel" label={"Phone"} />
              </section>
              <section className="text-2xl tablet:text-[17px] tablet:size-full border-white border-[1px] border-solid font-exo h-full flex rounded-[35px] overflow-hidden">
                <textarea
                  onChange={handleChange}
                  value={value}
                  name="Message"
                  className="w-full h-full focus:outline-none resize-none bg-transparent tablet:px-2 p-5"
                  placeholder="Message Us"
                />
                <div className="h-full min-h-[170px] self-center w-[50px] tablet:w-[35px] relative">
                  <button
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

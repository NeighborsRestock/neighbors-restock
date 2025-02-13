import FloatingLabelInput from "@/components/FloatingInput/FloatingInput";
import Icons from "@/components/Icons/Icons";
import { ParallaxHero } from "@/components/ParallaxHero/ParallexHero";
import { CONTACT_US_SUBTEXT, CONTACT_US_TITLE } from "@/config/constants";
import { CONTACT_FORM_NAME } from "@/hooks/types";
import useContactForm from "@/hooks/useContactForm";
import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";

export const Contact = () => {
  const [activeErrorState, setActiveErrorState] = useState<
    "border-[red]" | "border-white"
  >("border-white");
  const [isSubmitActive, setIsSubmitActive] = useState(false);
  const { handleFormChange, handleFormSubmit, allEmptyFields, state } =
    useContactForm();

  const hasMessage = useMemo(
    () => allEmptyFields.includes("message"),
    [allEmptyFields]
  );

  useEffect(() => {
    setIsSubmitActive(Object.values(state).some(value => Boolean(value)))
  }, [state])

  return (
    <main className="min-h-screen">
      <ParallaxHero>
        <section className="flex flex-col desktop:h-screen size-full font-sans px-[60px] pb-[150px] pt-[75px] tablet:pt-[20px] mobile:pt-[15px] mobile:px-[40px]">
          <section className="text-center py-[50px]">
            <h1 className="text-4xl tablet:text-2xl font-exo pb-[20px] font-semibold">
              {CONTACT_US_TITLE}
            </h1>
            <h4 className="font-exo text-xl">{CONTACT_US_SUBTEXT}</h4>
          </section>
          <section className="size-full">
            <form
              action=""
              className={`size-full
                flex *:flex-1 gap-[7vw]
                justify-between items-center 
                tablet:flex-col`}
            >
              <section
                className={`*:mb-[20px] tablet:w-full h-full flex flex-col justify-evenly`}
              >
                {CONTACT_FORM_NAME.map((name, idx) => {
                  if (name === "message") return null;
                  const temp = `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
                  return (
                    <FloatingLabelInput
                      value={state[name]}
                      key={`${name}--${idx}`}
                      type={
                        name === "phone"
                          ? "tel"
                          : name === "email"
                            ? "email"
                            : "text"
                      }
                      onFieldChange={handleFormChange}
                      id={name}
                      className={`${allEmptyFields.includes(name) && activeErrorState}`}
                      isSubmitActive={isSubmitActive}
                      setIsSubmitActive={setIsSubmitActive}
                      label={temp}
                    />
                  );
                })}
              </section>
              <section
                className={cn(`
                text-2xl h-full
                ${hasMessage && activeErrorState}
                tablet:text-[20px] tablet:w-full  
                border-[1px] border-solid font-exo h-full 
                flex rounded-[35px] overflow-hidden`)}
              >
                <textarea
                  onChange={(e) => handleFormChange(e)}
                  className={
                    "size-full tablet:h-[300px] focus:outline-none resize-none bg-transparent p-5"
                  }
                  name="Message"
                  value={state.message}
                  placeholder="Message Us"
                />
                <div className="h-full min-h-[170px] self-center w-[50px] relative">
                  <button
                    onClick={(e) =>
                      handleFormSubmit(
                        e,
                        () => {
                          setIsSubmitActive(false);
                          setActiveErrorState("border-white");
                        },
                        () => setActiveErrorState("border-[red]")
                      )
                    }
                    className={cn(`${isSubmitActive ? "left-0 rounded-l-[50%]" : "left-[100%]"} 
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

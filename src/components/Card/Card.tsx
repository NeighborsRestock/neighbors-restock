import { CardInfo as CardInfoProps } from "@/config/types";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export const Card = ({ title, bodyText }: CardInfoProps) => {
  const [isExpanded, setIsExpand] = useState(false);
  const handleExpanded = () => setIsExpand(!isExpanded);

  return (
    <div
      className={`w-[450px] ${
        isExpanded ? "h-[100px]" : "h-0"
      } overflow-hidden relative mr-[15px] max-h-[1000px] pb-[35px] pt-[20px] px-[30px] h-auto bg-slate-200 text-left border-solid border-[red] border-[3px]`}
    >
      <section className="flex justify-between items-center flex-nowrap">
        <h2
          className={
            "text-blue-500 lg:text-xl md:text-l sm:text-[20px] justify-self-start font-bold tracking-tight"
          }
        >
          {title}
        </h2>
        <button onClick={handleExpanded}>
          <ArrowRight
            className={`${
              isExpanded ? "rotate-90" : "-rotate-90"
            } h-6 w-6 text-blue-500 transition-transform group-hover:translate-x-1"`}
          />
        </button>
      </section>
      <p
        className={`text-gray-600 text-xl leading-relaxed mt-[45px] overflow-hidden`}
      >
        {bodyText}
      </p>
    </div>
  );
};

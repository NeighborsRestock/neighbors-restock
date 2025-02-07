import { CardInfo as CardInfoProps } from "@/config/types";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export const Card = ({ title, bodyText }: CardInfoProps) => {
  const [isExpanded, setIsExpand] = useState(false);
  const handleExpanded = () => setIsExpand(!isExpanded);

  return (
    <button
      onClick={handleExpanded}
      className={`w-[30%] group shadow-none focus:outline-blue-500 focus:border-none transition duration-400 ease-in-out overflow-hidden relative mr-[15px] max-h-[1000px] py-[35px] px-[30px] h-auto bg-slate-200 text-left`}
    >
      <section className="flex group justify-between items-start flex-nowrap">
        <h2 className="transition text-[#0e1b23] group-hover:text-blue-500 duration-400 ease-in-out text-clamp font-bold text-nowrap tracking-tight">
          {title}
        </h2>
        <span>
          <ArrowRight
            className={cn(
              "size-6 transition-transform group-hover:text-blue-500 text-[#0e1b23] duration-400 ease-in-out",
              {
                "rotate-180 group-hover:-translate-x-1": !isExpanded,
                "rotate-90": isExpanded,
              }
            )}
          />
        </span>
      </section>
      <p
        className={cn(
          " text-gray-600 self-end transition-all duration-700 ease-in-out text-xl leading-relaxed overflow-hidden",
          {
            "max-h-[300px] pt-[30px] opacity-100": isExpanded,
            "max-h-0 pt-[0px] opacity-0": !isExpanded,
          }
        )}
      >
        {bodyText}
      </p>
    </button>
  );
};

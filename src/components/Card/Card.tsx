import { CardInfo as CardInfoProps } from "@/config/types";

export const Card = ({ title, bodyText }: CardInfoProps) => {
  return (
    <div className="w-[450px] mr-[15px] py-[35px] px-[30px] h-auto bg-slate-200 text-left border-solid border-[red] border-[3px]">
      <h2
        className={
          "text-blue-500 lg:text-xl md:text-l sm:text-[20px] font-bold tracking-tight"
        }
      >
        {title}
      </h2>
      <p className={"text-gray-600 text-xl leading-relaxed"}>{bodyText}</p>
    </div>
    // <ArrowRight className="h-6 w-6 text-blue-500 transition-transform group-hover:translate-x-1" />
  );
};

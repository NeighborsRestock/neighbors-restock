import { Waves } from "../Waves";
import { EMAIL, PHONE_NUMBER } from "@/config/constants";

export const Footer = () => {
  return (
    <footer className="[&>*:not(:nth-last-child(-n+2))]:mb-[30px] w-screen h-[80vh] px-[25px] pt-[90px] bg-[#0e1b23] relative self-end flex flex-col items-center justify-start overflow-hidden">
      <div className="border-b-[0.5px] py-[30px] mb-[40px] w-[500px] text-center">
        <p className="font-lato text-[30px] font-[500]">GET IN TOUCH</p>
      </div>
      <p className="font-exo text-[20px]">{EMAIL}</p>
      <p className="font-exo text-[20px]">{PHONE_NUMBER}</p>
      <p className="font-lato text-[20px]">
        Copyright &copy;2025 NeighborsRestock, All rights reserved.
      </p>
      <Waves color="#04141d" />
    </footer>
  );
};

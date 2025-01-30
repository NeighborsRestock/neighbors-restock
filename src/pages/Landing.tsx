import React from "react";
import { HoveredButton } from "@/components/HoveredButton/HoveredButton";
import {
  CARD_INFO,
  EMAIL,
  HERO_IMAGE_BUTTON_TEXT,
  PHONE_NUMBER,
} from "@/config/constants";
import { Card } from "@/components/Card";
import { Waves } from "@/components/Waves";

export const Landing = () => {
  const verticalAlignText = "800px";
  return (
    <>
      <main className={`w-screen h-[${verticalAlignText}]`}>
        <section
          className={`bg-gray-700 w-screen h-[93vh] text-[25px] font-bold flex justify-center items-center`}
        >
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <HoveredButton text={HERO_IMAGE_BUTTON_TEXT} />
        </section>
        <section className="w-screen flex justify-around items-center py-[100px] flex-col px-[25px] bg-slate-100">
          <p className="text-gray-700 text-[18px] font-[550] mb-[20px] w-[70%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus totam
            consectetur quas quidem consequatur error cum reprehenderit laborum
            unde rem.
          </p>
          <h3 className="text-[45px] mb-[30px] font-exo text-[#212529] font-[700]">
            Here's About US
          </h3>
          <div className="flex justify-center items-start ">
            {CARD_INFO.map((info) => {
              return <Card {...info} />;
            })}
          </div>
        </section>
      </main>
      <footer className="[&:not(:nth-last-child(-n+1))]:mb-[20px] w-screen h-[80vh] px-[25px] pt-[90px] bg-[#0e1b23] relative items-self-end flex flex-col items-center justify-start overflow-hidden">
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
    </>
  );
};

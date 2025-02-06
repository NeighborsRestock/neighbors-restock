import React from "react";
import { HoveredButton } from "@/components/HoveredButton/HoveredButton";
import { CARD_INFO, HERO_IMAGE_BUTTON_TEXT } from "@/config/constants";
import { Card } from "@/components/Card";

export const Landing = () => {
  return (
    <main className="w-screen">
      <section className="bg-gray-700 w-screen h-[93vh] text-[25px] font-bold flex justify-center items-center">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <HoveredButton text={HERO_IMAGE_BUTTON_TEXT} />
      </section>
      <section className="w-screen h-auto flex justify-around items-center py-[100px] flex-col px-[25px] bg-slate-100">
        <p className="text-gray-700 text-[18px] font-[550] mb-[20px] w-[70%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus totam
          consectetur quas quidem consequatur error cum reprehenderit laborum
          unde rem.
        </p>
        <h3 className="text-[45px] mb-[30px] font-exo text-[#212529] font-[700]">
          Here's About US
        </h3>
        <div className="flex justify-center items-start">
          {CARD_INFO.map((info, idx) => {
            return <Card key={`0${idx}`} {...info} />;
          })}
        </div>
      </section>
    </main>
  );
};

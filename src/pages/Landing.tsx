import React from "react";
import { HoveredButton } from "@/components/HoveredButton/HoveredButton";
import { CARD_INFO, HERO_IMAGE_BUTTON_TEXT } from "@/config/constants";
import { Card } from "@/components/Card";

export const Landing = () => {
  const verticalAlignText = "800px";
  return (
    <main className={`w-screen h-screen h-[${verticalAlignText}]`}>
      <section
        className={`bg-gray-700 w-screen h-[500px] text-[25px] font-bold flex justify-center items-center`}
      >
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <HoveredButton text={HERO_IMAGE_BUTTON_TEXT} />
      </section>
      <section className="w-screen flex justify-around items-center py-[100px] flex-col px-[25px] bg-slate-100">
        <p className="text-[#77777] text-[18px] mb-[20px] w-[70%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus totam
          consectetur quas quidem consequatur error cum reprehenderit laborum
          unde rem.
        </p>
        <h3 className="text-[45px] mb-[30px]">Here's About US</h3>
        <div className="flex justify-center items-center">
          {CARD_INFO.map((info) => {
            return <Card {...info} />;
          })}
        </div>
      </section>
    </main>
  );
};

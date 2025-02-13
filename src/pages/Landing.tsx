import React from "react";
import {
  ABOUT_US_SUMMARY,
  ABOUT_US_TITLE,
  CARD_INFO,
  HERO_TEXT,
} from "@/config/constants";
import { Card } from "@/components/Card";
import { ParallaxHero } from "@/components/ParallaxHero/ParallexHero";

export const Landing = () => {
  return (
    <main className="w-screen">
      <ParallaxHero className="h-[95vh]">
        <section className="pb-[100px]">
          <h1 className="text-4xl font-exo md:text-6xl mb-4">{HERO_TEXT}</h1>
        </section>
      </ParallaxHero>
      <section className="w-screen h-auto flex justify-around items-center py-[100px] flex-col px-[25px] bg-slate-100">
        <p className="text-gray-700 text-[18px] tablet:text-center tablet:w-[90%] font-[550] mb-[20px] w-[70%]">
          {ABOUT_US_SUMMARY}
        </p>
        <h3 className="text-[45px] tablet:text-center mb-[30px] font-exo text-[#212529] font-[700]">
          {ABOUT_US_TITLE}
        </h3>
        <div className="flex justify-center items-start tablet:flex-col tablet:mb-[5px]">
          {CARD_INFO.map((info, idx) => {
            return <Card key={`0${idx}`} {...info} />;
          })}
        </div>
      </section>
    </main>
  );
};

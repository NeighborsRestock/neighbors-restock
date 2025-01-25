import React from "react";
import { HoveredButton } from "@/components/HoveredButton/HoveredButton";
import { CARD_INFO, HERO_IMAGE_BUTTON_TEXT } from "@/config/constants";
import { Card } from "@/components/Card/Card.partials";
import { AboutUsCard } from "@/components/Card";

export const Landing = () => {
  const verticalAlignText = "800px";
  return (
    <main
      className={`border-solid border-[red] border-4 w-screen h-screen h-[${verticalAlignText}]`}
    >
      <section
        className={`bg-gray-700 w-screen h-[500px] text-[25px] font-bold flex justify-center items-center`}
      >
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <HoveredButton text={HERO_IMAGE_BUTTON_TEXT} />
      </section>
      <section className="w-screen ">
        <div className="flex justify-center items-center">
          {CARD_INFO.map((info) => {
            return <AboutUsCard {...info} />;
          })}
        </div>
      </section>
    </main>
  );
};

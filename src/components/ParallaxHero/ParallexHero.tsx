import type React from "react";
import { useEffect, useState } from "react";
import HeroImage from "@/assets/hero.jpg";

interface ParallaxHeroProps {
  className?: string;
  imageUrl?: string;
  children: React.ReactNode;
}

export const ParallaxHero: React.FC<ParallaxHeroProps> = ({
  imageUrl = HeroImage,
  className,
  children,
}) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () =>
      setOffsetY(
        window.scrollY ||
          window.pageYOffset ||
          document.documentElement.scrollTop
      );
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`relative h-[95vh] overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
          transform: `translateY(${offsetY * 0.25}px)`,
        }}
      />
      <div className="absolute inset-0 bg-[#0e1b23] opacity-80" />
      <article className="relative h-full flex items-center justify-center text-white">
        {children}
      </article>
    </section>
  );
};

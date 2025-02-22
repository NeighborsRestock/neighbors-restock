import { BrandImage } from "@/components/BrandImage/BrandImage";
import { BRANDS_TITLE } from "@/config/constants";
import { useEffect, useState } from "react";

export const BrandsWeCarry = () => {
  const images = import.meta.glob("/src/assets/partner_logos/*.{png,jpg,jpeg}");

  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  useEffect(() => {
    Promise.all(
      Object.values(images).map((importImage) => importImage() as Promise<{ default: string }>)
    ).then((modules) => {
      setLoadedImages(modules.map((module) => module.default));
    });
  }, []);

  return (
    <main className="bg-slate-100 w-screen min-h-screen h-auto py-[120px] flex justify-start items-center flex-col">
      <h1 className="border-b-[3px] font-semibold pb-[25px] mb-[20px] text-nowrap text-center text-[#212529] font-exo text-clamp-1 w-[60%] border-slate-">
        {BRANDS_TITLE}
      </h1>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] px-5 h-auto gap-[20px] place-items-center w-[90%]">
        {loadedImages.map((imageUrl, idx) => (
          <BrandImage
            src={imageUrl}
            alt='Brand Logo'
            key={`NRPartner--0${idx}`}
          />
        ))}
      </section>
    </main>
  );
};

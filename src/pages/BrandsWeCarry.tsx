import { BrandImage } from "@/components/BrandImage/BrandImage";
import { BRANDS, BRANDS_TITLE } from "@/config/constants";

export const BrandsWeCarry = () => {
  return (
    <main className="bg-slate-100 w-screen min-h-screen h-auto py-[120px] flex justify-start items-center flex-col">
      <h1 className="border-b-[3px] font-semibold pb-[25px] mb-[20px] text-nowrap text-center text-[#212529] font-exo text-clamp-1 w-[60%] border-slate-">
        {BRANDS_TITLE}
      </h1>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] px-5 h-auto gap-[20px] place-items-center w-[90%]">
        {BRANDS.map(({ imageUrl, key }, idx) => (
          <BrandImage
            src={`src/assets/brands/${imageUrl}`}
            alt={key}
            key={`${key}--${idx}`}
          />
        ))}
      </section>
    </main>
  );
};

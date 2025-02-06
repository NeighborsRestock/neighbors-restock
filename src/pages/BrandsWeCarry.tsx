import { BrandImage } from "@/components/BrandImage/BrandImage";
import { BRANDS, testBorder } from "@/config/constants";

export const BrandsWeCarry = () => {
  return (
    <main className="bg-slate-100 w-screen h-screen flex justify-start items-center flex-col">
      <h1 className="border-b-[3px] font-semibold pb-[25px] mb-[20px] pt-[110px] text-nowrap text-center text-[#212529] font-exo text-clamp-1 w-[60%] border-slate-">
        Our Partners
      </h1>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] min-h-screen gap-[7px] place-items-center w-[80%]">
        {BRANDS.map(({ imageUrl, key }, idx) => (
          <BrandImage
            // containerClassName={testBorder()}
            src={`src/assets/brands/${imageUrl}`}
            alt={key}
            key={`${key}--${idx}`}
          />
        ))}
      </section>
    </main>
  );
};

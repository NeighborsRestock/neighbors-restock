import { BrandImage } from "@/components/BrandImage/BrandImage";
import { BRANDS } from "@/config/constants";

export const BrandsWeCarry = () => {
  const [{ imageUrl }] = BRANDS;
  return (
    <main className="bg-slate-100 w-screen h-screen flex justify-start items-center flex-col border-[red] border-2 border-solid">
      <h1 className="border-b-[3px] font-semibold pb-[25px] pt-[110px] text-nowrap text-center text-[#212529] font-exo text-clamp-1 w-[60%] border-slate-">
        Our Partners
      </h1>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] w-[60%] h-full overflow-hidden">
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

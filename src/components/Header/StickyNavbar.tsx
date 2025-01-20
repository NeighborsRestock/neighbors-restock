import React from "react";

export const StickyNavbar = () => {
  return (
    <nav className="w-full sticky top-0 px-14 py-3 flex justify-between items-center bg-[#0e1b23]">
      <h1 className="text-[35px]">
        Neighbors<span className="text-blue-600">Restock</span>
      </h1>
      <ul className="*:list-none text-[16px] tracking-[3px] text-nowrap uppercase flex justify-between items-center md:w-[auto] lg:w-[450px] border-pink-400 border-solid border-[2px]">
        <li>About Us</li>
        <li>Brands We Carry</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

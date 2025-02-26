import useDeviceSize from "@/hooks/useDeviceSize";
import Icons from "../Icons/Icons";
import { NavLinks } from "./NavLinks";
import { useEffect, useState } from "react";

export const StickyNavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const deviceSize = useDeviceSize();

  const handleCollapsed = () => {
    if (deviceSize === "desktop") return false;
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (deviceSize === "desktop") {
      setIsCollapsed(false);
    }
  }, [deviceSize]);

  return (
    <nav
      className={`${isCollapsed ? "masked" : ""} w-full z-20 font-lato sticky top-0 tablet:px-[10px] px-14 tablet:py-[4px] py-3 flex justify-between items-center bg-[#0e1b23]`}
    >
      <a href="/" style={{ all: "unset" }}>
        <h1 className="text-[35px] tablet:text-[20px] cursor-pointer">
          Neighbors<span className="text-blue-600">Restock</span>
        </h1>
      </a>
      {deviceSize === "desktop" ? (
        <NavLinks
          onClickToClose={() => setIsCollapsed(false)}
          className=" ml-[20px] uppercase flex justify-between items-center w-[500px]"
        />
      ) : (
        <div className="z-40 relative">
          <button onClick={handleCollapsed}>
            <Icons iconName="MENU" className="size-[37px] *:size-full" />
          </button>
          <NavLinks
            onClickToClose={() => setIsCollapsed(false)}
            className={`
              overflow-hidden z-40
              transition-all duration-500 ease-in-out *:mb-[10px]
              *:transition-all *:duration-300 *:ease-in-out 
              ${isCollapsed ? "h-[150px] *:opacity-1" : "h-[0px] *:opacity-0"} 
              pr-[10px] border-r-blue-500 border-solid 
              border-r-2 absolute right-0 
              flex flex-col justify-between text-nowrap text-right 
              top-[50px]`}
          />
        </div>
      )}
    </nav>
  );
};

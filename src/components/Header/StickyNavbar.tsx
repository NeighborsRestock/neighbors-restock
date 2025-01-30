import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../config/constants";

export const StickyNavbar = () => {
  return (
    <nav className="w-full z-20 font-exo font-lato sticky top-0 px-14 py-3 flex justify-between items-center bg-[#0e1b23]">
      <h1 className="text-[35px]">
        Neighbors<span className="text-blue-600">Restock</span>
      </h1>
      <ul className="*:list-none hover:*:text-blue-500 text-[16px] tracking-[3px] text-nowrap uppercase flex justify-between items-center w-[500px]">
        <Link to={`${APP_ROUTES.LANDING}`}>About us</Link>
        <Link to={`${APP_ROUTES.BRANDS}`}>Brands We Carry</Link>
        <Link to={`${APP_ROUTES.CONTACT}`}>Contact</Link>
      </ul>
    </nav>
  );
};

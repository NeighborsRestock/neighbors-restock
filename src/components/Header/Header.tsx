import { EMAIL, PHONE_NUMBER } from "../../config/constants";
import Icons from "../Icons/Icons";
import { ContactBar } from "./ContactBar";
import { StickyNavbar } from "./StickyNavbar";

export const Header = () => {
  return (
    <>
      <ContactBar />
      <StickyNavbar />
    </>
  );
};

import { EMAIL, PHONE_NUMBER } from "../../config/constants";
import Icons from "../Icons/Icons";

export const ContactBar = () => {
  return (
    <header className="w-screen h-auto">
      <section className="bg-blue-800 flex justify-end items-center">
        <a href={`tel: + ${PHONE_NUMBER}`}>
          <Icons iconName="PHONE" />
        </a>
        <a href={`mailto: + ${EMAIL}`} target="_blank">
          <Icons iconName="EMAIL" />
        </a>
      </section>
    </header>
  );
};

import { EMAIL, PHONE_NUMBER } from "../../config/constants";
import Icons from "../Icons/Icons";

export const ContactBar = () => {
  return (
    <header className="w-screen h-auto">
      <section className="bg-blue-800">
        <a href={`tel: + ${PHONE_NUMBER}`}>
          <Icons iconName="phone" />
        </a>
        <a href={`mailto: + ${EMAIL}`} target="_blank">
          <Icons iconName="email" />
        </a>
      </section>
    </header>
  );
};

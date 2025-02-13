import { EMAIL, PHONE_NUMBER } from "../../config/constants";
import Icons from "../Icons/Icons";

export const ContactBar = () => {
  return (
    <header className="w-screen h-auto">
      <section className="bg-blue-800 flex justify-end items-center pr-[50px] tablet:pr-[15px]">
        <a href={`tel: + ${PHONE_NUMBER}`}>
          <Icons
            iconName="PHONE"
            className="transition-colors rounded-[7px] size-[30px] p-[5px] hover:bg-blue-900"
          />
        </a>
        <a href={`mailto: + ${EMAIL}`} target="_blank">
          <Icons
            iconName="EMAIL"
            className="transition-colors rounded-[7px] size-[30px] p-[5px] hover:bg-blue-900"
          />
        </a>
      </section>
    </header>
  );
};

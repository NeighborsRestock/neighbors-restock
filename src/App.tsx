import Icons from "./components/Icons";
import { EMAIL, PHONE_NUMBER } from "./config/constants";

function App() {
  const showTemp = true;

  const UnderConstruction = () => {
    return (
      <>
        <h1>The Neighbors are Restocking.</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-boxes"
        >
          <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
          <path d="m7 16.5-4.74-2.85" />
          <path d="m7 16.5 5-3" />
          <path d="M7 16.5v5.17" />
          <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
          <path d="m17 16.5-5-3" />
          <path d="m17 16.5 4.74-2.85" />
          <path d="M17 16.5v5.17" />
          <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" />
          <path d="M12 8 7.26 5.15" />
          <path d="m12 8 4.74-2.85" />
          <path d="M12 13.5V8" />
        </svg>
        <p>Come back in February 2025</p>
      </>
    );
  };

  return (
    <>
      <header className="w-screen">
        <section className="bg-blue-800">
          <a href={`tel: + ${PHONE_NUMBER}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-phone"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          <a href={`mailto: + ${EMAIL}`} target="_blank">
            <Icons classNames="" iconName={ "email" } />
          </a>
        </section>
        <nav className="w-full px-14 py-3 flex justify-between items-center bg-[#0e1b23]">
          <h1 className="text-[35px]">
            Neighbors<span className="text-blue-600">Restock</span>
          </h1>
          <ul className="*:list-none text-[16px] tracking-[3px] text-nowrap uppercase flex justify-between items-center md:w-[auto] lg:w-[450px] border-pink-400 border-solid border-[2px]">
            <li>About Us</li>
            <li>Brands We Carry</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main>{showTemp && <UnderConstruction />}</main>
    </>
  );
}

export default App;

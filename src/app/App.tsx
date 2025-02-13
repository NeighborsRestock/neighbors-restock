import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { BrandsWeCarry, Landing, Contact, NotFound } from "@/pages";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer/Footer";
import { APP_ROUTES } from "@/config/routes";
import FloatingLabelInput from "@/components/FloatingInput/FloatingInput";
import { SetStateAction, ChangeEvent, useState, useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  const willHideFooter = pathname === APP_ROUTES.NOT_FOUND;
  const [passcode, setPasscode] = useState("");
  const [showSite, setShowSite] = useState(false);

  useEffect(() => {
    if (passcode === import.meta.env.VITE_PASSCODE) setShowSite(true);
  });

  return (
    <>
      {!showSite && (
        <div className="w-screen h-screen flex justify-center items-center bg-[0e1b23]">
          <FloatingLabelInput
            label={""}
            value={passcode}
            onFieldChange={function (
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ): void {
              setPasscode(e.target.value);
            }}
          />
        </div>
      )}
      {showSite && (
        <>
          <Header />
          <Routes>
            <Route index path={`${APP_ROUTES.LANDING}`} element={<Landing />} />
            <Route path={`${APP_ROUTES.BRANDS}`} element={<BrandsWeCarry />} />
            <Route path={`${APP_ROUTES.CONTACT}`} element={<Contact />} />
            <Route
              path="*"
              element={<Navigate to={`${APP_ROUTES.NOT_FOUND}`} />}
            />
            <Route path={`${APP_ROUTES.NOT_FOUND}`} element={<NotFound />} />
          </Routes>
          {!willHideFooter && <Footer />}
        </>
      )}
    </>
  );
}

export default App;

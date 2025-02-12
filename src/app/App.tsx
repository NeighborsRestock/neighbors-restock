import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { BrandsWeCarry, Landing, Contact, NotFound } from "@/pages";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer/Footer";
import { APP_ROUTES } from "@/config/routes";

function App() {
  const { pathname } = useLocation();
  const willHideFooter = pathname === APP_ROUTES.NOT_FOUND;

  return (
    <>
      <Header />
      <Routes>
        <Route index path={`${APP_ROUTES.LANDING}`} element={<Landing />} />
        <Route path={`${APP_ROUTES.BRANDS}`} element={<BrandsWeCarry />} />
        <Route path={`${APP_ROUTES.CONTACT}`} element={<Contact />} />
        <Route path="*" element={<Navigate to={`${APP_ROUTES.NOT_FOUND}`} />} />
        <Route path={`${APP_ROUTES.NOT_FOUND}`} element={<NotFound />} />
      </Routes>
      {!willHideFooter && <Footer />}
    </>
  );
}

export default App;

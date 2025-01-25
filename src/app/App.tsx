import { Navigate, Route, Routes } from "react-router-dom";
import { BrandsWeCarry, Landing, Contact, NotFound } from "@/pages";
import { APP_ROUTES } from "@/config/constants";
import { Header } from "@/components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path={`${APP_ROUTES.LANDING}`} element={<Landing />} />
        <Route path={`${APP_ROUTES.BRANDS}`} element={<BrandsWeCarry />} />
        <Route path={`${APP_ROUTES.CONTACT}`} element={<Contact />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

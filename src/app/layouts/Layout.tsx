import { Outlet } from "react-router";
import { Header } from "../../widgets/Header/Header";
import { Footer } from "@/widgets/Footer/Footer";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
};

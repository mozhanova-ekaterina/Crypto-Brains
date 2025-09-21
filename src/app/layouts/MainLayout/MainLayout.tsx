import { Header } from "../../../widgets/Header/Header";
import { Footer } from "@/widgets/Footer/Footer";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

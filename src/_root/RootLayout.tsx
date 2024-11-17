import Footer from "@/components/Footer/Footer";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <main className="w-full lg:max-w-[1440px] mx-auto overflow-hidden">
      <header className="w-full bg-background">
        <Topbar />
      </header>

      <main className="w-full min-h-dvh flex flex-col justify-center items-center">
        <Outlet />
      </main>

      <footer className="bg-black py-10">
        <Footer />
      </footer>
    </main>
  );
};

export default RootLayout;

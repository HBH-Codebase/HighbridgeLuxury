import Footer from "@/components/Footer/Footer";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";
import ContactForm from "@/components/Container/ContactForm";
import WhatsAppLink from "@/components/WhatsappLink/WhatsAppLink";
import GoToTop from "@/components/GoToTop/GoToTop";

const RootLayout = () => {
  return (
    <section className="w-full lg:max-w-[1440px] mx-auto overflow-hidden relative">
      <header className="w-full bg-background">
        <Topbar />
      </header>

      <main className="w-full min-h-dvh flex flex-col justify-start items-center">
        <Outlet />
        <ContactForm />
      </main>

      <footer className="bg-black py-10">
        <Footer />
      </footer>
      <WhatsAppLink />
      <GoToTop />
    </section>
  );
};

export default RootLayout;

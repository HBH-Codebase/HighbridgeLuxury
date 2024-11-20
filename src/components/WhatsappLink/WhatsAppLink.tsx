import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const WhatsAppLink = () => {
  return (
    <Button
      className="w-14 h-14  rounded-full shadow-lg shadow-gray-800 fixed bottom-10 border border-primary left-10 md:left-12 lg:left-20 flex-center p-2 bg-gray-800 hover:scale-105 transition-all "
      asChild
    >
      <Link to="https://wa.link/276dn2" target="blank">
        <img
          src="/assets/whatsapp_logo.png"
          alt="whatsapp"
          className="w-full h-full object-cover"
        />
      </Link>
    </Button>
  );
};

export default WhatsAppLink;

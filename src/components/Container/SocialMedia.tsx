import { FaTwitterSquare } from "react-icons/fa";
import { MdFacebook, MdWhatsapp } from "react-icons/md";
import { SiInstagram } from "react-icons/si";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="flex justify-start items-center gap-3 mt-2">
      <Link
        to="https://web.facebook.com/profile.php?id=61563519050066"
        target="blank"
      >
        <MdFacebook
          size={25}
          className="text-gray-400 scale-110 transition-colors"
        />
      </Link>
      <Link to="https://wa.link/276dn2" target="blank">
        <MdWhatsapp
          size={22}
          className="text-gray-400 scale-110 transition-colors"
        />
      </Link>
      <Link to="https://x.com/hb_luxuryltd" target="blank">
        <FaTwitterSquare
          size={20}
          className="text-gray-400 scale-110 transition-colors"
        />
      </Link>
    </div>
  );
};

export default SocialMedia;

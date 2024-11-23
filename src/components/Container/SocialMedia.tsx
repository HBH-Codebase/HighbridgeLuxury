import { FaTwitterSquare } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { SiInstagram } from "react-icons/si";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="flex justify-start items-center gap-3 mt-2">
      <Link to="">
        <MdFacebook
          size={25}
          className="text-gray-400 scale-110 transition-colors"
        />
      </Link>
      <Link to="">
        <SiInstagram
          size={20}
          className="text-gray-400 scale-110 transition-colors"
        />
      </Link>
      <Link to="">
        <FaTwitterSquare
          size={20}
          className="text-gray-400 scale-110 transition-colors"
        />
      </Link>
    </div>
  );
};

export default SocialMedia;

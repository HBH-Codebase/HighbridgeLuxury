import { FaTwitterSquare } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { SiInstagram } from "react-icons/si";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="flex justify-start items-center gap-3 mt-2">
      <Link to="">
        <MdFacebook
          size={30}
          className="text-gray-300 hover:text-white transition-colors"
        />
      </Link>
      <Link to="">
        <SiInstagram
          size={25}
          className="text-gray-300 hover:text-white transition-colors"
        />
      </Link>
      <Link to="">
        <FaTwitterSquare
          size={25}
          className="text-gray-300 hover:text-white transition-colors"
        />
      </Link>
    </div>
  );
};

export default SocialMedia;

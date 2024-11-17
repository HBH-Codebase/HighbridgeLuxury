import { FaTwitterSquare } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { SiInstagram } from "react-icons/si";
import { Link } from "react-router-dom";

const AboutUsHero = () => {
  return (
    <section className="w-full bg-[url('/assets/bridge.jpg')] bg-cover bg-center h-[800px] lg:h-96 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-70" />
      <section className="relative w-full h-full flex justify-center items center flex-col lg:flex-row gap-3 z-50">
        <div className="lg:-rotate-90 lg:flex-center">
          <p className="text-xs lg:text-[8px] text-center text-gray-400">
            (+234) 0916 273 2614 / (+234) 0815 288 6220
          </p>
        </div>
        <div className="w-full lg:flex-1 lg:flex justify-start items-center my-3">
          <h1 className="text-5xl text-center lg:text-4xl text-gray-400 font-bold">
            About Us
          </h1>
        </div>
        <div className="flex flex-row lg:flex-col justify-center items-center gap-10 lg:mr-20">
          <Link to="">
            <MdFacebook
              size={10}
              className="text-gray-400 hover:text-white transition-colors"
            />
          </Link>
          <Link to="">
            <SiInstagram
              size={10}
              className="text-gray-400 hover:text-white transition-colors"
            />
          </Link>
          <Link to="">
            <FaTwitterSquare
              size={10}
              className="text-gray-400 hover:text-white transition-colors"
            />
          </Link>
        </div>
      </section>
    </section>
  );
};

export default AboutUsHero;

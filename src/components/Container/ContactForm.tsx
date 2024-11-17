import { FaTwitterSquare } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { SiInstagram } from "react-icons/si";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <section className="w-full bg-background mt-20 px-10">
      <div className="w-full xl:wrapper flex-between flex-col gap-6 lg:flex-row my-20">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-secondary-text">Contact Us</h2>
          <p className="text-sm text-secondary-text">
            We are here to help you. Please fill out the form below and we will
            get back to you as soon as possible.
          </p>
          <div className="my-6">
            <p className="text-base font-bold text-secondary-text">
              Give us a call on any of our phone lines:
            </p>
            <p className="text-sm font-semibold text-gray-300">
              +234 815 288 6220
            </p>
            <p className="text-sm font-semibold text-gray-300">
              +234 815 288 6221
            </p>
            <p className="text-sm font-semibold text-gray-300">
              +234 916 273 2614
            </p>
            <p className="text-sm font-semibold text-gray-300 mt-6">
              Or visit our office at: <br />
              Km 34, A&M Complex, Oribanwa, Lekki-Epe Expressway, Lagos
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-base font-bold text-secondary-text">
              Follow us on all our social media pages
            </h3>
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
          </div>
        </div>
        <div className="w-full h-full bg-background">
          <img src="/assets/contactUs.jpg" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

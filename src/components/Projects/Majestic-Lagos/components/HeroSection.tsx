import SocialMedia from "@/components/Container/SocialMedia";
import { BiLocationPlus } from "react-icons/bi";
import { FcRating } from "react-icons/fc";

const HeroSection = () => {
  return (
    <div className="w-full flex lg:px-10 pb-20 flex-col md:flex-row justify-between">
      <div className="flex-1">
        <div className="flex flex-col lg:flex-row items-start gap-2">
          <div className="px-6 py-2 rounded-lg bg-secondary">
            <span className="text-gray-200 text-sm md:text-base">
              RESIDENTIAL
            </span>
          </div>
          <div className="w-full flex items-center gap-2">
            <BiLocationPlus size={32} className="text-gray-600" />
            <span className="text-gray-800 text-sm w-96">
              Opposite the Proposed International Airport, along Ibeju-lekki
              expressway, LAGOS, NIGERIA
            </span>
          </div>
        </div>
        <div className="flex flex-col  py-6 gap-1">
          <h1 className="text-5xl font-bold text-gray-600 mt-1">
            Majestic Lagos
          </h1>
          <span className="text-secondary-text text-xs">
            (Marketed by Highbridge Homes Limited)
          </span>
          <div className="w-full">
            <span className="text-base font-bold">Title: </span>
            <span className="text-sm font-medium text-gray-600">
              Certificate of Occupancy (CofO)
            </span>
          </div>
        </div>

        <h3 className="text-base font-bold text-gray-600 mt-4">
          Pre-launch Prices
        </h3>
        <span className="text-xs font-medium">300SQM:</span>
        <span className="text-sm font-bold text-gray-600">#19.99 MILLION</span>
        <br />
        <span className="text-xs font-medium">500SQM:</span>
        <span className="text-sm font-bold text-gray-600">#28.99 MILLION</span>
      </div>

      <div className="w-full md:w-1/4">
        <div className="flex items-center gap-1">
          <span className="texxt-sm lg:text-base">Property Rating:</span>
          <div className="flex">
            <FcRating className="text-gray-200 text-xl" />
            <FcRating className="text-gray-200 text-xl" />
            <FcRating className="text-gray-200 text-xl" />
            <FcRating className="text-gray-200 text-xl" />
            <FcRating className="text-gray-200 text-xl" />
          </div>
        </div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default HeroSection;

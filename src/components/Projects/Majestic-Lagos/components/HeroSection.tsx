import SocialMedia from "@/components/Container/SocialMedia";
import { BiLocationPlus } from "react-icons/bi";
import { FcRating } from "react-icons/fc";

const HeroSection = () => {
  return (
    <div className="w-full flex px-10 flex-col md:flex-row justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <div className="px-6 py-2 rounded-lg bg-secondary">
            <span className="text-gray-200 text-sm md:text-base">
              RESIDENTIAL
            </span>
          </div>
          <BiLocationPlus size={20} className="text-gray-600" />
          <span className="text-gray-800 text-sm">
            Opposite the Proposed International Airport, along Ibeju-lekki
            expressway, LAGOS, NIGERIA
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-600 mt-1">
          Majestic Lagos{" "}
          <span className="text-secondary-text text-xs">
            (Marketed by Highbridge Homes Limited)
          </span>
        </h1>
        <span className="text-base font-bold">Title: </span>
        <span className="text-sm font-medium text-gray-600">
          Certificate of Occupancy (CofO)
        </span>

        <h3 className="text-lg font-bold text-gray-600 mt-4">
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

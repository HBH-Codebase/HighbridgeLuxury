import { FaLocationPin } from "react-icons/fa6";
import { GiOpenBook } from "react-icons/gi";

const LatestListings = () => {
  return (
    <div className="w-full px-3 py-2">
      <div className="w-full flex gap-3">
        <div className="w-20">
          <img
            src="/assets/luxuryFlyer.jpg"
            alt="Projects"
            className="w-full object-cover object-center rounded-lg transition-all"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-bold">Majestic Lagos</h3>
          <div className="flex justify-start items-center gap-2">
            <FaLocationPin size={10} />
            <p className="text-[10px] my-2">Lagos, Nigeria</p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <GiOpenBook size={10} />
            <p className="text-[10px]">Certificate of Occupancy</p>
          </div>
          <p className="text-[10px] text-gradient-primary mt-2">
            300SQM:- <span className="font-bold">N20,000,000</span>
          </p>
          <p className="text-[10px] text-gradient-primary">
            500SQM:- <span className="font-bold">N29,000,000</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LatestListings;

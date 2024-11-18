import { FaLocationPin } from "react-icons/fa6";
import { FcRating } from "react-icons/fc";
import { GiOpenBook } from "react-icons/gi";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  return (
    <div className="max-w-72 shadow-md p-3 hover:cursor-pointer hover:shadow-lg transition-all">
      <img
        src="/assets/luxuryFlyer.jpg"
        alt="Projects"
        className="w-full object-cover object-center rounded-lg transition-all"
      />
      <div className="py-2 px-1">
        <div className="flex-between">
          <div className="flex items-center gap-[2px] ">
            <FcRating className="text-yellow-400" />
            <p className="text-sm text-gray-500">5.0</p>
          </div>
          <div className="bg-secondary rounded-md">
            <p className="text-white text-[8px] px-2 py-1 rounded-lg">
              RESIDENTIAL
            </p>
          </div>
        </div>
        <div className="my-3 w-full">
          <h1 className="text-lg font-bold">Majestic Lagos</h1>
          <div className="flex gap-2">
            <FaLocationPin size={15} />
            <p className="text-xs text-secondary-text font-semibold">
              Lekki, Lagos
            </p>
          </div>
          <div className="mt-1 flex gap-2">
            <GiOpenBook size={15} />
            <p className="text-xs text-secondary-text font-semibold">
              Certificate of Occupancy
            </p>
          </div>
        </div>

        <div className="w-full py-4 flex-center">
          <Link
            to=""
            className="text-secondary-text text-sm hover:text-primary transition-all"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

import { Button } from "@/components/ui/button";
import { IProperties } from "@/constants";
import { CiLocationOn } from "react-icons/ci";
import { FaCar } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5"
import { LiaToiletSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const PropertyCard = ({
  name,
  features,
  price,
  image,
  description,
  location
}: IProperties) => {
  return (
    <div className="w-72 shadow-gray-300 shadow-sm rounded-lg hover:border-gray-400 group">
      <div className="object-cover overflow-hidden">
        <img
          src={image}
          alt="property-image"
          className="w-full object-contain scale-105 group-hover:scale-100 transition-transform"
        />
      </div>
      <div className="flex justify-between items-start px-5 py-3">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-md text-[#5D0265] font-bold">{name}</h1>
          <div className="flex justify-start items-center gap-1">
            <CiLocationOn size={10} color="#5D0265" /><span className="text-xs text-gray-300">{location}</span>
          </div>
        </div>
        <span className="text-sm font-semibold text-[#5D0265]">N{price}</span>
      </div>
      <div className="px-6">
        <p>
          <span className="text-xs text-gray-400 italics line-clamp-1">{description}</span>
          <Link to="#" className="text-xs text-blue-800 hover:text-pretty">Learn more</Link>
        </p>
      </div>
      <div className="w-full px-5 py-3 mt-5">
        <div className="flex flex-col justify-start items-start gap-3 mb-5">
          <div className="flex items-center gap-5">
            <IoPeopleOutline size={14} color="#5D0265" />
            <span className="text-xs text-gray-700 font-thin">{features.bedrooms} Bedrooms</span>
          </div>
          <div className="flex items-center gap-5">
            <LiaToiletSolid size={14} color="#5D0265" />
            <span className="text-xs text-gray-700 font-thin">{features.Toilet} Toilets</span>
          </div>
          <div className="flex items-center gap-5">
            <FaCar size={14} color="#5D0265" />
            <span className="text-xs text-gray-700 font-thin">{features.parkingSpace} cars</span>
          </div>
        </div>
        <Button className="bg-gray-200 text-gray-700 rounded-lg hover:text-gray-700 hover:bg-gray-300 outline-none border-none" asChild>
          <Link to="#">View Details</Link>
        </Button>
      </div>
    </div>
  )
}

export default PropertyCard

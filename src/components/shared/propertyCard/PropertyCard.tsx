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
    <div className="w-80 gradient-bg group pb-10">
      <div className="overflow-hidden">
        <img
          src={image}
          alt="majestic lagos"
          className="w-full object-contain scale-105 group-hover:scale-100 transition-transform"
        />
      </div>
      <div className="flex-between px-5 py-3">
        <div className="flex justify-start flex-col">
          <h1 className="text-base text-primary font-bold">{name}</h1>
          <div className="flex justify-start items-end gap-1">
            <CiLocationOn size={25} color="#F2AF29" /><span className="text-xs text-primary-text">{location}</span>
          </div>
        </div>
        <span className="text-2xl font-semibold text-secondary">N{price}</span>
      </div>
      <div className="px-6">
        <p>
          <span className="text-xs text-primary-text italics line-clamp-1">{description}</span>
          <Link to="#" className="text-xs text-blue-800 hover:text-pretty">Learn more</Link>
        </p>
      </div>
      <div className="w-full px-5 py-3 mt-5">
        <div className="flex flex-col justify-start items-start gap-3 mb-5">
          <div className="flex items-center gap-5">
            <IoPeopleOutline size={20} color="#F2AF29" />
          <span className="text-xs text-primary-text font-thin">{features.bedrooms} Bedrooms</span>
          </div>
          <div className="flex items-center gap-5">
            <LiaToiletSolid size={14} color="#F2AF29" />
            <span className="text-xs text-primary-text font-thin">{features.Toilet} Toilets</span>
          </div>
          <div className="flex items-center gap-5">
            <FaCar size={14} color="#F2AF29" />
            <span className="text-xs text-primary-text font-thin">{features.parkingSpace} cars</span>
          </div>
        </div>
        <Button className="bg-primary text-primary-text rounded-lg hover:text-white transition-all outline-none border-none" asChild>
          <Link to="#">View Details</Link>
        </Button>
      </div>
    </div>
  )
}

export default PropertyCard

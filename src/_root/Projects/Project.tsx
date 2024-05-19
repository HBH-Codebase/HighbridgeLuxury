import PropertyCarousel from "@/components/PropertyCaroursel/PropertyCarousel"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const Project = () => {
  return (
    <div className="px-4 pt-20 pb-40">
      <div className="">
        <h1 className="text-2xl md:text-4xl text-[#EFDE6B] font-bold text-center">Newest Deals</h1>
        <p className="text-sm md:text-base text-gray-400 font-normal text-center">Over 50+ properties available for both residences and commercial</p>
      </div>
      <div className="flex justify-center items-center md:gap-2 w-[90%] md:w-full p-3 mt-6 mx-auto">
        <PropertyCarousel />
      </div>
      <div className="w-full flex justify-center items-center mt-6">
        <Button className="w-44 bg-[#5D0265]/85 hover:bg-[#5D0265]" asChild>
          <Link to="#">See More</Link>
        </Button>
      </div>
    </div>
  )
}

export default Project

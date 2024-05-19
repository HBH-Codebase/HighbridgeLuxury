import { Link } from "react-router-dom"
import { Button } from "../ui/button"

const HeroSection = () => {
  return (
    <>
      <div className="absolute inset-0 w-full bg-gradient-to-tr from-purple-950 to-purple-100/10"/>
      <div className="w-full min-h-dvh">
        <img
          src='/assets/stepdown.jpg'
          alt='hero'
          className='object-cover h-dvh w-full'
        />
      </div>
      <div className='absolute inset-0 w-full flex justify-center md:justify-start items-center'>
        <div className="w-[80%] mx-auto md:w-96 md:mx-0 md:pl-10 lg:pl-20 z-10">
          <h1 className='text-[30px] text-white tracking-wide font-bold leading-9 mb-3'>
            Elevate Your Vision with Luxury Real Estate Excellence
          </h1>
          <p className="font-normal text-sm text-gray-400 tracking-wide">Welcome to the pinnacle of luxury real estate, where innovation meets elegance, and where every project is a testament to our unwavering commitment to excellence. </p>
          <Button variant="outline" className="px-5 mt-6 border border-[#EFDE6B] bg-transparent group hover:bg-[#EFDE6B]">
            <Link to="#" className="text-md text-gray-300 font-semibold group-hover:text-black">
              Join Us
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}

export default HeroSection

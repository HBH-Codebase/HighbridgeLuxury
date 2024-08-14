import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import hero from '/assets/stepdown.jpg';

const     HeroSection = () => {
  return (
    <div className="px-6 md:px-10 lg:px-[6rem] flex-between flex-col lg:flex-row gap-5 py-10">
      <div className='flex-between flex-col gap-5'>
        <h1 className='text-base text-secondary-text tracking-wide font-semibold leading-9'>
          LUXURY REAL ESTATE EXCELLENCE
        </h1>
        <p className="text-4xl md:text-[3rem] text-primary-text text-center lg:text-left font-bold leading-[3.5rem] tracking-tight">Real Estate Solutions For Your Every Need</p>
        <p className="font-normal text-base text-gray-400 text-center lg:text-left tracking-wide leading-8">Welcome to the pinnacle of luxury real estate, where innovation meets elegance, and where every project is a testament to our unwavering commitment to excellence. </p>
      </div>
      <div className="w-full min-h-dvh">
        <img
          src={hero}
          alt='hero'
          className='object-cover h-dvh w-full'
        />
      </div>
    </div>
  )
}

export default HeroSection

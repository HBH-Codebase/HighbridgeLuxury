import Cards from "@/components/shared/Objectives/Cards";
import SectionHeading from "@/components/shared/SectionHeading";
import Topbanner from "@/components/shared/Topbanner";
import { Button } from "@/components/ui/button";
import { FaAngleRight, FaAward, FaHouseCircleXmark, FaUsers } from "react-icons/fa6";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <div className="w-full pb-40">
      <Topbanner text="About Us" />
      <div className="w-full md:w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-10 px-6 pb-20 md:px-10 py-20">
          <div className="w-full overflow-hidden order-2 lg:order-1 pt-20">
            <img
              src="/assets/montreal.jpg"
              alt="about hero"
              className="object-fill w-full rounded-lg rounded-tl-[20%] rounded-br-[20%]"
            />
          </div>
          <div className="w-full">
            <SectionHeading text='About Us' />
            <div className="w-full md:w-96 flex flex-col justify-start items-between gap-6">
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold tracking-wider leading-7">Let's Build Something Strong Together</h1>
              <p className="text-sm lg:text-base text-slate-600 tracking-wider leading-7">We provide the most professional, informative, loyal and dedicated service in the Real Estate sector. The best interest/ Concerns of our clients will always come first on our daily priorities and routine. Our vision is to be the most client centric organization, to build best in-class platforms where clients can come to find and discover every need in Real Estate</p>
              <div className="w-full flex justify-between items-center">
                <div className="w-80 flex justify-start items-center gap-4 px-3 py-2">
                  <FaHouseCircleXmark size={30} color="black" /> <h1 className="text-xs lg:text-sm font-bold tracking-wider leding-3">
                    Luxury and Affordability
                  </h1>
                </div>
                <div className="w-80 flex justify-start items-center gap-4 px-3 py-2">
                  <FaUsers size={30} color="black" /> <h1 className="text-xs lg:text-sm font-bold tracking-wider leding-3">Professional Team of Engineers</h1>
                </div>
              </div>
              <hr className="my-2" />
              <div className="w-full grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <span className="p-2 bg-[#5D0265] mr-3 rounded-full"/> <h2 className="text-sm font-semibold tracking-wide leading-5">Luxury Apartments</h2>
                </div>
                <div className="flex items-center">
                  <span className="p-2 bg-[#5D0265] mr-3 rounded-full"/> <h2 className="text-sm font-semibold tracking-wide leading-5">Strong Land Titles</h2>
                </div>
                <div className="flex items-center">
                  <span className="p-2 bg-[#5D0265] mr-3 rounded-full"/> <h2 className="text-sm font-semibold tracking-wide leading-5">Investment plans Up to 40% ROI</h2>
                </div>
                <div className="flex items-center">
                  <span className="p-2 bg-[#5D0265] mr-3 rounded-full"/> <h2 className="text-sm font-semibold tracking-wide leading-5">24/7 Customer Support</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 py-32">
        <div className="flex flex-col gap-6 w-96">
          <h1 className="text-xl md:text-2xl font-bold">Our Vision</h1>
          <p className="text-lg font-semibold text-slate-500">Our vision is to be the most client centric organization, to build best in-class platforms where clients can come to find and discover every need in Real Estate.</p>
        </div>
        <div className="flex flex-col gap-6 w-96">
          <h1 className="text-xl md:text-2xl font-bold">Our Mission</h1>
          <p className="text-lg font-semibold text-slate-500">Our team approach philosophy ensures your needs are important to each and every members of our organization, thereby creating unparalleled opportunities to all our clients looking to own or sell Real Estate; as we are most dedicated to the development of long term client relationship; we are committed to delivering a dream of affordable luxury homes.</p>
        </div>
      </div>
      <div className="w-full bg-gray-50 py-20 px-4">
        <div className="w-full md:w-[90%] mx-auto">
          <SectionHeading text="Best Our Services More" />
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-3">
            <h1 className="text-xl md:text-2xl lg:text-4xl text-center leading-6 font-bold tracking-wider">Our People-Oriented Objectives</h1>
            <Button className="bg-[#EFDE6B] font-semibold text-base text-[#5D0265] tracking-tight leading-6 mt-6" asChild>
              <Link to="/projects">See More
                <FaAngleRight size={16} color="#5D0265" className="ml-2" />
              </Link> 
            </Button>
          </div>
          <div className="w-full md:w-[500px] mx-auto lg:w-[86%] grid grid-col-1 md:grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-14 py-6 mt-10 place-items-center">
            <Cards icon={<FaAward color="#5D0265" />} header="Clear market position" content="We identify a clear market condition and make them known to our investors around the world." />
            <Cards icon={<FaAward color="#5D0265" />} header="Affordable Luxury Homes" content="We identify a clear market condition and make them known to our investors around the world." />
            <Cards icon={<FaAward color="#5D0265" />} header="Attract Buyers And Investors" content="We identify a clear market condition and make them known to our investors around the world." />
            <Cards icon={<FaAward color="#5D0265" />} header="Professional Referrals" content="We identify a clear market condition and make them known to our investors around the world." />
            <Cards icon={<FaAward color="#5D0265" />} header="Inclusive Services" content="We identify a clear market condition and make them known to our investors around the world." />
          </div>
        </div>
      </div>
      <div className="w-full py-20 px-4">
        <div className="w-full md:w-[90%] mx-auto">
          <SectionHeading text="Meet Our Team" />
          <p className="text-xs text-gray-300 tracking-wider leading-7 text-center">No Team Memebers Yet!!!</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;

import { Button } from "../ui/button";
import { AiOutlineSecurityScan, AiTwotoneHome } from "react-icons/ai"
import { BsFileBarGraph } from "react-icons/bs"
import { MdOutlineAttachMoney } from "react-icons/md"
import { CardComponent } from "../shared/Card";
import { Link } from "react-router-dom";

const mission = [
  {
    id: 1,
    icon: <AiTwotoneHome size={16} className="transition-all fill-[#EFDE6B] group-hover:fill-white" />,
    heading: 'Integrity',
    content: 'We are your real estate partner that you can trust. Our track records go before us and our integrity speaks for us where words cannot.'
  },
  {
    id: 2,
    icon: <BsFileBarGraph size={16} className="transition-all fill-[#EFDE6B] group-hover:fill-white" />,
    heading: 'Innovation',
    content: 'With start of the art technology and mordern practices, Highbridge Luxury development prides itself in innovation.'
  },
  {
    id: 3,
    icon: <MdOutlineAttachMoney size={16} className="transition-all fill-[#EFDE6B] group-hover:fill-white" />,
    heading: 'Professionalism',
    content: 'Our approach to real estate consultancy and development is underpinned by a steadfast commitment to ethical practices and unwavering honesty.'
  },
  {
    id: 4,
    icon: <AiOutlineSecurityScan size={16} className="transition-all fill-[#EFDE6B] group-hover:fill-white" />,
    heading: 'Intelligence',
    content: 'Our team of young and intelligent engineers makes us stand out. We take pride in seeing opportunities where others see dirt.'
  }
]

const Mission = () => {
  return (
    <>
      <div className="md:flex justify-start items-center md:gap-1 lg:gap-10 w-full lg:w-[860px]">
        <div className="py-10 px-6 w-96">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide mb-3 md:mb-6 text-[#EFDE6B]">Why Choose Us?</h1>
          <p className="text-xs leading-4 text-gray-800">In a world where luxury real estate is synonymous with innovation, quality, and unparalleled service, Highbridge Luxury Development stands out as a beacon of excellence.
          <br />
          <br />
          We believe in the power of collaboration and the importance of understanding our clients' unique needs and aspirations. We are not just in the business of building structures; we are in the business of building dreams.
          <br /><br />
          Choose us because we are not just a real estate firm; we are a partner in your journey towards luxury living. Let us elevate your vision and transform your dreams into reality.
          </p>
          <Button variant="outline" className="mt-6 md:mt-10 bg-[#5D0265]/70 text-gray-300 hover:bg-[#5D0265] hover:text-gray-200" asChild>
            <Link to="/about-us">
              Learn More
            </Link>
          </Button>
        </div>
        <div className="flex-1 p-2 grid grid-cols-2 gap-1 md:gap-1 lg:gap-3">
          {mission.map((item) => {
            return (
              <CardComponent key={item.id} id={item.id} icon={item.icon} heading={item.heading} content={item.content} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Mission;

import { Services } from "@/constants"
import { CardComponent } from "../shared/Card"

const OurServices = () => {
  return (
    <div className='w-full md:w-4/6'>
      <h1 className="text-xl md:text-2xl text-[#EFDE68] font-semibold text-center">OUR SERVICES</h1>
      <div className="flex flex-1 justify-center items-center gap-2">
        <h1 className='text-xl w-72 md:text-2xl lg:text-3xl text-[#5D0265] font-bold leading-6 tracking-wider border-r border-r-[#EFDE6B]'>What We Offer</h1>
        <div className="text-base leading-6 tracking-tight">
          <p className="text-base leading-6 tracking-tight font-semibold">
            Highbridge Luxury Development is your trusted partner when it comes to buying and selling of real estate assets, property developement, consultation, branding, real estate investments, and more. We are here to serve you. We are trusted with over 1000+ clients and 100+ project development nation wide.
          </p>
        </div>
      </div>
      <div className="w-full py-6 border-t border-t-slate-300 mt-10 flex flex-1 justify-between items-start flex-wrap">
        {Services.map((service, idx) => (
          <div key={idx} className="mb-3">
            <CardComponent id={idx + 1} heading={service.title} content={service.description} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurServices

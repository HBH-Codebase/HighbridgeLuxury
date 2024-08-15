import { Services } from "@/constants";
import service from '/assets/service.png';
import BarService from "../BarService/BarService";

const OurServices = () => {
  return (
    <section className='px-10 lg:container mb-20 flex-between flex-col gap-10 lg:flex-row'>
      <div className="mr-10 w-full lg:w-2/5 mx-auto">
        <img
          src={service}
          alt="luxury building"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-full flex-1">
        <h1 className='heading-text lg:text-left'>What We Offer</h1>
        <p className="text-sm md:text-base text-primary-text tracking-wider leading-6">
          Highbridge Luxury Development is your trusted partner when it comes to buying and selling of real estate assets, property developement, consultation, branding, real estate investments, and more. We are here to serve you. We are trusted with over 1000+ clients and 100+ project development nation wide.
        </p>
        <div className="flex-between flex-col mt-10">
          {Services.map((service, idx) => (
            <BarService key={idx} title={service.title} content={service.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurServices

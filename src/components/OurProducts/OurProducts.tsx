import { OurProjects } from "@/constants"
import PropertyCard from "../shared/propertyCard/PropertyCard"

const OurProducts = () => {
  return (
    <div className="w-full md:w-9/12">
      <h1 className="text-center text-xl font-bold text-[#EFDE68]">
        HIGHBRIDGE LUXURY DEVELOPMENT PROJECTS
      </h1>
      <div className="flex flex-wrap flex-col justify-center items-between gap-6">
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-[#5D0265] text-center">
          Highbridge Luxury Projects
        </h1>
        <p className="text-lg font-semibold text-center">
          We are known for mordern high-class projects and structures. Highbriddge Luxury has lots of projects ranging from lands, buildings, architectural designs and project management as well. We have handled over 500+ projects nationwide and our legacy preceeds us.
        </p>
        <div className="flex flex-1 justify-center items-center py-10">
          {OurProjects.length > 0 ?
            <div>
              {OurProjects.map((item) => (
                <PropertyCard
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  features={item.features}
                  id={item.id}
                  description={item.description}
                  location={item.location}
                />
              ))}
            </div>
            :
          <p className="text-slate-400 font-semibold text-center">No products yet</p>}
        </div>
      </div>
    </div>
  )
}

export default OurProducts

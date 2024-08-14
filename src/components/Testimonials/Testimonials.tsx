import { Reviews } from "@/constants";

const Testimonials = () => {
  return (
    <>
    
    <h1 className="text-[#EFDE68] text-center font-bold text-xl">
      TESTIMONIALS
    </h1>
    <div className="flex w-5/6 flex-wrap flex-col justify-center items-between gap-6">
      <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-[#5D0265] text-center">
        What Our Clients Say
      </h2>
      <p className="font-semibold text-xl text-slate-600 text-center">
        With over 500+ projects completed around Africa, We are tested and trusted by clients around the world. From governemt projects, commercial structures, residetial properties and even real estate investment offers, Highbridge Luxury Development is Tested and Trusted.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {Reviews.map((testimonial) => (
          <div className="flex flex-col items-start px-6 py-10 border border-gray-200 rounded-lg mx-auto">
            <div className="flex items-center">
              <div>
                {testimonial.image}
              </div>
              <div className="">
                <p className="text-lg md:text-xl font-semibold text-slate-600">
                  {testimonial.testimony}
                </p>
              </div>
            </div>
            <div className="mt-6">
              <span className="font-thin text-sm text-slate-400">--- {testimonial.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Testimonials

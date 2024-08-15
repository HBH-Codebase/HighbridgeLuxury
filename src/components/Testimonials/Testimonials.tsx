import { Reviews } from "@/constants";

const Testimonials = () => {
  return (
    <section className="px-10 lg:container my-10">
      <h1 className="heading-text">
        TESTIMONIALS
      </h1>
      <div className="flex-between flex-col">
        <h2 className="gradient-text text-lg md:text-2xl lg:text-3xl font-bold text-center my-4">
          What Our Clients Say
        </h2>
        <p className="font-semibold text-sm md:text-base lg:text-xl text-primary-text text-center mb-10">
          With over 500+ projects completed around Africa, We are tested and trusted by clients around the world. From governemt projects, commercial structures, residetial properties and even real estate investment offers, Highbridge Luxury Development is Tested and Trusted.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {Reviews.map((testimonial, idx) => (
            <div key={idx} className="flex flex-col items-start px-6 py-10">
              <div className="flex items-center">
                <div>
                  {testimonial.image}
                </div>
                <div className="">
                  <p className="text-lg md:text-xl font-semibold text-primary">
                    {testimonial.testimony}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <span className="font-thin text-sm text-secondary">--- {testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

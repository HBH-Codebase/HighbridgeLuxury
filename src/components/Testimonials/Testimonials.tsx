import { Reviews } from "@/constants";
import { useEffect, useState } from "react"

const Testimonials = () => {
  const [ projects, setProjects ] = useState(0);
  const [ clients, setClients ] = useState(0);
  const [ yearsOfExperience, setYearsOfExperience ] =  useState(0);
  let count = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setProjects((prev) => {
        if (prev < 1000) {
          return prev + 1;
        }
        return prev;
      });
    }, 10)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setClients((prev) => {
        if (prev < 500) {
          return prev + 1;
        }
        return prev;
      });
    }, 10)

    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setYearsOfExperience((prev) => {
        if (prev < 5) {
          return prev + 1;
        }
        return prev;
      });
    }, 10)

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="flex flex-col w-full md:flex-row flex-1 justify-around items-center mb-40">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="font-bold text-3xl md:text-6xl">{projects}+</h1>
        <p className="text-slate-400 font-semibold leading-6 tracking-wide">completed projects</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="font-bold text-3xl md:text-6xl">{clients}+</h1>
        <p className="text-slate-400 font-semibold leading-6 tracking-wide">clients around Africa</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="font-bold text-3xl md:text-6xl">{yearsOfExperience}+</h1>
        <p className="text-slate-400 font-semibold leading-6 tracking-wide">Years in the real estate industry</p>
      </div>
    </div>
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

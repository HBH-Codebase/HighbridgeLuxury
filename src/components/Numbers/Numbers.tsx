import { useEffect, useState } from "react"


const Numbers = () => {
  const [ projects, setProjects ] = useState(0);
  const [ clients, setClients ] = useState(0);
  const [ yearsOfExperience, setYearsOfExperience ] =  useState(0);

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
        if (prev < 2) {
          return prev + 1;
        }
        return prev;
      });
    }, 10)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-between flex-col lg:flex-row gap-24 w-full px-10 lg:container py-28">
      <div className="flex-center flex-col gap-3">
        <h1 className="font-bold text-5xl md:text-6xl text-primary-text">{projects}+</h1>
        <p className="text-secondary-text font-semibold leading-6 tracking-wide">Projects</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="font-bold text-5xl md:text-6xl text-primary-text">{clients}+</h1>
        <p className="text-secondary-text font-semibold leading-6 tracking-wide">Clients</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="font-bold text-5xl md:text-6xl text-primary-text">{yearsOfExperience}+</h1>
        <p className="text-secondary-text font-semibold leading-6 tracking-wide">Years</p>
      </div>
    </div>
  )
}

export default Numbers

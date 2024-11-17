import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Trainings = () => {
  return (
    <section className="w-full xl:wrapper px-10 mt-20">
      <h1 className="text-xl lg:text-2xl gradient-text text-center font-semibold">
        Highbridge Education Hub
      </h1>
      <p className="text-sm lg:text-base text-gradient-primary px-20">
        At Highbrdige luxury, we are more concerned about your education. Join
        us in our education hub for both virtual and physical trainings.
      </p>
      <div className="w-full flex flex-col justify-center items-center md:flex-row flex-wrap gap-3 mt-6">
        <div className="w-64 h-72 bg-gray-400 rounded-lg" />
        <div className="w-64 h-72 bg-gray-400 rounded-lg" />
        <div className="w-64 h-72 bg-gray-400 rounded-lg" />
      </div>

      <div className="w-full flex justify-center items-center mt-6 hover:scale-105 transition-all">
        <Button type="button" className="w-44 lg:w-72 h-12" asChild>
          <Link to="" className="text-gray-100 font-semibold">
            Register Here
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Trainings;

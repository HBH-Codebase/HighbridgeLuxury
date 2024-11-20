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
        <div className="w-64 bg-gray-100 rounded-lg">
          <figure className="w-full h-full">
            <img
              src="/assets/training2.jpg"
              alt="team-member"
              className="w-full object-cover"
            />
            <figcaption className="p-2 bg-primary rounded-tr-2xl border-r-4 border-gray-100 text-gray-100 text-sm mg:text-base font-bold">
              <strong>Matthew Ogboe</strong>
              <br />
              <span className="text-xs text-primary-text">
                How Far Can You See?
              </span>
            </figcaption>
          </figure>
        </div>
        <div className="w-64 bg-gray-100 rounded-lg">
          <figure className="w-full h-full">
            <img
              src="/assets/training1.jpg"
              alt="team-member"
              className="w-full object-cover"
            />
            <figcaption className="p-2 bg-primary rounded-tr-2xl border-r-4 border-gray-100 text-gray-100 text-sm mg:text-base font-bold">
              <strong>Coach Spark Ovadje</strong>
              <br />
              <span className="text-xs text-primary-text">
                Becoming A Sales Machine
              </span>
            </figcaption>
          </figure>
        </div>
        <div className="w-64 bg-gray-100 rounded-lg">
          <figure className="w-full h-full">
            <img
              src="/assets/training.jpg"
              alt="team-member"
              className="w-full object-cover"
            />
            <figcaption className="p-2 bg-primary rounded-tr-2xl border-r-4 border-gray-100 text-gray-100 text-sm mg:text-base font-bold">
              <strong>Peter Twinnet</strong>
              <br />
              <span className="text-xs text-primary-text">
                You Have nNo Excuse
              </span>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-24 hover:scale-105 transition-all">
        <Button type="button" className="w-44 lg:w-72 h-12" asChild>
          <Link
            to="https://highbridgehomesltd.com/training-new/"
            target="blank"
            className="text-gray-100 font-semibold"
          >
            Register Here
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Trainings;

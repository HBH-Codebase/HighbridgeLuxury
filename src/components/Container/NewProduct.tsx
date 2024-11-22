import { Link } from "react-router-dom";
import LandMarks from "../shared/LandMarks";
import { Button } from "../ui/button";
import banner from "/assets/maj-lagos.jpg";

const NewProduct = () => {
  return (
    <section className="w-full mt-20 px-10 py-20 bg-background">
      <h2 className="gradient-text text-center font-semibold text-2xl lg:text-4xl">
        Introducing The New Majestic Lagos
      </h2>
      <div className="w-full lg:wrapper flex flex-col xl:flex-row  justify-center xl:justify-start items-center xl:items-start gap-2 mt-10">
        <div className="flex-1">
          <p className="text-secondary-text text-sm">
            Situated in one of Lagos’ most rapidly developing areas, Majestic
            Lagos offers a unique blend of modern living and strategic
            investment. The name Majestic is no coincidence, it reflects the
            grandeur of its surroundings and the promise of unmatched growth.{" "}
            <br />
            <br />
            Positioned near key developments like the newly approved Lekki
            International Airport, the operational Dangote Refinery, the Lekki
            Deep Sea Port, and renowned brands like Kellogg's, Indomie and Dano
            Milk, Majestic Lagos sits at the center of a thriving hub. It’s also
            conveniently close to Alaro City and Epe, a growing town that offers
            distinct advantages as a border town
          </p>
        </div>
        <div className="w-full xl:w-3/5 my-10 xl:my-0">
          <img src={banner} alt="Majestic Lagos" className="w-full h-64" />
        </div>
      </div>
      <h3 className="text-secondary-text text-2xl font-semibold text-center">
        Majestic Landmarks
      </h3>
      <div className="flex justify-center items-center flex-col gap-10 xl:gap-3 xl:wrapper md:flex-row flex-wrap overflow-hidden mt-10 xl:mt-0">
        <LandMarks landmark="landmarks2.jpg" />
        <LandMarks landmark="landmarks3.jpg" />
        <LandMarks landmark="landmarks4.jpg" />
        <LandMarks landmark="landmarks5.jpg" />
      </div>
      <div className="w-full flex justify-center items-center mt-10 hover:scale-105 transition-all">
        <Button type="button" className="w-44 lg:w-72 h-12" asChild>
          <Link
            to="our-projects/majestic-lagos"
            className="text-gray-100 font-semibold"
          >
            Learn more
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default NewProduct;

import { Link } from "react-router-dom";
import ProductCard from "../shared/ProductCard";

const OurProducts = () => {
  return (
    <section className="w-full lg:wrapper mt-20 px-10">
      <div className="w-full flex flex-col items-center">
        <h2 className="gradient-text font-bold text-center text-2xl lg:text-4xl">
          Our Products
        </h2>
        <p className="text-center text-lg mt-4">
          From fully finished homes to lands, we have a wide range of products
        </p>
      </div>
      <div className="mt-3 flex-center flex-col lg:flex-row gap-10">
        <ProductCard />
      </div>

      <div className="mt-20 overflow-hidden h-32 flex flex-col justify-center items-center gap-2">
        <p className="text-center text-xl">
          Don't wait to buy land, buy land and wait
        </p>
        <Link
          to="/our-projects"
          className="bg-background rounded-md text-secondary-text px-10 py-3"
        >
          View More
        </Link>
      </div>
    </section>
  );
};

export default OurProducts;

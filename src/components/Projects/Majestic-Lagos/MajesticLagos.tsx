import About from "./components/About";
import Benefits from "./components/Benefits";
import Gallery from "./components/Gallery";
import HeroSection from "./components/HeroSection";
import Landmarks from "./components/Landmarks";
import ProductAssets from "./components/ProductAssets";
import Subscription from "./components/Subscription";

const MajesticLagos = () => {
  return (
    <section className="w-full bg-gray-50 px-10  py-20">
      <HeroSection />
      {/* video player */}
      <ProductAssets />
      <div className="w-full xl:wrapper mt-3">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 xl:w-2/3">
            <About />
            <Benefits />
          </div>
          <div className="w-full lg:w-[30%]">
            <Subscription />
          </div>
        </div>
        <Landmarks />
        <Gallery />
      </div>
    </section>
  );
};

export default MajesticLagos;

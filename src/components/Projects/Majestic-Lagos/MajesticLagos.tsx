import About from "./components/About";
import Benefits from "./components/Benefits";
import Gallery from "./components/Gallery";
import HeroSection from "./components/HeroSection";
import Landmarks from "./components/Landmarks";
import ProductAssets from "./components/ProductAssets";
import Subscription from "./components/Subscription";

const MajesticLagos = () => {
  return (
    <section className="w-full bg-gray-50 px-10 lg:px-20 py-20">
      <HeroSection />
      {/* video player */}
      <ProductAssets />
      <div className="w-full flex flex-col gap-10 xl:wrapper">
        <div className="flex flex-col lg:flex-row gap-3">
          <About />
          <Subscription />
        </div>
        <Benefits />
        <Landmarks />
        <Gallery />
      </div>
    </section>
  );
};

export default MajesticLagos;

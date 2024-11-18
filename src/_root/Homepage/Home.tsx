import HeroSection from "../../components/HeroSection/HeroSection";
import CompanyCode from "@/components/Container/CompanyCode";
import WhatWeOffer from "@/components/Container/WhatWeOffer";
import HowToBecomeALandlord from "@/components/Container/HowToBecomeALandlord";
import BuyToFlip from "@/components/Container/BuyToFlip";
import OurProducts from "@/components/Container/OurProducts";
import SEO from "@/components/SEO/SEO";
import NewProduct from "@/components/Container/NewProduct";
import Incentives from "@/components/shared/Incentives";

const Home = () => {
  return (
    <>
      <SEO
        name="Highbridge Luxury Development Limited"
        title="Home | Affordable Luxury Apartments In Lagos - Call us Now"
        description="Highbridge Luxury Development Limited is committed to building your dream home. We build, buy and sell landed properties"
        type="article"
      />
      <section className="gradient-bg">
        <HeroSection />
        <CompanyCode />
      </section>

      <WhatWeOffer />
      <HowToBecomeALandlord />
      <BuyToFlip />
      <NewProduct />
      <OurProducts />
      <Incentives />
    </>
  );
};

export default Home;

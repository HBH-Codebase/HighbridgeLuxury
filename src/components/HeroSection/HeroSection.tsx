import hero from "/assets/hero.png";

const HeroSection = () => {
  return (
    <div className="w-full px-10 xl:wrapper flex-between flex-col lg:flex-row">
      <div className="flex-between flex-col flex-1 gap-5">
        <h1 className="text-sm text-secondary-text tracking-wide font-semibold leading-9">
          LUXURY REAL ESTATE EXCELLENCE
        </h1>
        <p className="text-4xl md:text-5xl gradient-text text-center lg:text-left font-bold leading-[3rem] md:leading-[3rem] tracking-tight">
          Real Estate Solutions For Your Every Need
        </p>
        <p className="font-normal text-base text-primary-text text-center lg:text-left tracking-wide leading-8">
          Welcome to the pinnacle of luxury real estate, where innovation meets
          elegance, and where every project is a testament to our unwavering
          commitment to excellence.{" "}
        </p>
      </div>
      <div className="w-96 mt-6">
        <img src={hero} alt="hero" className="object-cover h-full w-full" />
      </div>
    </div>
  );
};

export default HeroSection;

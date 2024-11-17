const ShortAd = () => {
  return (
    <div className="bg-[url('/assets/AboutHero.jpg')] w-full h-72 bg-center bg-cover relative">
      <div className="absolute inset-0 gradient-bg opacity-70" />
      <div className="absolute inset-0 flex justify-center items-center z-50">
        <h3 className="text-gray-300 text-xl md:text-3xl lg:text-4xl px-10 md:px-32 lg:px-44 text-center">
          We Are A Top Real Estate Company In Nigeria
        </h3>
      </div>
    </div>
  );
};

export default ShortAd;

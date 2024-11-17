import React from "react";

const WhyChooseUs = () => {
  return (
    <React.Fragment>
      <div className="w-full px-10 xl:wrapper flex flex-col lg:flex-row gap-4 my-20">
        <div className="w-full lg:w-1/2 h-96 bg-gray-400 rounded-lg" />
        <div className="flex-1">
          <p className="gradient-text">Why Choose Us?</p>
          <h1 className="text-secondary font-bold text-lg mt-6">
            Make The Best Move To Achieving Your Home Ownership Dream.
          </h1>
          <p className="text-sm font-light mt-6">
            At Highbridge Luxury Our Clients and Customers Are Our Top Priority
          </p>
          <div className="mt-6 flex flex-col md:grid grid-cols-2 gap-3 items-start">
            <div className="flex justify-center items-center gap-2">
              <div className="w-10 h-10 bg-gray-500 rounded-full" />
              <div className="flex-1">
                <h3 className="text-gradient text-sm tracking-wide font-semibold">
                  High quality products
                </h3>
                <p className="text-secondary-text text-xs">
                  High quality products that give you peace of mind.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="w-10 h-10 bg-gray-500 rounded-full" />
              <div className="flex-1">
                <h3 className="text-gradient text-sm tracking-wide font-semibold">
                  Professional service
                </h3>
                <p className="text-secondary-text text-xs">
                  Our team of professionals ensure top-notch experience
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="w-10 h-10 bg-gray-500 rounded-full" />
              <div className="flex-1">
                <h3 className="text-gradient text-sm tracking-wide font-semibold">
                  24/7 customer service
                </h3>
                <p className="text-secondary-text text-xs">
                  Reach out to us anytime, we'll be there.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="w-10 h-10 bg-gray-500 rounded-full" />
              <div className="flex-1">
                <h3 className="text-gradient text-sm tracking-wide font-semibold">
                  Strong Titles
                </h3>
                <p className="text-secondary-text text-xs">
                  Our products have strong titles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhyChooseUs;

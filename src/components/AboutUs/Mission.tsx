const Mission = () => {
  return (
    <section className="w-full py-44 lg:py-20">
      <div className="w-full px-10 lg:wrapper">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <h2 className="text-3xl md:px-10 lg:px-0 text-center lg:text-start font-bold text-secondary w-full lg:w-1/2">
            Highbridge Luxury Offers An Exciting Range of Luxury Assets In
            Lagos.
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center lg:items-start gap-6 mt-10">
            <div className="flex flex-col justify-center items-center gap-3">
              <div className="w-16 h-16 bg-gray-400 rounded-full" />
              <p className="text-sm text-secondary-text">Finished Apartments</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <div className="w-16 h-16 bg-gray-400 rounded-full" />
              <p className="text-sm text-secondary-text">Lands</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <div className="w-16 h-16 bg-gray-400 rounded-full" />
              <p className="text-sm text-secondary-text">
                Real Estate Investment
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2 h-96 bg-gray-400 rounded-lg"></div>
          <div className="px-3 flex-1">
            <p className="gradient-text font-bold text-sm">About Us</p>
            <h2 className="text-secondary font-bold text-3xl my-2">
              That's Why We Are Investors' First Choice
            </h2>
            <p className="text-sm text-secondary-text font-light">
              We are not just any real estate company we are Highbridge Luxury
              and our result preceeds us.
            </p>
            <h3 className="text-gray-600 font-semibold text-xl my-2">
              Our Mission
            </h3>
            <p className="text-sm text-secondary-text font-light">
              Our team approach philosophy ensures your needs are important to
              each and every members of our organization, thereby creating
              unparalleled opportunities to all our clients looking to own or
              sell Real Estate; as we are most dedicated to the development of
              long term client relationship; we are committed to delivering a
              dream of affordable luxury homes
            </p>
            <h3 className="text-gray-600 font-semibold text-xl my-2">
              Our Vision
            </h3>
            <p className="text-sm text-secondary-text font-light">
              We provide the most professional, informative, loyal and dedicated
              service in the Real Estate sector. The best interest/Concerns of
              our clients will always come first on our daily priorities and
              routine. Our vision is to be the most client centric organization,
              to build best in-class platforms where clients can come to find
              and discover every need in Real Estate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;

const Team = () => {
  return (
    <section className="mt-20 w-full xl:wrapper">
      <h1 className="gradient-text text-center text-xl lg:text-2xl font-semibold">
        Meet The Team
      </h1>
      <p className="text-sm lg:text-base text-gradient-primary px-20 xl:px-0">
        Meet our exceptional team of professionals under the leadership of Eng.
        Olawale Popoola. We have just one goal which is to help you achieve a
        seamsless journey into becoming a landlord in any of our luxury estates.
      </p>
      <div className="w-full flex flex-col justify-center items-center md:flex-row flex-wrap gap-3 mt-6 px-10 xl:px-0">
        <div className="w-64 h-72 bg-gray-400 rounded-lg" />
        <div className="w-64 h-72 bg-gray-400 rounded-lg" />
        <div className="w-64 h-72 bg-gray-400 rounded-lg" />
      </div>
    </section>
  );
};

export default Team;

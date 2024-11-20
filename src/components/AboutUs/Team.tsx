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
      <div className="w-full flex flex-col justify-center items-center md:items-start md:flex-row flex-wrap gap-3 mt-6 px-10 xl:px-0">
        <div className="w-64 bg-gray-400 rounded-lg">
          <figure className="w-full h-full relative">
            <img
              src="/assets/md.jpg"
              alt="team-member"
              className="w-full object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 p-2 w-4/5 bg-primary rounded-tr-2xl border-r-4 border-gray-100 text-gray-100 text-sm mg:text-base font-bold">
              <strong>Engr. Olawale Popoola</strong>
              <br />
              <span className="text-xs text-primary-text">
                Chairman Highbridge Group
              </span>
            </figcaption>
          </figure>
        </div>
        <div className="w-64 bg-gray-400 rounded-lg">
          <figure className="w-full h-full relative">
            <img
              src="/assets/ed.png"
              alt="team-member"
              className="w-full object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 p-2 w-4/5 bg-primary rounded-tr-2xl border-r-4 border-gray-100 text-gray-100 text-sm mg:text-base font-bold">
              <strong>Busola Popoola</strong>
              <br />
              <span className="text-xs text-primary-text">
                Chairlady Highbridge Group
              </span>
            </figcaption>
          </figure>
        </div>
        <div className="w-64 bg-gray-400 rounded-lg">
          <figure className="w-full h-full relative">
            <img
              src="/assets/hr.jpg"
              alt="team-member"
              className="w-full object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 p-2 w-4/5 bg-primary rounded-tr-2xl border-r-4 border-gray-100 text-gray-100 text-sm mg:text-base font-bold">
              <strong>Ms. Ezenwanagor Lilian</strong>
              <br />
              <span className="text-xs text-primary-text">
                HR Highbridge Group
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Team;

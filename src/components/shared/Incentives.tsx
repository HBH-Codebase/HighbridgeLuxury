const Incentives = () => {
  return (
    <section className="w-full xl:wrapper mx-auto flex-between flex-col lg:flex-row gap-4 py-20 px-10 md:px-20 lg:px-0">
      <div className="flex-1 lg:pl-20">
        <h2 className="text-3xl font-bold text-background text-center lg:text-start">
          December{" "}
          <span className="text-6xl gradient-text block">Incentives</span>
        </h2>
        <p className="text-background text-base mt-10 xl:px-0">
          When we say this December will be amazing, we weren't joking! 🎉 This
          festive season is packed with sweet incentives and commission for
          MAJESTIC LAGOS. There’s no better time to earn some extra cash. Let’s
          make this December Detty!
        </p>
      </div>
      <div className="w-full lg:pr-20 md:w-96">
        <img src="/assets/incentives.jpg" alt="incentives" />
      </div>
    </section>
  );
};

export default Incentives;

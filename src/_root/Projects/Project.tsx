import img from '/assets/maj-lagos.jpg';

const Project = () => {
  return (
    <section className="my-20 py-10">
      <div className="px-10 lg:container">
        <h1 className="text-base md:text-lg text-secondary font-bold text-center tracking-widest mb-3">Newest Deals</h1>
        <p className="text-2xl md:text-4xl gradient-text font-bold text-center lg:px-20 leading-8">Over 50+ properties available for both residences and commercial</p>
      </div>
      <div className="w-full mt-10">
        <img
          src={img}
          alt="majestic lagos"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  )
}

export default Project

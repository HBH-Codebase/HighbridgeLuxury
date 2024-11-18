const ProjectHero = () => {
  return (
    <section className="w-full bg-[url('/assets/bridge.jpg')] bg-cover bg-center h-[800px] lg:h-96 relative overflow-hidden flex-center">
      <div className="absolute inset-0 gradient-bg opacity-70" />
      <section className="relative flex justify-center items center flex-col lg:flex-row gap-3 z-50">
        <h1 className="text-5xl text-center lg:text-4xl text-gray-400 font-bold">
          All Projects
        </h1>
      </section>
    </section>
  );
};

export default ProjectHero;

import LatestListings from "@/components/Projects/LatestListings";
import ProjectCard from "@/components/Projects/ProjectCard";
import ProjectHero from "@/components/Projects/ProjectHero";
import React from "react";

const Projects = () => {
  return (
    <React.Fragment>
      <ProjectHero />
      <section className="w-full my-32">
        <div className="w-full px-10 xl:px-32 flex justify-center items-start flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[30%] rounded-lg shadow-md px-5 py-10">
            <h1 className="text-xl gradient-text font-semibold mb-6">
              Latest Listings
            </h1>
            <div className="flex flex-col gap-6">
              <LatestListings />
            </div>
          </div>
          <div className="w-full flex-1 py-10">
            <h1 className="text-xl gradient-text font-semibold mb-6">
              Still Selling
            </h1>
            <div className="flex flex-col lg:flex-row gap-3 flex-wrap">
              <ProjectCard />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Projects;

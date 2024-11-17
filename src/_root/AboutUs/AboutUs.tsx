import AboutUsHero from "@/components/AboutUs/AboutUsHero";
import Mission from "@/components/AboutUs/Mission";
import ShortAd from "@/components/AboutUs/ShortAd";
import Team from "@/components/AboutUs/Team";
import Trainings from "@/components/AboutUs/Trainings";
import WhyChooseUs from "@/components/AboutUs/WhyChooseUs";
import React from "react";

const AboutUs = () => {
  return (
    <React.Fragment>
      <AboutUsHero />

      <Mission />
      <ShortAd />
      <WhyChooseUs />
      <Team />
      <Trainings />
    </React.Fragment>
  );
};

export default AboutUs;

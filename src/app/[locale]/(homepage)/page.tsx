import AboutMe from "@/components/element/AboutMe";
import Contact from "@/components/element/Contact";
import HomeSection from "@/components/element/HomeSection";
import Portfolio from "@/components/element/Portfolio";
import Resume from "@/components/element/Resume";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HomeSection />
      <Portfolio/>
      <AboutMe/>
      <Resume/>
      <Contact/>
    </>
  );
};

export default HomePage;

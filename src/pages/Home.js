import React from "react";

import CarouselHome from "../components/CarouselHome";

import SectionHome from "./../components/SectionHome";
import SectionComing from "./../components/SectionComing";
import SectionNews from "./../components/SectionNews";

const Home = () => {
  return (
    <div>
      <CarouselHome />
      <SectionHome />
      <SectionComing />
      <SectionNews />
    </div>
  );
};

export default Home;

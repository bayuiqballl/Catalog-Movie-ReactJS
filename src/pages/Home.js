import React from "react";
import Header from "./../components/Header";
import CarouselHome from "../components/CarouselHome";
import Footer from "./../components/Footer";
import SectionHome from "./../components/SectionHome";
import SectionComing from "./../components/SectionComing";
import SectionNews from "./../components/SectionNews";

const Home = () => {
  return (
    <div>
      <Header />
      <CarouselHome />
      <SectionHome />
      <SectionComing />
      <SectionNews />
      <Footer />
    </div>
  );
};

export default Home;

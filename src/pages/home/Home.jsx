import React from "react";
import Banner from "./banner/Banner";
import AboutUs from "./aboutUs/AboutUs";

const Home = () => {
  return (
    <div className="w-5/6 mx-auto my-5">
      <Banner></Banner>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;

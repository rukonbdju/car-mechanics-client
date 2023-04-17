import React from "react";
import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";
import banner5 from "../../../assets/images/banner/5.jpg";
import banner6 from "../../../assets/images/banner/6.jpg";
import "./banner.css";
import BannerItem from "./BannerItem";


const Banner = () => {
  const bannerImage=[banner1,banner2,banner3,banner4,banner5,banner6]
  return (
    <header className="relative">
      <BannerItem bannerImage={bannerImage}></BannerItem>
      
    </header>
  );
};

export default Banner;

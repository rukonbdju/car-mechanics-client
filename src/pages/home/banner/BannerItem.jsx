import React, { useState } from "react";

const BannerItem = ({bannerImage}) => {
    const [imageNumber,setImageNumber]=useState(1)
    /* setInterval(()=>{
        if(imageNumber<5){

            setImageNumber(imageNumber+1);
        }
        else{
            setImageNumber(1)
        }
    },5000) */
    const handleIncrease=()=>{
        if(imageNumber<5){

            setImageNumber(imageNumber+1);
        }
        else{
            setImageNumber(1)
        }
    }
    const handleDecrease=()=>{
        if(imageNumber>1){
            setImageNumber(imageNumber-1);
        }
        else{
            setImageNumber(bannerImage.length-1)
        }
    }
  return (
        <div className="relative ">
      <div className="transition-all duration-150 ease-in-out">
        <div className="img-gradient"></div>
        <img
          style={{
            height: "600px",
            objectFit: "cover",
            width: "100%",
            borderRadius: "8px",
          }}
          src={bannerImage[imageNumber]}
        />
      </div>
      <div className="absolute top-1/4 left-8 text-white">
        <h1 className="text-5xl">
          Best Pricing For <br /> Car Servicing
        </h1>
        <p className="my-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          <br />
          sunt eligendi doloremque, impedit sapiente reiciendis
        </p>
        <button className="border-2 p-2 rounded border-black font-bold hover:bg-black hover:text-slate-200">
          Appointment
        </button>
        <button className="border-2 p-2 mx-6 rounded border-black font-bold hover:bg-black hover:text-slate-200">
          Appointment
        </button>
      </div>
      <div onClick={()=>handleIncrease()} className="absolute bottom-6 right-3 text-4xl cursor-pointer text-white bg-gray-700 hover:bg-gray-900 rounded-full p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            fill="currentColor"
            d="M9.5 5.5L15 12l-5.5 6.5L11 20l8-8-8-8z"
          />
        </svg>
      </div>
      <div onClick={()=>handleDecrease()} className="absolute bottom-6 right-16 cursor-pointer text-4xl text-white bg-gray-700 hover:bg-gray-900 rounded-full p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            fill="currentColor"
            d="M14.5 5.5L9 12l5.5 6.5L13 20l-8-8 8-8z"
          />
        </svg>
      </div>
    </div>
  );
};

export default BannerItem;

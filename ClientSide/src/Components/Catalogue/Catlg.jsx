import React from "react";
import Carousel from "./Carousel";

function Catlg() {
  const images = [
    "https://via.placeholder.com/600x300",
    "https://via.placeholder.com/600x300",
    "https://via.placeholder.com/600x300",
  ];
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex items-center justify-center flex-col gap-5 p-5">
        <Carousel images={images} />
        <div
          id="catagory"
          className=" w-3/4 h-1/2 bg-black rounded-lg text-white"
        >
          adad
        </div>
      </div>
    </>
  );
}

export default Catlg;

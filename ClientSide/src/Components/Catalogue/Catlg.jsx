import React from "react";
import Carousel from "./Carousel";

function Catlg() {
  const images = [
    "https://images.unsplash.com/photo-1518278364075-eb43498f2a73?q=80&w=2141&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1627920769842-6887c6df05ca?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1518278364075-eb43498f2a73?q=80&w=2141&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex items-center justify-center flex-col gap-5 p-10">
        <Carousel images={images} />
        <div
          id="catagory"
          className=" w-3/4 h-[80vh] bg-black rounded-lg text-white"
        >
          adad
        </div>
      </div>
    </>
  );
}

export default Catlg;

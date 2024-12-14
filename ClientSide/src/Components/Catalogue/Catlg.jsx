import Item from "./Item";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import InfiniteSlider from "./InfiniteSlider";

function Catlg() {
  const deb = useRef(null);

  const PopularCourses = [
    {
      id: "itm1",
      cat: "Crop Management",
      no: "1",
      rating: "4",
      back: "https://images.unsplash.com/9/fields.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhcm18ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "itm2",
      cat: "Technology and Innovation",
      no: "2",
      rating: "5",
      back: "https://images.unsplash.com/photo-1594771804886-a933bb2d609b?q=80&w=2082&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "itm3",
      cat: "Climate Resilience and Adaptation",
      no: "3",
      rating: "4",
      back: "https://images.unsplash.com/photo-1588152850700-c82ecb8ba9b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "itm4",
      cat: "Sustainable Agriculture",
      no: "4",
      rating: "4",
      back: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "itm5",
      cat: "Agribusiness and Marketing",
      no: "5",
      rating: "4",
      back: "https://images.unsplash.com/photo-1470685983317-0084951ce1ca?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "itm6",
      no: "6",
      rating: "4",
      cat: "Rural Development and Community Engagement",
      back: "https://plus.unsplash.com/premium_photo-1664123873245-bd178d77ca19?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "itm7",
      cat: "Specialized Topics and Emerging Issues",
      no: "7",
      rating: "4",
      back: "https://images.unsplash.com/photo-1440428099904-c6d459a7e7b5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "itm8",
      cat: "Farm Safety and Regulations",
      no: "8",
      rating: "4",
      back: "https://images.unsplash.com/photo-1442774503508-2e17027df511?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <div
        className="w-[100vw] h-[100vh] flex items-center justify-center overflow-x-hidden bg-cover bg-[#fffff2]"
        ref={deb}
      >
        <div className=" w-full h-full pt-[9vh]  ">
          <div className=" w-full flex flex-col">
            <div className=" flex flex-col px-20">
              <div className="   flex flex-col text-[#242323] whitespace-nowrap  py-1">
                <span className="font-medium text-3xl text-[#242424] leading-none">
                  Popular Courses
                </span>
                <span className=" text-lg text-[#505050]">
                  Try out our most popular courses !
                </span>
              </div>
              <div className=" overflow-hidden  py-2">
                {PopularCourses.length > 0 ? (
                  <InfiniteSlider PopularCourses={PopularCourses} />
                ) : (
                  <div className=" h-[30vh] flex items-center justify-center  shadow-inner  rounded">
                    <span className=" animate-pulse font-medium">
                      Hold On Loading Is Almost Done...
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className=" w-full h-fit my-7 px-20">
              <div className=" flex flex-col text-[#242323] whitespace-nowrap  py-1 mb-6">
                <span className=" font-medium text-3xl text-[#242424] leading-none">
                  Courses
                </span>
                <span className=" text-lg text-[#505050]">
                  Explore our wide range of courses
                </span>
              </div>
              {PopularCourses.length > 0 ? (
                <div className=" grid md:grid-cols-4 sm:grid-cols-2 md:gap-3 2xl:gap-5 place-items-center">
                  {PopularCourses.map((item) => (
                    <Item
                      key={item.id}
                      id={item.id}
                      cat={item.cat}
                      back={item.back}
                      rating={item.rating}
                    />
                  ))}
                </div>
              ) : (
                <div className=" h-[20vh] w-full flex items-center justify-center  shadow-inner  rounded">
                  <span className=" animate-pulse font-medium">
                    Wait a moment...
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Catlg;

import React from "react";
import Carousel from "./Carousel";
import Item from "./Item";

function Catlg() {
  const images = [
    "https://images.unsplash.com/9/fields.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhcm18ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1507662228758-08d030c4820b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1588152850700-c82ecb8ba9b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1470685983317-0084951ce1ca?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1470685983317-0084951ce1ca?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664123873245-bd178d77ca19?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1440428099904-c6d459a7e7b5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1442774503508-2e17027df511?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex items-center justify-center flex-col gap-5 p-10 bg-cover">
        {/* <Carousel images={images} /> */}
        <div className="flex text-6xl font-Epilogue font-bold h-[50%] w-auto items-center justify-start">
          Select a Category to start
          <span className=" text-pYellow font-extrabold text-7xl p-4 cursor-pointer">
            Learning
          </span>
        </div>
        <div
          id="catagory"
          className=" flex w-3/4 h-[80vh] bg-lightYellow rounded-xl text-white flex-row gap-5 p-10 flex-wrap justify-center items-center"
        >
          <Item
            cat="1"
            back="https://images.unsplash.com/9/fields.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhcm18ZW58MHx8MHx8fDA%3D"
          />
          <Item
            cat="2"
            back="https://images.unsplash.com/photo-1507662228758-08d030c4820b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Item
            cat="3"
            back="https://images.unsplash.com/photo-1588152850700-c82ecb8ba9b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Item
            cat="4"
            back="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Item
            cat="5"
            back="https://images.unsplash.com/photo-1470685983317-0084951ce1ca?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Item
            cat="6"
            back="https://plus.unsplash.com/premium_photo-1664123873245-bd178d77ca19?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Item
            cat="7"
            back="https://images.unsplash.com/photo-1440428099904-c6d459a7e7b5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Item
            cat="8"
            back="https://images.unsplash.com/photo-1442774503508-2e17027df511?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </>
  );
}

export default Catlg;

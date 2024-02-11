import React, { useEffect, useState } from "react";
import TopPickCard from "./TopPickCard";
import axios from "axios";
import ItemCard from "./ItemCard";

const AllItems = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/itemsList")
      .then((res) => {
        setItemList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className=" h-[50%] flex flex-col ">
        <span className="ml-[.5vw] text-lg font-Archivo font-semibold">
          Best Items At Low Price
        </span>
        <div className=" text-lg font-Archivo flex gap-[1vw] h-[100vh] relative overflow-x-scroll scrollbar-hide py-[1%] px-[.5%]">
          <TopPickCard width={30} fsize={"lg"} />
          <TopPickCard width={20} fsize={"sm"} />
          <TopPickCard width={20} fsize={"sm"} />
          <TopPickCard width={20} fsize={"sm"} />
          <TopPickCard width={20} fsize={"sm"} />
        </div>
      </div>
      <span className="ml-[.5vw] text-lg font-Archivo font-semibold  text-[#242424] ">
        All Items List
      </span>
      <div className=" h-fit w-full  grid grid-cols-5 gap-5 px-[1%] py-[2vh] row-auto ">
        {itemList.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default AllItems;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Eachcard = () => {
  const location = useLocation();
  const [info, setInfo] = useState({});
  console.log(location.state.no);
  axios
    .get(`http://localhost:3000/courses/${location.state.no}`)
    .then((res) => {
      setInfo(res.data);
      console.log(info);
    });

  return (
    <div className=" bg-[#fffff2] w-full h-[100vh] pt-[10vh] select-none">
      <div className="bg-lightYellow h-fit w-[95%] m-auto rounded-3xl border-black  border-[1px] flex-col justify-center items-center">
        <div className="bg-black h-fit p-4 w-[80%] text-white text-center text-5xl mt-2 rounded-3xl mx-auto">
          {location.state.name}
        </div>
        <br />
        <div className="flex gap-6 h-fit p-6">
          <div className="w-[40%] h-[35vh] text-xl border-black rounded-xl border-[1px] p-4">
            GRAPH
          </div>
          <div className="w-[60%] border-black rounded-xl overflow-hidden h-[50vh] relative">
            <Link
              to="https://www.youtube.com/watch?v=zL19uMsnpSU"
              className="absolute z-10 text-2xl bottom-2 right-2 bg-[#000000a5] py-2 px-6 rounded-xl text-white underline hover:text-blue-500"
              target="_blank"
            >
              Watch full video on Youtube
            </Link>
            <img
              src={location.state.back}
              className="h-full w-full absolute"
            ></img>
          </div>
        </div>
        <div className="flex gap-6 h-fit p-6">
          <div className="w-[60%] h-[50vh] text-xl border-black rounded-xl border-[1px] p-4 overflow-y-scroll scrollbar-hide bg-white">
            {info.data}
            <br />
            <br />
            {info.point1}
            <br />
            <br />
            {info.point2}
            <br />
            <br />
            {info.point3}
          </div>
          <div className="w-[40%] h-[35vh] text-xl border-black rounded-xl border-[1px] p-4">
            Interactive Tools bolte Ki debo??
          </div>
        </div>
      </div>
      <div className="h-[5vh]"></div>
    </div>
  );
};

export default Eachcard;

//  props{}

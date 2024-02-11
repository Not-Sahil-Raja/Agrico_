import React from "react";
import { useLocation } from "react-router-dom";

const Eachcard = () => {
  const location = useLocation();
  return (
    <div className=" bg-[#fffff2] w-full h-[100vh] pt-[9vh] select-none">
      <div className="bg-lightYellow h-fit w-[95%] m-auto rounded-3xl border-black  border-[1px] flex-col justify-center items-center">
        <div className="bg-black h-[9vh] w-[60%] text-white text-center text-5xl mt-2 rounded-3xl mx-auto">
          Category {location.state.name}
        </div>
        <br />
        <div className="flex gap-6 h-fit p-6">
          <div className="w-[40%] h-[35vh] text-xl border-black rounded-xl border-[1px] p-4">
            GRAPH
          </div>
          <div className="w-[60%] border-black rounded-xl border-[1px] p-10 h-[50vh] ">
            VIDEO
          </div>
        </div>
        <div className="flex gap-6 h-fit p-6">
          <div className="w-[60%] h-fit text-xl border-black rounded-xl border-[1px] p-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            sint maiores tenetur inventore laudantium corporis officia libero.
            Soluta, deleniti? Quibusdam ex quae sequi, quis deleniti sit!
            Numquam laboriosam eveniet voluptas.
          </div>
          <div className="w-[40%] h-[35vh] text-xl border-black rounded-xl border-[1px] p-4">
            Interactive Tools bolte Ki debo?? <br /> DILDO
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eachcard;

//  props{}

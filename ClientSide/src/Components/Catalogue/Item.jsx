import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

function Item(props) {
  const navigate = useNavigate();
  return (
    <div
      className={
        " flex flex-col justify-center h-fit rounded-xl cursor-pointer bg-[#f8f8f8] p-2 font-Archivo border"
      }
      onClick={() => {
        navigate("/demo", {
          state: { name: props.cat, no: props.no, back: props.back },
        });
      }}
    >
      <div className="w-[20vw] rounded-xl overflow-hidden">
        <motion.img
          src={props.back}
          alt={props.cat}
          className=" w-full aspect-video object-cover "
          whileHover={{ scale: 1 }}
          initial={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </div>
      <div className=" z-20 text-center font-medium py-[.5vh] px-1 my-1 h-8 rounded w-[20vw] text-ellipsis overflow-hidden whitespace-nowrap">
        {props.cat}
      </div>

      <div className=" flex items-center px-2">
        <div>{props.rating}</div>
        <div className=" flex gap-[.05rem] pl-2">
          {Array.from({ length: props.rating }, (_, i) => (
            <Star key={i} size={14} fill="#fadb2b" stroke="#8f6d25" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Item;

// bg-gradient-to-t from-black via-lightOrange to-extralightYellow

import React from "react";
import { useState } from "react";

const ContactUs = () => {
  const [popstyle, setPopstyle] = useState(
    "absolute bottom-2 right-[5vh] origin-center [transform:translateX(-50%)] bg-black text-white text-xl w-fit px-4 h-fit py-2 rounded-xl opacity-0"
  );
  function clicked() {
    setPopstyle(
      "absolute bottom-2 right-[5vh] origin-center [transform:translateX(-50%)]  bg-black text-white text-xl w-fit px-4 h-fit py-2 rounded-xl animate-bounce"
    );
    setTimeout(() => {
      setPopstyle(
        "absolute bottom-2 right-[5vh] origin-center [transform:translateX(-50%)]  bg-black text-white text-xl w-fit px-4 h-fit py-2 rounded-xl opacity-0"
      );
    }, 1600);
  }
  return (
    <div className=" bg-[#fffff2] w-full h-[100vh] pt-[10vh] select-none overflow-hidden">
      <div className="h-[80vh] w-[90%] m-auto relative flex items-center">
        <img
          className="absolute object-cover h-[80vh] w-[100%] brightness-50"
          src="https://images.unsplash.com/photo-1468253926858-331ac6e1e97f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></img>
        <div className="h-[80vh] w-[100vh] z-10 absolute">
          <div className="absolute top-6 left-8 text-3xl font-semibold text-white">
            AgriCo
          </div>
          <div className="absolute left-[20vh] top-[50%] [transform:translateY(-50%)] text-white font-bold text-6xl">
            Have some suggestions?
            <br />
            We would love to listen
          </div>
          <div className="absolute bottom-6 left-8 text-xl font-semibold text-white">
            agrico@gmail.com
          </div>
        </div>
        <div className="absolute right-24 bg-[#ffdaaa7a] backdrop-blur-md h-[70vh] w-[55vh] rounded-md flex flex-col gap-10 justify-center items-center  ">
          <input
            className="h-12 w-[90%] px-4 border-b-2 border-black bg-transparent text-black focus:outline-none focus:placeholder-transparent placeholder:text-black placeholder:font-semibold"
            placeholder="Your name"
          />
          <input
            className="h-12 px-4 w-[90%] border-b-2 border-black bg-transparent text-black focus:outline-none focus:placeholder-transparent placeholder:text-black placeholder:font-semibold"
            placeholder="Your email"
          />
          <input
            className="h-12 px-4 w-[90%] border-b-2 border-black bg-transparent text-black focus:outline-none focus:placeholder-transparent placeholder:text-black placeholder:font-semibold"
            placeholder="Tell us what you think"
          />
          <button
            onClick={clicked}
            className="h-12 w-40 border-black border-2 rounded-3xl font-bold hover:bg-black hover:text-white transition-colors"
          >
            Send Feedback
          </button>
        </div>
        <div className={popstyle}>Feedback Sent</div>
      </div>
    </div>
  );
};

export default ContactUs;

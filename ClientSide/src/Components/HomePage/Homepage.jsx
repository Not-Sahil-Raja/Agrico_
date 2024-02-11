import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const p1 = useRef(null);
  const p2 = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      const t2 = gsap.timeline();
      t1.from("#txt", {
        xPercent: "-200",
        duration: 0.6,
        delay: 0.3,
      });
      t2.from("#btun", {
        xPercent: "800",
        duration: 0.8,
        scale: 0,
      });
    }, p1);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className=" overflow-hidden h-[100vh] w-[100vw] bg-black " ref={p1}>
        <div className=" h-full  overflow-auto scrollbar-hide  scroll-smooth relative">
          <div className="w-full h-full absolute z-10 bg-gradient-to-b from-[#4e9c0e] to-[#224b01] opacity-65"></div>
          <img
            src="https://images.unsplash.com/photo-1469122312224-c5846569feb1?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="absolute z-0 h-[100vh] w-[100vw] contrast-200"
          />
          <div className=" flex w-full h-full z-20 relative items-center justify-center flex-col gap-10">
            <div
              className="w-[70vw] text-center text-6xl font-bold font-Epilogue text-white"
              id="txt"
            >
              "KNOWLEDGE IS LIKE A GARDEN, IF IT IS NOT CULTIVATED, IT CANNOT BE
              HARVESTED."
            </div>

            <button
              class="relative inline-flex items-center justify-center p-4 px-[4vw] py-[2vh] overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-black shadow-md group text-3xl whitespace-nowrap"
              id="btun"
            >
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                <svg
                  class="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                EXPLORE NOW
              </span>
              <span class="relative invisible">Button Text</span>
            </button>
          </div>

          <div className="h-[100vh] w-[100vw] bg-white">
            lawraaaaaaaaaaaaaaaaaa
          </div>
        </div>
        <div className="h-full w-full bg-black">lawra</div>
      </div>
    </>
  );
};

export default Homepage;

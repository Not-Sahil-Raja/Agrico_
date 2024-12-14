import React, { useEffect } from "react";
import Item from "./Item";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";

const InfiniteSlider = ({ PopularCourses }) => {
  const [ref, { width }] = useMeasure();
  const xTranslate = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPos = -width / 2 - 8;

    controls = animate(xTranslate, [0, finalPos], {
      ease: "linear",
      duration: 30,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [width, xTranslate]);
  return (
    <div className={` w-full h-[30vh]  py-2 relative`}>
      <motion.div
        className="flex gap-4 items-center justify-center h-full absolute"
        style={{ x: xTranslate }}
        ref={ref}
      >
        {[...PopularCourses, ...PopularCourses].map((item, index) => (
          <Item
            key={`${item.id}-${index}`}
            id={item.id}
            cat={item.cat}
            back={item.back}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteSlider;

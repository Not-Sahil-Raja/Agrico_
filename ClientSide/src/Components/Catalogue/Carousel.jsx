import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  // Move to the next image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden">
      <div className="w-full flex">
        {images.map((image, i) => (
          <Transition
            as="div"
            key={i}
            show={index === i}
            enter="transition-opacity duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-1000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="w-full flex-shrink-0"
          >
            <img src={image} alt={`Slide ${i + 1}`} className="w-full" />
          </Transition>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

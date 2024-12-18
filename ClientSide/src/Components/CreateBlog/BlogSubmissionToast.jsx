import { ArrowUpRightIcon, Sprout } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function BlogSubmissionToast() {
  const [showSprout, setShowSprout] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSprout(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="bg-gradient-to-br from-[#e6fdcc] to-[#C3EC98] p-4 rounded-lg shadow-lg border border-[#AFE675] max-w-md w-full fixed bottom-4 right-4 z-[21]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5, easing: [0.85, 0, 0.15, 1] }}
    >
      <div className="flex items-start space-x-4">
        <div
          className={`text-green-600 transition-all duration-1000 ease-out transform ${
            showSprout ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <Sprout size={32} />
        </div>
        <div className="flex-1 font-Archivo">
          <h3 className=" font-semibold  text-xl text-green-800 mb-2">
            Blog Submitted Successfully!
          </h3>
          <p className="text-green-700 text-sm mb-4">
            Your blog will be reviewed by our team and will be published.
          </p>
          <button className="group flex items-center justify-center bg-green-600 hover:bg-green-700 transition-colors duration-200 px-4 py-2 rounded-full text-white font-medium text-sm">
            Check Your Blog Status
            <ArrowUpRightIcon
              size={18}
              className="ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

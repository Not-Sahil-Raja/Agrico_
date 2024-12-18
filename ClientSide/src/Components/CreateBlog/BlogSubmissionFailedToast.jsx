import { AlertTriangle, XCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export function BlogSubmissionFailedToast() {
  const [showIcon, setShowIcon] = useState(false);

  return (
    <motion.div
      className="bg-gradient-to-br from-red-100 to-red-200 p-4 rounded-lg shadow-lg border border-red-300 max-w-md w-full fixed bottom-4 right-4 z-[21]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5, easing: [0.85, 0, 0.15, 1] }}
    >
      <div className="flex items-start space-x-4">
        <div
          className={`text-red-600 transition-all duration-1000 ease-out transform animate-pulse`}
        >
          <AlertTriangle size={32} />
        </div>
        <div className="flex-1 font-Archivo">
          <h3 className="font-bold text-xl text-red-800 mb-2">
            Failed to Create Blog
          </h3>
          <p className="text-red-700 text-sm mb-4">
            Something went wrong while creating your blog.
          </p>
          <button className="group flex items-center justify-center bg-red-600 hover:bg-red-700 transition-colors duration-200 px-4 py-2 rounded-full text-white font-medium text-sm">
            Try Again
            <XCircle
              size={18}
              className="ml-2 transform group-hover:rotate-90 transition-transform duration-200"
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

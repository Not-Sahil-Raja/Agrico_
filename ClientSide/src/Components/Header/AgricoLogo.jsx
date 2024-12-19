import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AgricoLogo = () => {
  const [logoAnim, setLogoAnim] = useState(false);
  return (
    <Link className=" text-center w-fit  items-center justify-center relative">
      <motion.div
        className=" relative overflow-hidden flex items-center justify-center gap-2 px-2 py-1 "
        onHoverStart={() => setLogoAnim(!logoAnim)}
        onHoverEnd={() => setLogoAnim(!logoAnim)}
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            scale: logoAnim ? [1, 0.8, 1] : 1,
            rotate: logoAnim ? [0, 30, 0] : 0,
          }}
          transition={{ duration: 0.5, easings: [0.83, 0, 0.17, 1] }}
        >
          <img
            src="/vite.svg"
            alt="Vite Logo"
            className=" w-5 object-cover rounded-full shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: logoAnim ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        <div className=" font-Archivo ">AgriCo</div>
      </motion.div>
    </Link>
  );
};

export default AgricoLogo;

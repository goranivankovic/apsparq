import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimateText = ({ lines }) => {
  return (
    <div >
      {lines.map((line, index) => (
        <Line key={index} text={line} />
      ))}
    </div>
  );
};

const Line = ({ text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
       style={{
        backgroundColor: isInView ? "#000000" : "#FFFFFF",
        transition: "background-color 2s ease",
        borderRadius: "5px",
      }}
    >
      {text}
    </motion.div>
  );
};

export default AnimateText;
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function AnimateText({ lines }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "40px",
      }}
    >
      {/* BACKGROUND LAYER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{
          duration: 11, // ⬅️ OVDE ćeš stvarno videti sporinu
          ease: "easeInOut",
        }}
  />

      {/* CONTENT */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 40,
            }}
            transition={{
              delay: i * 0.2,
              duration: 0.6,
            }}
          >
            {line}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
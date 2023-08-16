import React from "react";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import { useRef } from "react";
import { useEffect } from "react";

const AnimatedTextWord = ({ text }) => {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <InView
      as="div"
      onChange={(inView) => {
        if (inView) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      }}
      threshold={0.7} // Change this value to adjust when the animation should trigger
    >
      <motion.span variants={container} initial="hidden" animate={controls}>
        {words.map((word, index) => (
          <motion.span
            variants={child}
            style={{ marginRight: "5px" }}
            key={index}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </InView>
  );
};

export default AnimatedTextWord;

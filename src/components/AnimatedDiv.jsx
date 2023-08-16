import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";
import { InView } from "react-intersection-observer";

const AnimatedDiv = ({ variants, children, className }) => {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <InView
      as="div"
      ref={ref}
      onChange={(inView, entry) => {
        if (inView) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      }}
      reset={true}
    >
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={controls}
        className={className}
      >
        {children}
      </motion.div>
    </InView>
  );
};

export default AnimatedDiv;

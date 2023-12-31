// import styles from "./Nav.module.css";
// import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedTextWord from "./AnimatedTextWord";

const Head = () => {
  return (
    <div className="Hero min-[600px]:pl-5 my-5 min-[600px]:p-5 transition-all duration-150 max-[600px]:p-5">
      <div className="hero__description mt-10 max-[600px]:bg-slate-900 max-[600px]:bg-opacity-40 max-[600px]:p-5 font-montserrat max-[600px]:text-white font-semibold max-[600px]:rounded-3xl text-2xl">
        <p className="season text-xl max-[600px]:text-sm max-[600px]:text-center">
          <AnimatedTextWord text={"new bears every season"} />
        </p>
        <h1 className="font-archive ">bio-organic medorii bears</h1>
        <p className="style text-2xl max-[600px]:text-xl">
          <AnimatedTextWord text={"your style. in game. in the metaverse"} />
        </p>
        <p className="skins">
          <AnimatedTextWord text={"10,000 skins per season"} />
        </p>
        <p className="opensea">
          <AnimatedTextWord text={"buy from open sea or"} />
        </p>
        <p className="playbox">playbox</p>
      </div>
    </div>
  );
};

export default Head;

{
  /*  */
}

// const [isFixed, setIsFixed] = useState(false);

// useEffect(() => {
//   const handleScroll = () => {
//     const scrollY = window.scrollY;
//     setIsFixed(scrollY > 0);
//   };

//   window.addEventListener("scroll", handleScroll);

//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, []);

// const [isSticky, setIsSticky] = useState(false);

// useEffect(() => {
//   const handleScroll = () => {
//     const scrollY = window.scrollY || window.pageYOffset;
//     setIsSticky(scrollY > 0); // Change the condition as per your requirements
//   };

//   window.addEventListener("scroll", handleScroll);

//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, []);

// return (
//   <div className="Hero">
//     {/* .hero__top */}
//     <div
//       className={`${styles.nav__container} ${isSticky ? styles.fixed : ""}`}
//     >
//       <div className={styles.nav__content}>
//         <div className={styles.nav__item}>Nav</div>
//       </div>
//     </div>
//   </div>
// );

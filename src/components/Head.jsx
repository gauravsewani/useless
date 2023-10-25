// import styles from "./Nav.module.css";
// import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedTextWord from "./AnimatedTextWord";

const Head = () => {
  return (
    <div className="Hero pl-5 max-[600px]:bg-slate-900 max-[600px]:bg-opacity-40 transition-all duration-150">
      <div className="hero__description font-montserrat max-[600px]:text-white font-semibold ">
        <p className="season">
          <AnimatedTextWord text={"new bears every season"} />
        </p>
        <h1 className="font-archive">bio-organic medorii bears</h1>
        <p className="style">
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

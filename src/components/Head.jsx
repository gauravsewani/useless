// import styles from "./Nav.module.css";
// import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedTextWord from "./AnimatedTextWord";

const Head = () => {
  return (
    <div className="Hero pl-5 transition-all duration-150">
      <div className="flex header text-black items-center w-screen justify-center font-archive ">
        <div className="w-[30vw] max-md:w-[0vw]"></div>
        {/* <button>
          Player one trailer{" "}
          <span className="play__button">
            <div className="triangle"></div>
          </span>
        </button> */}
        <div className="header-links flex gap-16 max-xl:gap-10 max-lg:gap-5 max-sm:hidden text-xl max-md:w-[60vw] w-[50vw] justify-center mx-auto ">
          <h1 className="max-md:text-lg max-sm:text-sm max-md:pt-5 font-black cursor-pointer font-archive">
            D.A.O
          </h1>
          <h1 className="max-md:text-lg max-sm:text-sm max-md:pt-5 font-black cursor-pointer font-archive">
            Marketplace
          </h1>
          <h1 className="max-md:text-lg max-sm:text-sm max-md:pt-5 font-black cursor-pointer font-archive">
            Blog
          </h1>
          <a
            href="/Whitepaper.pdf"
            className="decoration-white text-black no-underline w-fit"
          >
            <h1 className="max-md:text-lg max-sm:text-sm max-md:pt-5 font-black cursor-pointer font-archive">
              Whitepaper
            </h1>
          </a>
        </div>
        <div className="bionic__bear w-[30vw] max-sm:hidden  max-md:pt-5 flex justify-end max-md:pr-5 pr-10">
          Bio Organic Bear
        </div>
      </div>

      <div className="hero__description font-montserrat font-semibold">
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

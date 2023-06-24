// import styles from "./Nav.module.css";
// import { useState, useEffect } from "react";

const Head = () => {
  return (
    <div className="Hero">
      <div className="header">
        <button>
          Player one trailer{" "}
          <span className="play__button">
            <div className="triangle"></div>
          </span>
        </button>
        <div className="bionic__bear">Bio Organic Bear</div>
      </div>

      <div className="hero__description">
        <p className="season">new bears every season</p>
        <h1>bio-organic medorii bears</h1>
        <p className="style">your style. in game. in the metaverse</p>
        <p className="skins">10,000 skins per season</p>
        <p className="opensea">buy from open sea or</p>
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

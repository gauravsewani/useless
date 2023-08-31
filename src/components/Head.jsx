// import styles from "./Nav.module.css";
import Image from "next/image";
import MedoriiLogo from "../../public/assets/Bears/medorii.png";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedTextWord from "./AnimatedTextWord";
import Discord from "../../public/assets/discord.svg";
import Twitter from "../../public/assets/twitter.svg";
import OpenSea from "../../public/assets/opensea.svg";
import Medorii from "../../public/assets/medori.png";
import Instagram from "../../public/assets/instagram.svg";
import Tele from "../../public/assets/telegram.svg";
import Youtube from "../../public/assets/youtube.svg";

const Head = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div className="Hero pl-5 transition-all duration-150">
      <div className="flex header text-black items-start w-screen justify-center font-archive hover:shadow-2xl cursor-pointer">
        <div className="w-[30vw] max-md:w-[0vw]"></div>
        {/* <button>
          Player one trailer{" "}
          <span className="play__button">
            <div className="triangle"></div>
          </span>
        </button> */}
        <div className="sm:hidden h-24 w-screen bg-white absolute top-0">
          <div className="flex justify-between items-center px-2 py-3 md:px-10 max-xl:gap-10 max-lg:gap-5 w-full h-full relative">
            <Image
              src={MedoriiLogo}
              alt="medorii log0"
              width={40}
              height={40}
            />
            <button
              id="menu-toggle"
              className={`flex justify-end md:hidden ${
                menuOpen ? "active" : ""
              }`}
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <div
              id="mobile-menu"
              className={`md:hidden ${
                menuOpen ? "block" : "hidden"
              } absolute w-screen top-24 left-0 bg-white text-center py-4 h-screen flex flex-col items-center`}
            >
              <h1 className="text-2xl font-black cursor-pointer font-archive mb-20">
                D.A.O
              </h1>

              <div className="mid-nav mb-20">
                <h1 className="text-xl font-black cursor-pointer font-archive mb-4">
                  Marketplace
                </h1>
                <h1 className="text-xl font-black cursor-pointer font-archive mb-4">
                  Blog
                </h1>
                <a
                  href="/Whitepaper.pdf"
                  className="text-black no-underline w-fit"
                >
                  <h1 className="text-xl font-black cursor-pointer font-archive">
                    Whitepaper
                  </h1>
                </a>
              </div>

              <div className="md:hidden block pr-5 mb-20 text-xl font-archive text-center">
                Bio Organic Bear
              </div>

              <div className="socials flex justify-between w-max gap-10 items-center border-solid border-4 border-red-500">
                <a
                  href="https://discord.gg/4wKmVpjfMM"
                  className="text-white no-underline"
                >
                  <Image src={Discord} height={30} width={30} alt="discord" />
                </a>
                <a
                  href="https://twitter.com/Medorii_io"
                  className="text-white no-underline"
                >
                  <Image src={Twitter} width={30} height={30} alt="twitter" />
                </a>
                <a
                  href="https://t.me/medorii_io"
                  className="text-white no-underline"
                >
                  <Image src={Tele} width={30} height={30} alt="Telegram" />
                </a>
                <a
                  href="https://www.instagram.com/medorii.io/"
                  className="text-white no-underline"
                >
                  <Image
                    src={Instagram}
                    height={30}
                    width={30}
                    alt="instagram"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-16 max-xl:gap-10 max-lg:gap-5 max-sm:hidden text-xl max-md:w-[60vw] w-[50vw] justify-center mx-auto ">
          <h1 className="text-2xl max-md:text-lg max-sm:text-sm max-md:pt-5 font-black font-archive">
            D.A.O
          </h1>
          <h1 className="text-2xl max-md:text-lg max-sm:text-sm max-md:pt-5 font-black cursor-pointer font-archive">
            Marketplace
          </h1>
          <h1 className="text-2xl max-md:text-lg max-sm:text-sm max-md:pt-5 font-black cursor-pointer font-archive">
            Blog
          </h1>
          <a
            href="/Whitepaper.pdf"
            className="decoration-white text-black no-underline w-fit"
          >
            <h1 className="text-2xl max-md:text-lg max-sm:text-sm max-md:pt-5 font-black cursor-pointer font-archive">
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

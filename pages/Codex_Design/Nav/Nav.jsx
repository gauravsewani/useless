import React, { useState, useEffect } from "react";
import Image from "next/image";
import MedoriiLogo from "../../../public/assets/medorii.png";
import Discord from "../../../public/assets/discord.svg";
import Twitter from "../../../public/assets/twitter.svg";
import OpenSea from "../../../public/assets/opensea.svg";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleToggle = () => {
    setOpenNav(!openNav);

    // getting rid of the vertical scroll when the navbar is active
    // if (openNav) {
    //   document.body.style.overflow = "hidden";
    // } else {
    //   document.body.style.overflow = "visible";
    // }
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setOpenNav(!openNav);

  //     if (openNav) {
  //       document.body.style.overflow = "hidden";
  //     } else {
  //       document.body.style.overflow = "visible";
  //     }
  //   };

  //   handleScroll();

  //   document.body.style.overflow = openNav ? "hidden" : "visible";

  //   return () => {
  //     document.body.style.overflow = "visible";
  //   };
  // }, [openNav]);

  useEffect(() => {
    useEffect(() => {
      const handleScroll = () => {
        if (openNav) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "visible";
        }
      };

      handleScroll(); // Set initial scroll behavior

      // Only update the scroll behavior when `openNav` changes
      document.body.style.overflow = openNav ? "hidden" : "visible";

      return () => {
        // Cleanup function to reset scroll behavior on unmount
        document.body.style.overflow = "visible";
      };
    }, [openNav]);
  });

  return (
    <div className="nav">
      <div className="nav__first">
        <Image src={MedoriiLogo} alt="medorii logo" className={styles.image} />
      </div>
      <div className="burger__container">
        <div className="burger">
          <div
            className={openNav ? "main-burger ex" : "main-burger"}
            onClick={handleToggle}
          ></div>
        </div>
      </div>

      <div
        className={
          openNav ? "nav__items-container" : "nav__items-container collapsed"
        }
      >
        <div className="nav__items">
          <div className="codex__weapons">
            <a href="/Codex_Design">Codex Designs</a>
            <a href="/Road_Map">RoadMap</a>
            <a href="">Shop</a>
          </div>

          <div className="socials">
            <a href="">
              <Image src={OpenSea} alt="open sea" width={30} />
            </a>
            <a href="">
              <Image src={Discord} alt="discord" width={30} />
            </a>
            <a href="">
              <Image src={Twitter} alt="twitter" width={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

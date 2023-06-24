import { useState } from "react";
import MedoriiLogo from "../../../public/assets/medorii.png";
import Discord from "../../../public/assets/discord.svg";
import Twitter from "../../../public/assets/twitter.svg";
import OpenSea from "../../../public/assets/opensea.svg";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleToggle = () => {
    setOpenNav(!openNav);

    // getting rid of the vertical scroll when the navbar is active
    if (!openNav) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  };

  return (
    <div className="nav">
      <div className="nav__first">
        <img src={MedoriiLogo} alt="medorii logo" />
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
            <a href="Road_Map">Road Map</a>
            <a href=""></a>
          </div>

          <div className="socials">
            <a href="">
              <img src={OpenSea} alt="open sea" width={30} />
            </a>
            <a href="">
              <img src={Discord} alt="discord" width={30} />
            </a>
            <a href="">
              <img src={Twitter} alt="twitter" width={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

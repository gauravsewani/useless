import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Discord from "../../public/assets/discord.svg";
import Twitter from "../../public/assets/twitter.svg";
import OpenSea from "../../public/assets/opensea.svg";
import Medorii from "../../public/assets/medori.png";
import Instagram from "../../public/assets/instagram.svg";
import Tele from "../../public/assets/telegram.svg";
import Youtube from "../../public/assets/youtube.svg";

const Footer2 = () => {
  return (
    <footer>
      <div className="flex gap-10 items-center min-h-[100px] justify-evenly max-sm:gap-2 max-[600px]:pb-0 px-10 ">
        <div className=" max-h-20  text-center  max-[600px]:hidden">
          <h2 className=" text-sm text-yellow-300 ">MEDORII.IO</h2>
          <h1 className=""> PLAY, OWN TRADE. JOIN US IN OUR METAVERSE</h1>
        </div>
        <div className="socials_div max-[600px]:hidden flex gap-5 text-lg font-razed">
          <a
            href="https://discord.gg/4wKmVpjfMM"
            className="text-white no-underline"
          >
            <div className="social_link flex flex-col">
              <Image src={Discord} width={35} height={35} alt="discord" />
            </div>
          </a>
          <a
            href="https://twitter.com/Medorii_io"
            className="text-white no-underline"
          >
            <div className="social_link flex flex-col">
              <Image src={Twitter} width={35} height={35} alt="twitter" />
            </div>
          </a>
          <a href="https://t.me/medorii_io" className="text-white no-underline">
            <div className="social_link flex flex-col">
              <Image src={Tele} width={35} height={35} alt="Telegram" />
            </div>
          </a>
          <a
            href="https://www.instagram.com/medorii.io/"
            className="text-white no-underline"
          >
            <div className="social_link flex flex-col">
              <Image src={Instagram} width={35} height={35} alt="instagram" />
            </div>
          </a>
          <a
            href="https://youtu.be/Ghww-DCwpyk"
            className="text-white no-underline"
          >
            <div className="social_link flex flex-col">
              <Image src={Youtube} width={35} height={35} alt="Youtube" />
            </div>
          </a>
        </div>{" "}
        <div className=" max-[600px]:gap-5 flex w-fit gap-5 justify-between  ">
          <a href="" className="text-white visited:text-white">
            Terms And Conditions
          </a>
          <a href="" className="text-white visited:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
      <div className=" max-[600px]:flex hidden gap-5 items-center px-10 py-5">
        <div className="socials_div max-[600px]:flex hidden mx-auto gap-5 text-lg font-razed">
          <a
            href="https://discord.gg/4wKmVpjfMM"
            className="text-white no-underline"
          >
            <div className="social_link flex flex-col">
              <Image src={Discord} width={35} height={35} alt="discord" />
            </div>
          </a>
          <a
            href="https://twitter.com/Medorii_io"
            className="text-white no-underline"
          >
            <div className="social_link flex flex-col">
              <Image src={Twitter} width={35} height={35} alt="twitter" />
            </div>
          </a>
          <a href="https://t.me/medorii_io" className="text-white no-underline">
            <div className="social_link flex flex-col">
              <Image src={Tele} width={35} height={35} alt="Telegram" />
            </div>
          </a>
          <a
            href="https://www.instagram.com/medorii.io/"
            className="text-white no-underline"
          >
            <div className="social_link flex flex-col">
              <Image src={Instagram} width={35} height={35} alt="instagram" />
            </div>
          </a>
          <a
            href="https://youtu.be/Ghww-DCwpyk"
            className="text-white no-underline"
          >
            <div className="social_link flex flex-col">
              <Image src={Youtube} width={35} height={35} alt="Youtube" />
            </div>
          </a>
        </div>
      </div>
      <div className="relative">
        <div className="bg-black absolute  left-0 right-0 top-0  min-h-screen"></div>
      </div>
    </footer>
  );
};
export default Footer2;

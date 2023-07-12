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
      <div className="top__footer gap-10 max-[600px]:pb-0 px-10 pt-4">
        <div className="play_div max-h-20 min-w-[25vw] max-[600px]:hidden">
          <h2 className=" text-sm text-yellow-300 ">MEDORII.IO</h2>
          <h1 className=""> PLAY, OWN TRADE.</h1>
          <h2 className="metaverse ">IN OUR METAVERSE</h2>
          <h2 className=" join_date">6/9/2040</h2>
        </div>
        <div className="join_div max-h-20 min-w-[25vw] max-[600px]:hidden">
          <h2 className=" text-sm  text-yellow-300 ">MEDORII.IO</h2>
          <h1>JOIN US</h1>
          <h2 className="metaverse">IN OUR METAVERSE</h2>
          <h2 className="join_date">6/9/2040</h2>
        </div>
        <div className="socials_div flex gap-5 text-lg font-razed">
          <a
            href="https://discord.gg/4wKmVpjfMM"
            className="text-white no-underline"
          >
            <div className="social_link flex flex-col">
              <div className="socail_text">Discord</div>
              <Image src={Discord} height={20} width={20} alt="discord" />
            </div>
          </a>
          <a
            href="https://twitter.com/Medorii_io"
            className="text-white no-underline"
          >
            <div className="social_link flex flex-col">
              <div className="socail_text">Twitter</div>
              <Image src={Twitter} width={20} height={20} alt="twitter" />
            </div>
          </a>
          <a href="https://t.me/medorii_io" className="text-white no-underline">
            <div className="social_link flex flex-col">
              <div className="socail_text">Telegram</div>
              <Image src={Tele} width={20} height={20} alt="Telegram" />
            </div>
          </a>
          <a
            href="https://www.instagram.com/medorii.io/"
            className="text-white no-underline"
          >
            <div className="social_link flex flex-col">
              <div className="socail_text">Instagram</div>
              <Image src={Instagram} height={20} width={20} alt="instagram" />
            </div>
          </a>
          <a
            href="https://youtu.be/Ghww-DCwpyk"
            className="text-white no-underline"
          >
            <div className="social_link flex flex-col">
              <div className="socail_text">Youtube</div>
              <Image src={Youtube} width={20} height={20} alt="Youtube" />
            </div>
          </a>
        </div>
      </div>
      <div className="bottom__footer gap-5 items-center px-10 py-5">
        <div className="logo">
          <Image src={Medorii} width={80} height={20} />
        </div>

        <div className="max-[600px]:flex max-[600px]:gap-5 flex w-60 justify-between  ">
          <a href="" className="text-white">
            Terms And Conditions
          </a>
          <a href="" className="text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer2;

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Discord from "../../public/assets/discord.svg";
import Twitter from "../../public/assets/twitter.svg";
import OpenSea from "../../public/assets/opensea.svg";
import Medorii from "../../public/assets/medori.png";
import Instagram from "../../public/assets/instagram.svg";
import Tele from "../../public/assets/telegram.svg";

const Footer2 = () => {
  return (
    <footer>
      <div className="top__footer">
        <div className="play_div">
          <div className="join_name">MEDORII.IO</div>
          <h1>PLAY, OWN TRADE.</h1>
          <div className="metaverse">IN OUR METAVERSE</div>
          <div className="join_date">6/9/2040</div>
        </div>
        <div className="join_div">
          <div className="join_name">MEDORII.IO</div>
          <h1>JOIN US</h1>
          <div className="metaverse">IN OUR METAVERSE</div>
          <div className="join_date">6/9/2040</div>
        </div>
        <div className="socials_div">
          <div className="social_link">
            <div className="socail_text">Discord</div>
            <Image src={Discord} height={20} width={20} alt="discord" />
          </div>
          <div className="social_link">
            <div className="socail_text">Twitter</div>
            <Image src={Twitter} width={20} height={20} alt="twitter" />
          </div>
          <div className="social_link">
            <div className="socail_text">Telegram</div>
            <Image src={Tele} width={20} height={20} alt="Telegram" />
          </div>
          <div className="social_link">
            <div className="socail_text">Instagram</div>
            <Image src={Instagram} height={20} width={20} alt="instagram" />
          </div>
          <div className="social_link">
            <div className="socail_text">Opensea</div>
            <Image src={OpenSea} width={20} height={20} alt="opensea" />
          </div>
        </div>
      </div>
      <div className="bottom__footer">
        <div className="logo">
          <Image src={Medorii} width={80} height={20} />
        </div>
        <div className="terms">
          <a href="">Terms And Conditions</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer2;

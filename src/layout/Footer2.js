import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer2 = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="left_part">
            <p>
              Copyright 2021 Medori Innovation
              {/* <a
                href="https://themeforest.net/user/frenify/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                Frenify
              </a> */}
            </p>
          </div>
          <div className="right_part">
            <div className="footer">
              <h4 className="left_part">
                Explore
                <br />
                Medorii
                <br />
                With
              </h4>
              <ul className="right_part">
                <li>
                  <Link href="https://discord.gg/pmmSUCBG">
                    <a className="">
                      <img src="/img/market/discord.svg" alt="" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/medorii.io/">
                    <a className="">
                      <img
                        src="/img/market/instagram`.svg"
                        alt=""
                        className=""
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/Medorii_io">
                    <a className="">
                      <img src="/img/market/twitter.svg" alt="" className="" />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer2;

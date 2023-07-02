import React, { useEffect, useRef } from "react";
import Sortable from "sortablejs";
import "bootstrap/dist/css/bootstrap.min.css";
import Draggable from "react-draggable";
import Footer from "../layout/Footer";
import Link from "next/link";

const Teams = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      Sortable.create(containerRef.current, {
        draggable: ".card",
        handle: ".card",
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="container draggable-cards " style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
      <h1 style={{ marginTop: "2rem", textAlign: 'center' }}>Our Teams</h1>
      <div className="mt-4 flex overflow-scroll">
        <div className="card flex-shrink-0">
          <img src="img/bear/dean.jpeg" alt="Card" />
          <div className="card-content bg-[black]">
            <div className="bg-[black]">
              <h3 className=" ">
                <Link href="https://www.linkedin.com/in/dean-cheng/">
                  <img
                    src="svg/social/linkedin-2.svg"
                    alt="linkedin"
                    className=" bg-white h-12 w-12 mx-auto mt-2 hover:bg-blue-500 rounded-2xl p-2 "
                  />
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="card ml-4 flex-shrink-0">
          <img src="img/bear/sam.jpeg" alt="Card" />
          <div className="card-content bg-[black]">
            <div className="bg-[black]">
              <h3 className=" ">
                <Link href="https://www.linkedin.com/in/samu3l/">
                  <img
                    src="svg/social/linkedin-2.svg"
                    alt="linkedin"
                    className=" bg-white h-12 w-12 mx-auto mt-2 hover:bg-blue-500 rounded-2xl p-2 "
                  />
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="card ml-4 flex-shrink-0">
          <img src="img/bear/naqib.jpeg" alt="Card" />
          <div className="card-content bg-[black]">
            <div className="bg-[black]">
              <h3 className=" ">
                <Link href="https://www.linkedin.com/in/naqib-solihin-bin-azman-800a85175/">
                  <img
                    src="svg/social/linkedin-2.svg"
                    alt="linkedin"
                    className=" bg-white h-12 w-12 mx-auto mt-2 hover:bg-blue-500 rounded-2xl p-2 "
                  />
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="card ml-4 flex-shrink-0">
          <img src="img/bear/dinh.jpeg" alt="Card" />
          <div className="card-content bg-[black]">
            <div className="bg-[black]">
              <h3 className=" ">
                <Link href="https://www.linkedin.com/in/dinh-ho/">
                  <img
                    src="svg/social/linkedin-2.svg"
                    alt="linkedin"
                    className=" bg-white h-12 w-12 mx-auto mt-2 hover:bg-blue-500 rounded-2xl p-2 "
                  />
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="card ml-4 flex-shrink-0">
          <img src="img/bear/Aqil.jpeg" alt="Card" />
          <div className="card-content bg-[black]">
            <div className="bg-[black]">
              <h3 className=" ">
                <Link href="https://www.linkedin.com/in/muhd-aqil/">
                  <img
                    src="svg/social/linkedin-2.svg"
                    alt="linkedin"
                    className=" bg-white h-12 w-12 mx-auto mt-2 hover:bg-blue-500 rounded-2xl p-2 "
                  />
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="card ml-4 flex-shrink-0">
          <img src="img/bear/jason.jpeg" alt="Card" />
          <div className="card-content bg-[black]">
            <div className="bg-[black]">
              <h3 className=" ">
                <Link href="https://www.linkedin.com/in/chiajason/">
                  <img
                    src="svg/social/linkedin-2.svg"
                    alt="linkedin"
                    className=" bg-white h-12 w-12 mx-auto mt-2 hover:bg-blue-500 rounded-2xl p-2 "
                  />
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;

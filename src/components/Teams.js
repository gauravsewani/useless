import React, { useEffect, useRef } from "react";
import Sortable from "sortablejs";
import "bootstrap/dist/css/bootstrap.min.css";
import Draggable from "react-draggable";
import Footer from "../layout/Footer";
import Link from "next/link";

const Teams = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.setProperty("--bs-card-bg", "transperent");
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      Sortable.create(containerRef.current, {
        draggable: ".card",
        handle: ".card",
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="container draggable-cards bg-transparent"
    >
      <h1
        style={{ marginTop: "2rem", textAlign: "center" }}
        className="font-archive font-black"
      >
        Core Teams
      </h1>
      <div className="mt-4 flex overflow-scroll">
        <div className="card flex-shrink-0 relative pb-12">
          <img
            src="img/bear/dean.jpeg"
            alt="Card"
            className="object-cover h-96 rounded-3xl m-2"
          />
          <div className="flex flex-col  ">
            <p className="text-2xl text-gray-400 tracking-widest px-3">
              DEAN CHENG
            </p>
            <p className="text-5xl font-black text-black px-3 -mt-4">
              <span className="block">CO-</span>FOUNDER
            </p>
            <p className="text-sm text-gray-400 px-3 -mt-4">
              TRADER, CO-FOUNDER OF FLYMEDIA
            </p>
            {/* <div className="card-content absolute bottom-0 left-0 right-0">
              <div className="">
                <h3 className=" ">
                  <a href="https://www.linkedin.com/in/dean-cheng/">
                    <img
                      src="svg/social/linkedin-2.svg"
                      alt="linkedin"
                      className=" bg-blue-500/50 h-12 w-12 mx-auto mt-2 hover:bg-blue-500 rounded-2xl p-2 "
                    />
                  </a>
                </h3>
              </div>
            </div> */}
          </div>
        </div>
        <div className="card ml-4 flex-shrink-0 relative pb-12">
          <img
            src="img/bear/sam.jpeg"
            alt="Card"
            className="object-cover h-96 rounded-3xl m-2"
          />
          <div className="flex flex-col">
            <p className="text-2xl text-gray-400 tracking-widest px-3">
              SAMUEL FOO
            </p>
            <p className="text-5xl font-black text-black px-3 -mt-4">
              <span className="block">CO-</span>FOUNDER
            </p>
            <p className="text-sm text-gray-400 px-3 -mt-4">
              TRADER, NFT GROUP HARBRINGER AND METALANDERS MANAGER
            </p>
            {/* <div className="card-content absolute bottom-0 left-0 right-0">
              <div className="">
                <h3 className=" ">
                  <a href="https://www.linkedin.com/in/samu3l/">
                    <img
                      src="svg/social/linkedin-2.svg"
                      alt="linkedin"
                      className=" bg-blue-500/50 h-12 w-12 mx-auto mt-2 hover:bg-blue-500 rounded-2xl p-2 "
                    />
                  </a>
                </h3>
              </div>
            </div> */}
          </div>
        </div>
        <div className="card ml-4 flex-shrink-0 relative pb-12">
          <img
            src="img/bear/naqib.jpeg"
            alt="Card"
            className="object-cover h-96 rounded-3xl m-2"
          />
          <div className="flex flex-col ">
            <p className="text-2xl text-gray-400 tracking-widest px-3">NAQIB</p>
            <p className="text-5xl font-black text-black px-3 -mt-4">CTO</p>
            <p className="text-sm text-gray-400 px-3 -mt-4">
              DEVELOPER AT STOIC CAPITAL TRADER
            </p>
            {/* <div className="card-content absolute bottom-0 left-0 right-0">
              <div className="">
                <h3 className=" ">
                  <a href="https://www.linkedin.com/in/naqib-solihin-bin-azman-800a85175/">
                    <img
                      src="svg/social/linkedin-2.svg"
                      alt="linkedin"
                      className=" bg-blue-500/50 h-12 w-12 mx-auto mt-2 hover:bg-blue-500 rounded-2xl p-2 "
                    />
                  </a>
                </h3>
              </div>
            </div> */}
          </div>
        </div>
        <div className="card ml-4 flex-shrink-0 relative pb-12">
          <img
            src="img/bear/dinh.jpeg"
            alt="Card"
            className="object-cover h-96 rounded-3xl m-2"
          />
          <div className="flex flex-col">
            <p className="text-2xl text-gray-400 tracking-widest px-3">
              DINH HO
            </p>
            <p className="text-5xl font-black text-black px-3 -mt-4">
              <span className="block">TOKEN</span>ECONOMIST
            </p>
            <p className="text-sm text-gray-400 px-3 -mt-4">
              CO-FOUNDER OF AIZA WORLD, SEA TOKEN ENGINEERING ACADEMY
            </p>
            {/* <div className="card-content absolute bottom-0 left-0 right-0">
              <div className="">
                <h3 className=" ">
                  <a href="https://www.linkedin.com/in/dinh-ho/">
                    <img
                      src="svg/social/linkedin-2.svg"
                      alt="linkedin"
                      className=" bg-blue-500/50 h-12 w-12 mx-auto mt-2 hover:bg-blue-500 rounded-2xl p-2 "
                    />
                  </a>
                </h3>
              </div>
            </div> */}
          </div>
        </div>
        <div className="card ml-4 flex-shrink-0 relative pb-12">
          <img
            src="img/bear/desmond.jpeg"
            alt="Card"
            className="object-cover h-96 rounded-3xl m-2"
          />
          <div className="flex flex-col">
            <p className="text-2xl text-gray-400 tracking-widest px-3">
              DSNMDH
            </p>
            <p className="text-5xl font-black text-black px-3 -mt-4">
              <span className="block">USER</span>EXPERIENCE
            </p>
            <p className="text-sm text-gray-400 px-3 -mt-4">
              Formerly Creative Director for NIKE
            </p>
            {/* <div className="card-content absolute bottom-0 left-0 right-0">
              <div className="">
                <h3 className=" ">
                  <a href="https://www.linkedin.com/in/dinh-ho/">
                    <img
                      src="svg/social/linkedin-2.svg"
                      alt="linkedin"
                      className=" bg-blue-500/50 h-12 w-12 mx-auto mt-2 hover:bg-blue-500 rounded-2xl p-2 "
                    />
                  </a>
                </h3>
              </div>
            </div> */}
          </div>
        </div>
        <div className="card ml-4 flex-shrink-0 relative pb-12">
          <img
            src="img/bear/joshua.jpeg"
            alt="Card"
            className="object-cover h-96 rounded-3xl m-2"
          />
          <div className="flex flex-col">
            <p className="text-2xl text-gray-400 tracking-widest px-3">
              JOSHUA
            </p>
            <p className="text-5xl font-black text-black px-3 -mt-4">
              <span className="block">BUSINESS</span>HEAD
            </p>
            <p className="text-sm text-gray-400 px-3 -mt-4">
              ICO AND PARTNERSHIP EXPERT
            </p>
            {/* <div className="card-content absolute bottom-0 left-0 right-0">
              <div className="">
                <h3 className=" ">
                  <a href="https://www.linkedin.com/in/dinh-ho/">
                    <img
                      src="svg/social/linkedin-2.svg"
                      alt="linkedin"
                      className=" bg-blue-500/50 h-12 w-12 mx-auto mt-2 hover:bg-blue-500 rounded-2xl p-2 "
                    />
                  </a>
                </h3>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;

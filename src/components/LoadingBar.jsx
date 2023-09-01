// Loading.js
import React from "react";
import GalaxyEffect from "./GalaxyEffect";

const Loading = () => {
  return (
    <div className="h-screen overflow-hidden relative">
      <GalaxyEffect>
        <div className="h-screen flex flex-col items-center  ">
          <div className="w-[600px] mx-auto -mt-20">
            <img src="/img/medori.png" alt="" className="w-full h-auto" />
          </div>
          <div className="text-center -mt-10 mb-10">
            <div className="text-6xl text-white font-bold">Play.</div>
            <div className="text-6xl text-white font-bold">Explore.Earn</div>
            <p className="text-white text-xs font-bold ml-14">
              HYPER META RUNNING ON PLAY TO OWN
            </p>
          </div>
          <img src="/loading.gif" alt="" className="w-52 h-auto" />
        </div>
      </GalaxyEffect>
    </div>
  );
};

export default Loading;

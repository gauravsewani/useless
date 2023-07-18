import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-screen w-screen z-10">
        <div className="flex">
          <img
            src="/img/medori.png"
            alt=""
            className="w-[600px] h-fit mx-auto -mt-20"
          />
        </div>
        <div className="flex flex-col items-center gap-20 -mt-14">
          <div>
            <div>
              <p className="text-6xl text-white font-bold ">Play.</p>
              <p className="text-6xl text-white font-bold ">Explore.Earn</p>
            </div>
            <p className="text-white text-[0.5rem] font-bold -mt-3">
              HYPER META RUNNING ON PLAY TO OWN
            </p>
          </div>

          <img src="/loading.gif" alt="" className="w-52 h-fit " />
        </div>
      </div>

      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/stars.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Loading;

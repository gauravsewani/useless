import React from "react";
import VideoComponent from "../../src/components/VideoComponent";
import { useEffect } from "react";

const index = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--mc1", "transperent");
    document.documentElement.style.setProperty("--mc2", "transperent");
    document.documentElement.style.setProperty("--hc", "transperent");
    document.documentElement.style.setProperty("--bc", "transperent");
  }, []);

  return (
    <div className="overflow-hidden">
      <h1 className="text-2xl pt-20 fixed top-0 right-0 text-pink-400 z-20">
        Scroll to Play Video
      </h1>
      <VideoComponent />
    </div>
  );
};

export default index;

// pages/index.js or pages/your-page.js
import React from "react";
import BabylonScene from "../../src/components/BabylonScene";
import { useEffect } from "react";
import Script from "next/script";

const Home = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--mc1", "transperent");
    document.documentElement.style.setProperty("--mc2", "transperent");
    document.documentElement.style.setProperty("--hc", "transperent");
    document.documentElement.style.setProperty("--bc", "transperent");
  }, []);

  return (
    <>
      <Script
        src="/grained.js"
        onLoad={() => {
          var options = {
            animate: true,
            patternWidth: 1000,
            patternHeight: 1000,
            grainOpacity: 0.1,
            grainDensity: 1,
            grainWidth: 1,
            grainHeight: 1,
          };

          grained("#container", options);
        }}
      />
      <div>
        <div className="w-screen max-h-screen overflow-hidden" id="container">
          <BabylonScene />
        </div>
      </div>
    </>
  );
};

export default Home;

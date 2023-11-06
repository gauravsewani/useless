// pages/index.js or pages/your-page.js
import React from "react";
import BabylonScene from "../../src/components/BabylonScene";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--mc1", "transperent");
    document.documentElement.style.setProperty("--mc2", "transperent");
    document.documentElement.style.setProperty("--hc", "transperent");
    document.documentElement.style.setProperty("--bc", "transperent");
  }, []);

  return (
    <div>
      <div className="w-screen h-screen overflow-hidden">
        <BabylonScene />
      </div>
    </div>
  );
};

export default Home;

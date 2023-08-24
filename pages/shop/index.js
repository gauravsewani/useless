import React from "react";
import ShopHero from "../../src/components/ShopHero";
import { useEffect } from "react";
import ShopItem from "../../src/components/ShopItem";

const index = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--mc1", "transperent");
    document.documentElement.style.setProperty("--mc2", "transperent");
    document.documentElement.style.setProperty("--hc", "transperent");
    document.documentElement.style.setProperty("--bc", "transperent");
  }, []);
  return (
    <div className="bg-white">
      <ShopHero />
      <ShopItem />
    </div>
  );
};

export default index;

// pages/index.js
import { useEffect } from "react";
import LoginSignup from "../src/components/LoginSignup";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.setProperty("--mc1", "transperent");
    document.documentElement.style.setProperty("--mc2", "transperent");
    document.documentElement.style.setProperty("--hc", "transperent");
    document.documentElement.style.setProperty("--bc", "transperent");
  }, []);

  return <LoginSignup />;
}

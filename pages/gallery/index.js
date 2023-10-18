import { useEffect, useState } from "react";
const NFTGrid = () => {
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false); // New state to track if images are loaded

  useEffect(() => {
    let mounted = true;
    let i = 2;

    const loadImages = () => {
      const img = new Image();
      img.src = `/img/collection/${i}.png`;

      img.onload = () => {
        if (mounted) {
          setImages((prevImages) => [...prevImages, img.src]);
          i += 1;
          loadImages();
        }
      };

      img.onerror = () => {
        mounted = false;
      };
    };

    loadImages();

    return () => {
      mounted = false;
      setLoaded(true);
    };
  }, [loaded]);

  useEffect(() => {
    document.documentElement.style.setProperty("--mc1", "transperent");
    document.documentElement.style.setProperty("--mc2", "transperent");
    document.documentElement.style.setProperty("--hc", "transperent");
    document.documentElement.style.setProperty("--bc", "transperent");
  }, []);

  return (
    <div className="flex w-full h-screen bg-black">
      <div className="w-[20vw] bg-black flex flex-col items-center justify-evenly my-10">
        <img src="/img/medori.png" alt="" className="h-32" />
        <div className="grow" />
        <div>
          <h1 className="text-3xl font-archive text-white">Codex Designs</h1>
          <h1 className="text-3xl font-archive text-white">Weapons</h1>
        </div>
        <div className="grow" />
        <div className="flex flex-col gap-8 grow justify-end mb-10">
          <img
            src={"svg/opensea.svg"}
            alt=""
            className="h-10 w-full bg-white rounded-full p-2"
          />
          <img
            src={"svg/discord.svg"}
            alt=""
            className="h-10 w-full bg-white text-purple-600 rounded-full p-2"
          />
          <img
            src={"svg/social/twitter-1.svg"}
            alt=""
            className="h-10 w-full bg-white rounded-full p-1"
          />
        </div>
      </div>
      <div className="w-[80vw] h-screen overflow-y-auto">
        <div className="flex flex-wrap justify-start items-start">
          {images.map((src, index) => (
            <div key={index} className="border p-1 m-2 w-[23%]">
              <img
                src={src}
                alt={`NFT ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NFTGrid;

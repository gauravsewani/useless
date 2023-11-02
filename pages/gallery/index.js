import { useEffect, useState } from "react";
const NFTGrid = () => {
  const [nfts, setNfts] = useState([]); // State to store NFT details
  const [selectedNft, setSelectedNft] = useState(null); // State to track selected NFT

  useEffect(() => {
    // Fetching the NFT details from the JSON file
    fetch("/static/nft.json") // Update the path to your JSON file
      .then((response) => response.json())
      .then((data) => setNfts(data))
      .catch((error) =>
        console.error("Error fetching the NFT details:", error)
      );
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--mc1", "transperent");
    document.documentElement.style.setProperty("--mc2", "transperent");
    document.documentElement.style.setProperty("--hc", "transperent");
    document.documentElement.style.setProperty("--bc", "transperent");
  }, []);

  return (
    <div className="flex w-full h-screen bg-black overflow-hidden">
      <div className="md:hidden absolute   m-2 p-2 z-50">
        <a href="/" className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </a>
      </div>

      <div className="hidden md:flex lg:w-[20vw] bg-black flex-col items-center justify-evenly my-10">
        <a href="/" className="text-white self-start ml-8 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </a>

        <img src="/img/medori.png" alt="" className="h-32" />
        <div className="grow" />
        <div>
          <h1 className="text-3xl font-archive text-center mb-4 text-white">
            Codex Designs
          </h1>
          <h1 className="text-xl text-center font-archive text-white">
            {"}Comming Soon{"}
          </h1>
        </div>
        <div className="grow" />
        {/* <div className="flex flex-col gap-8 grow justify-end mb-10">
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
        </div> */}
      </div>
      <div className="w-full lg:w-[80vw] h-screen overflow-y-auto">
        <div className="w-full lg:w-[80vw] h-screen overflow-y-auto">
          <div className="flex flex-wrap">
            {nfts.map((nft, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/4">
                <img
                  src={nft.image}
                  alt={`NFT ${nft.title}`}
                  className="w-full h-auto cursor-pointer"
                  onClick={() => setSelectedNft(nft)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedNft && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center overflow-y-auto"
          onClick={() => setSelectedNft(null)}
        >
          <div
            className="relative bg-white p-4 rounded-lg flex flex-col md:flex-row items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-0 right-0 m-2 p-[1px] rounded-full text-black-600  font-bold md:hidden"
              style={{ zIndex: 50 }}
              onClick={() => setSelectedNft(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <img
              src={selectedNft.image}
              alt="Selected NFT"
              className="w-full md:w-96 h-auto object-cover rounded-lg mb-4 md:mb-0 md:mr-8"
            />
            <div className="flex flex-col justify-between">
              <h2 className="text-2xl font-semibold mb-4">
                {selectedNft.title}
              </h2>
              <p className="text-lg mb-2">
                <span className="font-semibold">Price:</span>{" "}
                {selectedNft.price}
              </p>
              <p className="text-lg mb-2">
                <span className="font-semibold">Type:</span> {selectedNft.type}
              </p>
              <p className="text-lg mb-2">
                <span className="font-semibold">Special:</span>{" "}
                {selectedNft.special}
              </p>
              <p className="text-lg mb-2">
                <span className="font-semibold">Clothing:</span>{" "}
                {selectedNft.clothing}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NFTGrid;

import { useState } from "react";
import Image from "next/image";
import One from "../../../public/assets/Bears/one.jpg";
import Two from "../../../public/assets/Bears/two.jpg";
import Three from "../../../public/assets/Bears/three.jpg";
import Four from "../../../public/assets/Bears/four.jpg";
import Five from "../../../public/assets/Bears/five.jpg";
import Six from "../../../public/assets/Bears/six.jpg";
import Seven from "../../../public/assets/Bears/seven.jpg";
import Eight from "../../../public/assets/Bears/eight.jpg";
import Nine from "../../../public/assets/Bears/nine.jpg";
import Ten from "../../../public/assets/Bears/ten.jpg";
import Eleven from "../../../public/assets/Bears/eleven.jpg";
import Twelve from "../../../public/assets/Bears/twelve.jpg";
import Thirteen from "../../../public/assets/Bears/thirteen.jpg";
import Fourteen from "../../../public/assets/Bears/fourteen.jpg";
import Fifteen from "../../../public/assets/Bears/fifteen.jpg";
import Sixteen from "../../../public/assets/Bears/sixteen.jpg";
import Seventeen from "../../../public/assets/Bears/seventeen.jpg";
import Eighteen from "../../../public/assets/Bears/eighteen.jpg";

const Grid = () => {
  const [showDetails, setShowDetails] = useState(null);
  const [showImage, setShowImage] = useState(null);

  const GridItems = [
    {
      src: One,
    },
    {
      src: Two,
    },
    {
      src: Three,
    },
    {
      src: Four,
    },
    {
      src: Five,
    },
    {
      src: Six,
    },
    {
      src: Seven,
    },
    {
      src: Eight,
    },
    {
      src: Nine,
    },
    {
      src: Ten,
    },
    {
      src: Eleven,
    },
    {
      src: Twelve,
    },
    {
      src: Thirteen,
    },
    {
      src: Fourteen,
    },
    {
      src: Fifteen,
    },
    {
      src: Sixteen,
    },
    {
      src: Seventeen,
    },
    {
      src: Eighteen,
    },
  ];

  const handleClick = (index, Item) => {
    setShowDetails(index);
    setShowImage(Item.src);
  };

  const GridItem = GridItems.map((Item, index) => {
    return (
      <div
        className="grid__item"
        key={index}
        onClick={() => handleClick(index, Item)}
      >
        <Image src={Item.src} alt="Grid Image" />
      </div>
    );
  });

  const closeDeets = () => {
    setShowDetails(null);
    setShowImage(null);
  };

  return (
    <div className="grid__container">
      {showDetails !== null && (
        <div className={showDetails === null ? "full remove" : "full"}>
          <div className="close__btn" onClick={closeDeets}>
            <div className="bar one"></div>
            <div className="bar two"></div>
          </div>
          <div className="bear__deets">
            <div className="image__container">
              <Image className="deets__img" src={showImage} alt="grid" />
            </div>
            <div className="info">INFORMATION</div>
          </div>
        </div>
      )}
      <div className="grid">{GridItem}</div>
    </div>
  );
};

export default Grid;

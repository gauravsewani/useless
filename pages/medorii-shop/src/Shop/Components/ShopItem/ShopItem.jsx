import { useState, useRef } from "react";

// import ShopItemData from "./ShopItemData";
import "./ShopItem.css";
// import Shirt from "../../assets/WhatsApp Image 2023-05-31 at 03.10.49.jpeg";
import ShirtVideo from "../../assets/shirt video.mp4";
import CMPICON from "../../assets/cmp_icon.svg";
import ETHICON from "../../assets/eth_icon.svg";

const ShopItemData = [
  {
    id: 1,
    video: ShirtVideo,
    name: "Essential T-Shirt - Tiger Style",
    price: 0.00245,
    cmp: 245.674,
    colorName: "Tiger Style/Orange",
    colorNumber: 1,
    Rarity: "common",
    Remaining: 3,
    TotalNumber: 40,
    discount: 20,
  },
];

const ShopItem = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [expandItem, setExpandItem] = useState(null);
  const videoRef = useRef({});

  const handleClick = (index, item) => {
    setExpandItem(index, item);
  };

  const ShopItem = ShopItemData.map((item, index) => {
    return (
      <div
        className="shop__item"
        key={item.id}
        onClick={() => handleClick(index, item)}
        onMouseEnter={() => setShowDetails(item.id)}
        onMouseLeave={() => setShowDetails(false)}
      >
        <div
          className={
            showDetails === item.id ? "remaining visible" : "remaining"
          }
        >
          <span>Remaining: </span> {item.Remaining}/{item.TotalNumber}
        </div>
        <video ref={videoRef} muted autoPlay>
          <source src={item.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={showDetails === item.id ? "rarity bg" : "rarity"}>
          {item.Rarity}
        </div>
        <div className="item__name">{item.name}</div>
        {showDetails === item.id ? (
          <div
            className={
              showDetails === item.id ? "color__name" : "color__name hovered"
            }
          >
            {item.colorName}
          </div>
        ) : (
          <div
            className={
              showDetails === item.id
                ? "color__numbers hovered"
                : "color__numbers"
            }
          >
            {item.colorNumber} Color{item.colorNumber > 1 ? "s" : ""}
          </div>
        )}
        {showDetails === item.id ? (
          <div className="purchase__buttons">
            <button className="buy">Buy Now</button>
            <button className="cart">Add to Cart</button>
          </div>
        ) : (
          <div className="prices">
            <div className="eth__price">
              <img src={ETHICON} alt="eth icon" />
              {item.price}
            </div>
            <div className="cmp__price">
              <img src={CMPICON} alt="cmp icon" />
              {item.cmp}
            </div>
            <div className="price__off">({item.discount}% off)</div>
          </div>
        )}
      </div>
    );
  });

  const closeDeets = () => {
    setExpandItem(null);
  };

  return (
    <div className="container">
      {expandItem !== null && (
        <div className={expandItem === null ? "fill remove" : "fill"}>
          <div className="fill__nav">
            <div className="orders">
              <a href="">My Orders</a>
            </div>
            <span className="divider two">|</span>
            <div className="cart">
              <a href="">Cart</a>
            </div>
            <div className="close__btn" onClick={closeDeets}>
              <div className="bar one"></div>
              <div className="bar two"></div>
            </div>
          </div>
          <div className="item__details">
            <div className="item__image">
              <video muted autoPlay>
                <source src={ShirtVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="main__deets">
              <div className="rarity__type">
                <div className="rarity">COMMON</div>
                <div className="type">Digital Only</div>
              </div>
              <h1 className="item__name">5 Panel - Tiger Skin</h1>
              <div className="prices">
                <div className="eth__price">
                  <img src={ETHICON} alt="eth icon" />
                  0.00542
                </div>
                <div className="cmp__price">
                  <img src={CMPICON} alt="cmp icon" />
                  245.674
                </div>
                <div className="price__off">(20% off)</div>
              </div>
              <p>Subject to volatility. Final prices shown in cart.</p>
              <div className="item__color">
                <video muted autoPlay>
                  <source src={ShirtVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="buttons">
                <button className="buy">Buy Now</button>
                <button className="cart">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="shop">{ShopItem}</div>
    </div>
  );
};

export default ShopItem;

//®

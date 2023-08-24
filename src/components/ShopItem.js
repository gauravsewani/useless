import { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import { supabase } from "../../lib/supabaseClient";
const ShirtVideo = "https://imgur.com/vEBovSV.mp4";
const CMPICON = "/img/cmp_icon.svg";
const ETHICON = "/img/eth_icon.svg";

// const ShopItemData = [
//   {
//     id: 1,
//     video: ShirtVideo,
//     name: "Essential T-Shirt - Tiger Style",
//     price: 0.00245,
//     cmp: 245.674,
//     colorName: "Tiger Style/Orange",
//     colorNumber: 1,
//     Rarity: "common",
//     Remaining: 3,
//     TotalNumber: 40,
//     discount: 20,
//   },
// ];

const ShopItem = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [expandItem, setExpandItem] = useState(null);
  const [clickedItem, setClickedItem] = useState(null);
  const [shopItems, setShopItems] = useState([]);
  const videoRef = useRef({});

  useEffect(() => {
    async function fetchShopItems() {
      const { data, error } = await supabase
        .from("shop") // Replace 'shop' with your actual table name
        .select("*"); // Fetch all columns

      if (error) {
        console.error("Error fetching shop items:", error);
      } else {
        setShopItems(data);
      }
    }

    fetchShopItems();
  }, []);

  const handleClick = (index, item) => {
    setExpandItem(index);
    setClickedItem(item);
  };

  const ShopItem = shopItems.map((item, index) => {
    console.log(item);
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
          <span>Remaining: </span> {item.remaining}/{item.totalnumber}
        </div>
        <video
          ref={videoRef}
          muted
          autoPlay
          className="h-96 w-fit object-cover"
        >
          <source src={item.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={showDetails === item.id ? "rarity bg" : "rarity"}>
          {item.rarity}
        </div>
        <div className="item__name">{item.name}</div>
        {showDetails === item.id ? (
          <div
            className={
              showDetails === item.id ? "color__name" : "color__name hovered"
            }
          >
            {item.colorname}
          </div>
        ) : (
          <div
            className={
              showDetails === item.id
                ? "color__numbers hovered"
                : "color__numbers"
            }
          >
            {item.colornumber} Color{item.colornumber > 1 ? "s" : ""}
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
    setClickedItem(null);
  };

  return (
    <div className="container2">
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
              <video muted autoPlay loop>
                <source src={clickedItem.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="main__deets">
              <div className="rarity__type">
                <div className="rarity">{clickedItem.rarity}</div>
                <div className="type">Digital Only</div>
              </div>
              <h1 className="item__name">{clickedItem.name}</h1>
              <div className="prices">
                <div className="eth__price">
                  <img src={ETHICON} alt="eth icon" />
                  {clickedItem.price}
                </div>
                <div className="cmp__price">
                  <img src={CMPICON} alt="cmp icon" />
                  {clickedItem.cmp}
                </div>
                <div className="price__off">({clickedItem.discount}% off)</div>
              </div>
              <p>Subject to volatility. Final prices shown in cart.</p>
              <div className="item__color">
                <video muted autoPlay loop className="h-20 w-fit object-cover">
                  <source src={clickedItem.video} type="video/mp4" />
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

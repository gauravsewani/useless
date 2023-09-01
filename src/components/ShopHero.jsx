import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../redux/actions/cartActions";

const ShopHero = () => {
  const dispatch = useDispatch();
  const cartOpen = useSelector((state) => state.cartOpen);
  return (
    <div className="shop__hero">
      <div className="hero__nav">
        <div className="history">
          <a href="">Purchase History</a>
        </div>
        <span className="divider">|</span>
        <div className="orders">
          <a href="">My Orders</a>
        </div>
        <span className="divider two">|</span>
        <div
          className="cart font-bold cursor-pointer"
          onClick={() => dispatch(toggleCart())}
        >
          Cart
        </div>
      </div>

      <div className="main__hero">
        <h1>
          Medorii<span className="arrr">®</span>2K23 SEASON ONE
        </h1>
        <p>
          Exclusive Premium Streetwear Collection. Street Fashion, Your Style.{" "}
          <span className="bold">Available Now.</span>
        </p>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default ShopHero;

//®

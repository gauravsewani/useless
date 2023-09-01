import React, { useEffect } from "react";
import ShopHero from "../../src/components/ShopHero";
import ShopItem from "../../src/components/ShopItem";
import {
  toggleCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../../src/redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  const cartOpen = useSelector((state) => state.cart.cartOpen);
  const cartItems = useSelector((state) => state.cart.items); // New addition
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.style.setProperty("--mc1", "transparent");
    document.documentElement.style.setProperty("--mc2", "transparent");
    document.documentElement.style.setProperty("--hc", "transparent");
    document.documentElement.style.setProperty("--bc", "transparent");
  }, []);

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(decreaseQuantity(item.id));
    } else if (item.quantity === 1) {
      dispatch(removeItem(item.id));
    }
  };

  const handleOverlayClick = () => {
    dispatch(toggleCart());
  };
  // console.log(cartItems);

  return (
    <div className="bg-white">
      <ShopHero />
      <ShopItem />

      {!!cartOpen && (
        <div
          className="fixed top-0 left-0 h-screen w-screen overflow-hidden flex justify-end bg-black/75"
          onClick={handleOverlayClick}
        >
          <div
            className="bg-white w-1/3 h-screen"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {cartItems.length === 0 && (
              <div className="flex flex-col h-full justify-center">
                <p className="text-black text-3xl text-center w-full ">
                  No items in cart
                </p>
                <div className="h-32 mx-auto">
                  <img src="cart.png" alt="" className="h-32 object-cover" />
                </div>
              </div>
            )}
            {cartItems.map((item) => (
              <div key={item.id} className="p-2 ">
                <div className="bg-slate-100 rounded-3xl overflow-hidden h-40 w-full   flex items-center justify-evenly">
                  <video
                    muted
                    autoPlay
                    loop
                    className="h-20 w-20 object-cover"
                    src={item.video}
                  />
                  <div className="text-black mx-auto ">
                    <h3 className="text-black font-black text-center">
                      {item.name}
                    </h3>
                    <div className="flex gap-5 w-full">
                      <button onClick={() => handleDecreaseQuantity(item)}>
                        -
                      </button>
                      <p>Price: {(item.price * item.quantity).toFixed(2)}</p>
                      <button onClick={() => handleIncreaseQuantity(item.id)}>
                        +
                      </button>
                    </div>
                    <p className="text-center">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className=" text-black">
                  Grand Total: $
                  {cartItems
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;

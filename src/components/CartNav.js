import { useSelector, useDispatch } from "react-redux";

export default function CartNav() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleToggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white z-20">
      <h1 className="text-2xl">Shop</h1>
      <div onClick={handleToggleCart} className="cursor-pointer">
        Cart ({cartItems.length})
      </div>
    </div>
  );
}

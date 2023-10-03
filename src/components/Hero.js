import { useDispatch } from "react-redux";

// components/Hero.js
function Hero() {
  const dispatch = useDispatch();
  const handleToggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  return (
    <div
      className="relative h-[70vh] bg-cover bg-center font-archive"
      style={{ backgroundImage: 'url("/img/orange-hero.png")' }}
    >
      <div className="absolute flex items-center gap-4 top-4 right-4">
        <button
          onClick={handleToggleCart}
          className="relative  text-white p-2 rounded"
        >
          Cart
        </button>
        <p className="text-white">|</p>
        <a href="/order_history" className="relative  text-white p-2 rounded">
          Order History
        </a>
      </div>

      <div className="absolute bottom-4 right-4">
        <h2 className="text-3xl text-white max-w-xl ">
          Exclusive Premium Streetwear Collection. Street Fashion, Your Style.
        </h2>
      </div>
    </div>
  );
}

export default Hero;

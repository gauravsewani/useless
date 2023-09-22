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
      <button
        onClick={handleToggleCart}
        className="absolute top-4 right-4  text-white p-2 rounded"
      >
        Cart
      </button>
      <div className="absolute bottom-4 right-4">
        <h2 className="text-3xl text-white max-w-xl ">
          Exclusive Premium Streetwear Collection. Street Fashion, Your Style.
        </h2>
      </div>
    </div>
  );
}

export default Hero;

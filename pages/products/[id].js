import { useDispatch } from "react-redux";
import { supabase } from "../../lib/supabaseClient";
import { useEffect } from "react";
import Link from "next/link";

export async function getServerSideProps({ params }) {
  const { data: product } = await supabase
    .from("shop")
    .select("*")
    .eq("id", params.id)
    .single();
  return {
    props: {
      product,
    },
  };
}

export default function ProductDetail({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const handleToggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--mc1", "transparent");
    document.documentElement.style.setProperty("--mc2", "transparent");
    document.documentElement.style.setProperty("--hc", "transparent");
    document.documentElement.style.setProperty("--bc", "transparent");
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center w-screen text-black bg-white h-screen px-[5%]">
      <Link href="/merch" className="decoration-transparent">
        <a className="fixed top-4 left-4">
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
      </Link>

      <button
        onClick={handleToggleCart}
        className="fixed top-4 right-4 text-black font-archive p-2 rounded"
      >
        Cart
      </button>

      <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
        <video
          autoPlay
          muted
          loop
          className="w-fit h-[90vh] rounded"
          src={product.video}
        ></video>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-3xl font-bold">{product.name}</h2>
        <p className="mt-2 text-lg">Price: ${product.price}</p>
        <p>Color: {product.colorname}</p>
        <p>Rarity: {product.rarity}</p>
        <p>
          Remaining: {product.remaining} / {product.totalnumber}
        </p>
        {product.discount && (
          <p className="text-red-500">Discount: {product.discount}%</p>
        )}
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

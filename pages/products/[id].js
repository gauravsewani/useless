import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Link from "next/link";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET);

export async function getServerSideProps({ params }) {
  try {
    const product = await stripe.products.retrieve(params.id);
    const pricesList = await stripe.prices.list({ product: params.id });
    const priceObj = pricesList.data[0]; // Assuming one price per product

    const structuredProduct = {
      id: product.id,
      name: product.name,
      video: product.metadata.video || "",
      cmp: product.metadata.cmp || "",
      colorName: product.metadata.colorName || "",
      colorNumber: product.metadata.colorNumber || "",
      rarity: product.metadata.rarity || "",
      remaining: product.metadata.remaining || "",
      totalNumber: product.metadata.totalNumber || "",
      discount: product.metadata.discount || "",
      price: product.metadata.price / 100, // Convert cents to dollars
      image: product.images[0] || "",
      priceId: priceObj.id, // Add the priceId here
    };

    return {
      props: {
        product: structuredProduct,
      },
    };
  } catch (error) {
    console.error("Error fetching product from Stripe:", error);
    return {
      notFound: true,
    };
  }
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
        {product.video ? (
          <video
            autoPlay
            muted
            loop
            className="w-fit h-[90vh] rounded"
            src={product.video}
          ></video>
        ) : (
          <img
            src={product.image || "https://via.placeholder.com/150"}
            alt={product.name}
            className="w-fit h-[90vh] rounded"
          />
        )}
      </div>

      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-3xl font-bold text-black">{product.name}</h2>
        <p className="mt-2 text-lg">Price: ${product.price}</p>
        <p>Color: {product.colorName}</p>
        <p>Rarity: {product.rarity}</p>
        <p>
          Remaining: {product.remaining} / {product.totalNumber}
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

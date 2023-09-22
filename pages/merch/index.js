import { supabase } from "../../lib/supabaseClient";
import Link from "next/link";
import { useDispatch } from "react-redux";
import CartNav from "../../src/components/CartNav";
import Hero from "../../src/components/Hero";
import { useEffect } from "react";

export default function Home({ products }) {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--mc1", "transperent");
    document.documentElement.style.setProperty("--mc2", "transperent");
    document.documentElement.style.setProperty("--hc", "transperent");
    document.documentElement.style.setProperty("--bc", "transperent");
  }, []);

  return (
    <div>
      <Hero />
      <div className="flex flex-wrap gap-4 px-20 py-10 bg-white md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border p-6 rounded shadow-lg w-full md:w-auto"
          >
            <Link href={`/products/${product.id}`}>
              <div className="cursor-pointer mb-4">
                <video
                  autoPlay
                  muted
                  loop
                  className="w-full h-full rounded mb-4"
                  style={{ aspectRatio: "1/1" }}
                  src={product.video}
                ></video>
                <h2 className="text-xl text-black font-bold md:text-2xl">
                  {product.name}
                </h2>
                <div className="flex w-full justify-between">
                  <p className="mt-2 text-lg md:text-xl">
                    Price: ${product.price}
                  </p>
                  <p className="mt-2 text-lg text-green-600 md:text-xl">
                    Discount: {product.discount}%
                  </p>
                </div>
              </div>
            </Link>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const { data: products } = await supabase.from("shop").select("*");
  return {
    props: {
      products,
    },
  };
}

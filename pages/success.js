import { useEffect, useState } from "react";
import Stripe from "stripe";
import { useRouter } from "next/router";

const stripe = new Stripe(process.env.STRIPE_SECRET);

export default function Success() {
  const [session, setSession] = useState(null);
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const sessionId = router.query.session_id;

  useEffect(() => {
    document.documentElement.style.setProperty("--mc1", "transperent");
    document.documentElement.style.setProperty("--mc2", "transperent");
    document.documentElement.style.setProperty("--hc", "transperent");
    document.documentElement.style.setProperty("--bc", "transperent");
  }, []);

  useEffect(() => {
    async function fetchSession() {
      try {
        const res = await fetch(`/api/session?session_id=${sessionId}`);
        const data = await res.json();
        setSession(data);

        // Fetch product details for each product ID
        const fetchedProducts = await Promise.all(
          data.line_items.data.map(async (item) => {
            const response = await fetch(`/api/products/${item.price.product}`);
            const product = await response.json();
            return {
              ...item,
              product,
            };
          })
        );

        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    }

    fetchSession();
  }, [sessionId]);

  //   console.log(session);

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-white px-4">
      <h1 className="text-4xl font-bold my-4  text-black">
        Thank You for you order!
      </h1>
      <div className="flex gap-10 mx-auto mt-5 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="border bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 max-w-sm"
          >
            {product.product.metadata?.video ? (
              <video
                autoPlay
                muted
                loop
                className="w-full h-80"
                src={product.product.metadata.video}
              ></video>
            ) : (
              <img
                src={
                  product.product.images && product.product.images.length > 0
                    ? product.product.images[0]
                    : "https://via.placeholder.com/150"
                }
                alt={product.description || "Product Image"}
                className="w-full h-80 object-cover"
              />
            )}
            <div className="p-3 ">
              <h4 className="text-md text-black font-medium mb-1">
                {product.description}
              </h4>
              <p className="text-sm text-gray-600">
                Quantity: {product.quantity}
              </p>
              <p className="text-sm text-gray-600">
                Price: ${product.price.unit_amount / 100}
              </p>
            </div>
          </div>
        ))}
      </div>
      <a
        href="/merch"
        className="p-2 rounded-lg bg-yellow-300 mt-10 w-fit mx-auto text-black"
      >
        Continue Shopping
      </a>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { session_id } = context.query;

  return {
    props: {
      sessionId: session_id,
    },
  };
}

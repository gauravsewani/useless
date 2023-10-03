import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartOpen = useSelector((state) => state.cart.cartOpen);
  const [customerId, setCustomerId] = useState(null);

  useEffect(() => {
    // Check if customerId exists in Local Storage
    const storedCustomerId = localStorage.getItem("customerId");
    if (!storedCustomerId) {
      // If customerId doesn't exist, make a request to create a new customer
      fetch("/api/create_customer", {
        method: "POST",
      })
        .then((response) => response.json())
        .then((data) => {
          // Store the new customerId in Local Storage and state
          localStorage.setItem("customerId", data.customerId);
          setCustomerId(data.customerId);
        });
    } else {
      setCustomerId(storedCustomerId);
    }
  }, []);

  const handleCheckout = async () => {
    const customerId = localStorage.getItem("customerId");

    try {
      const response = await fetch("/api/checkout_session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ customerId: customerId, items: cartItems }),
      });
      const { sessionId } = await response.json();

      // Load Stripe using your public key
      const stripe = await loadStripe(process.env.STRIPE_PUBLIC);

      if (!stripe) {
        throw new Error("Stripe failed to initialize");
      }

      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error(error);
      }
    } catch (error) {
      console.error("Error redirecting to Stripe Checkout:", error);
    }
  };

  const handleToggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  const handleIncreaseQuantity = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };

  const handleDecreaseQuantity = (id) => {
    const currentItem = cartItems.find((item) => item.id === id);
    if (currentItem.quantity === 1) {
      dispatch({ type: "REMOVE_ITEM", payload: id });
    } else {
      dispatch({ type: "DECREASE_QUANTITY", payload: id });
    }
  };

  const grandTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 w-screen h-full bg-black bg-opacity-30 ${
        cartOpen ? "block" : "hidden"
      } z-10`}
      onClick={handleToggleCart}
    >
      <div
        className="relative md:w-96 w-full h-full bg-white p-4 shadow-lg transform transition-transform duration-300 ml-auto py-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleToggleCart}
          className="absolute top-2 right-2 text-xl md:hidden"
        >
          x
        </button>
        {cartItems.length === 0 ? (
          <div className="text-center text-xl text-black mt-10">
            Add items to your cart
          </div>
        ) : (
          <>
            <ul
              className="overflow-y-auto text-black"
              style={{ maxHeight: "80%" }}
            >
              {cartItems.map((item) => (
                <li key={item.id} className="flex mb-4 border-b pb-4">
                  {item.video ? (
                    <video
                      autoPlay
                      muted
                      loop
                      className="w-1/3 h-24 rounded mr-4"
                      src={item.video}
                    ></video>
                  ) : (
                    <img
                      src={item.image || "https://via.placeholder.com/150"}
                      alt={item.name || "Product Image"}
                      className="w-1/3 h-24 rounded mr-4"
                    />
                  )}

                  <div className="flex flex-col justify-between">
                    <h3 className="text-xl text-black">{item.name}</h3>
                    <p>Price: ${item.price * item.quantity}</p>
                    <div className="flex items-center">
                      <button
                        onClick={() => handleDecreaseQuantity(item.id)}
                        className="bg-blue-500 text-white p-1 rounded"
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() => handleIncreaseQuantity(item.id)}
                        className="bg-blue-500 text-white p-1 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="absolute bottom-4 left-4">
              <h2 className="text-2xl text-black">
                Grand Total: ${grandTotal.toFixed(2)}
              </h2>
              <button
                onClick={handleCheckout}
                className="mt-4 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors duration-300"
              >
                Checkout with Stripe
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

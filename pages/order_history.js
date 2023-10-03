import { useEffect, useState } from "react";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.setProperty("--mc1", "transperent");
    document.documentElement.style.setProperty("--mc2", "transperent");
    document.documentElement.style.setProperty("--hc", "transperent");
    document.documentElement.style.setProperty("--bc", "transperent");
  }, []);

  useEffect(() => {
    const fetchOrderHistory = async () => {
      const customerId = localStorage.getItem("customerId");

      if (!customerId) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("/api/order_history", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ customerId }),
        });

        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching order history:", error);
        setLoading(false);
      }
    };

    fetchOrderHistory();
  }, []);

  if (loading) {
    return <div className="text-center mt-6 text-xl">Loading...</div>;
  }

  return (
    <div className="bg-gray-200 h-screen overflow-y-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Order History</h1>
      {orders.length === 0 ? (
        <p className="text-xl text-center mt-6">You have no order history.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li
              key={order.id}
              className="bg-white rounded-lg shadow-md mb-6 p-6"
            >
              <div className="flex justify-between mb-4">
                <span className="font-medium">Order ID: {order.id}</span>
                <span className="text-gray-600">
                  Date: {new Date(order.created * 1000).toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-end">
                <span className="font-medium">
                  Total: ${(order.amount / 100).toFixed(2)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
      <a
        href="/merch"
        className="p-2 rounded-lg bg-white mt-10 w-fit mx-auto text-black"
      >
        Continue Shopping
      </a>
    </div>
  );
}

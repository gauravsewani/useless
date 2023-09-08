// pages/subscribe/index.js

import { useState } from "react";

// Initialize Supabase client
import { supabase } from "../../lib/supabaseClient";
import { useEffect } from "react";
import Head from "next/head";
import Confetti from "react-confetti";

export default function Subscribe() {
  useEffect(() => {
    document.documentElement.style.setProperty("--mc1", "transparent");
    document.documentElement.style.setProperty("--mc2", "transparent");
    document.documentElement.style.setProperty("--hc", "transparent");
    document.documentElement.style.setProperty("--bc", "transparent");
  }, []);

  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error

    const res = await fetch("/api/submit-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.status === 200) {
      setShowConfetti(true);
      setIsSubscribed(true);
      setTimeout(() => {
        setShowConfetti(false);
        setEmail(""); // Reset the email field
      }, 5000); // Hide confetti after 2 seconds
    } else {
      setError(data.error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 relative overflow-hidden">
        <div className="p-8 bg-white rounded-lg shadow-lg w-1/2 h-1/2 z-10 flex flex-col justify-center items-center">
          {isSubscribed ? (
            <div className="text-center flex w-full h-full items-center justify-center">
              <h1 className="text-6xl font-semibold mb-4 text-gray-900">
                Thank You for Subscribing!
              </h1>
            </div>
          ) : (
            <>
              <h1 className="text-6xl font-semibold font-archive mb-4 text-center text-gray-900">
                Subscribe to Our Newsletter!
              </h1>
              <p className="text-center text-2xl text-gray-700 mb-4">
                Get the latest updates and offers directly to your inbox.
              </p>
              <form onSubmit={handleSubmit} className="w-full">
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full p-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-0 focus:text-blue-700 focus:font-bold"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ outline: "none", boxShadow: "none" }}
                    onFocus={(e) => (e.target.style.backgroundColor = "white")}
                  />

                  {error && (
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  Subscribe
                </button>
              </form>
            </>
          )}
        </div>

        {showConfetti && <Confetti className="w-screen h-screen" />}
      </div>
    </>
  );
}

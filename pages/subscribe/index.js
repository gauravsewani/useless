import { useState } from "react";
import Snowfall from "react-snowfall";
import { useEffect } from "react";
import Head from "next/head";

export default function Subscribe() {
  useEffect(() => {
    document.documentElement.style.setProperty("--mc1", "transparent");
    document.documentElement.style.setProperty("--mc2", "transparent");
    document.documentElement.style.setProperty("--hc", "transparent");
    document.documentElement.style.setProperty("--bc", "transparent");
  }, []);

  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
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
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail(""); // Reset the email field
      }, 5000); // Hide confetti after 2 seconds
    } else {
      setError(data.error);
    }
  };

  return (
    <>
      <Head>
        <title>Subscribe to Our Newsletter!</title>
        <meta
          name="description"
          content="Get the latest updates and offers directly to your inbox."
        />
      </Head>
      <div className="flex items-start justify-center h-screen relative overflow-hidden bg-[url('/img/background.png')] bg-cover bg-center">
        {isSubscribed && <Snowfall />}
        <div className="p-8 bg-white mt-32 rounded-lg shadow-lg w-2/5 h-1/3 z-10 flex flex-col justify-center items-baseline ">
          {isSubscribed ? (
            <div className="text-center flex w-full h-full items-center justify-center">
              <h1 className="text-2xl font-semibold mb-4 text-gray-900">
                Thank You for Subscribing!
              </h1>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-semibold font-archive mb-4 text-center text-gray-900">
                Subscribe to Our Newsletter!
              </h1>
              <p className="text-center text-xl text-gray-700 mb-4">
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
      </div>
    </>
  );
}

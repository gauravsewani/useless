import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const validateName = () => {
    if (!name.trim()) {
      setNameError("Name is required.");
    } else {
      setNameError("");
    }
  };

  const validateEmail = () => {
    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters.");
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = async () => {
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
      action: "signin",
    });

    if (result?.ok) {
      router.push("/account");
    } else {
      console.error(result?.error || "An unknown error occurred");
    }
  };

  const handleSignup = async () => {
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
      name,
      action: "signup",
    });

    if (result?.ok) {
      router.push("/account");
    } else {
      console.error(result?.error || "An unknown error occurred");
    }
  };

  const handleGoogleLogin = async () => {
    const result = await signIn("google", { callbackUrl: "/account" });
    if (result?.error) {
      console.error(result?.error || "An unknown error occurred");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      handleLogin();
    } else {
      if (agreed) {
        handleSignup();
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-50">
      <div className="bg-white p-8 sm:rounded-2xl max-sm:h-screen outline outline-2 shadow-lg text-black w-full sm:max-w-md">
        <div className="w-36 h-36 rounded-full bg-slate-300 mx-auto ">
          <img src="/img/logo4.png" alt="" className="p-2" />
        </div>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4 ">
              <label
                className="block text-black  text-sm font-medium mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="border border-gray-300 focus:text-black w-full py-2 px-4 rounded-md focus:ring-blue-500 focus:border-blue-500"
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={validateName}
              />
              {nameError && <p className="text-red-500 text-xs">{nameError}</p>}
            </div>
          )}
          <div className="mb-4">
            <label
              className="block text-black text-sm font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border border-gray-300 w-full py-2 px-4 rounded-md focus:ring-blue-500 focus:border-blue-500"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
            />
            {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
          </div>

          <div className="mb-4">
            <label
              className="block text-black text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border border-gray-300 w-full py-2 px-4 rounded-md focus:ring-blue-500 focus:border-blue-500"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
            />
            {passwordError && (
              <p className="text-red-500 text-xs">{passwordError}</p>
            )}
          </div>

          {!isLogin && (
            <div className="mb-4 flex items-center cursor-pointer">
              <input
                type="checkbox"
                id="agreed"
                className="rounded border-gray-300 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 mr-2"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <label
                className="text-gray-700 text-xs cursor-pointer select-none"
                htmlFor="agreed"
              >
                You agree with the{" "}
                <a
                  target="_blank"
                  className="text-purple-700 uppercase font-bold"
                  href="https://drive.google.com/file/d/11np-DIVHXGytyiTrPHDS5I5jWcd14ulo/view"
                >
                  terms & conditions
                </a>
              </label>
            </div>
          )}

          <div className="flex items-center justify-between">
            <button
              className={`bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-200 mx-auto ${
                !isLogin &&
                (!agreed || nameError || emailError || passwordError)
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              type="submit"
              disabled={
                !isLogin &&
                (!agreed || nameError || emailError || passwordError)
              }
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </form>
        <div class="border-t-2 border-solid mx-12 my-5 border-gray-500"></div>

        <div className="flex items-center justify-center mt-4">
          <button
            className=" bg-gray-100 outline text-black font-bold py-2 px-12 rounded-md transition duration-200 flex items-center gap-4"
            onClick={handleGoogleLogin}
          >
            <img src="/img/google.png" alt="" className="h-6" />
            <span className="max-sm:hidden">Sign In with Google</span>
          </button>
        </div>
        <div className="flex items-center justify-center mt-4">
          {isLogin ? (
            <p className="text-black text-sm pointer-events-none">
              Don't have an account?
            </p>
          ) : (
            <p className="text-black text-sm pointer-events-none">
              Already have an account?
            </p>
          )}
          <button
            type="button"
            className="text-blue-500 hover:text-blue-600 font-medium text-sm max-sm:text-xs"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? (
              <span className="pointer-events-auto text-purple-400 ml-1 font-bold">
                Sign Up Here
              </span>
            ) : (
              <span className="pointer-events-auto text-purple-400 ml-1 font-bold">
                Login Here
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
// LoginSignup.js
import { useEffect, useState } from "react";
import { signUp, signIn, signInWithGoogle } from "../pages/api/firebaseAuth";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Script from "next/script";
import Image from "next/image";
import { useRouter } from "next/router";

const LoginSignup = () => {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
    try {
      await signIn(email, password);
      // Redirect to the account page upon successful login
      router.push("/account2");
    } catch (error) {
      console.error("Error signing in:", error.message);
      // Handle login error
    }
  };

  const handleSignup = async () => {
    try {
      await signUp(email, password, name);
      // Redirect to the account page upon successful signup
      router.push("/account2");
    } catch (error) {
      console.error("Error signing up:", error.message);
      // Handle signup error
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      // Redirect to the account page upon successful Google Sign-In
      router.push("/account2");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
      // Handle Google Sign-In error
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

  useEffect(() => {
    document.documentElement.style.setProperty("--mc1", "transperent");
    document.documentElement.style.setProperty("--mc2", "transperent");
    document.documentElement.style.setProperty("--hc", "transperent");
    document.documentElement.style.setProperty("--bc", "transperent");
  }, []);

  return (
    <>
      <Script
        src="/grained.js"
        onLoad={() => {
          var options = {
            animate: true,
            patternWidth: 1000,
            patternHeight: 1000,
            grainOpacity: 0.2,
            grainDensity: 1,
            grainWidth: 1,
            grainHeight: 1,
          };

          grained("#container", options);
        }}
      />
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-slate-100"
        id="container"
      >
        <div className="bg-white p-8 sm:rounded-2xl max-sm:h-screen outline outline-2 shadow-lg text-black w-full sm:max-w-md z-10">
          <div className="w-20 h-20 rounded-full bg-slate-300 mx-auto mb-10">
            <Image src="/img/logo4.png" alt="" width={80} height={80} />
          </div>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4">
                <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={validateName}
                  error={Boolean(nameError)}
                  helperText={nameError}
                  InputLabelProps={{
                    style: { fontWeight: "bold" },
                  }}
                />
              </div>
            )}
            <div className="mb-4">
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
                error={Boolean(emailError)}
                helperText={emailError}
                InputLabelProps={{
                  style: { fontWeight: "bold" },
                }}
              />
            </div>
            <div className="mb-4">
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={validatePassword}
                error={Boolean(passwordError)}
                helperText={passwordError}
                InputLabelProps={{
                  style: { fontWeight: "bold" },
                }}
              />
            </div>
            {!isLogin && (
              <div className="mb-4 flex items-center cursor-pointer">
                <Checkbox
                  id="agreed"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                />
                <label
                  className="text-gray-700 text-xs cursor-pointer select-none"
                  htmlFor="agreed"
                >
                  You agree with the{" "}
                  <Link
                    href="https://drive.google.com/file/d/11np-DIVHXGytyiTrPHDS5I5jWcd14ulo/view"
                    target="_blank"
                    className="text-purple-700 uppercase font-bold"
                  >
                    terms & conditions
                  </Link>
                </label>
              </div>
            )}
            <div className="flex items-center justify-between">
              <Button
                variant="contained"
                color="info"
                className={`py-2 px-4 rounded-md transition duration-200 mx-auto bg-blue-500 ${
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
              </Button>
            </div>
          </form>
          <div className="border-t-2 border-solid mx-12 my-5 border-gray-500"></div>
          <div className="flex items-center justify-center mt-4">
            <Button
              variant="contained"
              color="inherit"
              className="flex items-center gap-4 bg-gray-100"
              onClick={handleGoogleLogin}
            >
              <Image src="/img/google.png" alt="" width={24} height={24} />
              <span className="max-sm:hidden text-black">
                Sign In with Google
              </span>
            </Button>
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
            <Button
              color="primary"
              className="text-xs"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? (
                <span className="text-purple-400 ml-1 font-bold">
                  Sign Up Here
                </span>
              ) : (
                <span className="text-purple-400 ml-1 font-bold">
                  Login Here
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;

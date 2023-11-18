import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>
      <form className="w-1/3 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="font-bold text-3xl text-white m-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {
          !isSignIn &&  <input
          type="text"
          placeholder="Enter Name"
          className="p-4 m-4 w-full bg-gray-700 rounded-lg"
        />
        }
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 m-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-4 w-full bg-gray-700 rounded-lg"
        />
        <button className="p-4 m-4 bg-red-700 w-full rounded-lg text-white font-semibold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="py-6 text-white m-4 cursor-pointer"
          onClick={() => setIsSignIn(!isSignIn)}
        >
          { isSignIn ? "New to Netflix ? Sign Up Now ?" : "Already have account ? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;

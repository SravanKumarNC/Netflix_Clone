import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setISSignInForm] = useState(true);

  const toggleSigninForm = () => {
    setISSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg-img"
        />
      </div>
      <form className="absolute text-white bg-black bg-opacity-85 p-8 w-3/12 my-36 mx-auto right-0 left-0 rounded-2xl">
        <h1 className="font-bold text-xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-700 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-2 my-2 w-full bg-gray-700 rounded-md"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700 rounded-md"
        />
        <button className="p-2 my-2 bg-red-600 w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSigninForm} className="py-2 cursor-pointer">
          {isSignInForm
            ? "Not registered? Sign Up"
            : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};
export default Login;

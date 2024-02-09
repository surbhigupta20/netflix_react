import { useState } from "react";
import Header from "./Header.js";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header></Header>

      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg"></img>
      </div>
      <form className="absolute p-12 bg-black w-4/12 m-auto my-28 right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-3 w-full bg-gray-700"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-3 w-full bg-gray-700"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-3 w-full bg-gray-700"
        ></input>
        <button className="p-3 my-4 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-3 text-sm cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now!"
            : "Already regitered? Sign In Now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;

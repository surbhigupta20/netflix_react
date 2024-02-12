import { useContext, useRef, useState } from "react";
import Header from "./Header.js";
import { checkValidData } from "../utils/validate.js";
import { getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import UserContext from "../utils/UserContext.js";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const {
    loggedInUser,
    passwordData,
    setUserName,
    setPasswordData,
    userFullName,
    setName,
  } = useContext(UserContext);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //validate form data - we will use utility from utility folder
    // const message = checkValidData(
    //   email.current.value,
    //   password.current.value,
    //   fullName.current.value
    // );
    const message = checkValidData(
      email.current.value,
      password.current.value,
      isSignInForm,
      fullName?.current?.value
    );
    setErrMessage(message);
    if (message) return;
    //sign in / sign up logic

    if (!isSignInForm) {
      setUserName(email.current.value);
      setPasswordData(password.current.value);
      setName(fullName.current.value);
      setIsSignInForm(true);
    } else {
      if (
        loggedInUser === "surbhi.tina@gmail.com" &&
        passwordData === "Test@123"
      ) {
        navigate("/browse");
      } else {
        setErrMessage("user not found");
      }
    }
  };
  return (
    <div>
      <Header></Header>

      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg"></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-4/12 m-auto my-28 right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-2 my-3 w-full bg-gray-700"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-3 w-full bg-gray-700"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-3 w-full bg-gray-700"
        ></input>
        <p className="text-red-500">{errMessage}</p>
        {/* {!isSignInForm && fullName.current.value === "" && (
          <p className="text-red-500">{errMessage}</p>
        )} */}
        <button
          className="p-3 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
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

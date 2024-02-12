import React, { useEffect, useState } from "react";
import Login from "./Login.js";
import Browse from "./Browse.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserContext from "../utils/UserContext.js";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { addUser, removeUser } from "../utils/userSlice.js";
import { useDispatch } from "react-redux";
const Body = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [userName, setUserName] = useState("surbhi.tina2095@gmail.com");
  const [passwordData, setPasswordData] = useState("Test");
  const [name, setName] = useState("");
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
    },
    {
      path: "/browse",
      element: <Browse></Browse>,
    },
  ]);

  // useEffect(() =>{
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {

  //       const uid = user.uid;
  //      dispatch(addUser({
  //       loggedInUser : userName,
  //       fullName: name,
  //       password : passwordData
  //      }));
  //      navigate("/browse")
  //     } else {
  //      dispatch(removeUser());
  //      navigate("/");
  //     }
  //   });
  // }, []);

  return (
    <div>
      <UserContext.Provider
        value={{
          loggedInUser: userName,
          passwordData: passwordData,
          userFullName: name,
          setUserName,
          setPasswordData,
          setName,
        }}
      >
        <RouterProvider router={appRouter}></RouterProvider>
      </UserContext.Provider>
    </div>
  );
};

export default Body;

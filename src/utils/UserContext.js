import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "surbhi.gupta2095@gmail.com",
  passwordData: "Test@123",
  userFullName: "Tina",
});

export default UserContext;

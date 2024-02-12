import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext.js";
const Header = () => {
  const navigate = useNavigate();
  const { setUserName, setPasswordData, userFullName, setName } =
    useContext(UserContext);
  console.log(userFullName);
  const logoutUser = () => {
    setUserName("s.t@gmail.com");
    setPasswordData("Test@789");
    setName("");
    navigate("/");
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix_logo"
      />
      {userFullName !== "" && userFullName !== null && (
        <div className="flex gap-2 items-center">
          <img
            className="w-12 h-12"
            src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
            alt="userIcon"
          />
          <p>{userFullName}</p>
          <button className="bg-black text-white p-2" onClick={logoutUser}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

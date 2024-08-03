import React from "react";
import NavBarLogo from "../../assets/ELEVATE-LogoLight2.png";

function NavBar() {

  return (
    <div className="h-full w-full flex text-white  justify-between items-center backdrop-blur-2xl">
      <div className="h-full w-fit flex justify-center items-center gap-2">
        <img
          className="h-full w-auto ml-5 "
          src={NavBarLogo}
          alt="Logo"
        />
        <p className="font-bold text-2xl ml-2 font-mateSc">
          ElevatE U
        </p>
      </div>
      <div className="flex gap-2 mr-5  font-mateSc text-xl justify-center items-center">
        <button className="px-2 font-bold ">Sign Up</button>
        <button className="px-2 font-bold ">Sign In</button>
      </div>
    </div>
  );
}

export default NavBar;

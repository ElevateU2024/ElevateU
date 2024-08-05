import React from "react";
import NavBarLogo from "../../assets/ELEVATE-LogoLight2.png";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import { useRecoilState } from "recoil";
import { HomeMenu } from "../../Recoil/atom";

function NavBar() {
  const [toogleHomeMenu, setToogleHomeMenu] = useRecoilState(HomeMenu);

  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex text-white bg-black justify-between items-center backdrop-blur-2xl sticky top-0 p-2">
        <div className="flex items-center">
          <img className="h-10 w-auto ml-2" src={NavBarLogo} alt="Logo" />
          <p className="font-bold text-xl ml-2 font-mateSc">ElevatE U</p>
        </div>
        <div className="flex items-center">
          <div
            onClick={() => setToogleHomeMenu(!toogleHomeMenu)}
            className="md:hidden cursor-pointer p-2"
          >
            {toogleHomeMenu ? (
              <CiMenuFries size={30} />
            ) : (
              <CiMenuBurger size={30} />
            )}
          </div>
          <div className="hidden md:flex space-x-5 font-mateSc text-xl">
            <button className="px-2 font-bold">Sign Up</button>
            <button className="px-2 font-bold">Sign In</button>
          </div>
        </div>
      </div>
      {toogleHomeMenu && (
        <div className="md:hidden w-full flex flex-col text-white bg-black justify-center items-center backdrop-blur-2xl sticky top-0 font-mateSc gap-2 p-5">
          <button className="px-2 font-bold w-full text-center">Sign Up</button>
          <button className="px-2 font-bold w-full text-center">Sign In</button>
        </div>
      )}
    </div>
  );
}

export default NavBar;

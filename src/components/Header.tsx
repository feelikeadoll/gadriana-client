import { Link, NavLink } from "react-router-dom";

import Logo from "../assets/gadriana-logo.png";
import { useState } from "react";
import Navbar from "./Navbar";

function Header() {
  const [displayNavbar, setDisplayNavbar] = useState<string>("hidden");

  const openNavbar = (): void => {
    setDisplayNavbar("block");
  };
  const closeNavbar = (): void => {
    setDisplayNavbar("hidden");
  };

  return (
    <div className="w-full fixed bg-white z-40">
      <Navbar displayNavbar={displayNavbar} closeNavbar={closeNavbar} />
      <div className="max-w-7xl px-6 flex justify-between items-center mx-auto">
        <div className="my-6 w-full flex items-center justify-between">
          <Link to="/">
            <img
              src={Logo}
              alt="Gadriana Creative Product Photography Studio located Barcelona"
              className="w-52"
            />
          </Link>
          <div className="flex items-center">
            <NavLink to="/services" className="hidden md:block ml-10 text-md">
              Services
            </NavLink>
            <NavLink to="/about" className="hidden md:block ml-10 text-md">
              About
            </NavLink>
            <NavLink to="" className="hidden md:block ml-10 text-md">
              Contact
            </NavLink>
            <a
              href="https://www.instagram.com/gadrianastudio/"
              target="_blank"
              className="hidden md:block ml-10"
            >
              <svg
                fill="#000000"
                width="30px"
                height="30px"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
                strokeWidth="0.64"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title></title>
                  <path d="M44,57H20A13,13,0,0,1,7,44V20A13,13,0,0,1,20,7H44A13,13,0,0,1,57,20V44A13,13,0,0,1,44,57ZM20,9A11,11,0,0,0,9,20V44A11,11,0,0,0,20,55H44A11,11,0,0,0,55,44V20A11,11,0,0,0,44,9Z"></path>
                  <path d="M32,43.67A11.67,11.67,0,1,1,43.67,32,11.68,11.68,0,0,1,32,43.67Zm0-21.33A9.67,9.67,0,1,0,41.67,32,9.68,9.68,0,0,0,32,22.33Z"></path>
                  <path d="M44.5,21A3.5,3.5,0,1,1,48,17.5,3.5,3.5,0,0,1,44.5,21Zm0-5A1.5,1.5,0,1,0,46,17.5,1.5,1.5,0,0,0,44.5,16Z"></path>
                </g>
              </svg>
            </a>
            <button
              onClick={openNavbar}
              className="md:hidden btn btn-circle btn-ghost"
            >
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <hr className="border-black border-t-1" />
    </div>
  );
}

export default Header;

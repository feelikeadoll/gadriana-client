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
      <div className="px-6 flex justify-between items-center mx-auto">
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
                width="36px"
                height="36px"
                viewBox="0 0 48 48"
                version="1.1"
                id="Shopicons"
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                white-space="preserve"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g id="instagram_00000127030415805702900630000013396224003006281109_">
                    <path d="M0-.019h48v48H0v-48z" fill="none"></path>
                    <path d="M36.019 8A3.986 3.986 0 0 1 40 11.981v24.038A3.986 3.986 0 0 1 36.019 40H11.981A3.986 3.986 0 0 1 8 36.019V11.981A3.986 3.986 0 0 1 11.981 8h24.038m0-4H11.981A7.98 7.98 0 0 0 4 11.981v24.038A7.98 7.98 0 0 0 11.981 44h24.038A7.98 7.98 0 0 0 44 36.019V11.981A7.98 7.98 0 0 0 36.019 4z"></path>
                    <path d="M24 34c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-16c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6z"></path>
                    <circle cx="35" cy="13" r="2"></circle>
                  </g>
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

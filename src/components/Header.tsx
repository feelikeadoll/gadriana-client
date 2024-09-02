import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
            <HashLink to="#contact" className="hidden md:block ml-10 text-md">
              Contact
            </HashLink>
            <a
              href="https://www.instagram.com/gadrianastudio/"
              target="_blank"
              className="hidden md:block ml-10"
            >
              <svg
                width="26px"
                height="26px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M16.65 7.2H16.66M8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20ZM15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z"
                    stroke="#000000"
                    strokeWidth="1.6799999999999997"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
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

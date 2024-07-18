import { Link, NavLink } from "react-router-dom";

import Logo from "../assets/gadriana-logo.png";

function Header() {
  return (
    <div className="w-full fixed bg-white z-50">
      <div className="max-w-7xl mx-6 lg:mx-4 xl:mx-0 flex justify-between items-center mx-auto">
        <div className="my-6 w-full flex items-center justify-between">
          <Link to="/">
            <img
              src={Logo}
              alt="Gadriana Creative Product Photography Studio located Barcelona"
              className="w-56"
            />
          </Link>
          <div className="flex items-center">
            <NavLink to="/about" className="ml-10 text-lg">
              About
            </NavLink>
            <NavLink to="/services" className="ml-10 text-lg">
              Services
            </NavLink>
            <NavLink to="" className="ml-10 text-lg">
              Contact
            </NavLink>
            <a
              href="https://www.instagram.com/gadrianastudio/"
              target="_blank"
              className="ml-10"
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
          </div>
        </div>
      </div>
      <hr className="border-black border-1" />
    </div>
  );
}

export default Header;

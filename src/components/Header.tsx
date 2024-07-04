import { NavLink } from "react-router-dom";

import Logo from "../assets/gadriana-logo.png";

function Header() {
  return (
    <div className="w-full">
      <div>
        <img
          src={Logo}
          alt="Gadriana Creative Product Photography Studio located Barcelona"
          className=""
        />
        <div>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="">Contact</NavLink>
          <a href="">Instagram</a>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Header;

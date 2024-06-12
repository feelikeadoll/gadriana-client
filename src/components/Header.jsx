import { NavLink } from "react-router-dom";

function Header() {
  return (
    // TODO: install Tailwind
    <div>
      <div>
        {" "}
        {/* TODO: Add logo img */}
        {/* <img src="" alt="" /> */}
        <div>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <a href="">Instagram</a>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Header;

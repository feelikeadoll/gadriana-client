import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

type NavbarProps = {
  displayNavbar: string;
  closeNavbar: () => void;
};

function Navbar(props: NavbarProps) {
  return (
    <div className={props.displayNavbar}>
      <div className="w-full h-screen absolute bg-white top-0 right-0 z-50">
        <button
          onClick={props.closeNavbar}
          className="btn btn-circle btn-ghost absolute top-4 right-6"
        >
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </button>
        <nav className="p-20 mt-12 h-screen flex flex-col items-center">
          <NavLink
            to="/"
            onClick={props.closeNavbar}
            className={({ isActive }) =>
              isActive
                ? "my-4 p-1 px-2 text-2xl rounded bg-zinc-300"
                : "my-4 p-1 px-2 text-2xl rounded hover:bg-zinc-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            onClick={props.closeNavbar}
            className={({ isActive }) =>
              isActive
                ? "my-4 p-1 px-2 text-2xl rounded bg-zinc-300"
                : "my-4 p-1 px-2 text-2xl rounded hover:bg-zinc-300"
            }
          >
            Services
          </NavLink>
          <HashLink
            to="#contact"
            onClick={props.closeNavbar}
            className="my-4 p-1 px-2 text-2xl rounded hover:bg-zinc-300 active:bg-zinc-300"
          >
            Contact
          </HashLink>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

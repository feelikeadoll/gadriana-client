import { NavLink } from "react-router-dom";

type NavbarProps = {
  displayNavbar: string;
  closeNavbar: () => void;
};

function Navbar(props: NavbarProps) {
  return (
    <div className={props.displayNavbar}>
      <div className="w-1/2 sm:w-2/5 m-2 absolute bg-white border-black border-1 shadow top-0 right-0 z-50">
        <button
          onClick={props.closeNavbar}
          className="btn btn-circle btn-ghost absolute top-4 right-4"
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
        <nav className="p-8 mt-12 flex flex-col">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "mt-2 p-1 px-2 text-lg rounded bg-zinc-300"
                : "mt-2 p-1 px-2 text-lg rounded hover:bg-zinc-300"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "mt-2 p-1 px-2 text-lg rounded bg-zinc-300"
                : "mt-2 p-1 px-2 text-lg rounded hover:bg-zinc-300"
            }
          >
            Services
          </NavLink>
          <NavLink
            to=""
            className="mt-2 p-1 px-2 text-lg rounded hover:bg-zinc-300 active:bg-zinc-300"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

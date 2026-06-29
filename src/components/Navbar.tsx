import { NavLink } from "react-router-dom";
import ContactSection from "./ContactSection";

type NavbarProps = {
  displayNavbar: string;
  closeNavbar: () => void;
  scrollToContact: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

function Navbar(props: NavbarProps) {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    props.closeNavbar();
    props.scrollToContact(e);
  };

  return (
    <div className={props.displayNavbar}>
      <div className="w-screen h-screen fixed bg-black-bg text-white top-0 right-0 z-50">
        <button
          onClick={props.closeNavbar}
          className="btn btn-circle btn-ghost fixed top-3 right-2">
          <svg
            width="35px"
            height="35px"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 5L15 15"
              stroke="#fff"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d="M15 5L5 15"
              stroke="#fff"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="pb-12 h-screen flex flex-col items-center">
          <nav className="mt-48 mb-4 flex flex-col items-center">
            <NavLink
              to="/info"
              onClick={props.closeNavbar}
              className="my-4 p-1 px-2 text-xl rounded">
              INFO
            </NavLink>
            <a
              href="#contact"
              onClick={handleContactClick}
              className="my-4 p-1 px-2 text-xl rounded">
              CONTACT
            </a>
          </nav>
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

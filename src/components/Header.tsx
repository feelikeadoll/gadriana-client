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

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("contact");
    if (!target) return;

    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + window.scrollY;
    const distance = end - start;
    const duration = 800;
    const startTime = performance.now();

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start + distance * easeInOutQuad(progress));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  return (
    <div className="w-full bg-white z-40">
      <Navbar displayNavbar={displayNavbar} closeNavbar={closeNavbar} />
      <div className="px-6 md:px-8 flex justify-between items-center mx-auto">
        <div className="my-4 lg:my-6 w-full flex items-center md:items-start justify-between font-normal">
          <div className="flex flex-col">
            <Link to="/">
              <img
                src={Logo}
                alt="Gadriana Creative Product Photography and video Studio for beauty & skincare brands located Barcelona Spain Europe Union"
                className="w-40 md:w-48 mb-2"
              />
              <div className="text-sm">ANYTHING BEAUTY</div>
            </Link>
          </div>
          <div className="flex items-center">
            <NavLink to="/info" className="hidden md:block ml-10 text-sm -mb-1">
              INFO
            </NavLink>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="hidden md:block ml-10 text-sm -mb-1">
              CONTACT
            </a>
            <a
              href="https://www.instagram.com/gadrianastudio/"
              target="_blank"
              className="hidden md:block ml-8">
              <svg
                width="26px"
                height="26px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M16.65 7.2H16.66M8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20ZM15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z"
                    stroke="#000000"
                    strokeWidth="1.6799999999999997"
                    strokeLinecap="round"
                    strokeLinejoin="round"></path>
                </g>
              </svg>
            </a>
            <button
              onClick={openNavbar}
              className="md:hidden btn btn-circle btn-ghost -mt-3 -mr-4">
              <svg
                width="35px"
                height="35px"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="4.5" r="1.2" fill="#212121" />
                <circle cx="10" cy="10" r="1.2" fill="#212121" />
                <circle cx="10" cy="15.5" r="1.2" fill="#212121" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

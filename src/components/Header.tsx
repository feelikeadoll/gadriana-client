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
      <div className="px-8 flex justify-between items-center mx-auto">
        <div className="my-4 lg:my-6 w-full flex items-end md:items-start justify-between font-normal">
          <div className="flex flex-col">
            <Link to="/">
              <img
                src={Logo}
                alt="Gadriana Creative Product Photography and video Studio for beauty & skincare brands located Barcelona Spain Europe Union"
                className="w-44 md:w-52 mb-2"
              />
              <div>ANYTHING BEAUTY</div>
            </Link>
          </div>
          <div className="flex items-center">
            <NavLink to="/info" className="hidden md:block ml-10 text-md -mb-1">
              INFO
            </NavLink>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="hidden md:block ml-10 text-md -mb-1">
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
              className="md:hidden btn btn-circle btn-ghost">
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M2 4.5C2 4.22386 2.22386 4 2.5 4H17.5C17.7761 4 18 4.22386 18 4.5C18 4.77614 17.7761 5 17.5 5H2.5C2.22386 5 2 4.77614 2 4.5Z"
                    fill="#212121"></path>{" "}
                  <path
                    d="M2 9.5C2 9.22386 2.22386 9 2.5 9H17.5C17.7761 9 18 9.22386 18 9.5C18 9.77614 17.7761 10 17.5 10H2.5C2.22386 10 2 9.77614 2 9.5Z"
                    fill="#212121"></path>{" "}
                  <path
                    d="M2.5 14C2.22386 14 2 14.2239 2 14.5C2 14.7761 2.22386 15 2.5 15H17.5C17.7761 15 18 14.7761 18 14.5C18 14.2239 17.7761 14 17.5 14H2.5Z"
                    fill="#212121"></path>{" "}
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

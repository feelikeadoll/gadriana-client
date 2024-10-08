import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full">
      <div className="px-6 flex justify-between items-center mx-auto">
        <div className="w-full flex flex-col items-center justify-center">
          <hr className="border-black border-t-1 w-full" />
          <div className="md:px-6 my-12 mb-24 flex justify-between w-full">
            <div className="flex flex-col">
              <NavLink to="/" className="my-2">
                Home
              </NavLink>
              <NavLink to="/services" className="my-2">
                Services
              </NavLink>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex">
                <a
                  href="https://www.instagram.com/gadrianastudio/"
                  target="_blank"
                  className="ml-2"
                >
                  <svg
                    width="38px"
                    height="38px"
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
                <a
                  href="https://www.pinterest.es/gadrianastudio/"
                  target="_blank"
                  className="ml-2"
                >
                  <svg
                    width="36px"
                    height="36px"
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
                        d="M7.45203 13.1793C6.34409 10.9182 7.8519 6.51197 12.9239 7.23231C18.5104 8.02574 17.505 16.7096 12.8471 16.3704C11.3732 16.2631 10.8159 15.0417 10.6704 13.7938M10.6704 13.7938C10.5601 12.8478 10.6865 11.8866 10.8296 11.3842C11.0738 10.527 11.4786 10.6436 11.1828 11.7774C11.0388 12.3292 10.8632 13.0219 10.6704 13.7938ZM10.6704 13.7938C10.156 15.8537 9.51993 18.4786 9.03959 20.5018M9.03959 20.5018C9.96672 20.8246 10.9629 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 15.9334 5.52335 19.2775 9.03959 20.5018Z"
                        stroke="#000000"
                        strokeWidth="1.6799999999999997"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <hr className="border-black border-t-1 w-full" />
          <p className="mb-12 mt-10 text-sm tracking-wider">
            ©2024 GADRIANA. Website built by{" "}
            <a
              href="https://www.linkedin.com/in/laianavalonarxe/"
              target="_blank"
              className="underline"
            >
              Laia Navalón Arxé
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

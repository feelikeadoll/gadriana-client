import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full">
      <div className="px-6 flex justify-between items-center mx-auto">
        <div className="w-full flex flex-col items-center justify-center">
          <hr className="border-black border-t-1 w-full" />
          <div className="my-12 mb-24 flex justify-between w-full">
            <div className="flex flex-col">
              <NavLink to="/about" className="my-2">
                About
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
                    width="36px"
                    height="36px"
                    viewBox="0 0 48 48"
                    version="1.1"
                    id="Shopicons"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    white-space="preserve"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g id="instagram_00000127030415805702900630000013396224003006281109_">
                        <path d="M0-.019h48v48H0v-48z" fill="none"></path>
                        <path d="M36.019 8A3.986 3.986 0 0 1 40 11.981v24.038A3.986 3.986 0 0 1 36.019 40H11.981A3.986 3.986 0 0 1 8 36.019V11.981A3.986 3.986 0 0 1 11.981 8h24.038m0-4H11.981A7.98 7.98 0 0 0 4 11.981v24.038A7.98 7.98 0 0 0 11.981 44h24.038A7.98 7.98 0 0 0 44 36.019V11.981A7.98 7.98 0 0 0 36.019 4z"></path>
                        <path d="M24 34c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-16c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6z"></path>
                        <circle cx="35" cy="13" r="2"></circle>
                      </g>
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
                    viewBox="0 0 48 48"
                    version="1.1"
                    id="Shopicons"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    white-space="preserve"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g id="pinterest_00000068677408528611730020000009142074092675021982_">
                        <path d="M0 .019h48v48H0v-48z" fill="none"></path>
                        <path d="M24 4C12.972 4 4 12.972 4 24s8.972 20 20 20 20-8.972 20-20S35.028 4 24 4zm0 36c-1.314 0-2.584-.177-3.806-.477l1.722-6.545c.14.167.287.326.443.479 1.678 1.64 4.144 2.183 6.594 1.451C33.102 33.671 36 29.185 36 24c0-6.617-5.383-12-12-12-6.51 0-10.005 3.922-11.02 7.281-1.534 5.078 1.324 8.798 1.446 8.954l3.158-2.455c-.069-.092-1.694-2.303-.776-5.343C17.428 18.391 19.682 16 24 16c4.411 0 8 3.589 8 8 0 2.895-1.439 6.255-4.19 7.075-.389.115-1.731.423-2.655-.479-.62-.605-1.861-2.626-.382-8.471l.162-.616-3.864-1.035c-.059.217-.115.433-.17.645l-4.467 16.974C11.418 35.388 8 30.086 8 24c0-8.822 7.178-16 16-16s16 7.178 16 16-7.178 16-16 16z"></path>
                      </g>
                    </g>
                  </svg>
                </a>
                <a href="mailto:studio@gadriana.com"></a>
              </div>
            </div>
          </div>
          <hr className="border-black border-t-1 w-full" />
          <p className="mb-12 mt-10 text-sm tracking-wider">©2024 GADRIANA.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

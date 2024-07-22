import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-7xl px-6 flex justify-between items-center mx-auto">
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
              <h3 className="my-2">Follow us:</h3>
              <div className="flex">
                <a
                  href="https://www.instagram.com/gadrianastudio/"
                  target="_blank"
                  className="ml-2"
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
                <a
                  href="https://www.pinterest.es/gadrianastudio/"
                  target="_blank"
                  className="ml-2"
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
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <title></title>
                      <path d="M50.22,9.93C46.13,5.33,40.18,3,32.55,3c-10.95,0-16.94,4.82-20,8.86C8.58,17,7,24,8.58,29.76c2.3,8.57,7.43,10.37,7.65,10.44a1,1,0,0,0,1.28-.69L19,34a1,1,0,0,0-.12-.8s-2.8-4.54-1.36-11.51a14,14,0,0,1,5.86-8.58c3.08-2,6.85-2.57,11.2-1.65a13.15,13.15,0,0,1,10.07,9.07c1.85,5.57.67,12.27-2.86,16.29-2.26,2.58-4.68,3.65-7,3.1a5.77,5.77,0,0,1-3.49-2.48l1.83-8.34c.92-3.63,2-7.75-.37-10.3A5.9,5.9,0,0,0,27.47,17,7.34,7.34,0,0,0,22,21.32c-1.9,4-.27,8.93.23,10.24L17.08,51.5a1,1,0,0,0,0,.42l1.41,8.46a1,1,0,0,0,1.71.52l6-6.34a1,1,0,0,0,.25-.45l2.19-8.76A12.58,12.58,0,0,0,36.92,49c7.11.54,17.32-8.7,18.62-19.88C56.39,21.8,54.4,14.63,50.22,9.93Zm3.33,19C52.32,39.49,42.68,47.44,37.08,47c-5.83-.45-7.94-4.19-8-4.35a1,1,0,0,0-1.85.23L24.58,53.38l-4.46,4.69-1-6.28,5.2-20a1,1,0,0,0,0-.65c0-.05-2.18-5.13-.39-8.93a5.38,5.38,0,0,1,3.94-3.24,3.93,3.93,0,0,1,3.54,1.24c1.61,1.75.7,5.31-.1,8.48l-1.89,8.62a1,1,0,0,0,0,.38c.2,1.22,2.11,3.39,4.75,4.14,2.2.63,5.6.5,9.24-3.65,4-4.54,5.32-12,3.25-18.24A15.09,15.09,0,0,0,35,9.52c-4.89-1-9.17-.39-12.71,1.93a16.1,16.1,0,0,0-6.72,9.85A18.84,18.84,0,0,0,17,33.89L15.91,37.8c-1.4-.9-4-3.21-5.39-8.56-1.39-5.17,0-11.52,3.58-16.17C16.92,9.39,22.42,5,32.55,5c7,0,12.48,2.11,16.18,6.26S54.34,22.13,53.56,28.88Z"></path>
                    </g>
                  </svg>
                </a>
                <a href="mailto:studio@gadriana.com"></a>
              </div>
            </div>
          </div>
          <hr className="border-black border-t-0.5 w-full" />
          <p className="mb-12 mt-10 text-sm tracking-wider">©2024 GADRIANA.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

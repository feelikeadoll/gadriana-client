import { useEffect, useState } from "react";

function BackToTopButton() {
  const [backToTop, setBackToTop] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setBackToTop(true) : setBackToTop(false);
    });
  }, []);

  const scrollBack = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTop && (
        <button
          onClick={scrollBack}
          className="shadow-around border-1 border-black z-45 fixed bottom-12 right-12 md:bottom-16 md:right-16 lg:bottom-20 lg:right-20 btn btn-circle btn-lg bg-white"
        >
          <svg
            width="50px"
            height="50px"
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
              <g clipPath="url(#clip0_429_11224)">
                <path
                  d="M17 14L12 9"
                  stroke="#000000"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 9L7 14"
                  stroke="#000000"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_429_11224">
                  <rect width="24" height="24" fill="white"></rect>
                </clipPath>
              </defs>
            </g>
          </svg>
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;

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
          className="shadow-around z-45 fixed bottom-12 right-12 md:bottom-16 md:right-16 lg:bottom-20 lg:right-20 btn btn-circle btn-lg bg-white">
          <svg
            fill="#211f20"
            height="27px"
            width="27px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            enableBackground="new 0 0 512 512"
            xmlSpace="preserve">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <polygon points="256,63.6 0,319.6 69.8,389.4 256,203.2 442.2,389.4 512,319.6 "></polygon>
            </g>
          </svg>
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;

function ContactSection() {
  return (
    <div
      id="contact"
      className="bg-black-bg text-white xl:pt-16 2xl:pt-24 w-full px-8 flex justify-between items-center mx-auto">
      <div className="w-full md:px-6 pt-28 pb-14 flex flex-col items-center justify-between text-sm md:text-md">
        <p className="md:mb-4 font-light">GET IN TOUCH</p>
        <a href="mailto:studio@gadriana.com">STUDIO@GADRIANA.COM</a>

        <div className="flex m-8 gap-1">
          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/gadrianastudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle ml-2">
            <svg
              width="38px"
              height="38px"
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
                  stroke="#000"
                  strokeWidth="1.6799999999999997"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
              </g>
            </svg>
          </a>
          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/company/gadriana/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle ml-2">
            <svg
              fill="#000000"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              className="w-6 h-6">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g id="7935ec95c421cee6d86eb22ecd125aef">
                  <path
                    style={{
                      display: "inline",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    d="M116.504,500.219V170.654H6.975v329.564H116.504 L116.504,500.219z M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941 C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z M177.124,500.219 c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533 c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531 c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z"></path>
                </g>
              </g>
            </svg>
          </a>
          {/* PINTEREST */}
          <a
            href="https://www.pinterest.es/gadrianastudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle ml-2">
            <svg
              fill="#000000"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              className="w-7 h-7">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g id="7935ec95c421cee6d86eb22ecd12951c">
                  <path
                    style={{ display: "inline" }}
                    d="M220.646,338.475C207.223,408.825,190.842,476.269,142.3,511.5 c-14.996-106.33,21.994-186.188,39.173-270.971c-29.293-49.292,3.518-148.498,65.285-124.059 c76.001,30.066-65.809,183.279,29.38,202.417c99.405,19.974,139.989-172.476,78.359-235.054 C265.434-6.539,95.253,81.775,116.175,211.161c5.09,31.626,37.765,41.22,13.062,84.884c-57.001-12.65-74.005-57.6-71.822-117.533 c3.53-98.108,88.141-166.787,173.024-176.293c107.34-12.014,208.081,39.398,221.991,140.376 c15.67,113.978-48.442,237.412-163.23,228.529C258.085,368.704,245.023,353.283,220.646,338.475z"></path>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;

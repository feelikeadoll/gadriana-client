import ClientsTitle from "../assets/section titles/clients.png";

import ClientsLogos from "../assets/clients-all.jpg";

function About() {
  return (
    <div className="w-full">
      <section
        id="about"
        className="px-6 flex justify-between items-center mx-auto"
      >
        <div className="flex-col mt-32 mb-16 w-full">
          <div className="w-full flex flex-col items-end">
            <div className="w-full md:w-11/12 lg:w-3/4 text-3xl md:text-3.5xl lg:text-4xl leading-relaxed">
              <p className="pt-8">
                We're a creative studio based in Barcelona{" "}
                <br className="hidden md:block" />
                for beauty + wellness brands.
              </p>
              <p className="py-8">
                We direct, create, style, retouch and perfect images and videos
                to help you reach your audience in a visually impact manner.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-96 md:h-600 lg:h-800 xl:h-128 bg-aboutImg bg-cover bg-center"></div>
      <section
        id="clients"
        className="max-w-7xl px-6 flex justify-between items-center mx-auto"
      >
        <div className="flex flex-col items-center mt-32 w-full">
          <img
            src={ClientsTitle}
            alt="Gadriana Creative Studio - Clients"
            className="my-8 max-h-16 sm:max-h-20 md:max-h-28"
          />
        </div>
      </section>
      <div
        id="logos"
        className="w-full relative overflow-hidden flex items-center h-60 mb-20
        before:absolute before:top-0 before:w-20 md:before:w-60 before:h-full before:content-no before:z-20
        before:left-0 before:bg-before
        after:absolute after:top-0 after:w-20 md:after:w-60 after:h-full after:content-no after:z-20
        after:right-0 after:bg-after"
      >
        <div id="logos-slide" className="flex items-center">
          <img src={ClientsLogos} className="w-wlogos h-hlogos min-w-wlogos" />
          <img src={ClientsLogos} className="w-wlogos h-hlogos min-w-wlogos" />
          <img src={ClientsLogos} className="w-wlogos h-hlogos min-w-wlogos" />
        </div>
      </div>
    </div>
  );
}

export default About;

import AboutTitle from "../assets/section titles/about.png";
import ClientsTitle from "../assets/section titles/clients.png";

import ClientsLogos from "../assets/clients-all.jpg";

function About() {
  return (
    <div className="w-full">
      <section
        id="about"
        className="max-w-7xl px-6 lg:px-4 xl:px-0  flex justify-between items-center mx-auto"
      >
        <div className="flex-col mt-32 mb-16 w-full">
          <img
            src={AboutTitle}
            alt="Gadriana Creative Studio - About"
            className="my-8 max-h-28"
          />
          <div className="w-full flex flex-col items-end">
            <div className="w-3/4 text-4xl leading-relaxed">
              <p className="pt-8">We're a creative studio based in Barcelona</p>
              <p className="pb-8">for beauty + wellness brands.</p>
              <p className="py-8">
                We direct, create, style, retouch and perfect images and videos
                to help you reach your audience in a visually impact manner.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-128 bg-aboutImg bg-cover bg-center"></div>
      <section
        id="clients"
        className="max-w-7xl px-6 lg:px-4 xl:px-0 flex justify-between items-center mx-auto"
      >
        <div className="flex-col mt-32 w-full">
          <img
            src={ClientsTitle}
            alt="Gadriana Creative Studio - Clients"
            className="my-8 max-h-28"
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

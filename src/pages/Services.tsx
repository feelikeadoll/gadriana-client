import HelloImg from "../assets/section titles/hello.png";

import Services1 from "../assets/services-img1.jpg";
import Services2 from "../assets/services-img2.mp4";
import Services3 from "../assets/services-img3.jpg";
import MakingOf1 from "../assets/makingof-1.jpg";
import MakingOf2 from "../assets/makingof-2.jpg";

import OurServices from "../assets/section titles/services.png";

import OurClients from "../assets/section titles/clients.png";

import ClientsLogos from "../assets/clients-all.jpg";

function Services() {
  return (
    <div className="w-full">
      <div
        id="services"
        className="px-6 flex justify-between items-center mx-auto"
      >
        <div className="flex-col mt-32 mb-16 w-full">
          <section
            id="about"
            className="px-6 flex justify-between items-center mx-auto"
          >
            <div className="flex-col mt-4 sm:mt-10 md:mt-32 mb-16 w-full">
              <div className="w-full flex flex-col items-center">
                <div className="w-full md:w-11/12 lg:w-3/4 text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl leading-relaxed">
                  <p className="pt-8 hidden md:block">
                    <img
                      src={HelloImg}
                      className="w-20 sm:w-32 md:w-52 mb-8 md:mb-12 mr-4 md:inline-block"
                    />
                    We're a creative studio
                  </p>
                  <p className="md:-mt-8 hidden md:block">
                    based in Barcelona for beauty + wellness brands.
                  </p>
                  <p className="pt-8 block md:hidden">
                    <img src={HelloImg} className="h-12 mb-8 mr-4" alt="" />
                    We're a creative studio based in Barcelona for beauty +
                    wellness brands.
                  </p>
                  <p className="py-8">
                    We direct, create, style, build, retouch and perfect still
                    images and motions to help consumer brands create impactful
                    digital content.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            id="images"
            className="px-6 md:px-12 w-full flex justify-center"
          >
            <div className="columns-1 md:columns-3 md:gap-20">
              <img
                src={Services1}
                alt="Gadriana Studio - Creative beauty content creators"
              />
              <video
                className="video-element w-full mt-16"
                src={Services2}
                autoPlay
                muted
                loop
                playsInline
                webkit-playsinline="true"
                controls={false}
              />
              <img
                src={Services3}
                className="mt-16"
                alt="Gadriana Studio - Creative beauty content creators"
              />
            </div>
          </section>
          <section
            id="services"
            className="mt-32 md:mt-40 flex flex-col items-center"
          >
            <img src={OurServices} className="h-8 sm:h-10 md:h-14" alt="" />
            <div
              id="photograpy"
              className="w-full mt-14 md:mt-10 mb-20 flex flex-col md:flex-row justify-between"
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl md:w-1/2">
                Photography
              </h3>
              <p className="text-lg md:text-xl mt-8 md:mt-12 md:mt-0 md:w-1/2">
                We offer professional photography services to help you capture
                the perfect image for your product. From pre-production planning
                to shooting, to post-production editing and retouching, we
                ensure that every shot is perfect for your intended use.
              </p>
            </div>
            <hr className="w-full border-black border-t-1" />
            <div
              id="videography"
              className="w-full mt-16 md:mt-28 mb-20 flex flex-col md:flex-row justify-between"
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl md:w-1/2">
                Videography
              </h3>
              <p className="text-lg md:text-xl mt-8 md:mt-12 md:w-1/2">
                Having quality video content is important for your business,
                whether it's a simple how-to video or a more impactful piece for
                social media. That's why we offer comprehensive services from
                beginning to end, including storywriting, styling, filming, and
                post-production.
              </p>
            </div>
            <hr className="w-full border-black border-t-1" />
            <div
              id="set-design"
              className="w-full mt-16 lg:mt-28 mb-12 md:mb-20 lg:mb-32 flex flex-col md:flex-row justify-between"
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl md:w-1/2">
                Set Design
              </h3>
              <p className="text-lg md:text-xl mt-8 md:mt-12 md:w-1/2">
                We create stunning sets using the latest techniques and
                technology. Whether you need a traditional set, digital
                elements, or 3D printed materials, we've got you covered.
              </p>
            </div>
          </section>
          <section
            id="making-of"
            className="md:px-6 w-full flex justify-center"
          >
            <div className="columns-1 md:columns-2 md:gap-10">
              <img
                src={MakingOf1}
                alt="Gadriana Studio - Creative beauty content creators"
              />
              <img
                src={MakingOf2}
                className="mt-12"
                alt="Gadriana Studio - Creative beauty content creators"
              />
            </div>
          </section>
          <section
            id="clients"
            className="w-full flex flex-col items-center mt-32 md:mt-40"
          >
            <img src={OurClients} className="h-8 sm:h-10 md:h-14 mb-4" alt="" />
            <div
              id="logos"
              className="w-full relative overflow-hidden flex items-center h-60
        before:absolute before:top-0 before:w-20 md:before:w-60 before:h-full before:content-no before:z-20
        before:left-0 before:bg-before
        after:absolute after:top-0 after:w-20 md:after:w-60 after:h-full after:content-no after:z-20
        after:right-0 after:bg-after"
            >
              <div id="logos-slide" className="flex items-center">
                <img
                  src={ClientsLogos}
                  className="w-wlogos h-hlogos min-w-wlogos"
                />
                <img
                  src={ClientsLogos}
                  className="w-wlogos h-hlogos min-w-wlogos"
                />
                <img
                  src={ClientsLogos}
                  className="w-wlogos h-hlogos min-w-wlogos"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Services;

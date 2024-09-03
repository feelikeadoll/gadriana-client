import HelloImg from "../assets/section titles/hello.png";

import Services1 from "../assets/services-img1.jpg";
import Services2 from "../assets/services-img2.mp4";
import Services3 from "../assets/services-img3.jpg";

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
            <div className="flex-col mt-32 mb-16 w-full">
              <div className="w-full flex flex-col items-center">
                <div className="w-full md:w-11/12 lg:w-3/4 text-3xl md:text-3.5xl lg:text-4xl leading-relaxed">
                  <p className="pt-8">
                    <img
                      src={HelloImg}
                      className="w-52 mb-12 mr-4 inline-block"
                      alt=""
                    />
                    We're a creative studio
                  </p>
                  <p className="-mt-8">
                    based in Barcelona for beauty + wellness brands.
                  </p>
                  <p className="py-8">
                    We direct, create, style, build, style, retouch and perfect
                    still images and motions to help consumer brands create
                    impactful digital content.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="images" className="px-12 w-full flex justify-center">
            <div className="columns-1 md:columns-3 gap-20">
              <img src={Services1} alt="" />
              <video
                className="video-element"
                src={Services2}
                autoPlay
                muted
                loop
                controls={false}
              />
              <img src={Services3} alt="" />
            </div>
          </section>
          <section
            id="photograpy"
            className="w-full mt-16 md:mt-28 mb-20 flex flex-col md:flex-row justify-between"
          >
            <h3 className="text-4xl md:text-5xl md:w-1/2">Photography</h3>
            <p className="text-lg md:text-xl mt-8 md:mt-12 md:mt-0 md:w-1/2">
              We offer professional photography services to help you capture the
              perfect image for your product. From pre-production planning to
              shooting, to post-production editing and retouching, we ensure
              that every shot is perfect for your intended use.
            </p>
          </section>
          <hr className="border-black " />
          <section
            id="videography"
            className="w-full mt-16 md:mt-28 mb-20 flex flex-col md:flex-row justify-between"
          >
            <h3 className="text-4xl md:text-5xl md:w-1/2">Videography</h3>
            <p className="text-lg md:text-xl mt-8 md:mt-12 md:w-1/2">
              Having quality video content is important for your business,
              whether it's a simple how-to video or a more impactful piece for
              social media. That's why we offer comprehensive services from
              beginning to end, including storywriting, styling, filming, and
              post-production.
            </p>
          </section>
          <hr className="border-black " />
          <section
            id="set-design"
            className="w-full mt-16 lg:mt-28 mb-8 md:mb-16 lg:mb-20 flex flex-col md:flex-row justify-between"
          >
            <h3 className="text-4xl md:text-5xl md:w-1/2">Set Design</h3>
            <p className="text-lg md:text-xl mt-8 md:mt-12 md:w-1/2">
              We create stunning sets using the latest techniques and
              technology. Whether you need a traditional set, digital elements,
              or 3D printed materials, we've got you covered.
            </p>
          </section>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row mb-20">
        <div className="md:w-1/2 h-600 lg:h-800 xl:h-128 bg-servicesImg1 bg-cover bg-center"></div>
        <div className="md:w-1/2 h-600 lg:h-800 xl:h-128 bg-servicesImg2 bg-cover bg-center"></div>
      </div>
    </div>
  );
}

export default Services;

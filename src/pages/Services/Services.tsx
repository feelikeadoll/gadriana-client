import Services1 from "../../assets/services-img1.jpg";
import Services2 from "../../assets/services-img2.mp4";
import Services3 from "../../assets/services-img3.jpg";
import MakingOf1 from "../../assets/makingof-1.jpg";
import MakingOf2 from "../../assets/makingof-2.jpg";

import ClientsSection from "./sections/ClientsSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";

function Services() {
  return (
    <div className="w-full">
      <div
        id="services"
        className="px-8 flex justify-between items-center mx-auto"
      >
        <div className="flex-col mt-32 mb-16 w-full">
          <AboutSection />
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
          <ServicesSection />
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
          <ClientsSection />
        </div>
      </div >
    </div >
  );
}

export default Services;

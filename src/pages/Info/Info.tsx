import Services1 from "../../assets/services-img1.jpg";
import Services2 from "../../assets/services-img2.mp4";
import Services3 from "../../assets/services-img3.jpg";
import MakingOf1 from "../../assets/makingof-1.jpg";
import MakingOf2 from "../../assets/makingof-2.jpg";

import ClientsSection from "./sections/ClientsSection";
import AboutSection from "./sections/AboutSection";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";
import { NavLink } from "react-router-dom";
// import ServicesSection from "./sections/ServicesSection";

function Info() {
  return (
    <div id="info" className="w-full  absolute top-0">
      <div className="border-2 border-green bg-black-bg text-white px-8 flex justify-between items-center mx-auto">
        <div className="flex-col mb-16 w-full mt-4">
          <div className="flex justify-end">
            <NavLink to="/" className="hidden md:block text-sm -mb-1">
              <span>{"<<"}</span>
              <span className="ml-4">{"PORTFOLIO"}</span>
            </NavLink>
          </div>
          <AboutSection />
        </div>
      </div>
      <ClientsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Info;

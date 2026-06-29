import ClientsSection from "./sections/ClientsSection";
import AboutSection from "./sections/AboutSection";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";
import { NavLink } from "react-router-dom";

function Info() {
  return (
    <div id="info" className="w-full  absolute top-0">
      <div className="bg-black-bg text-white px-4 md:px-8 flex justify-between items-center mx-auto">
        <div className="flex-col mb-16 w-full mt-4">
          <div className="flex justify-end">
            <NavLink to="/" className="mt-2 md:mt-0 block text-2xs -mb-1">
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

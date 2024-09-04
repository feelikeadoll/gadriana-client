import ContactForm from "./ContactForm";

import Collaborate from "../assets/section titles/collaborate.png";

function ContactSection() {
  return (
    <div
      id="contact"
      className="xl:pt-16 2xl:pt-24 w-full px-6 flex justify-between items-center mx-auto"
    >
      <div className="w-full flex flex-col items-center justify-center">
        <hr className="border-black border-t-1 w-full" />
        <div className="w-full md:px-6 pt-28 pb-14 flex flex-col md:flex-row justify-between">
          <div className="mb-10 md:w-1/2 text-lg md:text-xl">
            <img
              src={Collaborate}
              alt="Gadriana Studio Barcelona - Get in touch via Contact form"
              className="w-72 pb-4"
            />
            <div className="hidden md:block">
              <p className="md:mb-2">
                Have a project in mind? <br />
                Fill out the form or e-mail us at
              </p>
              <a href="mailto:studio@gadriana.com" className="underline">
                studio@gadriana.com
              </a>
            </div>
            <p className="block md:hidden mt-2">
              Have a project in mind? Fill out the form or e-mail us at{" "}
              <a href="mailto:studio@gadriana.com" className="underline">
                studio@gadriana.com
              </a>
            </p>
          </div>
          <div className="md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;

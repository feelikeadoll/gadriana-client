import AboutTitle from "../assets/section titles/about.png";
import ClientsTitle from "../assets/section titles/clients.png";

function About() {
  return (
    <div className="w-full">
      <section
        id="about"
        className="max-w-7xl flex justify-between items-center mx-auto"
      >
        <div className="flex-col mt-32 mb-16 w-full">
          <img
            src={AboutTitle}
            alt="Gadriana Creative Studio - About"
            className="my-8 h-28"
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
        className="max-w-7xl flex justify-between items-center mx-auto"
      >
        <div className="flex-col mt-32 w-full">
          <img
            src={ClientsTitle}
            alt="Gadriana Creative Studio - Clients"
            className="my-8 h-28"
          />
          <div>{/* TO DO: Clients logos slide */}</div>
        </div>
      </section>
    </div>
  );
}

export default About;

import AboutTitle from "../assets/section titles/about.png";
import Image from "../assets/about-img.jpg";

function About() {
  return (
    <div className="w-full">
      <div className="max-w-7xl flex justify-between items-center mx-auto">
        <div className="flex-col mt-32 w-full">
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
      </div>
      <div className="w-full py-16">
        <img src={Image} alt="" className="" />
      </div>
    </div>
  );
}

export default About;

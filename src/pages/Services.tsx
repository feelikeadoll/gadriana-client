import ServicesTitle from "../assets/section titles/services.png";

function Services() {
  return (
    <div className="w-full">
      <div
        id="services"
        className="max-w-7xl flex justify-between items-center mx-auto"
      >
        <div className="flex-col mt-32 mb-16 w-full">
          <img
            src={ServicesTitle}
            alt="Gadriana Creative Studio - About"
            className="my-8 h-28"
          />
          <section
            id="photograpy"
            className="w-full mt-28 mb-20 flex justify-between"
          >
            <h3 className="text-5xl w-1/2">Photography</h3>
            <p className="text-xl w-1/2">
              We offer professional photography services to help you capture the
              perfect image for your product. From pre-production planning to
              shooting, to post-production editing and retouching, we ensure
              that every shot is perfect for your intended use.
            </p>
          </section>
          <hr className="border-black " />
          <section
            id="videography"
            className="w-full mt-28 mb-20 flex justify-between"
          >
            <h3 className="text-5xl w-1/2">Videography</h3>
            <p className="text-xl w-1/2">
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
            className="w-full mt-28 mb-20 flex justify-between"
          >
            <h3 className="text-5xl w-1/2">Set Design</h3>
            <p className="text-xl w-1/2">
              We create stunning sets using the latest techniques and
              technology. Whether you need a traditional set, digital elements,
              or 3D printed materials, we've got you covered.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Services;

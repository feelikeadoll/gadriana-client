import { useState } from "react";

const services = [
  {
    title: "CREATIVE DIRECTION",
    description: "We define a clear visual language aligned with your brand.",
  },
  {
    title: "PHOTOGRAPHY",
    description: "E-commerce, campaigns and editorial imagery.",
  },
  {
    title: "MOTION",
    description: "Short and long-form video for digital and social.",
  },
  {
    title: "POST-PRODUCTION",
    description:
      "Impeccable retouching. Video editing. Color Grading. AI-Animated Stills.",
  },
];

function ServiceItem({
  title,
  description,
  defaultOpen = false,
}: {
  title: string;
  description: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className="py-5 cursor-pointer"
      onClick={() => setOpen((prev) => !prev)}>
      <div className="flex items-center gap-4">
        <svg
          width="14px"
          height="14px"
          viewBox="0 0 22 22"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#fff"
          strokeWidth="2.2"
          strokeLinecap="round">
          <path
            d="M3 11H19"
            style={{
              transition: "transform 0.3s ease",
              transform: open ? "rotate(0deg)" : "rotate(90deg)",
              transformOrigin: "center",
            }}
          />
        </svg>
        <h5 className="font-medium">{title}</h5>
      </div>
      <div
        style={{
          maxHeight: open ? "200px" : "0",
          overflow: "hidden",
          transition:
            "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
          opacity: open ? 1 : 0,
        }}>
        <p className="font-light mt-1">{description}</p>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="px-8 flex justify-between items-center mx-auto">
      <div className="flex-col mt-4 sm:mt-6 md:mt-20 mb-16 w-full">
        <div className="w-full flex flex-col items-center">
          <div className="mb-20 w-full md:w-11/12 lg:w-4/6 text-xs sm:text-sm leading-relaxed">
            <div className="flex flex-col items-center gap-2 mt-12 mb-16">
              <p>
                <b>GADRIANA</b> IS A CREATION STUDIO
              </p>
              <p>FOR ALL YOUR BRAND'S VISUAL NEEDS.</p>
            </div>
            <p className="py-4 text-center font-light">
              We specialise in skincare, wellness and cosmetics visuals for
              forward-thinking brands.
            </p>
            <p className="py-4 text-center font-light">
              With a background in art, design and architecture, we approach
              each project with a strong sense of composition, material and
              light. From concept to final delivery, every detail is taken care
              of.
            </p>
            <p className="py-4 px-24 text-center font-light">
              We believe beauty imagery should reflect the same level of
              intention and craftsmanship as the products themselves.
            </p>
          </div>
          <div className="mb-12 w-full md:w-11/12 lg:w-4/6 text-xs sm:text-sm leading-relaxed">
            {services.map((service, index) => (
              <ServiceItem
                key={service.title}
                {...service}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

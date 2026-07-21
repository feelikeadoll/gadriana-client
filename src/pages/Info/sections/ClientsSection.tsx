const logoModules = import.meta.glob("../../../assets/clients/*", {
  eager: true,
}) as Record<string, { default: string }>;

const logos = Object.values(logoModules).map((m) => m.default);

function ClientsSection() {
  return (
    <section
      id="clients"
      className="w-full bg-white flex flex-col items-center pt-32 pb-24 md:pt-40 md:pb-28">
      <h3 className="text-lg font-medium">OUR CLIENTS</h3>
      <div
        id="logos"
        className="w-full relative overflow-hidden flex items-center h-60
        before:absolute before:top-0 before:w-20 md:before:w-60 before:h-full before:content-no before:z-20
        before:left-0 before:bg-before
        after:absolute after:top-0 after:w-20 md:after:w-60 after:h-full after:content-no after:z-20
        after:right-0 after:bg-after">
        <div id="logos-slide" className="flex items-center">
          {[...logos, ...logos, ...logos].map((src, index) => (
            <img
              key={index}
              src={src}
              className="max-w-32 max-h-16 object-contain mx-8 md:mx-10"
              alt="Client logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;

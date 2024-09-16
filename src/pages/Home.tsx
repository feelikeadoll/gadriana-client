import HomeImgGrid from "../components/HomeImgGrid";

function Home() {
  return (
    <div className="w-full">
      <div className="pt-20 bg-homeGif w-full h-96 md:h-screen bg-cover bg-center">
        <h1 className="w-1/2 mx-6 md:mx-12 pt-16 sm:pt-20 md:pt-32 lg:pt-40 text-2xl md:text-3.5xl lg:text-4xl md:w-11/12 md:w-3/4 lg:w-2/3">
          We're a creative studio <br className="hidden md:block" />
          for beauty + wellness brands.
        </h1>
      </div>
      <hr className="border-black border-t-1" />

      <div className="px-6 flex justify-between items-center mx-auto">
        <div className="flex flex-col items-center mb-32">
          <h2 className="w-11/12 sm:w-4/6 lg:w-7/12 text-xl md:text-2xl lg:text-3xl text-center mb-8 mt-16 md:my-20 lg:my-32">
            We create stunning imagery and videos{" "}
            <br className="hidden lg:block" />
            that help our clients captivate their audience{" "}
            <br className="hidden xl:block" />
            in a visually impactful manner.
          </h2>
          <HomeImgGrid />
        </div>
      </div>
    </div>
  );
}

export default Home;

import HelloImg from "../../../assets/section titles/hello.png";


function AboutSection() {
    return <section
        id="about"
        className="px-8 flex justify-between items-center mx-auto"
    >
        <div className="flex-col mt-4 sm:mt-10 md:mt-32 mb-16 w-full">
            <div className="w-full flex flex-col items-center">
                <div className="w-full md:w-11/12 lg:w-3/4 text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl leading-relaxed">
                    <p className="pt-8 hidden md:block">
                        <img
                            src={HelloImg}
                            className="w-20 sm:w-32 md:w-52 mb-8 md:mb-12 mr-4 md:inline-block"
                        />
                        We're a creative studio
                    </p>
                    <p className="md:-mt-8 hidden md:block">
                        based in Barcelona for beauty + wellness brands.
                    </p>
                    <p className="pt-8 block md:hidden">
                        <img src={HelloImg} className="h-12 mb-8 mr-4" alt="" />
                        We're a creative studio based in Barcelona for beauty +
                        wellness brands.
                    </p>
                    <p className="py-8">
                        We direct, create, style, build, retouch and perfect still
                        images and motions to help consumer brands create impactful
                        digital content.
                    </p>
                </div>
            </div>
        </div>
    </section>
}

export default AboutSection
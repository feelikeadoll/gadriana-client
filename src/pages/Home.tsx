import img1 from "../assets/homepage grid/1.jpg";
import img2 from "../assets/homepage grid/2.png";
import img3 from "../assets/homepage grid/3.mp4";
import img4 from "../assets/homepage grid/4.jpg";
import img5 from "../assets/homepage grid/5.jpg";
import img6 from "../assets/homepage grid/6.jpg";
import img7 from "../assets/homepage grid/7.mp4";
import img8 from "../assets/homepage grid/8.jpg";
import img9 from "../assets/homepage grid/9.jpg";
import img10 from "../assets/homepage grid/10.jpg";
import img11 from "../assets/homepage grid/11.jpg";
import img12 from "../assets/homepage grid/12.jpg";
import img13 from "../assets/homepage grid/13.jpg";
import img14 from "../assets/homepage grid/14.jpg";
import img15 from "../assets/homepage grid/15.jpg";
import img16 from "../assets/homepage grid/16.mp4";
import img17 from "../assets/homepage grid/17.jpg";
import img18 from "../assets/homepage grid/18.jpg";
import img19 from "../assets/homepage grid/19.mp4";
import img20 from "../assets/homepage grid/20.jpg";
import img21 from "../assets/homepage grid/21.jpg";
import img22 from "../assets/homepage grid/22.jpg";
import img23 from "../assets/homepage grid/23.jpg";
import img24 from "../assets/homepage grid/24.jpg";
import img25 from "../assets/homepage grid/25.jpg";
import img26 from "../assets/homepage grid/26.jpg";
import img27 from "../assets/homepage grid/27.jpg";
import img28 from "../assets/homepage grid/28.jpg";
import img29 from "../assets/homepage grid/29.jpg";
import img30 from "../assets/homepage grid/30.jpg";
import img31 from "../assets/homepage grid/31.jpg";
import img32 from "../assets/homepage grid/32.jpg";
import img33 from "../assets/homepage grid/33.jpg";

function Home() {
  return (
    <div className="w-full">
      <div className="px-6 flex justify-between items-center mx-auto">
        <div className="flex-col my-32">
          <h1 className="my-12 text-3.5xl md:text-4xl md:w-11/12 md:w-3/4 lg:w-2/3 leading-relaxed">
            We're a Barcelona-based creative studio for beauty + wellness
            brands.
          </h1>

          <div className="w-full mb-20 flex justify-center">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-36">
              <img src={img1} className="my-10" alt="" />
              <img src={img2} className="my-10 mx-10" alt="" />
              <video
                className="video-element my-10"
                src={img3}
                autoPlay
                muted
                loop
                controls={false}
              />
              <img src={img4} className="my-10 mx-10" alt="" />
              <img src={img5} className="my-10" alt="" />
              <img src={img6} className="my-10 mx-10" alt="" />
              <video
                className="video-element my-10"
                src={img7}
                autoPlay
                muted
                loop
                controls={false}
              />
              <img src={img8} className="my-10 mx-10" alt="" />
              <img src={img9} className="my-10" alt="" />
              <img src={img10} className="my-10 mx-10" alt="" />
              <img src={img11} className="my-10" alt="" />
              <img src={img12} className="my-10 mx-10" alt="" />
              <img src={img13} className="my-10" alt="" />
              <img src={img14} className="my-10 mx-10" alt="" />
              <img src={img15} className="my-10" alt="" />
              <video
                className="video-element my-10 mx-10"
                src={img16}
                autoPlay
                muted
                loop
                controls={false}
              />
              <img src={img17} className="my-10" alt="" />
              <img src={img18} className="my-10 mx-10" alt="" />
              <video
                className="video-element my-10"
                src={img19}
                autoPlay
                muted
                loop
                controls={false}
              />
              <img src={img19} className="my-10 mx-10" alt="" />
              <img src={img20} className="my-10" alt="" />
              <img src={img21} className="my-10 mx-10" alt="" />
              <img src={img22} className="my-10" alt="" />
              <img src={img23} className="my-10 mx-10" alt="" />
              <img src={img24} className="my-10" alt="" />
              <img src={img25} className="my-10 mx-10" alt="" />
              <img src={img26} className="my-10" alt="" />
              <img src={img27} className="my-10 mx-10" alt="" />
              <img src={img28} className="my-10" alt="" />
              <img src={img29} className="my-10 mx-10" alt="" />
              <img src={img30} className="my-10" alt="" />
              <img src={img31} className="my-10 mx-10" alt="" />
              <img src={img32} className="my-10" alt="" />
              <img src={img33} className="my-10 mx-10" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

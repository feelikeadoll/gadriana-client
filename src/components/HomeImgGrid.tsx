import img1 from "../assets/homepage grid/1.jpg";
import img2 from "../assets/homepage grid/2.jpg";
import img3 from "../assets/homepage grid/3.mp4";
import img4 from "../assets/homepage grid/4.png";
import img5 from "../assets/homepage grid/5.jpg";
import img6 from "../assets/homepage grid/6.jpg";
import img7 from "../assets/homepage grid/7.jpg";
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
import ImgThumbnail from "./ImgThumbnail";
import VideoThumbnail from "./VideoThumbnail";
import MediaModal from "./MediaModal";
import { useState } from "react";

function HomeImgGrid() {
  type MediaItem = {
    type: "image" | "video";
    src: string;
  };

  const mediaItems: MediaItem[] = [
    { type: "image", src: img1 },
    { type: "image", src: img2 },
    { type: "video", src: img3 },
    { type: "image", src: img4 },
    { type: "image", src: img5 },
    { type: "image", src: img6 },
    { type: "image", src: img7 },
    { type: "image", src: img8 },
    { type: "image", src: img9 },
    { type: "image", src: img10 },
    { type: "image", src: img11 },
    { type: "image", src: img12 },
    { type: "image", src: img13 },
    { type: "image", src: img14 },
    { type: "image", src: img15 },
    { type: "video", src: img16 },
    { type: "image", src: img17 },
    { type: "image", src: img18 },
    { type: "video", src: img19 },
    { type: "image", src: img20 },
    { type: "image", src: img21 },
    { type: "image", src: img22 },
    { type: "image", src: img23 },
    { type: "image", src: img24 },
    { type: "image", src: img25 },
    { type: "image", src: img26 },
    { type: "image", src: img27 },
    { type: "image", src: img28 },
    { type: "image", src: img29 },
    { type: "image", src: img30 },
    { type: "image", src: img31 },
    { type: "image", src: img32 },
    { type: "image", src: img33 },
  ];

  const [selectedMediaId, setSelectedMediaId] = useState<number | null>(null);

  const openModal = (id: number) => {
    setSelectedMediaId(id);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedMediaId(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="mx-4 flex justify-center">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-36">
        {mediaItems.map((item, index) => {
          const marginClass = index % 2 === 0 ? "my-10 -mx-5" : "my-10 mx-5";

          if (item.type === "image") {
            return (
              <ImgThumbnail
                key={index}
                id={index}
                marginClass={marginClass}
                mediaItems={mediaItems}
                openModal={openModal}
              />
            );
          } else if (item.type === "video") {
            return (
              <VideoThumbnail
                key={index}
                id={index}
                src={item.src}
                marginClass={marginClass}
              />
            );
          }
          return null;
        })}
      </div>
      {selectedMediaId !== null && (
        <MediaModal
          id={selectedMediaId}
          mediaItems={mediaItems}
          displayModal="block"
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default HomeImgGrid;

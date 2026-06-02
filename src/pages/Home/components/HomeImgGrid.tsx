import img1 from "../../../assets/homepage grid/1.jpg";
import img2 from "../../../assets/homepage grid/2.jpg";
import img3 from "../../../assets/homepage grid/3.mp4";
import img4 from "../../../assets/homepage grid/4.png";
import img5 from "../../../assets/homepage grid/5.jpg";
import img6 from "../../../assets/homepage grid/6.jpg";
import img7 from "../../../assets/homepage grid/7.jpg";
import img8 from "../../../assets/homepage grid/8.jpg";
import img9 from "../../../assets/homepage grid/9.jpg";
import img10 from "../../../assets/homepage grid/10.jpg";
import img11 from "../../../assets/homepage grid/11.jpg";
import img12 from "../../../assets/homepage grid/12.jpg";
import img13 from "../../../assets/homepage grid/13.jpg";
import img14 from "../../../assets/homepage grid/14.jpg";
import img15 from "../../../assets/homepage grid/15.jpg";
import img16 from "../../../assets/homepage grid/16.mp4";
import img17 from "../../../assets/homepage grid/17.jpg";
import img18 from "../../../assets/homepage grid/18.jpg";
import img19 from "../../../assets/homepage grid/19.mp4";
import img20 from "../../../assets/homepage grid/20.jpg";
import img21 from "../../../assets/homepage grid/21.jpg";
import img22 from "../../../assets/homepage grid/22.jpg";
import img23 from "../../../assets/homepage grid/23.jpg";
import img24 from "../../../assets/homepage grid/24.jpg";
import img25 from "../../../assets/homepage grid/25.jpg";
import img26 from "../../../assets/homepage grid/26.jpg";
import img27 from "../../../assets/homepage grid/27.jpg";
import img28 from "../../../assets/homepage grid/28.jpg";
import img29 from "../../../assets/homepage grid/29.jpg";
import img30 from "../../../assets/homepage grid/30.jpg";
import img31 from "../../../assets/homepage grid/31.jpg";
import img32 from "../../../assets/homepage grid/32.jpg";
import img33 from "../../../assets/homepage grid/33.jpg";
import ImgThumbnail from "./ImgThumbnail";
import VideoThumbnail from "./VideoThumbnail";
import MediaModal from "./MediaModal";
import { useEffect, useState } from "react";

type HomeImgGridProps = {
  displayedImgs: string;
};

export type MediaItem = {
  id: string;
  type: "image" | "video";
  src: string;
  category: string;
  campaign?: string;
  placeholderColor: string;
};

const initialMediaItems: MediaItem[] = [
  { id: "img1", type: "image", src: img1, category: 'still', placeholderColor: '#e5dfd9' },
  { id: "img2", type: "image", src: img2, category: 'hair&skin', placeholderColor: '#f3ece3' },
  { id: "img3", type: "video", src: img3, category: 'motion', placeholderColor: '#dcdcdc' },
  { id: "img4", type: "image", src: img4, category: 'still', placeholderColor: '#eae6df' },
  { id: "img5", type: "image", src: img5, category: 'texture', placeholderColor: '#e2dbd5' },
  { id: "img6", type: "image", src: img6, category: 'motion', placeholderColor: '#ebebeb' },
  { id: "img7", type: "image", src: img7, category: 'hair&skin', placeholderColor: '#f6f0ea' },
  { id: "img8", type: "image", src: img8, category: 'texture', placeholderColor: '#ded8d0' },
  { id: "img9", type: "image", src: img9, category: 'still', placeholderColor: '#e8e8e8' },
  { id: "img10", type: "image", src: img10, category: 'motion', placeholderColor: '#f0f0f0' },
  { id: "img11", type: "image", src: img11, category: 'hair&skin', placeholderColor: '#f1eae2' },
  { id: "img12", type: "image", src: img12, category: 'texture', placeholderColor: '#e6ded6' },
  { id: "img13", type: "image", src: img13, category: 'motion', placeholderColor: '#e0e0e0' },
  { id: "img14", type: "image", src: img14, category: 'hair&skin', placeholderColor: '#f4ece4' },
  { id: "img15", type: "image", src: img15, category: 'still', placeholderColor: '#e7e7e7' },
  { id: "img16", type: "video", src: img16, category: 'still', placeholderColor: '#d8d2cb' },
  { id: "img17", type: "image", src: img17, category: 'texture', placeholderColor: '#eade93' },
  { id: "img18", type: "image", src: img18, category: 'motion', placeholderColor: '#f2f2f2' },
  { id: "img19", type: "video", src: img19, category: 'hair&skin', placeholderColor: '#f5eee6' },
  { id: "img20", type: "image", src: img20, category: 'still', placeholderColor: '#ebdcd0' },
  { id: "img21", type: "image", src: img21, category: 'motion', placeholderColor: '#e4e4e4' },
  { id: "img22", type: "image", src: img22, category: 'texture', placeholderColor: '#dfd7ce' },
  { id: "img23", type: "image", src: img23, category: 'texture', placeholderColor: '#e1d9cf' },
  { id: "img24", type: "image", src: img24, category: 'hair&skin', placeholderColor: '#f7f1ea' },
  { id: "img25", type: "image", src: img25, category: 'motion', placeholderColor: '#e9e9e9' },
  { id: "img26", type: "image", src: img26, category: 'motion', placeholderColor: '#f4f4f4' },
  { id: "img27", type: "image", src: img27, category: 'still', placeholderColor: '#e3dad0' },
  { id: "img28", type: "image", src: img28, category: 'motion', placeholderColor: '#ededed' },
  { id: "img29", type: "image", src: img29, category: 'hair&skin', placeholderColor: '#f2eae1' },
  { id: "img30", type: "image", src: img30, category: 'texture', placeholderColor: '#e5ded5' },
  { id: "img31", type: "image", src: img31, category: 'hair&skin', placeholderColor: '#f9f3ec' },
  { id: "img32", type: "image", src: img32, category: 'still', placeholderColor: '#eaeaea' },
  { id: "img33", type: "image", src: img33, category: 'motion', placeholderColor: '#f5f5f5' },
];

const shuffleArray = (array: MediaItem[]): MediaItem[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const staticShuffledItems = shuffleArray(initialMediaItems);

function HomeImgGrid(props: HomeImgGridProps) {
  const [shuffledItems] = useState<MediaItem[]>(staticShuffledItems);
  const [showMediaModal, setShowMediaModal] = useState<null | boolean>(null);
  const [selectedMediaId, setSelectedMediaId] = useState<number | null>(null);
  const [screenSize, setScreenSize] = useState<boolean>(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    if (screenSize) {
      setShowMediaModal(true);
    } else {
      setShowMediaModal(null);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenSize]);

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
        {shuffledItems.map((item, index) => {
          const marginClass = index % 2 === 0 ? "my-10 -mx-5" : "my-10 mx-5";

          if (item.type === "image") {
            return (
              <ImgThumbnail
                key={item.id}
                id={index}
                item={item}
                marginClass={marginClass}
                openModal={openModal}
                showMediaModal={showMediaModal}
              />
            );
          } else if (item.type === "video") {
            return (
             <VideoThumbnail
                key={item.id}
                id={index}
                item={item}
                marginClass={marginClass}
                openModal={openModal}
                showMediaModal={showMediaModal}
              />
            );
          }
          return null;
        })}
      </div>
      {selectedMediaId !== null && showMediaModal === true && (
        <MediaModal
          id={selectedMediaId}
          mediaItems={shuffledItems}
          displayModal="block"
          openModal={openModal}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default HomeImgGrid;
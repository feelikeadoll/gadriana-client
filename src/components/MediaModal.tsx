import { useState } from "react";
import ImgLarge from "./ImgLarge";
import VideoLarge from "./VideoLarge";
// import VideoLarge from "./VideoLarge";

type MediaItem = {
  type: "image" | "video";
  src: string;
};

type MediaModalProps = {
  id: number;
  mediaItems: MediaItem[];
  displayModal: string;
  openModal: (id: number) => void;
  closeModal: () => void;
};

function MediaModal(props: MediaModalProps) {
  const [containerSize, setContainerSize] = useState<string>(
    "relative h-full contain"
  );
  const [mediaSize, setMediaSize] = useState<string>("h-full");
  const position: number = props.id;

  function previousImg() {
    if (position <= 0) {
      return;
    } else {
      props.closeModal();
      props.openModal(position - 1);
    }
  }

  function nextImg() {
    if (position >= 32) {
      return;
    } else {
      props.closeModal();
      props.openModal(position + 1);
    }
  }

  function handleZoom() {
    if (
      containerSize === "relative w-full h-full" &&
      mediaSize === "absolute"
    ) {
      setContainerSize("relative h-full contain");
      setMediaSize("h-full");
    } else {
      setContainerSize("relative w-full h-full");
      setMediaSize("absolute");
    }
  }

  return (
    <div
      className={`${props.displayModal} fixed top-0 left-0 h-screen w-screen z-50 p-8 bg-white`}
    >
      <div className="pb-8 flex justify-between">
        {props.mediaItems[props.id].type === "video" ? (
          <button></button>
        ) : (
          <button onClick={handleZoom}>
            <svg
              fill="#000000"
              width="36px"
              height="36px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="m14.91 13.09-3.68-3.21a4.86 4.86 0 0 0 .86-2.77A5.34 5.34 0 0 0 6.59 2a5.35 5.35 0 0 0-5.5 5.15 5.34 5.34 0 0 0 5.5 5.15 5.71 5.71 0 0 0 3.82-1.44L14.08 14zM6.59 11a4.09 4.09 0 0 1-4.25-3.9 4.09 4.09 0 0 1 4.25-3.9 4.09 4.09 0 0 1 4.25 3.9A4.08 4.08 0 0 1 6.59 11z"></path>
              </g>
            </svg>
          </button>
        )}
        <button onClick={props.closeModal} className="">
          <svg
            fill="#000000"
            width="36px"
            height="36px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="m14.41 3.27-.82-.94L8 7.17 2.41 2.33l-.82.94L7.05 8l-5.46 4.73.82.94L8 8.83l5.59 4.84.82-.94L8.95 8l5.46-4.73z"></path>
            </g>
          </svg>
        </button>
      </div>
      <div className="h-5/6 flex justify-between items-center">
        {position <= 0 ? (
          <button></button>
        ) : (
          <button onClick={previousImg}>
            <svg
              fill="#000000"
              width="36px"
              height="36px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="m5.82 8 5.66-5.56-.87-.89L4.9 7.09a1.18 1.18 0 0 0-.39.91 1.13 1.13 0 0 0 .39.85l5.7 5.7.89-.88z"></path>
              </g>
            </svg>
          </button>
        )}
        {props.mediaItems[props.id].type == "image" ? (
          <ImgLarge
            id={props.id}
            containerSize={containerSize}
            mediaSize={mediaSize}
            mediaItems={props.mediaItems}
            handleZoom={handleZoom}
          />
        ) : (
          <VideoLarge
            id={props.id}
            containerSize={containerSize}
            mediaSize={mediaSize}
            mediaItems={props.mediaItems}
          />
        )}

        {position >= 32 ? (
          <button></button>
        ) : (
          <button onClick={nextImg}>
            <svg
              fill="#000000"
              width="36px"
              height="36px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="m10.18 8.05-5.66 5.56.87.89 5.71-5.59a1.18 1.18 0 0 0 .39-.86 1.13 1.13 0 0 0-.39-.85L5.4 1.5l-.89.88z"></path>
              </g>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default MediaModal;

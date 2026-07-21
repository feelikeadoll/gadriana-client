import { useState, useRef } from "react";
import ImgLarge, { ImgLargeHandle } from "./ImgLarge";
import VideoLarge from "./VideoLarge";

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
  filteredItemsLength: number;
};

function MediaModal(props: MediaModalProps) {
  const [containerSize, setContainerSize] = useState<string>(
    "relative h-full contain",
  );
  const [mediaSize, setMediaSize] = useState<string>("h-full");
  const imgLargeRef = useRef<ImgLargeHandle>(null);
  const position: number = props.id;
  const totalItems: number = props.filteredItemsLength - 1;

  function previousImg() {
    if (position <= 0) return;
    props.closeModal();
    props.openModal(position - 1);
  }

  function nextImg() {
    if (position >= totalItems) return;
    props.closeModal();
    props.openModal(position + 1);
  }

  function handleZoom() {
    // On mobile, delegate to ImgLarge's internal zoom
    if (window.innerWidth < 768) {
      imgLargeRef.current?.toggleMobileZoom();
      return;
    }
    if (
      containerSize === "relative w-screen h-screen" &&
      mediaSize === "zoomed"
    ) {
      setContainerSize("relative h-full");
      setMediaSize("h-full");
    } else {
      setContainerSize("relative w-screen h-screen");
      setMediaSize("zoomed");
    }
  }

  return (
    <div
      className={`${props.displayModal} fixed top-0 left-0 h-screen w-screen z-50 p-8 bg-white`}>
      <div className="pb-12 flex justify-between">
        {props.mediaItems[props.id].type === "video" ? (
          <button></button>
        ) : (
          <button
            onClick={handleZoom}
            className="btn btn-circle btn-ghost fixed top-3 left-4">
            <svg
              width="35px"
              height="35px"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="8.5"
                cy="8.5"
                r="5.5"
                stroke="#000"
                strokeWidth="1.6"
              />
              <path
                d="M17 17L12.7 12.7"
                stroke="#000"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
        <button
          onClick={props.closeModal}
          className="btn btn-circle btn-ghost fixed top-3 right-4 z-40">
          <svg
            width="35px"
            height="35px"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 5L15 15"
              stroke="#000"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d="M15 5L5 15"
              stroke="#000"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <div className="h-5/6 flex justify-between items-center">
        {position <= 0 ? (
          <button></button>
        ) : (
          <button onClick={previousImg} className="hidden md:block">
            <svg
              width="35px"
              height="35px"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 5L7 10L12 15"
                stroke="#000"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
        {props.mediaItems[props.id].type == "image" ? (
          <ImgLarge
            ref={imgLargeRef}
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
        {position >= totalItems ? (
          <button></button>
        ) : (
          <button onClick={nextImg} className="hidden md:block">
            <svg
              width="35px"
              height="35px"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 5L13 10L8 15"
                stroke="#000"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default MediaModal;

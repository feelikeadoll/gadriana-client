import { useState } from "react";
import MediaModal from "./MediaModal";

type VideoThumbnailProps = {
  id: number;
  src: string;
  marginClass: string;
};

function VideoThumbnail(props: VideoThumbnailProps) {
  const [displayModal, setDisplayModal] = useState<string>("hidden");

  const openModal = (): void => {
    setDisplayModal("block");
    document.body.style.overflow = "hidden";
  };
  const closeModal = (): void => {
    setDisplayModal("hidden");
    document.body.style.overflow = "auto";
  };

  return (
    <div>
      <MediaModal displayModal={displayModal} closeModal={closeModal} />
      <video
        className={`video-element ${props.marginClass}`}
        src={props.src}
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        controls={false}
        onClick={openModal}
      />
    </div>
  );
}

export default VideoThumbnail;

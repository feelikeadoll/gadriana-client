import { useState } from "react";

type VideoThumbnailProps = {
  id: number;
  src: string;
  marginClass: string;
};

function VideoThumbnail(props: VideoThumbnailProps) {
  const [displayModal, setDisplayModal] = useState<string>("hidden");

  const openModal = (): void => {
    setDisplayModal("block");
  };
  const closeModal = (): void => {
    setDisplayModal("hidden");
  };
  return (
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
  );
}

export default VideoThumbnail;

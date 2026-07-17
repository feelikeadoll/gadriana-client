import { useState } from "react";

type MediaItem = {
  id: string;
  type: "image" | "video";
  src: string;
  category: string[];
  campaign?: string;
  placeholderColor: string;
};

type VideoThumbnailProps = {
  id: number;
  item: MediaItem;
  openModal: (id: number) => void;
  showMediaModal: boolean | null;
  style?: React.CSSProperties;
};

function VideoThumbnail(props: VideoThumbnailProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="relative w-full h-full overflow-hidden transition-all duration-300"
      style={{
        backgroundColor: props.item.placeholderColor,
        ...props.style,
      }}>
      <video
        src={props.item.src}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        onLoadedData={() => setIsLoaded(true)}
        onClick={
          props.showMediaModal ? () => props.openModal(props.id) : undefined
        }
        className={`video-element absolute inset-0 w-full h-full object-cover block transition-opacity duration-500 cursor-pointer ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default VideoThumbnail;

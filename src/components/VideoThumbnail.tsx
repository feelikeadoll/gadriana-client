type MediaItem = {
  type: "image" | "video";
  src: string;
};

type VideoThumbnailProps = {
  id: number;
  marginClass: string;
  mediaItems: MediaItem[];
  openModal: (id: number) => void;
};

function VideoThumbnail(props: VideoThumbnailProps) {
  return (
    <div>
      <video
        className={`video-element ${props.marginClass}`}
        src={props.mediaItems[props.id].src}
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        controls={false}
        onClick={() => props.openModal(props.id)}
      />
    </div>
  );
}

export default VideoThumbnail;

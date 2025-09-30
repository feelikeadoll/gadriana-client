type MediaItem = {
  type: "image" | "video";
  src: string;
};

type VideoLargeProps = {
  id: number;
  containerSize: string;
  mediaSize: string;
  mediaItems: MediaItem[];
};

function VideoLarge(props: VideoLargeProps) {
  return (
    <div className={props.containerSize}>
      <video
        className={`video-element ${props.mediaSize}`}
        src={props.mediaItems[props.id].src}
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        controls={false}
      />
    </div>
  );
}

export default VideoLarge;

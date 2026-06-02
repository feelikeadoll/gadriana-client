import { useState } from "react";

type MediaItem = {
  id: string;
  type: "image" | "video";
  src: string;
  category: string;
  campaign?: string;
  placeholderColor: string; 
};

type VideoThumbnailProps = {
  id: number;
  item: MediaItem; // Recibimos el item actual directamente
  marginClass: string;
  openModal: (id: number) => void;
  showMediaModal: boolean | null;
};

function VideoThumbnail(props: VideoThumbnailProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative w-full overflow-hidden transition-all duration-300 ${props.marginClass}`}
      style={{
        backgroundColor: props.item.placeholderColor,
        aspectRatio: "3/4", // Mismo ratio que uses en las imágenes para mantener la coherencia del grid
      }}
    >
      <video
        src={props.item.src}
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        controls={false}
        onLoadedData={() => setIsLoaded(true)} // CLAVE: Se dispara cuando el vídeo está listo para reproducirse
        onClick={props.showMediaModal ? () => props.openModal(props.id) : undefined}
        className={`video-element w-full h-full object-cover block transition-opacity duration-500 cursor-pointer ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default VideoThumbnail;
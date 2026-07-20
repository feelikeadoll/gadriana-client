import { useState } from "react";

type MediaItem = {
  id: string;
  type: "image" | "video";
  src: string;
  category: string[];
  brand: string;
  placeholderColor: string;
  description: string;
};

type ImgThumbnailProps = {
  id: number;
  item: MediaItem;
  openModal: (id: number) => void;
  showMediaModal: boolean | null;
  style?: React.CSSProperties;
};

function ImgThumbnail(props: ImgThumbnailProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="relative w-full h-full overflow-hidden transition-all duration-300"
      style={{
        backgroundColor: props.item.placeholderColor,
        ...props.style,
      }}>
      <img
        src={props.item.src}
        alt={
          props.item.brand
            ? `${props.item.description} — ${props.item.brand} beauty product photography`
            : `${props.item.description} — beauty product photography, Gadriana Studio`
        }
        onLoad={() => setIsLoaded(true)}
        onClick={
          props.showMediaModal ? () => props.openModal(props.id) : undefined
        }
        className={`absolute inset-0 w-full h-full object-cover block transition-opacity duration-500 cursor-pointer ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default ImgThumbnail;

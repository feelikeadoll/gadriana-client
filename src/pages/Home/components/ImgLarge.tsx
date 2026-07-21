import React, { useState, useCallback } from "react";

type MediaItem = {
  type: "image" | "video";
  src: string;
};

type ImgLargeProps = {
  id: number;
  containerSize: string;
  mediaSize: string;
  mediaItems: MediaItem[];
  handleZoom: () => void;
};

function ImgLarge(props: ImgLargeProps) {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isLandscape, setIsLandscape] = useState(false);

  const isZoomed = props.mediaSize === "zoomed";
  const zoomedSize = isLandscape ? "absolute w-2/3" : "absolute w-1/2";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  const imgRef = useCallback(
    (img: HTMLImageElement | null) => {
      if (!img) return;
      const check = () => setIsLandscape(img.naturalWidth > img.naturalHeight);
      if (img.complete) check();
      else img.addEventListener("load", check);
    },
    [props.id],
  );

  return (
    <div
      className={props.containerSize}
      onMouseMove={handleMouseMove}
      style={{ cursor: isZoomed ? "move" : "zoom-in" }}>
      <img
        ref={imgRef}
        src={props.mediaItems[props.id].src}
        alt="Gadriana Creative Studio - Beauty product photography"
        onClick={() => {
          if (window.innerWidth >= 768) props.handleZoom();
        }}
        className={isZoomed ? zoomedSize : "h-full"}
        style={
          isZoomed
            ? {
                transform: `translate(-${position.x}%, -${position.y}%) scale(1.5)`,
                top: "50%",
                left: "50%",
                transformOrigin: "center center",
              }
            : {
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }
        }
      />
    </div>
  );
}

export default ImgLarge;

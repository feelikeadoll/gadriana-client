import React, { useState } from "react";

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (props.mediaSize !== "h-full") {
      const { left, top, width, height } =
        e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setPosition({ x, y });
    }
  };

  return (
    <div
      className={props.containerSize}
      onMouseMove={handleMouseMove}
      style={{ cursor: props.mediaSize !== "h-full" ? "move" : "zoom-out" }}
    >
      <img
        src={props.mediaItems[props.id].src}
        alt="Gadriana Creative Studio - Beauty product photography"
        className={props.mediaSize}
        style={{
          transform:
            props.mediaSize !== "h-full"
              ? `translate(-${position.x}%, -${position.y}%) scale(2)`
              : "none",
          top: "50%",
          left: "50%",
          transformOrigin: "center center",
        }}
        onClick={props.handleZoom}
      />
    </div>
  );
}

export default ImgLarge;

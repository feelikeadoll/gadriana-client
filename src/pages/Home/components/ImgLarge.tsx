import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";

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

export type ImgLargeHandle = {
  toggleMobileZoom: () => void;
};

const ImgLarge = forwardRef<ImgLargeHandle, ImgLargeProps>((props, ref) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isLandscape, setIsLandscape] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [mobileZoomed, setMobileZoomed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    toggleMobileZoom: () => {
      setMobileZoomed((prev) => {
        if (prev) setTranslate({ x: 0, y: 0 });
        return !prev;
      });
    },
  }));

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isZoomed = isMobile ? mobileZoomed : props.mediaSize === "zoomed";
  const zoomedSize = isLandscape ? "absolute w-2/3" : "absolute w-1/2";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed || isMobile) return;
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !isMobile) return;
    const handleTouchMove = (e: TouchEvent) => {
      if (!mobileZoomed) return;
      e.preventDefault();
      const touch = e.touches[0];
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = ((touch.clientX - left) / width - 0.5) * -100;
      const y = ((touch.clientY - top) / height - 0.5) * -100;
      setTranslate({ x, y });
    };
    el.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => el.removeEventListener("touchmove", handleTouchMove);
  }, [isMobile, mobileZoomed]);

  const handleClick = () => {
    if (isMobile) {
      if (mobileZoomed) setTranslate({ x: 0, y: 0 });
      setMobileZoomed((prev) => !prev);
    } else {
      props.handleZoom();
    }
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
      ref={containerRef}
      className={`${isMobile ? "relative h-full w-full overflow-hidden" : props.containerSize}`}
      onMouseMove={handleMouseMove}
      style={{ cursor: isZoomed ? "move" : "zoom-in" }}>
      <img
        ref={imgRef}
        src={props.mediaItems[props.id].src}
        alt="Gadriana Creative Studio - Beauty product photography"
        onClick={handleClick}
        className={isMobile ? undefined : isZoomed ? zoomedSize : "h-full"}
        style={
          isMobile
            ? isZoomed
              ? {
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  width: isLandscape ? "66vw" : "50vw",
                  height: "auto",
                  transform: `translate(calc(-50% + ${translate.x}vw), calc(-50% + ${translate.y}vw)) scale(2)`,
                  transformOrigin: "center center",
                  cursor: "move",
                  zIndex: 60,
                }
              : {
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  cursor: "zoom-in",
                  position: "relative",
                }
            : {
                transform: isZoomed
                  ? `translate(-${position.x}%, -${position.y}%) scale(1.5)`
                  : "none",
                top: "50%",
                left: "50%",
                transformOrigin: "center center",
              }
        }
      />
    </div>
  );
});

export default ImgLarge;

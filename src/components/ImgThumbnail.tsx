import { useState } from "react";
import MediaModal from "./MediaModal";

type ImgThumbnailProps = {
  id: number;
  src: string;
  marginClass: string;
};

function ImgThumbnail(props: ImgThumbnailProps) {
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
      <img
        src={props.src}
        className={props.marginClass}
        alt="Gadriana Creative Studio - Beauty product photography"
        onClick={openModal}
      />
    </div>
  );
}

export default ImgThumbnail;

import { useState } from "react";

type ImgThumbnailProps = {
  id: number;
  src: string;
  marginClass: string;
};

function ImgThumbnail(props: ImgThumbnailProps) {
  const [displayModal, setDisplayModal] = useState<string>("hidden");

  const openModal = (): void => {
    setDisplayModal("block");
  };
  const closeModal = (): void => {
    setDisplayModal("hidden");
  };
  return (
    <img
      src={props.src}
      className={props.marginClass}
      alt="Gadriana Creative Studio - Beauty product photography"
      onClick={openModal}
    />
  );
}

export default ImgThumbnail;

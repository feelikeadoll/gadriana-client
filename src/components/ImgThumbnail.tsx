type MediaItem = {
  type: "image" | "video";
  src: string;
};

type ImgThumbnailProps = {
  id: number;
  marginClass: string;
  mediaItems: MediaItem[];
  openModal: (id: number) => void;
  showMediaModal: boolean | null;
};

function ImgThumbnail(props: ImgThumbnailProps) {
  return (
    <div>
      {!props.showMediaModal ? (
        <img
          src={props.mediaItems[props.id].src}
          className={props.marginClass}
          alt="Gadriana Creative Studio - Beauty product photography"
        />
      ) : (
        <img
          src={props.mediaItems[props.id].src}
          className={props.marginClass}
          alt="Gadriana Creative Studio - Beauty product photography"
          onClick={() => props.openModal(props.id)}
        />
      )}
    </div>
  );
}

export default ImgThumbnail;

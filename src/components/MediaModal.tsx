type MediaModalProps = {
  displayModal: string;
  closeModal: () => void;
};

function MediaModal(props: MediaModalProps) {
  return (
    <div
      className={`${props.displayModal} fixed top-0 left-0 h-screen w-screen z-50 bg-white`}
    >
      <h1 className="text-6xl">This is MediaModal</h1>

      <button onClick={props.closeModal} className="">
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </button>
    </div>
  );
}

export default MediaModal;

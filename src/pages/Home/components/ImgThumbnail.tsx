import { useState } from "react";

// Actualizamos el tipo para que acepte el objeto item completo con su color
type MediaItem = {
  id: string;
  type: "image" | "video";
  src: string;
  category: string;
  campaign?: string;
  placeholderColor: string; 
};

type ImgThumbnailProps = {
  id: number;
  item: MediaItem; // <-- Recibimos el item actual directamente
  marginClass: string;
  openModal: (id: number) => void;
  showMediaModal: boolean | null;
};

function ImgThumbnail(props: ImgThumbnailProps) {
  // Estado local para saber cuándo el navegador ha decodificado la imagen
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative w-full overflow-hidden transition-all duration-300 ${props.marginClass}`}
      style={{
        backgroundColor: props.item.placeholderColor,
        aspectRatio: "3/4", // Fuerza un recuadro inicial. Ajústalo al ratio de tus fotos (ej: 1/1, 4/5)
      }}
    >
      <img
        src={props.item.src}
        alt={`Shot #${props.id + 1}: ${props.item.category} product photography for ${props.item.campaign || 'beauty brand'} - Gadriana Creative Studio Barcelona Spain Europe Union`}
        onLoad={() => setIsLoaded(true)} // Al cargar, activa el fade-in
        onClick={props.showMediaModal ? () => props.openModal(props.id) : undefined}
        className={`w-full h-full object-cover block transition-opacity duration-500 cursor-pointer ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default ImgThumbnail;
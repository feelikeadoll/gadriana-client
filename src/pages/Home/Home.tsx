import { useState } from "react";
import HomeImgGrid from "./components/HomeImgGrid";

function Home() {
  const [displayedImgs, setDisplayedImgs] = useState<string>("all");

  function filterImgGrid(theme: string): void {
    setDisplayedImgs(theme);
  }
  
  return (
    <div className="w-full">
      <div className="px-8 flex justify-between items-center mx-auto">
        <div className="flex flex-col items-center mb-32 w-full">
          <div className="mt-10 w-full h-8 flex justify-end items-center gap-x-4 gap-y-0 tracking-wide">
            <button 
              onClick={() => filterImgGrid("all")}
              className={displayedImgs === "all" ? "font-semibold" : "font-normal"}
            >
              ALL
            </button>
            <div> | </div>
            <button 
              onClick={() => filterImgGrid("still")}
              className={displayedImgs === "still" ? "font-semibold" : "font-normal"}
            >
              STILL LIFE
            </button>
            <div> | </div>
            <button 
              onClick={() => filterImgGrid("texture")}
              className={displayedImgs === "texture" ? "font-semibold" : "font-normal"}
            >
              TEXTURE
            </button>
            <div> | </div>
            <button 
              onClick={() => filterImgGrid("hair&skin")}
              className={displayedImgs === "hair&skin" ? "font-semibold" : "font-normal"}
            >
              HAIR & SKIN
            </button>
            <div> | </div>
            <button 
              onClick={() => filterImgGrid("motion")}
              className={displayedImgs === "motion" ? "font-semibold" : "font-normal"}
            >
              MOTION
            </button>
          </div>

          {/* Menú de Campañas (Estático por ahora) */}
          <div className="w-full h-8 mb-12 flex justify-end items-center gap-x-4 gap-y-0 tracking-wide">
            <button className="font-normal">LOVING TAN</button>
            <div> | </div>
            <button className="font-normal">DCYPHER</button>
            <div> | </div>
            <button className="font-normal">COCO & EVE</button>
          </div>

          {/* Grid de imágenes */}
          <HomeImgGrid displayedImgs={displayedImgs}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
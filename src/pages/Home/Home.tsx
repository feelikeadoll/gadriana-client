import { useState } from "react";
import HomeImgGrid from "./components/HomeImgGrid";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");

  return (
    <div className="w-full">
      <div className="px-8 flex justify-between items-center mx-auto">
        <div className="flex flex-col items-center mb-32 w-full">
          <div className="mt-10 w-full h-8 flex justify-end items-center gap-x-4 gap-y-0 tracking-wide">
            <button 
              onClick={() => setSelectedCategory(prev => prev === "still" ? "all" : "still")}
              className={selectedCategory === "still" ? "font-semibold" : "font-normal"}
            >
              STILL LIFE
            </button>
            <div> | </div>
            <button 
              onClick={() => setSelectedCategory(prev => prev === "texture" ? "all" : "texture")}
              className={selectedCategory === "texture" ? "font-semibold" : "font-normal"}
            >
              TEXTURE
            </button>
            <div> | </div>
            <button 
              onClick={() => setSelectedCategory(prev => prev === "hair&skin" ? "all" : "hair&skin")}
              className={selectedCategory === "hair&skin" ? "font-semibold" : "font-normal"}
            >
              HAIR & SKIN
            </button>
            <div> | </div>
            <button 
              onClick={() => setSelectedCategory(prev => prev === "motion" ? "all" : "motion")}
              className={selectedCategory === "motion" ? "font-semibold" : "font-normal"}
            >
              MOTION
            </button>
          </div>

          <div className="w-full h-8 mb-12 flex justify-end items-center gap-x-4 gap-y-0 tracking-wide">
             <button 
              onClick={() => setSelectedBrand(prev => prev === "lovingTan" ? "all" : "lovingTan")}
              className={selectedBrand === "lovingTan" ? "font-semibold" : "font-normal"}
            >
              LOVING TAN
            </button>
            <div> | </div>
            <button 
              onClick={() => setSelectedBrand(prev => prev === "dcypher" ? "all" : "dcypher")}
              className={selectedBrand === "dcypher" ? "font-semibold" : "font-normal"}
            >
              DCYPHER
            </button>
            <div> | </div>
            <button 
              onClick={() => setSelectedBrand(prev => prev === "cocoEve" ? "all" : "cocoEve")}
              className={selectedBrand === "cocoEve" ? "font-semibold" : "font-normal"}
            >
              COCO & EVE
            </button>
          </div>

          <HomeImgGrid selectedCategory={selectedCategory} selectedBrand={selectedBrand}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
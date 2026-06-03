import { useState } from "react";
import HomeImgGrid from "./components/HomeImgGrid";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");

  return (
    <div className="w-full">
      <div className="px-8 flex justify-between items-center mx-auto">
        <div className="flex flex-col items-center mb-32 w-full">
          <div className="mt-4 w-full h-8 flex justify-end items-center gap-x-4 gap-y-0 tracking-wide">
            <button 
              onClick={() => setSelectedCategory(prev => prev === "Still" ? "all" : "Still")}
              className={selectedCategory === "Still" ? "font-semibold" : "font-normal"}
            >
              Still LIFE
            </button>
            <div> | </div>
            <button 
              onClick={() => setSelectedCategory(prev => prev === "Texture" ? "all" : "Texture")}
              className={selectedCategory === "Texture" ? "font-semibold" : "font-normal"}
            >
              Texture
            </button>
            <div> | </div>
            <button 
              onClick={() => setSelectedCategory(prev => prev === "Hair & Skin" ? "all" : "Hair & Skin")}
              className={selectedCategory === "Hair & Skin" ? "font-semibold" : "font-normal"}
            >
              HAIR & SKIN
            </button>
            <div> | </div>
            <button 
              onClick={() => setSelectedCategory(prev => prev === "Motion" ? "all" : "Motion")}
              className={selectedCategory === "Motion" ? "font-semibold" : "font-normal"}
            >
              Motion
            </button>
          </div>

          <div className="w-full h-8 mb-12 flex justify-end items-center gap-x-4 gap-y-0 tracking-wide">
             <button 
              onClick={() => setSelectedBrand(prev => prev === "Loving Tan" ? "all" : "Loving Tan")}
              className={selectedBrand === "Loving Tan" ? "font-semibold" : "font-normal"}
            >
              LOVING TAN
            </button>
            <div> | </div>
            <button 
              onClick={() => setSelectedBrand(prev => prev === "Dcypher" ? "all" : "Dcypher")}
              className={selectedBrand === "Dcypher" ? "font-semibold" : "font-normal"}
            >
              DCYPHER
            </button>
            <div> | </div>
            <button 
              onClick={() => setSelectedBrand(prev => prev === "Coco & Eve" ? "all" : "Coco & Eve")}
              className={selectedBrand === "Coco & Eve" ? "font-semibold" : "font-normal"}
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
import { useState } from "react";
import HomeImgGrid from "./components/HomeImgGrid";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");

  const handleCategoryClick = (category: string) => {
    setSelectedBrand("all");
    setSelectedCategory((prev) => (prev === category ? "all" : category));
  };

  const handleBrandClick = (brand: string) => {
    setSelectedCategory("all");
    setSelectedBrand((prev) => (prev === brand ? "all" : brand));
  };

  return (
    <div className="w-full">
      <div className="px-6 md:px-8 flex justify-between items-center mx-auto">
        <div className="flex flex-col items-center mb-32 w-full text-sm">
          <div className="mt-4 w-full flex flex-wrap justify-center md:justify-end items-center gap-x-3 gap-y-1 tracking-wide mb-1">
            <button
              onClick={() => handleCategoryClick("Still")}
              className={
                selectedCategory === "Still" ? "font-semibold" : "font-normal"
              }>
              STILL LIFE
            </button>
            <div>|</div>
            <button
              onClick={() => handleCategoryClick("Texture")}
              className={
                selectedCategory === "Texture" ? "font-semibold" : "font-normal"
              }>
              TEXTURE
            </button>
            <div>|</div>
            <button
              onClick={() => handleCategoryClick("Hair & Skin")}
              className={
                selectedCategory === "Hair & Skin"
                  ? "font-semibold"
                  : "font-normal"
              }>
              HAIR & SKIN
            </button>
            <div>|</div>
            <button
              onClick={() => handleCategoryClick("Motion")}
              className={
                selectedCategory === "Motion" ? "font-semibold" : "font-normal"
              }>
              MOTION
            </button>
          </div>

          <div className="m-2 md:mt-0 w-full flex flex-wrap justify-center md:justify-end items-center gap-x-3 gap-y-1 tracking-wide md:mb-12">
            <button
              onClick={() => handleBrandClick("Loving Tan")}
              className={
                selectedBrand === "Loving Tan" ? "font-semibold" : "font-normal"
              }>
              LOVING TAN
            </button>
            <div>|</div>
            <button
              onClick={() => handleBrandClick("Dcypher")}
              className={
                selectedBrand === "Dcypher" ? "font-semibold" : "font-normal"
              }>
              DCYPHER
            </button>
            <div>|</div>
            <button
              onClick={() => handleBrandClick("Coco & Eve")}
              className={
                selectedBrand === "Coco & Eve" ? "font-semibold" : "font-normal"
              }>
              COCO & EVE
            </button>
          </div>

          <HomeImgGrid
            selectedCategory={selectedCategory}
            selectedBrand={selectedBrand}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

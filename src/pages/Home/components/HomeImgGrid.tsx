import ImgThumbnail from "./ImgThumbnail";
import VideoThumbnail from "./VideoThumbnail";
import MediaModal from "./MediaModal";
import { useEffect, useState } from "react";
import metadata from "../../../assets/homepage grid/grid-metadata.json";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type HomeImgGridProps = {
  selectedCategory: string;
  selectedBrand: string;
};

export type MediaItem = {
  id: string;
  type: "image" | "video";
  src: string;
  category: string;
  brand: string;
  placeholderColor: string;
};

// ---------------------------------------------------------------------------
// Build media items dynamically
// ---------------------------------------------------------------------------

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov"];

// Grab every file in the assets folder at build time
const mediaModules = import.meta.glob("../../../assets/homepage grid/*", {
  eager: true,
}) as Record<string, { default: string }>;

// Build a lookup: filename → resolved URL
const resolvedByFilename: Record<string, string> = {};
for (const [path, mod] of Object.entries(mediaModules)) {
  const filename = path.split("/").pop()!;
  resolvedByFilename[filename] = mod.default;
}

// Build the final array using metadata as the source of truth for ordering and props
const initialMediaItems: MediaItem[] = metadata
  .filter((entry) => resolvedByFilename[entry.filename] !== undefined) // skip if file is missing
  .map((entry) => {
    const ext = "." + entry.filename.split(".").pop()!.toLowerCase();
    return {
      id: entry.filename,
      type: VIDEO_EXTENSIONS.includes(ext) ? "video" : "image",
      src: resolvedByFilename[entry.filename],
      category: entry.category,
      brand: entry.brand,
      placeholderColor: entry.placeholderColor,
    };
  });

// ---------------------------------------------------------------------------
// Shuffle (stable across re-renders — run once at module level)
// ---------------------------------------------------------------------------

const shuffleArray = (array: MediaItem[]): MediaItem[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const staticShuffledItems = shuffleArray(initialMediaItems);

// ---------------------------------------------------------------------------
// Grid layout
// ---------------------------------------------------------------------------

type GridSlot = {
  colStart: number;
  colEnd: number;
  rowStart: number;
  rowEnd: number;
  isLarge: boolean;
};

// One pattern cycle = 9 rows, 35 slots
// A: 1 row  (5 items)
// B: 3 rows (1 large 2×3 + 9 small)
// C: 2 rows (10 small)
// D: 3 rows (9 small + 1 large 2×3)
const PATTERN_ROWS = 9;
const PATTERN_SLOTS = 35;

const buildPatternSlots = (): GridSlot[] => {
  const slots: GridSlot[] = [];

  // BLOCK A: row 1, 5 equal cells
  for (let col = 1; col <= 5; col++) {
    slots.push({
      colStart: col,
      colEnd: col + 1,
      rowStart: 1,
      rowEnd: 2,
      isLarge: false,
    });
  }

  // BLOCK B: rows 2-4 — big left (2×3) + 3×3 small right
  slots.push({ colStart: 1, colEnd: 3, rowStart: 2, rowEnd: 5, isLarge: true });
  for (let row = 2; row <= 4; row++) {
    for (let col = 3; col <= 5; col++) {
      slots.push({
        colStart: col,
        colEnd: col + 1,
        rowStart: row,
        rowEnd: row + 1,
        isLarge: false,
      });
    }
  }

  // BLOCK C: rows 5-6, 5×2 equal cells
  for (let row = 5; row <= 6; row++) {
    for (let col = 1; col <= 5; col++) {
      slots.push({
        colStart: col,
        colEnd: col + 1,
        rowStart: row,
        rowEnd: row + 1,
        isLarge: false,
      });
    }
  }

  // BLOCK D: rows 7-9 — 3×3 small left + big right (2×3)
  for (let row = 7; row <= 9; row++) {
    for (let col = 1; col <= 3; col++) {
      slots.push({
        colStart: col,
        colEnd: col + 1,
        rowStart: row,
        rowEnd: row + 1,
        isLarge: false,
      });
    }
  }
  slots.push({
    colStart: 4,
    colEnd: 6,
    rowStart: 7,
    rowEnd: 10,
    isLarge: true,
  });

  return slots;
};

const patternSlots = buildPatternSlots();

const getSlot = (index: number): GridSlot => {
  const cycle = Math.floor(index / PATTERN_SLOTS);
  const posInPattern = index % PATTERN_SLOTS;
  const base = patternSlots[posInPattern];
  const rowOffset = cycle * PATTERN_ROWS;
  return {
    ...base,
    rowStart: base.rowStart + rowOffset,
    rowEnd: base.rowEnd + rowOffset,
  };
};

// ---------------------------------------------------------------------------
// Shared thumbnail wrapper
// ---------------------------------------------------------------------------

type ThumbnailProps = {
  id: number;
  item: MediaItem;
  openModal: (id: number) => void;
  showMediaModal: boolean | null;
  style?: React.CSSProperties;
};

function GridThumbnail({
  id,
  item,
  openModal,
  showMediaModal,
  style,
}: ThumbnailProps) {
  if (item.type === "video") {
    return (
      <VideoThumbnail
        id={id}
        item={item}
        openModal={openModal}
        showMediaModal={showMediaModal}
        style={style}
      />
    );
  }
  return (
    <ImgThumbnail
      id={id}
      item={item}
      openModal={openModal}
      showMediaModal={showMediaModal}
      style={style}
    />
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

function HomeImgGrid(props: HomeImgGridProps) {
  const [shuffledItems] = useState<MediaItem[]>(staticShuffledItems);
  const [showMediaModal, setShowMediaModal] = useState<null | boolean>(null);
  const [selectedMediaId, setSelectedMediaId] = useState<number | null>(null);
  const [screenSize, setScreenSize] = useState<boolean>(
    window.innerWidth >= 768,
  );
  const [layoutMode, setLayoutMode] = useState<"grid" | "editorial">(
    "editorial",
  );

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    if (screenSize) setShowMediaModal(true);
    else setShowMediaModal(null);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize]);

  const openModal = (id: number) => {
    setSelectedMediaId(id);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedMediaId(null);
    document.body.style.overflow = "auto";
  };

  const filteredItems = shuffledItems.filter((item) => {
    const matchesCategory =
      props.selectedCategory === "all" ||
      item.category === props.selectedCategory;
    const matchesCampaign =
      props.selectedBrand === "all" || item.brand === props.selectedBrand;
    return matchesCategory && matchesCampaign;
  });

  const iconActive = "#000";
  const iconInactive = "#555";

  // Mobile: single-column list
  if (!screenSize) {
    return (
      <div className="mx-4 flex flex-col gap-2 w-full">
        {filteredItems.map((item, index) => (
          <GridThumbnail
            key={`${item.id}-${props.selectedCategory}-${props.selectedBrand}`}
            id={index}
            item={item}
            openModal={openModal}
            showMediaModal={showMediaModal}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="mx-4 w-full">
      {/* Layout toggle buttons */}
      <div className="hidden md:flex justify-end mb-2 gap-1">
        {/* 3-line icon → uniform 3-col grid */}
        <button
          onClick={() => setLayoutMode("grid")}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
          aria-label="Grid layout">
          <svg
            width="28px"
            height="28px"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 4.5C2 4.22386 2.22386 4 2.5 4H17.5C17.7761 4 18 4.22386 18 4.5C18 4.77614 17.7761 5 17.5 5H2.5C2.22386 5 2 4.77614 2 4.5Z"
              fill={layoutMode === "grid" ? iconActive : iconInactive}
            />
            <path
              d="M2 9.5C2 9.22386 2.22386 9 2.5 9H17.5C17.7761 9 18 9.22386 18 9.5C18 9.77614 17.7761 10 17.5 10H2.5C2.22386 10 2 9.77614 2 9.5Z"
              fill={layoutMode === "grid" ? iconActive : iconInactive}
            />
            <path
              d="M2.5 14C2.22386 14 2 14.2239 2 14.5C2 14.7761 2.22386 15 2.5 15H17.5C17.7761 15 18 14.7761 18 14.5C18 14.2239 17.7761 14 17.5 14H2.5Z"
              fill={layoutMode === "grid" ? iconActive : iconInactive}
            />
          </svg>
        </button>

        {/* 5-line icon → editorial layout (default) */}
        <button
          onClick={() => setLayoutMode("editorial")}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
          aria-label="Editorial layout">
          <svg
            width="28px"
            height="28px"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 2C2.77614 2 3 2.22386 3 2.5V17.5C3 17.7761 2.77614 18 2.5 18C2.22386 18 2 17.7761 2 17.5V2.5C2 2.22386 2.22386 2 2.5 2Z"
              fill={layoutMode === "editorial" ? iconActive : iconInactive}
            />
            <path
              d="M6.25 2C6.52614 2 6.75 2.22386 6.75 2.5V17.5C6.75 17.7761 6.52614 18 6.25 18C5.97386 18 5.75 17.7761 5.75 17.5V2.5C5.75 2.22386 5.97386 2 6.25 2Z"
              fill={layoutMode === "editorial" ? iconActive : iconInactive}
            />
            <path
              d="M10 2C10.2761 2 10.5 2.22386 10.5 2.5V17.5C10.5 17.7761 10.2761 18 10 18C9.72386 18 9.5 17.7761 9.5 17.5V2.5C9.5 2.22386 9.72386 2 10 2Z"
              fill={layoutMode === "editorial" ? iconActive : iconInactive}
            />
            <path
              d="M13.75 2C14.0261 2 14.25 2.22386 14.25 2.5V17.5C14.25 17.7761 14.0261 18 13.75 18C13.4739 18 13.25 17.7761 13.25 17.5V2.5C13.25 2.22386 13.4739 2 13.75 2Z"
              fill={layoutMode === "editorial" ? iconActive : iconInactive}
            />
            <path
              d="M17.5 2C17.7761 2 18 2.22386 18 2.5V17.5C18 17.7761 17.7761 18 17.5 18C17.2239 18 17 17.7761 17 17.5V2.5C17 2.22386 17.2239 2 17.5 2Z"
              fill={layoutMode === "editorial" ? iconActive : iconInactive}
            />
          </svg>
        </button>
      </div>

      {/* GRID MODE: uniform 3 columns */}
      {layoutMode === "grid" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "8px",
          }}>
          {filteredItems.map((item, index) => (
            <GridThumbnail
              key={`${item.id}-${props.selectedCategory}-${props.selectedBrand}`}
              id={index}
              item={item}
              openModal={openModal}
              showMediaModal={showMediaModal}
            />
          ))}
        </div>
      )}

      {/* EDITORIAL MODE: pattern with large items */}
      {layoutMode === "editorial" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "8px",
          }}>
          {filteredItems.map((item, index) => {
            const slot = getSlot(index);
            const itemStyle: React.CSSProperties = {
              gridColumn: `${slot.colStart} / ${slot.colEnd}`,
              gridRow: `${slot.rowStart} / ${slot.rowEnd}`,
              margin: 0,
            };
            return (
              <div
                key={`${item.id}-${props.selectedCategory}-${props.selectedBrand}`}
                style={itemStyle}>
                <GridThumbnail
                  id={index}
                  item={item}
                  openModal={openModal}
                  showMediaModal={showMediaModal}
                  style={
                    slot.isLarge
                      ? { aspectRatio: "unset", height: "100%" }
                      : undefined
                  }
                />
              </div>
            );
          })}
        </div>
      )}

      {selectedMediaId !== null && showMediaModal === true && (
        <MediaModal
          id={selectedMediaId}
          mediaItems={filteredItems}
          displayModal="block"
          openModal={openModal}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default HomeImgGrid;

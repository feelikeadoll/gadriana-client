import ImgThumbnail from "./ImgThumbnail";
import VideoThumbnail from "./VideoThumbnail";
import MediaModal from "./MediaModal";
import { useEffect, useRef, useState } from "react";
import metadata from "../../../assets/homepage grid/grid-metadata.json";

type HomeImgGridProps = {
  selectedCategory: string;
  selectedBrand: string;
};

export type MediaItem = {
  id: string;
  type: "image" | "video";
  src: string;
  category: string[];
  brand: string;
  placeholderColor: string;
  description: string;
};

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov"];

const mediaModules = import.meta.glob(
  "../../../assets/homepage grid/**/*.{jpg,jpeg,png,webp,mp4,mov,webm}",
  {
    eager: true,
  },
) as Record<string, { default: string }>;

const resolvedByFilename: Record<string, string> = {};
for (const [path, mod] of Object.entries(mediaModules)) {
  const parts = path.split("homepage grid/");
  const relativePath = parts[1];
  resolvedByFilename[relativePath] = mod.default;

  const filename = path.split("/").pop()!;
  resolvedByFilename[filename] = mod.default;
}

// // Debugging Files

// const missingFiles = metadata.filter(
//   (entry) => resolvedByFilename[entry.filename] === undefined,
// );
// const homeFiles = metadata.filter((entry) => entry.brand === "");

// console.log("Files in Home:", homeFiles.length);

// if (missingFiles.length > 0) {
//   console.log(
//     "Missing files:",
//     missingFiles.map((e) => e.filename),
//   );
// }

const filenameToDescription = (filename: string): string => {
  const nameOnly = filename
    .replace(/\.(jpg|jpeg|png|webp|mp4|mov|webm)$/i, "")
    .replace(/^gadriana_/, "")
    .replace(/-\d+$/, "") // quita sufijos tipo -01, -02
    .replace(/_/g, " ");
  return nameOnly.charAt(0).toUpperCase() + nameOnly.slice(1);
};

const initialMediaItems: MediaItem[] = metadata
  .filter((entry) => resolvedByFilename[entry.filename] !== undefined)
  .map((entry) => {
    const ext = "." + entry.filename.split(".").pop()!.toLowerCase();
    return {
      id: entry.filename,
      type: VIDEO_EXTENSIONS.includes(ext) ? "video" : "image",
      src: resolvedByFilename[entry.filename],
      category: entry.category,
      brand: entry.brand,
      placeholderColor: entry.placeholderColor,
      description: filenameToDescription(entry.filename),
    };
  });

const shuffleArray = (array: MediaItem[]): MediaItem[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const staticShuffledItems = shuffleArray(initialMediaItems);

type GridSlot = {
  colStart: number;
  colEnd: number;
  rowStart: number;
  rowEnd: number;
  isLarge: boolean;
};

// Pattern: A(5) + B(7) + C(5) + D(7) + E(5) = 29 slots, 7 rows
// A: row 1, 5 equal
// B: rows 2-3, large left (2×2) + 3×2 small right
// C: row 4, 5 equal
// D: rows 5-6, 3×2 small left + large right (2×2)
// E: row 7, 5 equal
const PATTERN_ROWS = 7;
const PATTERN_SLOTS = 29;

const buildPatternSlots = (): GridSlot[] => {
  const slots: GridSlot[] = [];

  // BLOCK A: row 1
  for (let col = 1; col <= 5; col++) {
    slots.push({
      colStart: col,
      colEnd: col + 1,
      rowStart: 1,
      rowEnd: 2,
      isLarge: false,
    });
  }

  // BLOCK B: rows 2-3, large left + 3×2 small right
  slots.push({ colStart: 1, colEnd: 3, rowStart: 2, rowEnd: 4, isLarge: true });
  for (let row = 2; row <= 3; row++) {
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

  // BLOCK C: row 4, 5 equal
  for (let col = 1; col <= 5; col++) {
    slots.push({
      colStart: col,
      colEnd: col + 1,
      rowStart: 4,
      rowEnd: 5,
      isLarge: false,
    });
  }

  // BLOCK D: rows 5-6, 3×2 small left + large right
  for (let row = 5; row <= 6; row++) {
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
  slots.push({ colStart: 4, colEnd: 6, rowStart: 5, rowEnd: 7, isLarge: true });

  // BLOCK E: row 7, 5 equal
  for (let col = 1; col <= 5; col++) {
    slots.push({
      colStart: col,
      colEnd: col + 1,
      rowStart: 7,
      rowEnd: 8,
      isLarge: false,
    });
  }

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
  const [mobileLayoutMode, setMobileLayoutMode] = useState<"1col" | "2col">(
    "1col",
  );
  const [visibleCount, setVisibleCount] = useState<number>(PATTERN_SLOTS);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisibleCount(PATTERN_SLOTS);
  }, [
    props.selectedCategory,
    props.selectedBrand,
    layoutMode,
    mobileLayoutMode,
  ]);

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
    if (props.selectedBrand !== "all") {
      return item.brand === props.selectedBrand;
    }
    const isGeneral = item.brand === "";
    const matchesCategory =
      props.selectedCategory === "all" ||
      item.category.includes(props.selectedCategory);
    return isGeneral && matchesCategory;
  });

  // Batch size per mode
  const batchSize = !screenSize
    ? mobileLayoutMode === "2col"
      ? 20
      : 10
    : layoutMode === "editorial"
      ? PATTERN_SLOTS
      : 30;

  const hasMore = visibleCount < filteredItems.length;

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setVisibleCount((prev) =>
            Math.min(prev + batchSize, filteredItems.length),
          );
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, batchSize, filteredItems.length, visibleCount]);

  const visibleItems = filteredItems.slice(0, visibleCount);

  const iconActive = "#000";
  const iconInactive = "#555";

  return (
    <div className="mx-4 w-full">
      <div className="flex justify-end mb-2 gap-1">
        {!screenSize && (
          <>
            <button
              onClick={() => setMobileLayoutMode("1col")}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
              aria-label="Single column">
              <svg
                width="28px"
                height="28px"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 4.5C2 4.22386 2.22386 4 2.5 4H17.5C17.7761 4 18 4.22386 18 4.5C18 4.77614 17.7761 5 17.5 5H2.5C2.22386 5 2 4.77614 2 4.5Z"
                  fill={mobileLayoutMode === "1col" ? iconActive : iconInactive}
                />
                <path
                  d="M2 9.5C2 9.22386 2.22386 9 2.5 9H17.5C17.7761 9 18 9.22386 18 9.5C18 9.77614 17.7761 10 17.5 10H2.5C2.22386 10 2 9.77614 2 9.5Z"
                  fill={mobileLayoutMode === "1col" ? iconActive : iconInactive}
                />
                <path
                  d="M2.5 14C2.22386 14 2 14.2239 2 14.5C2 14.7761 2.22386 15 2.5 15H17.5C17.7761 15 18 14.7761 18 14.5C18 14.2239 17.7761 14 17.5 14H2.5Z"
                  fill={mobileLayoutMode === "1col" ? iconActive : iconInactive}
                />
              </svg>
            </button>
            <button
              onClick={() => setMobileLayoutMode("2col")}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
              aria-label="Two columns">
              <svg
                width="28px"
                height="28px"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.5 2C2.77614 2 3 2.22386 3 2.5V17.5C3 17.7761 2.77614 18 2.5 18C2.22386 18 2 17.7761 2 17.5V2.5C2 2.22386 2.22386 2 2.5 2Z"
                  fill={mobileLayoutMode === "2col" ? iconActive : iconInactive}
                />
                <path
                  d="M6.25 2C6.52614 2 6.75 2.22386 6.75 2.5V17.5C6.75 17.7761 6.52614 18 6.25 18C5.97386 18 5.75 17.7761 5.75 17.5V2.5C5.75 2.22386 5.97386 2 6.25 2Z"
                  fill={mobileLayoutMode === "2col" ? iconActive : iconInactive}
                />
                <path
                  d="M10 2C10.2761 2 10.5 2.22386 10.5 2.5V17.5C10.5 17.7761 10.2761 18 10 18C9.72386 18 9.5 17.7761 9.5 17.5V2.5C9.5 2.22386 9.72386 2 10 2Z"
                  fill={mobileLayoutMode === "2col" ? iconActive : iconInactive}
                />
                <path
                  d="M13.75 2C14.0261 2 14.25 2.22386 14.25 2.5V17.5C14.25 17.7761 14.0261 18 13.75 18C13.4739 18 13.25 17.7761 13.25 17.5V2.5C13.25 2.22386 13.4739 2 13.75 2Z"
                  fill={mobileLayoutMode === "2col" ? iconActive : iconInactive}
                />
                <path
                  d="M17.5 2C17.7761 2 18 2.22386 18 2.5V17.5C18 17.7761 17.7761 18 17.5 18C17.2239 18 17 17.7761 17 17.5V2.5C17 2.22386 17.2239 2 17.5 2Z"
                  fill={mobileLayoutMode === "2col" ? iconActive : iconInactive}
                />
              </svg>
            </button>
          </>
        )}
        {screenSize && (
          <>
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
          </>
        )}
      </div>

      {/* MOBILE layouts */}
      {!screenSize && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              mobileLayoutMode === "2col" ? "repeat(2, 1fr)" : "1fr",
            gridAutoRows: mobileLayoutMode === "2col" ? "50vw" : "100vw",
            gap: "8px",
          }}>
          {visibleItems.map((item, index) => (
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

      {/* DESKTOP: GRID MODE */}
      {screenSize && layoutMode === "grid" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "33vw",
            gap: "8px",
          }}>
          {visibleItems.map((item, index) => (
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

      {/* DESKTOP: EDITORIAL MODE */}
      {screenSize &&
        layoutMode === "editorial" &&
        (() => {
          // A: 0-4 (safe), B: 5-11 (large left), C: 12-16 (safe), D: 17-22 (large right), E: 23-28 (safe)
          const remainder = visibleItems.length % PATTERN_SLOTS;

          const inBlockD = remainder >= 17 && remainder <= 22;

          let safeCount = visibleItems.length;
          if (inBlockD)
            safeCount =
              Math.floor(visibleItems.length / PATTERN_SLOTS) * PATTERN_SLOTS +
              17;

          const patternItems = visibleItems.slice(0, safeCount);
          const remainderItems = visibleItems.slice(safeCount);

          return (
            <>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gridAutoRows: "25vw",
                  gap: "8px",
                }}>
                {patternItems.map((item, index) => {
                  const slot = getSlot(index);
                  const itemStyle: React.CSSProperties = {
                    gridColumn: `${slot.colStart} / ${slot.colEnd}`,
                    gridRow: `${slot.rowStart} / ${slot.rowEnd}`,
                    margin: 0,
                    minHeight: 0,
                  };
                  return (
                    <GridThumbnail
                      key={`${item.id}-${props.selectedCategory}-${props.selectedBrand}`}
                      id={index}
                      item={item}
                      openModal={openModal}
                      showMediaModal={showMediaModal}
                      style={
                        slot.isLarge
                          ? {
                              ...itemStyle,
                              aspectRatio: "unset",
                              height: "100%",
                              position: "relative",
                            }
                          : itemStyle
                      }
                    />
                  );
                })}
              </div>
              {remainderItems.length > 0 && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    gridAutoRows: "25vw",
                    gap: "8px",
                    marginTop: "8px",
                  }}>
                  {remainderItems.map((item, index) => (
                    <GridThumbnail
                      key={`${item.id}-${props.selectedCategory}-${props.selectedBrand}`}
                      id={safeCount + index}
                      item={item}
                      openModal={openModal}
                      showMediaModal={showMediaModal}
                      style={{ margin: 0, minHeight: 0 }}
                    />
                  ))}
                </div>
              )}
            </>
          );
        })()}

      <div ref={sentinelRef} style={{ height: "1px" }} />
      {hasMore && (
        <div className="w-full flex justify-center py-8 text-xs tracking-widest text-gray-400">
          LOADING...
        </div>
      )}

      {selectedMediaId !== null && showMediaModal === true && (
        <MediaModal
          id={selectedMediaId}
          mediaItems={filteredItems}
          displayModal="block"
          openModal={openModal}
          closeModal={closeModal}
          filteredItemsLength={filteredItems.length}
        />
      )}
    </div>
  );
}

export default HomeImgGrid;

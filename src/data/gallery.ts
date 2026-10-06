export interface GalleryPiece {
  id: string;
  title: string;
  category: "Sketch" | "Digital Art" | "Stitched" | "Other";
  description: string;
}

/**
 * Placeholder entries — replace title/category/description per piece, and
 * once you have real images, add them inside GalleryItem.tsx the same way
 * described in PolaroidPhoto.tsx. Add more pieces by appending here.
 */
export const galleryPieces: GalleryPiece[] = [
  {
    id: "sketch-1",
    title: "sketch placeholder",
    category: "Sketch",
    description: "add a title and a line about this piece",
  },
  {
    id: "sketch-2",
    title: "sketch placeholder",
    category: "Sketch",
    description: "add a title and a line about this piece",
  },
  {
    id: "digital-1",
    title: "digital art placeholder",
    category: "Digital Art",
    description: "add a title and a line about this piece",
  },
  {
    id: "digital-2",
    title: "digital art placeholder",
    category: "Digital Art",
    description: "add a title and a line about this piece",
  },
  {
    id: "stitched-1",
    title: "stitched piece placeholder",
    category: "Stitched",
    description: "add a title and a line about this piece",
  },
  {
    id: "other-1",
    title: "something else placeholder",
    category: "Other",
    description: "add a title and a line about this piece",
  },
];

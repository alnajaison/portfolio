import type { GalleryPiece } from "../data/gallery";
import styles from "./GalleryItem.module.css";

interface GalleryItemProps {
  piece: GalleryPiece;
}

export default function GalleryItem({ piece }: GalleryItemProps) {
  return (
    <div
      className={styles.item}
      tabIndex={0}
      role="img"
      aria-label={`${piece.title} — ${piece.description}`}
    >
      <span className={styles.category} aria-hidden="true">
        {piece.category}
      </span>
      <div className={styles.overlay} aria-hidden="true">
        <p className={styles.title}>{piece.title}</p>
        <p className={styles.desc}>{piece.description}</p>
      </div>
    </div>
  );
}

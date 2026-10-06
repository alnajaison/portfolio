import { galleryPieces } from "../data/gallery";
import GalleryItem from "../components/GalleryItem";
import styles from "./Gallery.module.css";

export default function Gallery() {
  return (
    <main className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1 className={styles.heading}>things I made for no reason</h1>
        <p className={styles.subhead}>
          sketches, digital art, and the odd stitched thing — hover or
          focus a piece to see what it is.
        </p>
      </div>

      <div className={styles.grid}>
        {galleryPieces.map((piece) => (
          <GalleryItem key={piece.id} piece={piece} />
        ))}
      </div>
    </main>
  );
}

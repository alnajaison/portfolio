import type { CSSProperties } from "react";
import PinDot from "./PinDot";
import styles from "./PolaroidPhoto.module.css";

interface PolaroidPhotoProps {
  /** Describes what real photo should go here later — shown as placeholder text and used for alt text once a real image is added. */
  label: string;
  /** Rotation in degrees, e.g. -6 or 4. Keep small (-10 to 10) so it reads as "slightly askew," not chaotic. */
  rotate?: number;
  /** Optional handwritten caption under the photo. */
  caption?: string;
  /** Show the red pin at the top. Defaults to true. */
  pinned?: boolean;
  /** Width, e.g. "100%" or "220px". Defaults to 100%. */
  width?: string;
  className?: string;
}

export default function PolaroidPhoto({
  label,
  rotate = 0,
  caption,
  pinned = true,
  width = "100%",
  className,
}: PolaroidPhotoProps) {
  const style: CSSProperties = {
    transform: `rotate(${rotate}deg)`,
    width,
  };

  return (
    <figure
      className={`${styles.frame} ${className ?? ""}`}
      style={style}
    >
      {pinned && <PinDot />}
      <div className={styles.imageArea} role="img" aria-label={label}>
        <span className={styles.placeholderLabel} aria-hidden="true">
          {label}
        </span>
      </div>
      {caption && (
        <figcaption className={styles.caption}>{caption}</figcaption>
      )}
    </figure>
  );
}

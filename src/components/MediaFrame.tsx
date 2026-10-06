import styles from "./MediaFrame.module.css";

interface MediaFrameProps {
  projectTitle: string;
}

/**
 * Placeholder display area for a project's media. Swap the contents of
 * `.frame` later for a real <img>, <video>, or a small slideshow component —
 * the frame sizing/border/shadow will keep working either way.
 */
export default function MediaFrame({ projectTitle }: MediaFrameProps) {
  return (
    <div
      className={styles.frame}
      role="img"
      aria-label={`${projectTitle} — media placeholder`}
    >
      <span className={styles.label} aria-hidden="true">
        screenshot / demo / video — add media here
      </span>
    </div>
  );
}

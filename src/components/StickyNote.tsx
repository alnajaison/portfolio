import type { CSSProperties, ReactNode } from "react";
import styles from "./StickyNote.module.css";

interface StickyNoteProps {
  children: ReactNode;
  rotate?: number;
  className?: string;
}

export default function StickyNote({
  children,
  rotate = -2,
  className,
}: StickyNoteProps) {
  const style: CSSProperties = { transform: `rotate(${rotate}deg)` };
  return (
    <div className={`${styles.note} ${className ?? ""}`} style={style}>
      {children}
    </div>
  );
}

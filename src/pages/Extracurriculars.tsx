import { extracurriculars } from "../data/extracurriculars";
import styles from "./Extracurriculars.module.css";

export default function Extracurriculars() {
  return (
    <main className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1 className={styles.heading}>outside the coursework</h1>
        <p className={styles.subhead}>
          what I spend time on when I'm not in front of an IDE.
        </p>
      </div>

      <ol className={styles.timeline}>
        {extracurriculars.map((entry) => (
          <li key={entry.id} className={styles.entry}>
            <span className={styles.duration}>{entry.duration}</span>
            <h2 className={styles.title}>{entry.title}</h2>
            <p className={styles.role}>{entry.role}</p>
            <p className={styles.desc}>{entry.description}</p>
          </li>
        ))}
      </ol>
    </main>
  );
}

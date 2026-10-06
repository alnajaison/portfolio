import styles from "./ComingSoon.module.css";

interface ComingSoonProps {
  title: string;
  note: string;
}

export default function ComingSoon({ title, note }: ComingSoonProps) {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.heading}>{title}</h1>
      <p className={styles.body}>{note}</p>
    </div>
  );
}

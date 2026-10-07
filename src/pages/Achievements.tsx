import { achievements } from "../data/achievements";
import styles from "./Achievements.module.css";

export default function Achievements() {
  const scholastic = achievements.filter((a) => a.category === "Scholastic");
  const nonScholastic = achievements.filter(
    (a) => a.category === "Non-Scholastic",
  );

  return (
    <main className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1 className={styles.heading}>a small shelf of wins</h1>
        <p className={styles.subhead}>
          academic and otherwise — the things that took real effort
          to get.
        </p>
      </div>

      <AchievementSection title="Scholastic" items={scholastic} />
      <AchievementSection title="Non-Scholastic" items={nonScholastic} />
    </main>
  );
}

function AchievementSection({
  title,
  items,
}: {
  title: string;
  items: typeof achievements;
}) {
  if (items.length === 0) return null;

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.grid}>
        {items.map((item) => (
          <article key={item.id} className={styles.entry}>
            <span className={styles.entryTag}>{item.tag}</span>
            <div className={styles.entryHead}>
              <h3 className={styles.entryTitle}>{item.title}</h3>
              <span className={styles.entryYear}>{item.year}</span>
            </div>
            <p className={styles.entryDesc}>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

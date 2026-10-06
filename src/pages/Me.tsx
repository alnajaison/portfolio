import { Link } from "react-router-dom";
import PolaroidPhoto from "../components/PolaroidPhoto";
import StickyNote from "../components/StickyNote";
import styles from "./Me.module.css";

const INTERESTS = [
  "Software Development",
  "AI & GenAI",
  "Cybersecurity",
  "UI/UX & Product Design",
  "Creative Experimentation",
];

export default function Me() {
  return (
    <main className={`container ${styles.page}`}>
      <div className={styles.masthead}>
        <span className={styles.issueTag}>VOL. 01 — FINAL YEAR, CS</span>
        <StickyNote rotate={3}>notes from a builder to whoever's reading</StickyNote>
      </div>

      <section className={styles.hero}>
        <h1 className={styles.headline}>still sketching out who I'm becoming.</h1>
        <p className={styles.subhead}>
          code, security, interfaces, and whatever else I can't stop poking at.
        </p>
      </section>

      <div className={styles.collageRow}>
        <PolaroidPhoto
          label="photo placeholder"
          rotate={-6}
          className={`${styles.photoSmall} ${styles.offsetDown}`}
          caption="then"
        />
        <PolaroidPhoto
          label="main portrait placeholder"
          rotate={1}
          className={styles.photoCenter}
        />
        <PolaroidPhoto
          label="photo placeholder"
          rotate={7}
          className={`${styles.photoSmall} ${styles.offsetDownMore}`}
          caption="now"
        />
      </div>

      <ul className={styles.tags}>
        {INTERESTS.map((interest) => (
          <li key={interest} className={styles.tag}>
            {interest}
          </li>
        ))}
      </ul>

      <div className={styles.bioRow}>
        <p className={styles.bio}>
          I'm <strong>[Your Name]</strong> — a final-year Computer Science
          student who moves between writing software, exploring AI,
          poking at security problems, and designing interfaces, with a
          sketchbook usually open somewhere nearby. This site is less a
          résumé and more a running set of notes on what I'm building,
          breaking, and making.
          <br />
          <span className={styles.editNote}>
            [replace this bio and the photo placeholders with your own — see
            README]
          </span>
        </p>
      </div>

      <div className={styles.ctaRow}>
        <Link to="/projects" className={styles.cta}>
          see the work
        </Link>
        <Link to="/gallery" className={styles.cta}>
          peek at the gallery
        </Link>
      </div>
    </main>
  );
}

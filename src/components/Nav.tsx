import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const LINKS = [
  { to: "/", label: "me", end: true },
  { to: "/projects", label: "projects" },
  { to: "/gallery", label: "gallery" },
  { to: "/achievements", label: "achievements" },
  { to: "/extracurriculars", label: "extracurriculars" },
];

export default function Nav() {
  return (
    <header className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.brand} end>
          notes to self
        </NavLink>
        <nav aria-label="Main">
          <ul className={styles.links}>
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `${styles.tab} ${isActive ? styles.tabActive : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

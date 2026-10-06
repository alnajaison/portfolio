import { projects } from "../data/projects";
import ProjectEntry from "../components/ProjectEntry";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <main className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1 className={styles.heading}>things I've built</h1>
        <p className={styles.subhead}>
          completed work and the projects I keep coming back to —
          expand any entry for the full case study.
        </p>
      </div>

      {projects.map((project) => (
        <ProjectEntry key={project.slug} project={project} />
      ))}
    </main>
  );
}

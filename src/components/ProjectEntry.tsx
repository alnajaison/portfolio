import type { Project } from "../data/projects";
import MediaFrame from "./MediaFrame";
import styles from "./ProjectEntry.module.css";

interface ProjectEntryProps {
  project: Project;
}

export default function ProjectEntry({ project }: ProjectEntryProps) {
  const statusClass =
    project.status === "Ongoing" ? styles.statusOngoing : styles.statusCompleted;

  return (
    <article className={styles.entry}>
      <MediaFrame projectTitle={project.title} />

      <div>
        <div className={styles.headRow}>
          <h2 className={styles.title}>{project.title}</h2>
          <span className={`${styles.status} ${statusClass}`}>
            {project.status}
          </span>
        </div>

        <p className={styles.role}>{project.role}</p>
        <p className={styles.description}>{project.shortDescription}</p>

        {project.technologies && project.technologies.length > 0 && (
          <p className={styles.role}>{project.technologies.join(" · ")}</p>
        )}

        <ul className={styles.featureList}>
          {project.keyFeatures.map((feature) => (
            <li key={feature} className={styles.featureItem}>
              {feature}
            </li>
          ))}
        </ul>

        <details className={styles.details}>
          <summary className={styles.summary}>read the case study</summary>
          <p className={styles.caseStudy}>{project.caseStudy}</p>
        </details>

        {project.links && (project.links.github || project.links.demo) && (
          <div className={styles.linksRow}>
            {project.links.github && (
              <a
                className={styles.link}
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>
            )}
            {project.links.demo && (
              <a
                className={styles.link}
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
              >
                live demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

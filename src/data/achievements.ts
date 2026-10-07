export interface Achievement {
  id: string;
  title: string;
  category: "Scholastic" | "Non-Scholastic";
  /** e.g. "Sports", "Arts", "Academics" — shown as a small tag. */
  tag: string;
  year: string;
  description: string;
}

/**
 * Placeholder entries — replace title/tag/year/description with your real
 * achievements. Add more by appending to this array; the page auto-splits
 * them into Scholastic and Non-Scholastic sections.
 */
export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "achievement placeholder",
    category: "Scholastic",
    tag: "Academics",
    year: "20XX",
    description: "add a line about what this was and why it mattered",
  },
  {
    id: "ach-2",
    title: "achievement placeholder",
    category: "Scholastic",
    tag: "Academics",
    year: "20XX",
    description: "add a line about what this was and why it mattered",
  },
  {
    id: "ach-3",
    title: "achievement placeholder",
    category: "Non-Scholastic",
    tag: "Sports",
    year: "20XX",
    description: "add a line about what this was and why it mattered",
  },
  {
    id: "ach-4",
    title: "achievement placeholder",
    category: "Non-Scholastic",
    tag: "Arts",
    year: "20XX",
    description: "add a line about what this was and why it mattered",
  },
];

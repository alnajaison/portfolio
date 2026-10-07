export interface ExtracurricularEntry {
  id: string;
  title: string;
  role: string;
  duration: string;
  description: string;
}

/**
 * Placeholder entries — replace with your real activities and add more by
 * appending here. Ordered oldest-to-newest or newest-to-oldest, your call —
 * the page renders them as a timeline in array order.
 */
export const extracurriculars: ExtracurricularEntry[] = [
  {
    id: "ex-1",
    title: "activity placeholder",
    role: "your role",
    duration: "20XX — 20XX",
    description: "add a line about what you did and what came out of it",
  },
  {
    id: "ex-2",
    title: "activity placeholder",
    role: "your role",
    duration: "20XX — 20XX",
    description: "add a line about what you did and what came out of it",
  },
  {
    id: "ex-3",
    title: "activity placeholder",
    role: "your role",
    duration: "20XX — present",
    description: "add a line about what you did and what came out of it",
  },
];

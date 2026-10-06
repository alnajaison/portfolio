export type ProjectStatus = "Completed" | "Ongoing";

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  role: string;
  /** Only list technologies you're sure of — omit the array or leave it empty rather than guessing. */
  technologies?: string[];
  keyFeatures: string[];
  caseStudy: string;
  status: ProjectStatus;
  links?: {
    github?: string;
    demo?: string;
  };
}

/**
 * Add new projects by appending an object to this array — the Projects page
 * renders whatever's here, so no other file needs to change.
 */
export const projects: Project[] = [
  {
    slug: "geriatric-care-app",
    title: "Geriatric Care App",
    shortDescription:
      "An elderly-care ecosystem covering medication management, GPS-based safety, SOS, an AI chat buddy, and cognitive games.",
    role: "Team mini-project — system design, AI features, and teamwork.",
    keyFeatures: [
      "Medication management and reminders",
      "GPS-based safety tracking",
      "SOS emergency alert",
      "AI chat buddy for companionship and support",
      "Cognitive games for mental engagement",
    ],
    caseStudy:
      "Built as a team mini-project, this app set out to cover an elderly person's care needs as one connected ecosystem rather than a single feature. The focus was on system thinking — how medication tracking, location safety, emergency response, an AI companion, and cognitive exercises all need to work together, not as isolated tools. It was also a real exercise in team collaboration and reasoning about AI's role in a sensitive, real-world care context.",
    status: "Completed",
  },
  {
    slug: "printrset",
    title: "PrintRSET",
    shortDescription:
      "A campus printing management experience for students and teachers, built through UX research and design thinking.",
    role: "UI/UX and design-thinking project — research, prototyping, and frontend.",
    keyFeatures: [
      "Streamlined printing request flow for students and teachers",
      "Designed through user research and design-thinking methods",
      "Prototyped before implementation to validate the flow",
    ],
    caseStudy:
      "PrintRSET set out to fix a genuinely annoying everyday campus problem: managing printing requests. The project leaned heavily on UX process — understanding how students and teachers actually use (and get frustrated by) campus printing, translating that into prototypes, and refining the visual design before writing frontend code. It's as much a UX research exercise as a build.",
    status: "Completed",
  },
  {
    slug: "findr",
    title: "findr.",
    shortDescription:
      "A personal movie/series discovery web app with an infinite-scroll feed, wishlist, and detailed content pages.",
    role: "Personal project — frontend development, product thinking, visual design.",
    keyFeatures: [
      "Infinite-scroll discovery feed",
      "Wishlist for saving titles",
      "Detailed content pages per movie/series",
    ],
    caseStudy:
      "findr. started as a personal itch: I wanted a cleaner way to browse and track movies and shows than most discovery apps offer. It's a frontend-heavy build, with the infinite-scroll feed as the centerpiece — paired with a wishlist and per-title detail pages designed to feel considered rather than templated.",
    status: "Completed",
  },
  {
    slug: "internship-project",
    title: "Internship Project",
    shortDescription:
      "A troubleshooting assistant explored through multiple different AI implementation approaches.",
    role: "Internship — experimentation, AI concepts, learning through iteration.",
    keyFeatures: [
      "Explored multiple AI implementation approaches for the same problem",
      "Focused on troubleshooting-assistant use cases",
    ],
    caseStudy:
      "During this internship, the goal wasn't just to ship one working assistant — it was to actually compare different ways of approaching the same troubleshooting problem with AI. That meant building, testing, and learning from more than one implementation path, treating the internship as much as a learning exercise in AI concepts as a delivery task.",
    status: "Completed",
  },
];

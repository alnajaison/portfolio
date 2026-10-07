# Portfolio — complete (Me, Projects, Gallery, Achievements, Extracurriculars)

A personal scrapbook/zine-style portfolio. Built with React + TypeScript + Vite,
plain CSS with design tokens, and react-router-dom for page navigation.

## Running it locally

This project uses **pnpm**, not npm.

```bash
# 1. Install pnpm if you don't have it yet
npm install -g pnpm

# 2. From inside the project folder, install dependencies
pnpm install

# 3. Start the dev server
pnpm dev
```

Then open the local URL it prints — runs on **http://localhost:3000** (set in
`vite.config.ts`, not the Vite default of 5173).

Other commands:
- `pnpm build` — type-checks and builds a production bundle into `dist/`
- `pnpm preview` — serves that production build locally so you can check it
  matches dev before deploying

## What's built

- **Design tokens** (`src/styles/tokens.css`) — every color, font, spacing
  value lives here as a CSS variable. Your 5-color palette is already wired
  in. If you ever want to adjust a shade, change it here and it updates
  everywhere.
- **Routing** (`src/App.tsx`) — 5 pages: Me, Projects, Gallery, Achievements,
  Extracurriculars, with a pinned-tab style nav (`src/components/Nav.tsx`).
- **Me page** (`src/pages/Me.tsx`) — fully built: masthead, headline,
  photo collage, interest tags, bio, and links into the rest of the site.
- **Projects page** (`src/pages/Projects.tsx`) — renders every project from
  `src/data/projects.ts`. Each one shows a media frame, role, short
  description, key features, a Completed/Ongoing status badge, and an
  expandable "read the case study" section. **To add a new project**, just
  append an object to the array in `src/data/projects.ts` — nothing else
  needs to change.
- **Gallery page** (`src/pages/Gallery.tsx`) — a grid of pieces from
  `src/data/gallery.ts`, each revealing its title/description on hover or
  keyboard focus. **To add a new piece**, append an object to that file.
- **Achievements page** (`src/pages/Achievements.tsx`) — entries from
  `src/data/achievements.ts`, auto-split into Scholastic / Non-Scholastic
  sections based on each entry's `category`. **To add one**, append to that
  file.
- **Extracurriculars page** (`src/pages/Extracurriculars.tsx`) — a vertical
  timeline built from `src/data/extracurriculars.ts`, in array order.
  **To add one**, append to that file.
- **Reusable components**:
  - `PolaroidPhoto` — the tilted, pinned-photo placeholder on the Me page.
    Swap in a real image later by adding an `<img>` inside once you have
    one — see the inline comments in `src/components/PolaroidPhoto.tsx`.
  - `MediaFrame` — the placeholder frame on each project entry, meant to
    later hold a screenshot, video, or small slideshow.
  - `StickyNote` — small handwritten-style callout.
  - `PinDot` — the little red pin dot (decorative).
  - `ComingSoon` — no longer used by any route, but left in the project in
    case you want a quick placeholder page for something later.

## What's placeholder / needs your input

- `src/pages/Me.tsx` — replace `[Your Name]` and the bio paragraph with your
  own words. Delete the `[replace this bio...]` note once you do.
- The 3 photo placeholders on the Me page — see `PolaroidPhoto` usage in
  `Me.tsx`. Once you have real photos, the simplest swap is adding an
  `<img src="..." alt="..." />` inside the component's `imageArea` div
  instead of the dashed placeholder box.
- Every project's `MediaFrame` on the Projects page — same idea, swap the
  placeholder `<div>` in `src/components/MediaFrame.tsx` for a real
  `<img>`, `<video>`, or small slideshow once you have assets.
- All 6 Gallery pieces are placeholders — replace `title`/`description` in
  `src/data/gallery.ts` and add real images the same way as above.
- All 4 Achievements entries in `src/data/achievements.ts` are placeholders
  — replace `title`, `tag`, `year`, and `description` with your real ones.
  `category` controls which section (Scholastic / Non-Scholastic) an entry
  lands in.
- All 3 Extracurriculars entries in `src/data/extracurriculars.ts` are
  placeholders — replace `title`, `role`, `duration`, and `description`.
  They render in the array's order, so put them in whatever order
  (chronological or otherwise) you'd like them to appear.

## Design system notes

- Fonts: `Caveat` (handwritten, for headlines/notes) + `Space Mono`
  (typewriter, for body text/labels/nav) — loaded via Google Fonts in
  `index.html`.
- Dark mode was in the original brief but wasn't requested for this
  scrapbook direction — the current design is a single warm-paper theme.
  Let me know if you want a dark variant added later.
- Reduced motion, visible keyboard focus, and responsive layout down to
  mobile are already in place (see `src/styles/global.css` and the
  `@media` queries in each component's CSS module).

## Possible next steps

All 5 pages from the original brief are built. From here, the natural next
steps are things only you can really drive:
- Swapping in your real name, bio, photos, project screenshots/videos,
  gallery pieces, achievements, and extracurricular activities (see the
  section above for exactly where each one goes)
- Once there's real content in place, a pass to double-check spacing,
  image aspect ratios, and copy length against the actual (not placeholder)
  text and images
- Optional additions if you want them later: dark mode, a contact page/
  section, deploying it somewhere (e.g. Vercel or Netlify)

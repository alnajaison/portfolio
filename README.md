# Portfolio — Phase 1 (Foundation + Me page)

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

Then open the local URL it prints (usually http://localhost:5173).

Other commands:
- `pnpm build` — type-checks and builds a production bundle into `dist/`
- `pnpm preview` — serves that production build locally so you can check it
  matches dev before deploying

## What's built in this phase

- **Design tokens** (`src/styles/tokens.css`) — every color, font, spacing
  value lives here as a CSS variable. Your 5-color palette is already wired
  in. If you ever want to adjust a shade, change it here and it updates
  everywhere.
- **Routing** (`src/App.tsx`) — 5 pages: Me, Projects, Gallery, Achievements,
  Extracurriculars, with a pinned-tab style nav (`src/components/Nav.tsx`).
- **Me page** (`src/pages/Me.tsx`) — fully built: masthead, headline,
  photo collage, interest tags, bio, and links into the rest of the site.
- **Reusable components**:
  - `PolaroidPhoto` — the tilted, pinned-photo placeholder. Swap in a real
    image later by adding an `<img>` inside once you have one — see the
    inline comments in `src/components/PolaroidPhoto.tsx`.
  - `StickyNote` — small handwritten-style callout.
  - `PinDot` — the little red pin dot (decorative).
  - `ComingSoon` — placeholder shown on the not-yet-built pages.

## What's placeholder / needs your input

- `src/pages/Me.tsx` — replace `[Your Name]` and the bio paragraph with your
  own words. Delete the `[replace this bio...]` note once you do.
- The 3 photo placeholders on the Me page — see `PolaroidPhoto` usage in
  `Me.tsx`. Once you have real photos, the simplest swap is adding an
  `<img src="..." alt="..." />` inside the component's `imageArea` div
  instead of the dashed placeholder box.
- Projects, Gallery, Achievements, Extracurriculars pages — stubbed with a
  "coming soon" message. These are Phase 2 and Phase 3.

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

## Next phases

- **Phase 2:** Projects page (completed/ongoing, framed media area) + Gallery
  page (hover-reveal grid)
- **Phase 3:** Achievements + Extracurriculars pages, final polish pass

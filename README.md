# Yash Gupta Portfolio

A 3D-inspired creator-style portfolio landing page adapted for **Yash Gupta**, a Software Engineer focused on backend systems, cloud engineering, real-time data pipelines, and AI-enabled developer tooling.

The site is built with **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Lucide React**, and **Vite**.

## Live Local URL

When the development server is running, open:

```text
http://127.0.0.1:5173
```

If port `5173` is already in use, Vite may start on another port. Use the URL printed in the terminal.

## Project Highlights

- Dark 3D-inspired visual style
- Animated hero section
- Magnetic hover effect on the hero visual
- Scroll-driven marquee gallery
- Character-by-character animated about text
- Responsive services section
- Sticky project cards on desktop
- Mobile-friendly stacked project layout
- Contact links for email, GitHub, LinkedIn, and GSSoC
- Production build with Vite

## Portfolio Content

The portfolio content is based on the provided resume/profile data:

- Name: Yash Gupta
- Role: Software Engineer
- Location: Alwar, Rajasthan / Gurugram, Haryana, India
- Email: `2004yggupta@gmail.com`
- GitHub: `https://github.com/gitsofyash`
- LinkedIn: `https://www.linkedin.com/in/yash-gupta2601`
- GSSoC Profile: `https://gssoc.girlscript.org/profile/76a55d02-90b7-43d6-a2cc-9bedf1b445a8`

Main positioning:

> Backend, cloud, and AI engineer building reliable product systems.

## Sections

The page includes:

1. **Hero**
   - Name headline
   - Short positioning statement
   - Contact button
   - Animated/magnetic 3D visual

2. **Marquee**
   - Scroll-reactive image rows
   - Visual motion gallery

3. **About**
   - Resume-based professional summary
   - Animated text reveal
   - Core skill chips

4. **Services**
   - Backend Systems
   - Cloud Engineering
   - Real-Time Data
   - AI Developer Tools
   - Data Platforms

5. **Projects**
   - Distributed File Deduplication & Metadata Service
   - CloudMon Real-Time AWS Resource Monitor
   - Context-Aware Support Agent with RAG

6. **Contact**
   - Email
   - GitHub
   - LinkedIn
   - GSSoC
   - Location

## Tech Stack

- **React 18**: UI framework
- **TypeScript**: Type-safe application code
- **Vite**: Development server and build tool
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Scroll and entrance animations
- **Lucide React**: Icon set
- **Kanit**: Google Font used across the UI

## Requirements

Install these before running the project:

- Node.js 18 or newer
- npm

Check your versions:

```bash
node --version
npm --version
```

## Installation

From the project folder:

```bash
npm install
```

## Run In Development

```bash
npm run dev
```

The app will start with Vite. Open the URL shown in the terminal.

Default local URL:

```text
http://127.0.0.1:5173
```

## Build For Production

```bash
npm run build
```

This runs TypeScript checks and creates an optimized production build in:

```text
dist/
```

## Preview Production Build

```bash
npm run preview
```

Then open the preview URL shown in the terminal.

## Available Scripts

```bash
npm run dev
```

Starts the local Vite development server.

```bash
npm run build
```

Runs TypeScript build checks and creates the production bundle.

```bash
npm run preview
```

Serves the production build locally for testing.

## Project Structure

```text
portfolio/
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── vite.config.ts
├── README.md
└── src/
    ├── App.tsx
    ├── index.css
    └── main.tsx
```

## Important Files

- `src/App.tsx`
  - Main portfolio UI
  - Section components
  - Profile data
  - Services data
  - Project data
  - Animation components

- `src/index.css`
  - Tailwind imports
  - Global reset
  - Dark background
  - Kanit font setup
  - Gradient heading class

- `index.html`
  - Page title
  - SEO description
  - Google Font import
  - Root app mount

- `tailwind.config.js`
  - Tailwind content paths
  - Font family extension

## Customization Guide

### Update Name, Links, Or Contact Details

Edit the `profile` object in:

```text
src/App.tsx
```

Look for:

```ts
const profile = {
  name: 'Yash Gupta',
  firstName: 'Yash',
  title: 'Software Engineer',
  ...
};
```

### Update Skills

Edit the `skills` array in:

```text
src/App.tsx
```

### Update Services

Edit the `services` array in:

```text
src/App.tsx
```

Each service has:

- icon
- name
- description

### Update Projects

Edit the `projects` array in:

```text
src/App.tsx
```

Each project has:

- number
- category
- name
- summary
- stats
- images

### Update Global Styling

Edit:

```text
src/index.css
```

Useful values:

- Background: `#0C0C0C`
- Main text: `#D7E2EA`
- Gradient heading class: `.hero-heading`
- Font: `Kanit`

## Deployment

This is a static Vite app, so it can be deployed to platforms like:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
- Any static hosting provider

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

## Vercel Deployment Settings

Use these settings:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

## Netlify Deployment Settings

Use these settings:

```text
Build command: npm run build
Publish directory: dist
```

## Accessibility Notes

Current accessibility-focused details:

- Semantic section structure
- Descriptive page title
- Meta description
- Visible link labels
- Keyboard-accessible links and buttons
- Responsive text sizing
- No horizontal overflow on tested narrow viewport

Recommended future improvements:

- Add stronger alt text for decorative/project imagery where needed
- Add reduced-motion handling for users who prefer less animation
- Add focus-visible styling for keyboard navigation
- Audit color contrast on all text over image-heavy areas

## Performance Notes

The site uses several remote GIF and image assets. These create a rich visual style but can affect performance.

Recommended future improvements:

- Replace heavy GIFs with optimized video or WebP assets
- Host important assets locally or through an image CDN
- Add explicit width/height metadata for major images
- Consider lazy-loading lower-priority sections
- Add `prefers-reduced-motion` animation fallbacks

## Troubleshooting

### Port Already In Use

Run the dev server on a different port:

```bash
npm run dev -- --port 5174
```

Then open:

```text
http://127.0.0.1:5174
```

### Dependencies Not Installed

If you see module errors, run:

```bash
npm install
```

### Build Fails

Run:

```bash
npm run build
```

Read the TypeScript or Vite error message in the terminal. Most issues will point to the exact file and line.

### Page Looks Unstyled

Check that Tailwind is loaded through:

```text
src/index.css
```

And imported in:

```text
src/main.tsx
```

### Remote Images Do Not Load

Some visuals are loaded from external URLs. If they fail:

- Check your internet connection
- Confirm the remote image URLs are still available
- Replace the URL in `src/App.tsx` with a local asset or a different image URL

## Git Ignore

The project ignores generated and local-only files such as:

```text
node_modules/
dist/
.env
.env.*
*.local
*.tsbuildinfo
```

## License

No license has been added yet. Add one before publishing publicly if you want to define reuse permissions.

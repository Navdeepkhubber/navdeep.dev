# navdeep.dev

Personal website for Navdeep Singh, built with React, TypeScript, and Vite.

## Run locally

```sh
npm ci
npm run dev
```

Create a production build with `npm run build`. The generated site is in `dist/`.

## Pages and content

The site has Home, About, Security, Engineering, and Contact pages. A Projects page is already implemented for future personal work. Add entries to `personalProjects` in `src/data.ts`; the Projects link appears automatically when the array contains at least one project.

The flow diagrams are editable SVG assets in `public/diagrams/`, with dark variants in `public/diagrams/dark/`. The home diagram is an inline SVG in `src/Diagram.tsx`. The theme switch in the header saves the choice in the browser. Text, links, cards, and navigation are native HTML rendered by React. Update the resume at `public/Navdeep-Singh-Resume.pdf` when needed.

The site is hosted through Sites using `.openai/hosting.json`. The custom domain `navdeep.dev` has not been connected here.

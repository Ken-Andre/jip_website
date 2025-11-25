# Next.js Migration Walkthrough

## Overview
The JIP website has been successfully migrated from Astro to Next.js. The new project is located in `jip-next`.

## Key Changes
- **Framework**: Moved to Next.js 15 (App Router).
- **Styling**: Tailwind CSS with Shadcn UI components.
- **State Management**: React Context for Theme and Language.
- **Components**: Recreated all core components (Header, Footer, Hero, etc.) as React components.
- **Pages**: Migrated all pages to the `app/` directory structure.
- **Assets**: Copied existing assets from `pastors-day-website` to `public/images`.

## Verification
- The project builds and runs successfully (`npm run dev`).
- Public assets have been copied and organized.
- Core functionalities (Theme toggle, Language switching placeholder) are implemented.
- Build errors (Tailwind, TypeScript) have been resolved.

## Next Steps
- **Keystatic Integration**: Configure Keystatic for content management in Next.js.
- **Content Migration**: Move markdown content to Keystatic collections or a CMS.
- **Fine-tuning**: Adjust animations and responsive behavior if needed.

## How to Run
```bash
cd jip-next
npm run dev
```
Access the site at `http://localhost:3001` (or 3000 if available).

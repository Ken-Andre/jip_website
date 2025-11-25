# Project Structure

## Root Organization

```
journee-internationale-pasteurs/
├── src/                    # Source code
├── public/                 # Static assets (served as-is)
├── dist/                   # Build output (generated)
├── .astro/                 # Astro cache and types
└── [config files]          # astro.config.mjs, tailwind.config.js, etc.
```

## Source Directory (`src/`)

### Assets (`src/assets/`)
- **animations/** - SVG animations (spinner, pulse)
- **icons/** - UI icons (SVG format)
- **images/** - Visual content (hero banners, logos, patterns, testimonials)
- **styles/** - Global CSS, variables, Starlight overrides
- **videos/** - Video content (currently empty)
- **fonts/** - Custom fonts (currently empty)

### Content (`src/content/`)
- **docs/fr/** - French markdown content pages
- **docs/en/** - English markdown content pages
- **i18n/** - Translation JSON files (en.json, fr.json)
- **content.config.ts** - Content collection schemas

### Components (`src/components/`)
- **Header.astro** - Site header with navigation
- **Footer.astro** - Site footer

### Pages (`src/pages/`)
- Root level: French pages (index.astro, vision.astro, etc.)
- **fr/** - French locale pages
- **en/** - English locale pages
- **api/** - API endpoints (currently empty)

### Layouts (`src/layouts/`)
- Page layout templates (closed folder)

### Utils (`src/utils/`)
- Utility functions and helpers (currently empty)

## Public Directory (`public/`)

- **files/** - Downloadable resources (posters, logos, media kit)
- **admin/** - CMS admin interface (if applicable)
- Favicon and manifest files

## Content Organization

### Pages Principales (Structure du Site)

1. **Page d'accueil** (index.md)
   - Bandeau principal avec visuel officiel
   - Slogan : "Honorer ceux qui veillent sur nos âmes"
   - Date de la JIP
   - Boutons CTA : S'inscrire / Faire un don / En savoir plus
   - Vidéo courte ou slider
   - Aperçu du fondateur
   - Aperçu du programme
   - Compteur de jours restants
   - Témoignages

2. **La Vision** (vision.md)
   - Origine de la Journée Internationale de Pasteur
   - Pourquoi cette journée ?
   - Mission, but, valeurs
   - Impact mondial attendu

3. **Le Fondateur — Pasteur Patrick** (fondateur.md)
   - Section très mise en valeur
   - Portrait professionnel
   - Biographie inspirante
   - Comment Dieu lui a donné la vision
   - Parcours ministériel
   - Œuvres, impact, missions
   - Photos officielles
   - Citation forte
   - Vidéo de présentation (optionnel)

4. **Le Programme** (programme.md)
   - Déroulement de la journée
   - Activités prévues
   - Célébrations internationales

5. **Participation** (participation.md)
   - Formulaire d'inscription
   - Participation en ligne ou physique
   - Enregistrement des églises partenaires
   - Formulaire volontaires

6. **Ressources** (ressources.md)
   - Kit média (logos, affiches, bannières)
   - Vidéos de promotion
   - Documents téléchargeables

7. **Galerie** (galerie.md)
   - Photos officielles du fondateur
   - Vidéos et témoignages

8. **Dons et Soutien** (dons.md)
   - Page pour les contributions
   - Moyens de paiement (Mobile Money, PayPal, carte bancaire)

9. **Contact** (contact.md)
   - Formulaire de contact
   - Email officiel
   - Adresse/siège de l'organisation
   - Réseaux sociaux

### Markdown Pages (French)
- index.md - Page d'accueil
- vision.md - La vision et mission
- fondateur.md - Le fondateur (Pasteur Patrick)
- programme.md - Programme de l'événement
- participation.md - Comment participer
- ressources.md - Ressources et téléchargements
- galerie.md - Galerie photos/vidéos
- dons.md - Dons et soutien
- contact.md - Contact

### Markdown Pages (English)
- index.md - Homepage
- vision.md - Vision and mission
- founder.md - Founder information
- program.md - Event program

## Configuration Files

- **astro.config.mjs** - Astro and Starlight configuration
- **tailwind.config.js** - Tailwind theme customization
- **postcss.config.js** - PostCSS configuration
- **package.json** - Dependencies and scripts

## Naming Conventions

- **Files**: kebab-case (e.g., `hero-banner.jpg`)
- **Components**: PascalCase (e.g., `Header.astro`)
- **Assets**: Descriptive names with context (e.g., `gallery-placeholder-1.svg`)
- **Locales**: ISO language codes (fr, en)

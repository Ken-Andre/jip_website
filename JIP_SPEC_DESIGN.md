# JIP Design Document
## Journée Internationale des Pasteurs — Architecture et Structure

---

## Overview

Ce document décrit l'architecture technique complète du site vitrine **Journée Internationale des Pasteurs (JIP)**, une plateforme statique, moderne et inspirante destinée à présenter l'événement, valoriser le fondateur Pasteur Patrick, et faciliter la participation des communautés chrétiennes africaines.

### Objectives
- Créer une plateforme web officialisée et inspirante
- Présenter la vision et le programme de la JIP
- Valoriser Pasteur Patrick et son impact ministériel
- Faciliter inscriptions, dons, et participation
- Maintenance autonome via édition Markdown directe dans Starlight
- Scalabilité progressive sans frais additionnels

### Scope
- **Framework**: Astro 4.x (SSG statique)
- **Docs**: Starlight (thème de documentation Astro avec édition Markdown native)
- **Gestion contenu**: Fichiers Markdown (.md) dans src/content/docs/ (pas de CMS externe)
- **Hébergement**: Netlify (gratuit)
- **Domaine**: .netlify.site (gratuit Phase 1)
- **Multilingue**: Français + Anglais (structure /fr/ et /en/)
- **Budget**: 0€ Année 1, max 15€/an futur

---

## Architecture

### High-Level Stack

```
┌─────────────────────────────────────────────────────────────┐
│                    Browser / Client                         │
├─────────────────────────────────────────────────────────────┤
│  Static HTML + CSS + JavaScript (Astro-generated)           │
│  Performance: Lighthouse 90+, < 2s load time                │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│                    Netlify CDN                              │
├─────────────────────────────────────────────────────────────┤
│  Global distribution, HTTPS, compression, caching           │
│  Auto-deployed on git push                                  │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│                    GitHub Repo                              │
├─────────────────────────────────────────────────────────────┤
│  Source code + Markdown content versionning                 │
│  Starlight theme (built-in docs interface)                  │
│  i18n support intégré                                       │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow

```
Content Editor (Team)
        ↓
Markdown Files (src/content/docs/)
        ↓
Git Commit + Push (GitHub)
        ↓
GitHub Actions (optional CI/CD)
        ↓
Netlify Deploy Hook
        ↓
Astro Build (generate static HTML)
        ↓
CDN Deploy (Netlify edge)
        ↓
Live Site (https://jip-official.netlify.app)
        ↓
Users visit & see updated content
```

---

## Components Structure

### Project Layout

```
journee-internationale-pasteurs/
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── NavBar.astro
│   │   ├── HeroSection.astro
│   │   ├── BudgetCard.astro     (for donation display)
│   │   ├── TestimonialCard.astro
│   │   ├── GalleryGrid.astro
│   │   └── FormInputs.astro
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro     # Main template wrapper
│   │   ├── PageLayout.astro     # Standard page layout
│   │   └── BlogLayout.astro     # If blog added later
│   │
│   ├── pages/                   # Routed pages (auto-routing)
│   │   ├── index.astro          # Homepage /
│   │   ├── fr/
│   │   │   ├── index.astro      # /fr/
│   │   │   ├── vision.astro     # /fr/vision
│   │   │   ├── fondateur.astro  # /fr/fondateur
│   │   │   ├── programme.astro  # /fr/programme
│   │   │   ├── participation.astro
│   │   │   ├── ressources.astro
│   │   │   ├── galerie.astro
│   │   │   ├── dons.astro
│   │   │   ├── contact.astro
│   │   │   ├── faq.astro
│   │   │   └── 404.astro
│   │   │
│   │   ├── en/
│   │   │   ├── index.astro      # /en/
│   │   │   ├── vision.astro     # /en/vision
│   │   │   └── ... (same structure)
│   │   │
│   │   └── api/
│   │       ├── contact.js       # POST /api/contact
│   │       ├── inscription.js   # POST /api/inscription
│   │       └── newsletter.js    # POST /api/newsletter (optionnel)
│   │
│   ├── content/                 # Contenu Markdown (Starlight)
│   │   └── docs/                # Contenu documentation Starlight
│   │       ├── fr/              # Version française
│   │       │   ├── index.md     # Page d'accueil
│   │       │   ├── vision.md    # Vision
│   │       │   ├── fondateur.md
│   │       │   ├── programme.md
│   │       │   └── ... (autres pages)
│   │       └── en/              # Version anglaise
│   │           ├── index.md     # Home page
│   │           ├── vision.md    # Vision
│   │           ├── founder.md
│   │           ├── program.md
│   │           └── ... (other pages)
│   │
│   ├── assets/
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   ├── variables.css
│   │   │   └── responsive.css
│   │   ├── fonts/
│   │   │   ├── playfair-display.woff2
│   │   │   └── montserrat.woff2
│   │   ├── images/
│   │   │   ├── logo-jip.svg
│   │   │   ├── hero-banner.jpg
│   │   │   ├── pastor-patrick.jpg
│   │   │   └── ... (autres images)
│   │   ├── icons/
│   │   │   ├── calendar.svg
│   │   │   ├── map-pin.svg
│   │   │   ├── users.svg
│   │   │   └── ... (autres icônes)
│   │   └── videos/
│   │       └── (liens YouTube uniquement, pas local)
│   │
│   └── utils/
│       ├── dateFormatter.js
│       ├── constants.js
│       ├── i18n.js              # Multilingue
│       └── validators.js
│
├── public/
│   ├── files/                   # Downloadable media kit
│   │   ├── kit-media-v1.pdf
│   │   ├── logo-jip.svg
│   │   ├── affiche-a4.png
│   │   └── banniere-web.png
│   │
│   ├── robots.txt
│   └── sitemap.xml (auto-generated)
│
├── config/
│   └── astro.config.mjs         # Astro + Starlight config
│
├── .github/
│   └── workflows/
│       └── deploy.yml           # Optional CI/CD
│
├── package.json
├── tsconfig.json
├── .gitignore
├── README.md
└── MAINTENANCE.md               # Documentation pour équipe
```

---

## Design System

### Palette de Couleurs

```
Primaire: Violet (#6B3FB5) — Authority, Spirituality
Secondaire: Doré (#D4AF37) — Excellence, Honor
Accent: Blanc (#FFFFFF) — Clarity, Purity
Texte: Noir (#1F1F1F) — Strong contrast
Fond: Crème (#F5F5F0) — Warm, inviting
```

### Typographies

```
Titres: Playfair Display (serif, elegant)
Corps: Montserrat (sans-serif, modern)
Code: IBM Plex Mono (monospace, if needed)
```

### Component Patterns

```
Buttons:
- Primary: Violet bg, White text, 12px padding, 8px radius
- Secondary: Transparent bg, Violet border, Violet text
- Hover: Opacity increase (0.9)

Cards:
- White bg, subtle shadow (0 2px 4px rgba(0,0,0,0.08))
- 12px border-radius
- 16px internal padding
- Hover: shadow increase (0 8px 16px rgba(0,0,0,0.12))

Form Inputs:
- Border: 1px solid #E0E0E0
- Padding: 12px 16px
- Focus: Violet border, outline: 2px Violet
- Error: Red border (#FF4444)

Spacing Grid:
- 8px base unit
- Multiples: 8, 16, 24, 32, 40, 48, 56, 64px
```

---

## Core Sections

### 1. Homepage (Accueil)

**Components:**
- Hero section (image + slogan + CTA buttons)
- Countdown timer (jours restants, GMT+1)
- Quick program overview
- Testimonials carousel
- Founder preview (with link to full page)
- Call-to-actions

**Contenu éditable via Markdown (frontmatter):**
- Slogan/tagline
- Hero image URL
- Program highlights (top 3)
- Featured testimonial
- Founder preview text

### 2. Vision Page

**Components:**
- Full vision statement
- Mission & objectives
- Values list (cards)
- Impact visualization
- Quote section

**Content editable:**
- Complete vision text
- Mission statement
- Values (name + description for each)
- Expected impact

### 3. Founder Page — Pasteur Patrick

**Components:**
- Professional portrait (large)
- Biography section (multi-paragraph)
- Ministry timeline or journey section
- Quote section (prominent display)
- Video embed (YouTube link)
- Impact metrics

**Content editable:**
- Full biography (500-800 words)
- Multiple photos (carousel)
- Key quotes
- Video URL (YouTube)
- Ministry highlights

### 4. Program Page

**Components:**
- Timeline or schedule grid
- Daily breakdown
- Activity cards with descriptions
- Speaker info (if applicable)
- Download program button

**Content editable:**
- Program date/time
- Activities list (title + description)
- Speakers (name + role)
- PDF download link

### 5. Participation Page

**Components:**
- Registration form (Astro API endpoint)
- Participation type selector
- Confirmation message
- FAQ integration
- Partner registration option

**API Endpoints:**
- POST /api/inscription (form submit)
- POST /api/contact (support)

### 6. Resources Page

**Components:**
- Media kit download buttons
- Preview thumbnails
- Logos gallery
- Templates list
- Promotional materials

**Content editable:**
- File listings
- Download links (to /public/files)
- Descriptions

### 7. Gallery Page

**Components:**
- Masonry grid layout
- Lightbox modal
- Filter tabs (photos/videos)
- YouTube embedded videos
- Photo captions

**Content editable:**
- Photo URLs
- Video URLs (YouTube)
- Captions & descriptions

### 8. Donations Page

**Components:**
- Mission/goal statement
- Donation request cards
- Mobile Money info (text + account numbers)
- Transparency info
- Contributor recognition (optional)

**Content editable:**
- Donation text
- Account numbers
- Fund allocation breakdown

### 9. Contact Page

**Components:**
- Contact form (name, email, subject, message)
- Contact info display
- Social media links
- Location map (Google Maps embed)
- Hours of availability

**API Endpoints:**
- POST /api/contact (form submit)

### 10. FAQ Page

**Components:**
- Accordion/collapsible list
- Search functionality (JS)
- Categories (tabs)
- Related questions links

**Content editable:**
- QA list (via fichiers Markdown avec frontmatter)
- Categories

---

## Configuration Starlight

### Configuration générale (`astro.config.mjs`)

```javascript
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://journee-internationale-pasteurs.netlify.app',
  integrations: [
    starlight({
      title: 'Journée Internationale des Pasteurs',
      customCss: [
        './src/assets/styles/variables.css',
        './src/assets/styles/starlight.css'
      ],
      sidebar: [
        { label: 'Accueil', link: '/fr/' },
        { label: 'À propos', items: [
          { label: 'Notre Vision', link: '/fr/vision' },
          { label: 'Fondateur', link: '/fr/fondateur' },
          { label: 'Programme', link: '/fr/programme' }
        ]},
        { label: 'Participation', link: '/fr/participation' },
        { label: 'Ressources', link: '/fr/ressources' },
        { label: 'Galerie', link: '/fr/galerie' },
        { label: 'Faire un don', link: '/fr/dons' },
        { label: 'Contact', link: '/fr/contact' },
        { label: 'FAQ', link: '/fr/faq' }
      ],
      social: [
        { label: 'Facebook', href: 'https://facebook.com/...', icon: 'facebook' },
        { label: 'YouTube', href: 'https://youtube.com/...', icon: 'youtube' }
      ],
      defaultLocale: 'fr',
      locales: {
        fr: { label: 'Français', lang: 'fr' },
        en: { label: 'English', lang: 'en' }
      }
    })
  ]
});
```

### Structure de Contenu Markdown

**Fichiers de contenu** dans `src/content/docs/` :
- Chaque page = fichier `.md` avec frontmatter YAML
- Structure i18n via dossiers `/fr/` et `/en/`
- Navigation automatique via sidebar config dans astro.config.mjs
- Édition directe des fichiers .md (pas de CMS externe)
- Frontmatter exemple:
  ```yaml
  ---
  title: "Notre Vision"
  description: "Découvrez la vision de la Journée Internationale des Pasteurs"
  ---
  ```
- Personnalisation via frontmatter et composants MDX optionnels

---

## Forms & API

### Registration Form

**Fields:**
- Full name (required)
- Email (required, validated)
- Phone (optional)
- Church/Organization (optional)
- Participation type (online/physical/volunteer)
- Message (optional)

**Endpoint:** POST /api/inscription
**Response:** JSON confirmation + email via FormSubmit.co

### Contact Form

**Fields:**
- Name (required)
- Email (required)
- Subject (required)
- Message (required)

**Endpoint:** POST /api/contact
**Response:** JSON + email notification

### Newsletter Form (Optional)

**Fields:**
- Email (required)

**Endpoint:** POST /api/newsletter
**Service:** Brevo/SendGrid (freemium)

---

## Technical Specifications

### Performance Targets
- Lighthouse Score: ≥ 90 (mobile + desktop)
- Load Time: < 2 seconds (first contentful paint)
- Time to Interactive: < 3 seconds
- Memory: < 50MB browser footprint

### SEO Requirements
- Meta tags (title, description, og:image, og:type)
- Auto-generated sitemap.xml
- robots.txt included
- JSON-LD structured data for event
- Mobile-friendly responsive design

### Accessibility (WCAG 2.1 AA)
- Text contrast: 4.5:1 minimum
- ARIA labels on forms and images
- Focus states visible on all interactive elements
- Alt text on all images
- Keyboard navigable

### Security
- HTTPS (auto Netlify)
- CORS configured for FormSubmit.co
- XSS protection (Astro native)
- No sensitive data in client code
- Environment variables for API keys

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile: iOS 12+, Android 8+

---

## Deployment Pipeline

### Step 1: Setup (Day 1)
1. Create GitHub repo
2. Initialize Astro project with Starlight
3. Setup Netlify integration
4. Configure Starlight theme and navigation
5. Deploy initial skeleton avec contenu de base

### Step 2: Content Structure (Day 1-2)
1. Create page templates Markdown (.md)
2. Setup content structure i18n (/fr/ et /en/)
3. Implement sidebar navigation Starlight
4. Create form endpoints

### Step 3: Design & Styling (Day 2-3)
1. Implement design system
2. Customize theme Starlight avec variables JIP
3. Responsive testing
4. Animation/transition polish

### Step 4: Content Integration (Day 3)
1. Populate pages with LLM-generated content Markdown
2. Upload media assets
3. Configure navigation et métadonnées Starlight
4. User training docs (édition Markdown)

### Step 5: Testing & Launch (Day 4)
1. Cross-browser testing
2. Performance audit (Lighthouse)
3. Accessibility audit
4. SEO verification
5. Launch to production

### Step 6: Handover (Day 5)
1. Team documentation
2. Formation édition Markdown
3. Maintenance procedures
4. Support setup

---

## Édition et Gestion du Contenu

### Workflow d'Édition Markdown

**Pour mettre à jour le contenu du site :**

1. **Cloner le repository Git** localement ou éditer directement sur GitHub
2. **Naviguer vers** `src/content/docs/fr/` (français) ou `src/content/docs/en/` (anglais)
3. **Éditer les fichiers .md** avec n'importe quel éditeur de texte :
   - VSCode (recommandé, avec extension Markdown)
   - GitHub web editor
   - Obsidian, Typora, ou autre éditeur Markdown
4. **Commiter et pusher** les modifications sur GitHub
5. **Netlify déploie automatiquement** le site mis à jour (2-3 minutes)

**Exemple de modification :**

```markdown
---
title: "Notre Vision"
description: "La vision de la JIP"
---

# Notre Vision

Honorer ceux qui veillent sur nos âmes...

## Mission

- Former les pasteurs
- Encourager les leaders
- ...
```

### Avantages de l'Édition Markdown

- ✅ **Simplicité** : Syntaxe Markdown intuitive et facile à apprendre
- ✅ **Versioning** : Historique complet dans Git (retour arrière facile)
- ✅ **Pas de dépendance** : Pas besoin de CMS externe ou interface admin
- ✅ **Flexibilité** : N'importe quel éditeur de texte peut être utilisé
- ✅ **Performance** : Pas de couche CMS supplémentaire
- ✅ **Collaboratif** : Workflow Git natif (branches, pull requests, reviews)

---

## Maintenance Procedures

### Post-Launch Support (7 days)
- Daily monitoring for errors
- Quick bug fixes
- Content updates as needed
- Performance verification

### Ongoing Maintenance (Monthly)
- Content updates via édition Markdown (src/content/docs/)
- Social media link updates
- Dependency updates (npm)
- Analytics review
- Validation des traductions i18n (/fr/ et /en/)

### Annual Tasks
- Domain renewal (if switching from .netlify.site)
- SSL certificate check (auto Netlify)
- Backup verification
- Security audit

---

## Future Enhancements

1. **Streaming Live**: YouTube integration for live stream
2. **Event Ticketing**: Eventbrite or similar integration
3. **Blog/News**: Dynamic blog section
4. **Testimonials Video**: YouTube playlist of testimonials
5. **Partner Directory**: Searchable partner listings
6. **Newsletter Archive**: Email archive accessible
7. **Analytics Dashboard**: Custom dashboard for admins

# JIP Design Document (Refined v2.0)
## Journée Internationale des Pasteurs — Architecture Starlight

**Version:** 2.0 - Astro 5 & Starlight Best Practices  
**Date:** 24 novembre 2025  
**Framework:** Starlight (Astro 5.0+)

---

## 🎯 Architecture Philosophy

### Hybrid Architecture
Ce projet utilise une **Architecture Hybride** :
1.  **Site Vitrine (Root)** : Layouts Astro Custom pour un design premium, sans les contraintes de Starlight.
2.  **Documentation (`/docs`)** : Starlight pour la documentation technique/utilisateur.
3.  **CMS (Keystatic)** : Gestion de contenu visuelle.

### Key Design Principles
1. **Content-First** : Markdown pour tout le contenu éditable
2. **Progressive Enhancement** : HTML/CSS de base, JS uniquement si nécessaire
3. **Mobile-First** : Responsive par défaut
4. **Accessibility** : WCAG 2.1 AA minimum
5. **Performance** : Lighthouse ≥90, Core Web Vitals optimisés

---

## Project Structure (Starlight Native)

```
journee-internationale-pasteurs/
├── src/
│   ├── components/              # Composants Astro interactifs
│   │   ├── CountdownTimer.astro # Compte à rebours JIP (client:load)
│   │   ├── HeroSection.astro    # Hero personnalisé pour homepage
│   │   ├── RegistrationForm.astro # Formulaire inscription (client:load)
│   │   ├── ContactForm.astro    # Formulaire contact (client:load)
│   │   ├── GalleryGrid.astro    # Grille photos (client:visible)
│   │   ├── Lightbox.astro       # Modal lightbox (client:idle)
│   │   ├── VideoEmbed.astro     # YouTube embed responsive
│   │   ├── TestimonialCard.astro # Carte témoignage
│   │   ├── Accordion.astro      # FAQ accordion
│   │   └── Quote.astro          # Citation stylisée
│   │
│   ├── content/                 # Contenu
│   │   ├── config.ts            # Collections definitions
│   │   ├── pages/               # Contenu Site Vitrine (Géré par Keystatic)
│   │   │   ├── home.md
│   │   │   ├── vision.md
│   │   │   └── ...
│   │   └── docs/                # Contenu Documentation (Starlight)
│   │       ├── fr/
│   │       └── en/
│   │
│   ├── layouts/
│   │   └── MarketingLayout.astro # Layout Custom (Header/Footer, No Sidebar)
│   │
│   ├── pages/                   # Routing
│   │   ├── [lang]/              # Routes dynamiques i18n
│   │   │   ├── index.astro      # Homepage
│   │   │   └── [slug].astro     # Pages standards
│   │   ├── api/                 # API Endpoints
│   │   └── keystatic/           # CMS Admin Route
│   │
│   ├── assets/                  # Assets statiques
│   │
│   └── assets/                  # Assets statiques
│       ├── styles/
│       │   ├── variables.css    # Variables design JIP
│       │   ├── starlight.css    # Overrides theme Starlight
│       │   └── globals.css      # Styles globaux
│       ├── images/              # Images optimisées (via astro:assets)
│       │   ├── logo-jip.svg
│       │   ├── hero-banner.jpg
│       │   ├── pastor-patrick.png
│       │   └── ...
│       ├── icons/               # Icônes SVG
│       └── fonts/               # Fonts self-hosted (WOFF2)
│
├── public/                      # Fichiers statiques servis tels quels
│   ├── files/                   # Kit média téléchargeable
│   │   ├── logo-jip.svg
│   │   ├── affiche-a4.pdf
│   │   └── banniere-web.png
│   ├── favicon.svg              # Favicon
│   └── robots.txt               # SEO
│
├── astro.config.mjs             # Configuration Astro + Starlight
├── tailwind.config.js           # Configuration Tailwind (optionnel)
├── tsconfig.json                # TypeScript config
├── package.json
└── README.md
```

### Key Differences vs v1.0
| Aspect | v1.0 (Custom) | v2.0 (Starlight) |
|--------|---------------|------------------|
| **Pages** | `src/pages/*.astro` | `src/pages/[lang]/*.astro` + `src/content/docs` |
| **Routing** | File-based manual | Dynamic `[lang]` + Starlight auto (`/docs`) |
| **Layouts** | Custom layouts | `MarketingLayout` (Custom) + Starlight (Docs) |
| **Navigation** | Custom Header/Footer | Custom Header/Footer (Main) + Sidebar (Docs) |
| **i18n** | Middleware custom | Custom `[lang]` routing + Starlight locales |
| **CMS** | Decap CMS | **Keystatic** |

---

## Design System

### Palette de Couleurs (CSS Variables JIP)

```css
/* src/assets/styles/variables.css */
:root {
  /* === Couleurs Primaires JIP === */
  --color-primary: #6B3FB5;        /* Violet - Authority, Spirituality */
  --color-primary-light: #8B5FD5;
  --color-primary-dark: #4B2F95;
  
  --color-secondary: #D4AF37;      /* Doré - Excellence, Honor */
  --color-secondary-light: #E4BF47;
  --color-secondary-dark: #B49F27;
  
  /* === Couleurs Neutres === */
  --color-white: #FFFFFF;          /* Purity, Clarity */
  --color-cream: #F5F5F0;          /* Warm background */
  --color-gray-100: #F0F0F0;
  --color-gray-300: #D0D0D0;
  --color-gray-500: #808080;
  --color-gray-700: #404040;
  --color-black: #1F1F1F;          /* Strong text contrast */
  
  /* === Couleurs Sémantiques === */
  --color-success: #10B981;
  --color-error: #EF4444;
  --color-warning: #F59E0B;
  --color-info: #3B82F6;
  
  /* === Typographie === */
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Montserrat', 'Segoe UI', system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', 'Courier New', monospace;
  
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */
  --font-size-5xl: 3rem;      /* 48px */
  
  /* === Spacing (8px grid) === */
  --space-0: 0;
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-5: 1.25rem;  /* 20px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2rem;     /* 32px */
  --space-10: 2.5rem;  /* 40px */
  --space-12: 3rem;    /* 48px */
  --space-16: 4rem;    /* 64px */
  
  /* === Shadows === */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
  
  /* === Border Radius === */
  --radius-sm: 0.375rem;  /* 6px */
  --radius-md: 0.5rem;    /* 8px */
  --radius-lg: 0.75rem;   /* 12px */
  --radius-xl: 1rem;      /* 16px */
  --radius-full: 9999px;
  
  /* === Transitions === */
  --transition-fast: 150ms ease-in-out;
  --transition-base: 250ms ease-in-out;
  --transition-slow: 350ms ease-in-out;
}
```

### Starlight Theme Overrides

```css
/* src/assets/styles/starlight.css */
:root {
  /* Override Starlight accent colors with JIP brand */
  --sl-color-accent-low: var(--color-primary-light);
  --sl-color-accent: var(--color-primary);
  --sl-color-accent-high: var(--color-primary-dark);
  
  --sl-color-accent-2-low: var(--color-secondary-light);
  --sl-color-accent-2: var(--color-secondary);
  --sl-color-accent-2-high: var(--color-secondary-dark);
  
  /* Typography */
  --sl-font: var(--font-sans);
  --sl-font-headings: var(--font-serif);
  
  /* Spacing adjustments */
  --sl-content-width: 65rem; /* Max width content area */
  --sl-sidebar-width: 18rem; /* Sidebar width */
}

/* Custom hero styling for homepage */
.sl-markdown-content > .hero {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: var(--color-white);
  padding: var(--space-16) var(--space-8);
  border-radius: var(--radius-lg);
  text-align: center;
}

/* Custom button styles */
.btn-primary {
  background: var(--color-primary);
  color: var(--color-white);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: all var(--transition-base);
}

.btn-primary:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* Card component styles */
.card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition-base);
}

.card:hover {
  box-shadow: var(--shadow-lg);
}
```

---

## Component Architecture

### 1. CountdownTimer Component

**Purpose:** Afficher compte à rebours temps réel jusqu'à JIP  
**Hydration:** `client:load` (nécessaire dès page load)  
**Location:** `src/components/CountdownTimer.astro`

[See full component code in requirements document]

---

### 2. RegistrationForm Component

**Purpose:** Formulaire inscription avec validation  
**Hydration:** `client:load` (interactivité immédiate)  
**Location:** `src/components/RegistrationForm.astro`

[See full component code in requirements document]

---

### 3-10. Additional Components

*(Suivent même structure : Props, Hydration, Script client-side, Style scoped)*

- **ContactForm** : Similaire RegistrationForm
- **GalleryGrid** : Masonry CSS Grid, lazy loading images
- **Lightbox** : Modal overlay pour images agrandies
- **VideoEmbed** : YouTube iframe responsive
- **TestimonialCard** : Card layout citation + avatar
- **Accordion** : FAQ collapsible sections
- **Quote** : Blockquote stylisé

---

## Responsive Design Strategy

### Breakpoints (Tailwind Standards)
```css
/* Mobile-first approach */
/* Base: 320px+ (mobile) */

@media (min-width: 640px) {  /* sm: tablet portrait */
@media (min-width: 768px) {  /* md: tablet landscape */
@media (min-width: 1024px) { /* lg: desktop */
@media (min-width: 1280px) { /* xl: large desktop */
@media (min-width: 1536px) { /* 2xl: extra large */
```

### Responsive Patterns
- **Navigation:** Hamburger menu < 768px, full sidebar ≥ 768px (Starlight natif)
- **Images:** Responsive srcset automatic (Astro `<Image />`)
- **Typography:** Fluid scales via `clamp()`
- **Grid:** Auto-fit columns CSS Grid

---

## Accessibility Checklist

### WCAG 2.1 AA Requirements
- [ ] Heading hierarchy correct (h1 → h6)
- [ ] Alt text sur toutes images
- [ ] Labels sur tous form inputs
- [ ] Contraste couleur ≥ 4.5:1 texte, 3:1 UI
- [ ] Navigation clavier complète
- [ ] Focus indicators visibles
- [ ] ARIA labels où nécessaire
- [ ] Responsive zoom jusqu'à 200%
- [ ] Pas d'information couleur seule
- [ ] Video captions disponibles

---

## Performance Optimization

### Astro 5 Built-in
- ✅ Static Site Generation (HTML pré-généré)
- ✅ Zero-JS par défaut
- ✅ Partial Hydration (Islands)
- ✅ Image optimization automatique
- ✅ CSS scoped (pas de global bloat)
- ✅ Content Layer API (builds 5x faster)

### Additional Optimizations
- Font subsetting WOFF2 Latin uniquement
- SVG icons inline (pas de requests HTTP)
- Lazy loading images `loading="lazy"`
- Critical CSS inline (Starlight handle)
- CDN Netlify Edge global

---

## Build & Deploy Pipeline

### Development
```bash
npm run dev          # Dev server localhost:4321
npm run build        # Production build → dist/
npm run preview      # Preview production build
npm run astro check  # TypeScript & link checking
```

### Netlify Deployment
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/"
  to = "/fr/"
  status = 302
  
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

---

**Document validé:** 24 novembre 2025  
**Starlight Version:** Latest  
**Astro Version:** 5.0+

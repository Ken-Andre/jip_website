# JIP Design Document (Refined v2.0)
## Journée Internationale des Pasteurs — Architecture Starlight

**Version:** 2.0 - Astro 5 & Starlight Best Practices  
**Date:** 24 novembre 2025  
**Framework:** Starlight (Astro 5.0+)

---

## 🎯 Architecture Philosophy

### Starlight-First Approach
Ce projet utilise **Starlight** comme framework de base, pas Astro custom pages. Starlight est le framework de documentation officiel d'Astro, optimisé pour:
- Documentation sites (mais adaptable pour sites vitrines)
- Performance maximale (SSG, zero-JS par défaut)
- i18n natif
- SEO automatique
- Navigation/sidebar pré-configurés

### Key Design Principles
1. **Content-First** : Markdown pour tout le contenu édit

able
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
│   ├── content/                 # Contenu Starlight (Content Layer)
│   │   ├── config.ts            # Collections: docs + i18n
│   │   ├── docs/                # Pages documentation Starlight
│   │   │   ├── fr/              # Version française
│   │   │   │   ├── index.md     # Homepage
│   │   │   │   ├── vision.md    # Vision & Mission
│   │   │   │   ├── fondateur.md # Pasteur Patrick
│   │   │   │   ├── programme.md # Programme 6 jours
│   │   │   │   ├── participation.md # Inscription
│   │   │   │   ├── ressources.md # Kit média
│   │   │   │   ├── galerie.md   # Photos/vidéos
│   │   │   │   ├── dons.md      # Dons Mobile Money
│   │   │   │   ├── contact.md   # Contact
│   │   │   │   └── faq.md       # FAQ
│   │   │   └── en/              # Version anglaise
│   │   │       ├── index.md     # Home
│   │   │       ├── vision.md    # Vision
│   │   │       ├── founder.md   # Founder
│   │   │       ├── program.md   # Program
│   │   │       ├── participation.md
│   │   │       ├── resources.md
│   │   │       ├── gallery.md
│   │   │       ├── donations.md
│   │   │       ├── contact.md
│   │   │       └── faq.md
│   │   └── i18n/                # Traductions UI (optionnel, via i18nLoader)
│   │       ├── fr.json          # Labels UI français
│   │       └── en.json          # Labels UI anglais
│   │
│   ├── pages/                   # API endpoints uniquement (pas de pages custom)
│   │   └── api/
│   │       ├── inscription.ts   # POST /api/inscription
│   │       └── contact.ts       # POST /api/contact
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
| **Pages** | `src/pages/*.astro` | `src/content/docs/*.md` |
| **Routing** | File-based manual | Starlight automatic |
| **Layouts** | Custom layouts | Starlight theme |
| **Navigation** | Custom Header/Footer | Starlight sidebar |
| **i18n** | Middleware custom | Starlight locales config |
| **Sidebar** | Manual component | Auto-generated from config |

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

```astro
---
const targetDate = new Date('2025-07-15T00:00:00+01:00'); // GMT+1
const now = new Date();
const diff = Math.max(0, targetDate - now);

// Server-side initial values
const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
---

<div class="countdown" data-target={targetDate.toISOString()}>
  <div class="countdown-item">
    <span class="countdown-value" data-days>{days}</span>
    <span class="countdown-label">jours</span>
  </div>
  <div class="countdown-item">
    <span class="countdown-value" data-hours>{hours}</span>
    <span class="countdown-label">heures</span>
  </div>
  <div class="countdown-item">
    <span class="countdown-value" data-minutes>{minutes}</span>
    <span class="countdown-label">minutes</span>
  </div>
</div>

<script>
  // Client-side hydration for real-time updates
  function updateCountdown() {
    const countdown = document.querySelector('.countdown');
    const target = new Date(countdown.dataset.target);
    const now = new Date();
    const diff = Math.max(0, target - now);
    
    if (diff === 0) {
      countdown.innerHTML = '<p class="text-xl font-bold">C\\'est aujourd\\'hui ! Rejoignez-nous.</p>';
      return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    countdown.querySelector('[data-days]').textContent = days;
    countdown.querySelector('[data-hours]').textContent = hours;
    countdown.querySelector('[data-minutes]').textContent = minutes;
  }
  
  // Update every second
  setInterval(updateCountdown, 1000);
  updateCountdown(); // Initial call
</script>

<style>
  .countdown {
    display: flex;
    gap: var(--space-6);
    justify-content: center;
    margin: var(--space-8) 0;
  }
  
  .countdown-item {
    text-align: center;
    min-width: 100px;
  }
  
  .countdown-value {
    display: block;
    font-size: var(--font-size-4xl);
    font-weight: bold;
    color: var(--color-primary);
  }
  
  .countdown-label {
    display: block;
    font-size: var(--font-size-sm);
    text-transform: uppercase;
    color: var(--color-gray-500);
  }
</style>
```

**Usage dans Markdown:**
```markdown
---
title: "Accueil"
---

import CountdownTimer from '@/components/CountdownTimer.astro';

# Bienvenue à la JIP 2025

<CountdownTimer client:load />

Plus que quelques jours avant l'événement !
```

---

### 2. RegistrationForm Component

**Purpose:** Formulaire inscription avec validation  
**Hydration:** `client:load` (interactivité immédiate)  
**Location:** `src/components/RegistrationForm.astro`

```astro
---
// Server-side props (optionnel)
interface Props {
  locale?: 'fr' | 'en';
}

const { locale = 'fr' } = Astro.props;

const labels = {
  fr: {
    name: 'Nom complet',
    email: 'Email',
    phone: 'Téléphone',
    church: 'Église',
    type: 'Type de participation',
    message: 'Message',
    submit: 'S\\'inscrire',
    success: 'Inscription confirmée ! Vérifiez votre email.',
    error: 'Erreur. Veuillez réessayer.'
  },
  en: {
    name: 'Full name',
    email: 'Email',
    phone: 'Phone',
    church: 'Church',
    type: 'Participation type',
    message: 'Message',
    submit: 'Register',
    success: 'Registration confirmed! Check your email.',
    error: 'Error. Please try again.'
  }
};

const t = labels[locale];
---

<form class="registration-form" data-locale={locale}>
  <div class="form-group">
    <label for="name">{t.name} *</label>
    <input 
      type="text" 
      id="name" 
      name="name" 
      required 
      minlength="2"
      aria-required="true"
    />
  </div>
  
  <div class="form-group">
    <label for="email">{t.email} *</label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      required
      aria-required="true"
    />
  </div>
  
  <div class="form-group">
    <label for="phone">{t.phone}</label>
    <input 
      type="tel" 
      id="phone" 
      name="phone"
      pattern="[+]?[0-9\\s\\-()]+"
    />
  </div>
  
  <div class="form-group">
    <label for="church">{t.church}</label>
    <input 
      type="text" 
      id="church" 
      name="church"
    />
  </div>
  
  <div class="form-group">
    <label for="type">{t.type} *</label>
    <select id="type" name="type" required>
      <option value="online">Online</option>
      <option value="physical">Physique</option>
      <option value="volunteer">Bénévole</option>
    </select>
  </div>
  
  <div class="form-group">
    <label for="message">{t.message}</label>
    <textarea 
      id="message" 
      name="message" 
      rows="4"
    ></textarea>
  </div>
  
  <button type="submit" class="btn-primary">
    {t.submit}
  </button>
  
  <div class="form-message" role="alert" aria-live="polite"></div>
</form>

<script>
  document.querySelectorAll('.registration-form').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      const messageEl = form.querySelector('.form-message');
      const submitBtn = form.querySelector('button[type="submit"]');
      
      // Disable button during submission
      submitBtn.disabled = true;
      submitBtn.textContent = 'Envoi...';
      
      try {
        const response = await fetch('/api/inscription', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (response.ok) {
          messageEl.textContent = result.message;
          messageEl.className = 'form-message success';
          form.reset();
        } else {
          throw new Error(result.message);
        }
      } catch (error) {
        messageEl.textContent = error.message || 'Erreur. Réessayez.';
        messageEl.className = 'form-message error';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = form.dataset.locale === 'fr' ? 'S\\'inscrire' : 'Register';
      }
    });
  });
</script>

<style>
  /* Form styles with JIP design system */
  .registration-form {
    max-width: 600px;
    margin: var(--space-8) auto;
  }
  
  .form-group {
    margin-bottom: var(--space-6);
  }
  
  label {
    display: block;
    margin-bottom: var(--space-2);
    font-weight: 600;
    color: var(--color-gray-700);
  }
  
  input, select, textarea {
    width: 100%;
    padding: var(--space-3) var(--space-4);
    border: 1px solid var(--color-gray-300);
    border-radius: var(--radius-md);
    font-size: var(--font-size-base);
    transition: border-color var(--transition-base);
  }
  
  input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(107, 63, 181, 0.1);
  }
  
  .form-message {
    margin-top: var(--space-4);
    padding: var(--space-4);
    border-radius: var(--radius-md);
    display: none;
  }
  
  .form-message.success {
    display: block;
    background: rgba(16, 185, 129, 0.1);
    color: var(--color-success);
    border: 1px solid var(--color-success);
  }
  
  .form-message.error {
    display: block;
    background: rgba(239, 68, 68, 0.1);
    color: var(--color-error);
    border: 1px solid var(--color-error);
  }
</style>
```

---

### 3-10. [Autres Composants]

*(Suivent même structure : Props, Hydration, Script client-side, Style scoped)*

- **ContactForm** : Similaire RegistrationForm
- **GalleryGrid** : Masonry CSS Grid, lazy loading images
- **Lightbox** : Modal overlay pour images agrandies
- **VideoEmbed** : YouTube iframe responsive
- **TestimonialCard** : Card layout citation + avatar
- **Accordion** : FAQ collapsible sections
- **Quote** : Blockquote stylisé

---

## Page Templates (Markdown)

### Homepage Template

**File:** `src/content/docs/fr/index.md`

```markdown
---
title: "Journée Internationale des Pasteurs 2025"
description: "Honorer ceux qui veillent sur nos âmes - 15-20 Juillet 2025"
template: splash
hero:
  title: |
    Journée Internationale
    des Pasteurs
  tagline: "Honorer ceux qui veillent sur nos âmes"
  image:
    file: ../../assets/images/hero-banner.jpg
    alt: "Pasteurs en prière"
  actions:
    - text: S'inscrire
      link: /fr/participation
      icon: right-arrow
      variant: primary
    - text: Faire un don
      link: /fr/dons
      icon: external
      variant: secondary
---

import CountdownTimer from '@/components/CountdownTimer.astro';
import TestimonialCard from '@/components/TestimonialCard.astro';

## Plus que...

<CountdownTimer client:load />

## Programme en bref

Du 15 au 20 Juillet 2025, rejoignez-nous pour 6 jours de:
- Formation spirituelle intensive
- Communion fraternelle
- Ateliers pratiques de leadership
- Moments de prière et d'intercession

[Voir le programme complet →](/fr/programme)

## Témoignages

<TestimonialCard
  quote="La JIP a transformé mon ministère. J'ai reçu une nouvelle vision."
  author="Pasteur Jean"
  role="Église Victoire, Douala"
  avatar="/images/testimonial-1.jpg"
/>

<TestimonialCard
  quote="Une expérience inoubliable de communion et d'apprentissage."
  author="Pasteur Marie"
  role="Assemblée de Dieu, Yaoundé"
  avatar="/images/testimonial-2.jpg"
/>

## Découvrez notre fondateur

[En savoir plus sur Pasteur Patrick →](/fr/fondateur)
```

---

### Vision Page Template

**File:** `src/content/docs/fr/vision.md`

```markdown
---
title: "Notre Vision"
description: "La vision et la mission de la Journée Internationale des Pasteurs"
sidebar:
  order: 1
---

import Quote from '@/components/Quote.astro';

# Notre Vision

## La Vision qui nous guide

[Contenu vision 500-800 mots ici...]

<Quote author="Pasteur Patrick">
"La vision de la JIP m'a été révélée durant une nuit de prière intense..."
</Quote>

## Notre Mission

Nous nous engageons à:

1. **Former** les pasteurs aux défis contemporains du ministère
2. **Encourager** les leaders spirituels dans leur appel
3. **Connecter** les serviteurs de Dieu à travers l'Afrique
4. **Équiper** l'Église pour l'évangélisation du continent

## Nos Valeurs

### Excellence Spirituelle
Description...

### Intégrité
Description...

### Service
Description...

### Unité
Description...

## Impact Attendu

- Former +1000 pasteurs d'ici 2030
- Planter 100 nouvelles églises
- Créer un réseau panafricain de leaders
```

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

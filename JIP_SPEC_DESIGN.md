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
- Maintenance autonome via CMS intuitif (Decap CMS)
- Scalabilité progressive sans frais additionnels

### Scope
- **Framework**: Astro 4.x (SSG statique)
- **CMS**: Decap CMS (GitHub-based)
- **Hébergement**: Netlify (gratuit)
- **Domaine**: .netlify.site (gratuit Phase 1)
- **Multilingue**: Français + Anglais
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
│  Source code versionning                                    │
│  Decap CMS backend (GitHub OAuth)                           │
│  CI/CD integration                                          │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│                  Decap CMS Admin                            │
├─────────────────────────────────────────────────────────────┤
│  /admin interface (drag-drop content editing)               │
│  WYSIWYG editor for markdown                                │
│  Image upload to GitHub                                     │
│  Workflow: Draft → Review → Publish                         │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow

```
Content Editor (Team) 
        ↓
Decap CMS Admin Interface (/admin)
        ↓
GitHub Commit (auto-push)
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
│   ├── content/                 # Contenu editable via CMS
│   │   ├── vision.md
│   │   ├── fondateur.md
│   │   ├── programme.md
│   │   ├── ressources.yml
│   │   ├── temoignages.yml
│   │   ├── partenaires.yml
│   │   └── faq.yml
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
│   ├── astro.config.mjs         # Astro config
│   └── decap-config.yml         # CMS config
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

**Content editable via CMS:**
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
- QA list (via CMS)
- Categories

---

## CMS Configuration (Decap)

### Collection: Pages

```yaml
- name: "pages"
  label: "Pages"
  folder: "src/content"
  create: true
  slug: "{{title}}"
  fields:
    - {label: "Page Title", name: "title", widget: "string"}
    - {label: "Description", name: "description", widget: "text"}
    - {label: "Content", name: "body", widget: "markdown"}
    - {label: "Featured Image", name: "image", widget: "image"}
```

### Collection: Founder

```yaml
- name: "founder"
  label: "Founder — Pasteur Patrick"
  file: "src/content/fondateur.md"
  fields:
    - {label: "Name", name: "name", widget: "string", default: "Pasteur Patrick"}
    - {label: "Biography", name: "biography", widget: "markdown"}
    - {label: "Portrait", name: "portrait", widget: "image"}
    - {label: "Quote", name: "quote", widget: "text"}
    - {label: "Video URL", name: "video_url", widget: "string"}
    - {label: "Ministry Focus", name: "ministry_focus", widget: "text"}
```

### Collection: Social Links

```yaml
- name: "social"
  label: "Social Media & Contact"
  file: "src/content/social.yml"
  fields:
    - {label: "Facebook URL", name: "facebook", widget: "string"}
    - {label: "Instagram URL", name: "instagram", widget: "string"}
    - {label: "TikTok URL", name: "tiktok", widget: "string"}
    - {label: "Email", name: "email", widget: "string"}
    - {label: "Phone (optional)", name: "phone", widget: "string"}
```

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
2. Initialize Astro project
3. Setup Netlify integration
4. Configure Decap CMS
5. Deploy initial skeleton

### Step 2: Content Structure (Day 1-2)
1. Create page templates
2. Setup content collections
3. Implement i18n routing
4. Create form endpoints

### Step 3: Design & Styling (Day 2-3)
1. Implement design system
2. Build core components
3. Responsive testing
4. Animation/transition polish

### Step 4: Content Integration (Day 3)
1. Populate pages with LLM-generated content
2. Upload media assets
3. Configure Decap CMS workflows
4. User training docs

### Step 5: Testing & Launch (Day 4)
1. Cross-browser testing
2. Performance audit (Lighthouse)
3. Accessibility audit
4. SEO verification
5. Launch to production

### Step 6: Handover (Day 5)
1. Team documentation
2. CMS training
3. Maintenance procedures
4. Support setup

---

## Maintenance Procedures

### Post-Launch Support (7 days)
- Daily monitoring for errors
- Quick bug fixes
- Content updates as needed
- Performance verification

### Ongoing Maintenance (Monthly)
- Content updates via Decap CMS
- Social media link updates
- Dependency updates (npm)
- Analytics review

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


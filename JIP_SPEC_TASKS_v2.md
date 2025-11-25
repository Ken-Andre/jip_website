# JIP Implementation Tasks (Refined v2.0)
## Journée Internationale des Pasteurs — Plan d'Action Starlight

**Version:** 2.0 - Astro 5 & Starlight Optimized  
**Date:** 24 novembre 2025  
**Duration:** ~7 jours (1 dev expert Astro)

---

## 🔄 Changements Majeurs vs v1.0

### Architecture Simplifiée
- ❌ **Removed:** Decap CMS setup tasks (incompatible Starlight)
- ✅ **Added:** Starlight configuration tasks
- ✅ **Simplified:** Content Layer API usage (docsLoader/i18nLoader)
- ✅ **Automatic:** Routing, sidebar, i18n via Starlight config

### Tasks Consolidation
| v1.0 Tasks | v2.0 Equivalent | Gain |
|------------|-----------------|------|
| Custom i18n middleware | Starlight locales config | -3h |
| Manual sidebar component | Starlight sidebar auto | -2h |
| Custom navigation | Starlight theme | -4h |
| Decap CMS setup | Git workflow docs | -6h |
| **Total Tasks:** 32 | **Total Tasks:** 24 | **-15h** |

---

## Phase 1: Project Setup & Infrastructure (Jour 1 - 4h)

### Task 1.1: Initialize Starlight Project ⏱ 45min

**Goal:** Créer projet Astro avec Starlight intégré

#### Steps
1. **Create GitHub repo:**
   ```bash
   gh repo create journee-internationale-pasteurs --public
   cd journee-internationale-pasteurs
   ```

2. **Initialize Starlight project:**
   ```bash
   npm create astro@latest . -- --template starlight --yes
   # Choisir: TypeScript (strict), Git init (yes)
   ```

3. **Install additional dependencies:**
   ```bash
   npm install -D tailwindcss autoprefixer
   npm install @astrojs/netlify # Pour API endpoints si nécessaire
   ```

4. **Configure Tailwind (optionnel):**
   ```bash
   npx tailwindcss init
   ```

5. **First commit:**
   ```bash
   git add .
   git commit -m "chore: initial Starlight setup"
   git push origin main
   ```

#### Deliverable
✅ Working local dev (`npm run dev` → http://localhost:4321)  
✅ Starlight theme active  
✅ Git repo created and synced

---

### Task 1.2: Configure Netlify Deployment ⏱ 30min

**Goal:** Setup continuous deployment

#### Steps
1. **Login Netlify:** https://app.netlify.com
2. **New site from Git:**
   - Connect GitHub repo
   - Branch: `main`
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Configure environment variables** (if needed):
   - `PUBLIC_GA_ID` : Google Analytics ID
4. **Test deployment:**
   - Trigger manual deploy
   - Verify URL: `https://[site-name].netlify.app`
5. **Enable auto-deploy:**
   - Verify webhook active
   - Test: Push commit → auto-deploy

#### Deliverable
✅ Site live on Netlify  
✅ Auto-deploy configured  
✅ Domain: `journee-internationale-pasteurs.netlify.app`

---

### Task 1.3: Configure Starlight Theme & Navigation ⏱ 1h30

**Goal:** Personaliser Starlight avec branding JIP

#### Steps
1. **Edit `astro.config.mjs`:**
   ```javascript
   import { defineConfig } from 'astro/config';
   import starlight from '@astrojs/starlight';

   export default defineConfig({
     site: 'https://journee-internationale-pasteurs.netlify.app',
     integrations: [
       starlight({
         title: 'Journée Internationale des Pasteurs',
         
         // Logo
         logo: {
           src: './src/assets/images/logo-jip.svg',
           replacesTitle: false
         },
         
         // Custom CSS
         customCss: [
           './src/assets/styles/variables.css',
           './src/assets/styles/starlight.css'
         ],
         
         // i18n
         defaultLocale: 'fr',
         locales: {
           fr: { label: 'Français', lang: 'fr' },
           en: { label: 'English', lang: 'en' }
         },
         
         // Sidebar
         sidebar: [
           { label: 'Accueil', link: '/fr/', translations: { en: 'Home' } },
           {
             label: 'À propos',
             translations: { en: 'About' },
             items: [
               { label: 'Notre Vision', link: '/fr/vision' },
               { label: 'Fondateur', link: '/fr/fondateur' },
               { label: 'Programme', link: '/fr/programme' }
             ]
           },
           { label: 'Participation', link: '/fr/participation' },
           { label: 'Ressources', link: '/fr/ressources' },
           { label: 'Galerie', link: '/fr/galerie' },
           { label: 'Faire un don', link: '/fr/dons' },
           { label: 'Contact', link: '/fr/contact' },
           { label: 'FAQ', link: '/fr/faq' }
         ],
         
         // Social
         social: {
           facebook: 'https://facebook.com/jip-cameroun',
           youtube: 'https://youtube.com/@jip-international'
         }
       })
     ]
   });
   ```

2. **Create CSS variables:** `src/assets/styles/variables.css`
   ```css
   :root {
     --color-primary: #6B3FB5;
     --color-secondary: #D4AF37;
     /* ... voir JIP_SPEC_DESIGN_v2.md */
   }
   ```

3. **Create Starlight overrides:** `src/assets/styles/starlight.css`
   ```css
   :root {
     --sl-color-accent: var(--color-primary);
     --sl-color-accent-2: var(--color-secondary);
     --sl-font: 'Montserrat', sans-serif;
     --sl-font-headings: 'Playfair Display', serif;
   }
   ```

4. **Test:**
   - Navigation sidebar visible
   - Couleurs JIP appliquées
   - Logo affiché
   - Language switcher fonctionne

#### Deliverable
✅ Starlight themed with JIP branding  
✅ Sidebar navigation configured  
✅ i18n switcher active

---

### Task 1.4: Configure Content Collections ⏱ 1h

**Goal:** Setup Content Layer API avec Starlight loaders

#### Steps
1. **Create `src/content.config.ts`:**
   ```typescript
   import { defineCollection } from 'astro:content';
   import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
   import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

   export const collections = {
     docs: defineCollection({ 
       loader: docsLoader(), 
       schema: docsSchema() 
     }),
     i18n: defineCollection({ 
       loader: i18nLoader(), 
       schema: i18nSchema() 
     })
   };
   ```

2. **Create content structure:**
   ```bash
   mkdir -p src/content/docs/fr
   mkdir -p src/content/docs/en
   mkdir -p src/content/i18n
   ```

3. **Create sample pages:**
   
   **`src/content/docs/fr/index.md`:**
   ```markdown
   ---
   title: "Bienvenue"
   description: "Journée Internationale des Pasteurs 2025"
   template: splash
   ---
   
   # Bienvenue à la JIP 2025
   
   Honorer ceux qui veillent sur nos âmes.
   ```
   
   **`src/content/docs/en/index.md`:**
   ```markdown
   ---
   title: "Welcome"
   description: "International Pastors Day 2025"
   template: splash
   ---
   
   # Welcome to IPD 2025
   
   Honoring those who watch over our souls.
   ```

4. **Create i18n files (optional UI translations):**
   
   **`src/content/i18n/fr.json`:**
   ```json
   {
     "site.title": "Journée Internationale des Pasteurs",
     "page.editLink": "Modifier cette page"
   }
   ```

5. **Test:**
   - Navigate to `/fr/` and `/en/`
   - Language switcher changes content
   - Sidebar labels update per locale

#### Deliverable
✅ Content Collections configured  
✅ docsLoader & i18nLoader active  
✅ Sample pages rendering  
✅ i18n routing functional (/fr/, /en/)

---

## Phase 2: Core Components & Content (Jours 2-3 - 12h)

### Task 2.1: Build Reusable Components ⏱ 4h

**Goal:** Créer composants Astro interactifs

#### Components List
1. **CountdownTimer.astro** - Compte à rebours JIP (client:load)
2. **RegistrationForm.astro** - Formulaire inscription (client:load)
3. **ContactForm.astro** - Formulaire contact (client:load)
4. **GalleryGrid.astro** - Grille photos masonry (client:visible)
5. **Lightbox.astro** - Modal lightbox images (client:idle)
6. **VideoEmbed.astro** - YouTube embed responsive (static)
7. **TestimonialCard.astro** - Carte témoignage (static)
8. **Accordion.astro** - FAQ collapsible (client:load)
9. **Quote.astro** - Citation stylisée (static)

#### Steps
1. Create each component in `src/components/`
2. Follow structure:
   - Props interface TypeScript
   - Server-side logic (if needed)
   - HTML template
   - Client-side script (if interactive)
   - Scoped styles

3. **Example:** CountdownTimer (see JIP_SPEC_DESIGN_v2.md)

4. **Test each component:**
   - Create test page `src/content/docs/fr/test-components.md`
   - Import and render each component
   - Verify hydration works
   - Check responsive behavior

#### Deliverable
✅ 9 composants créés et testés  
✅ Hydratation client configurée  
✅ Styles scoped appliqués

---

### Task 2.2: Create Homepage Content ⏱ 2h

**Goal:** Construire page d'accueil attractive

#### Steps
1. **Edit `src/content/docs/fr/index.md`:**
   ```markdown
   ---
   title: "Journée Internationale des Pasteurs 2025"
   description: "Honorer ceux qui veillent sur nos âmes"
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
   
   Du 15 au 20 Juillet 2025...
   
   ## Témoignages
   
   <TestimonialCard 
     quote="..."
     author="..."
   />
   ```

2. **Create EN version:** `src/content/docs/en/index.md`

3. **Test:**
   - Homepage renders correctly
   - Countdown updates real-time
   - CTA buttons functional
   - Hero image loads

#### Deliverable
✅ Homepage FR + EN complètes  
✅ Components intégrés  
✅ Hero section attractive

---

### Task 2.3: Create Content Pages (Markdown) ⏱ 4h

**Goal:** Créer toutes les pages de contenu

#### Pages FR à créer
1. **vision.md** - Vision & Mission (500-800 mots)
2. **fondateur.md** - Pasteur Patrick biographie
3. **programme.md** - Programme 6 jours détaillé
4. **participation.md** - Formulaire inscription
5. **ressources.md** - Kit média downloads
6. **galerie.md** - Photos/vidéos grid
7. **dons.md** - Mobile Money info
8. **contact.md** - Formulaire contact + info
9. **faq.md** - Questions fréquentes

#### Steps
1. **For each page:**
   - Create `src/content/docs/fr/[page].md`
   - Add frontmatter:
     ```yaml
     ---
     title: "Page Title"
     description: "SEO description"
     sidebar:
       order: N  # Position in sidebar
     ---
     ```
   - Write content (Markdown + components)
   - Add images/assets as needed

2. **Duplicate to EN:** `src/content/docs/en/[page].md`

3. **Test:**
   - All pages accessible via sidebar
   - i18n routing works (/fr/vision → /en/vision)
   - Components render correctly

#### Deliverable
✅ 9 pages FR + 9 pages EN créées  
✅ Content rich et structuré  
✅ Navigation sidebar fonctionnelle

---

### Task 2.4: Implement Forms & API Endpoints ⏱ 2h

**Goal:** Connecter formulaires à FormSubmit.co

#### Steps
1. **Create API endpoints:**
   
   **Option A: Client-side direct (recommandé):**
   - Forms POST directly to FormSubmit.co
   - No server endpoints needed
   - Simpler architecture
   
   **Option B: Server endpoints (si validation serveur voulue):**
   
   **`src/pages/api/inscription.ts`:**
   ```typescript
   import type { APIRoute } from 'astro';
   import { z } from 'astro:content';

   const schema = z.object({
     name: z.string().min(2),
     email: z.string().email(),
     phone: z.string().optional(),
     church: z.string().optional(),
     type: z.enum(['online', 'physical', 'volunteer']),
     message: z.string().optional()
   });

   export const POST: APIRoute = async ({ request }) => {
     try {
       const data = await request.json();
       const validated = schema.parse(data);
       
       // Submit to FormSubmit.co
       const response = await fetch('https://formsubmit.co/ajax/contact@jip-official.com', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(validated)
       });
       
       if (!response.ok) throw new Error('FormSubmit error');
       
       return new Response(JSON.stringify({ 
         status: 'success', 
         message: 'Inscription confirmée' 
       }), { status: 200 });
       
     } catch (error) {
       return new Response(JSON.stringify({ 
         status: 'error', 
         message: 'Erreur - Réessayez' 
       }), { status: 400 });
     }
   };
   ```

2. **If Option B, install Netlify adapter:**
   ```bash
   npx astro add netlify
   ```

3. **Configure FormSubmit.co:**
   - Create account: https://formsubmit.co
   - Verify email contact@jip-official.com
   - Get form endpoint URL
   - Configure in form components

4. **Test forms end-to-end:**
   - Submit valid data → confirmation
   - Submit invalid email → error message
   - Check email received
   - Test retry after error

#### Deliverable
✅ Forms connected to FormSubmit.co  
✅ Validation client + server  
✅ Email notifications working  
✅ Error handling graceful

---

## Phase 3: Design & Styling (Jour 3-4 - 6h)

### Task 3.1: Implement JIP Design System ⏱ 2h

**Goal:** Appliquer design system complet

#### Steps
1. **Create `src/assets/styles/variables.css`:**
   - See full variables in JIP_SPEC_DESIGN_v2.md
   - Include all JIP colors, fonts, spacing, shadows

2. **Create `src/assets/styles/starlight.css`:**
   - Override Starlight theme colors
   - Custom component styles
   - Button, card, form styles

3. **Download fonts:**
   ```bash
   # Playfair Display & Montserrat (self-hosted)
   # Place in src/assets/fonts/
   ```

4. **Configure fonts in CSS:**
   ```css
   @font-face {
     font-family: 'Playfair Display';
     src: url('/fonts/PlayfairDisplay-Regular.woff2') format('woff2');
     font-weight: 400;
     font-display: swap;
   }
   ```

5. **Test:**
   - Colors applied consistently
   - Typography correct (serif headings, sans body)
   - Spacing grid consistent
   - Shadows visible on cards

#### Deliverable
✅ Design system CSS complet  
✅ Fonts self-hosted et loadés  
✅ Theme Starlight override appliqué

---

### Task 3.2: Responsive Design Testing ⏱ 2h

**Goal:** Vérifier responsive sur tous viewports

#### Steps
1. **Test breakpoints:**
   - Mobile: 375px (iPhone SE)
   - Tablet: 768px (iPad)
   - Desktop: 1280px, 1920px
   - 4K: 2560px

2. **Check elements:**
   - Navigation: Hamburger < 768px, sidebar ≥ 768px
   - Images: Responsive srcset works
   - Forms: Input sizing correct mobile
   - Typography: Scales appropriately
   - Grid layouts: Column adjustments

3. **Use DevTools device emulation:**
   - Chrome DevTools → Toggle device toolbar
   - Test all pages on various devices

4. **Test on real devices** (if possible):
   - iOS Safari
   - Android Chrome

5. **Fix issues:**
   - Adjust Tailwind breakpoints
   - Add custom media queries if needed

#### Deliverable
✅ Site fully responsive 320px-2560px  
✅ No horizontal scroll on mobile  
✅ Touch targets ≥44x44px

---

### Task 3.3: Accessibility Audit ⏱ 2h

**Goal:** Atteindre WCAG 2.1 AA compliance

#### Steps
1. **Install axe DevTools:**
   - Chrome extension: axe DevTools
   - Firefox addon: axe DevTools

2. **Scan all pages:**
   - Run axe scan on each page
   - Document violations
   - Prioritize critical issues

3. **Fix violations:**
   - Add missing alt text
   - Fix color contrast (aim 4.5:1)
   - Add ARIA labels where needed
   - Ensure form labels present
   - Check heading hierarchy

4. **Test keyboard navigation:**
   - Tab through all pages
   - Can access all links/buttons
   - Focus indicators visible
   - Forms fillable keyboard-only

5. **Test with screen reader:**
   - NVDA (Windows, gratuit)
   - VoiceOver (Mac)
   - Verify page structure understandable
   - Form labels read correctly

6. **Target: Zero axe violations**

#### Deliverable
✅ axe audit 0 violations  
✅ Keyboard navigation complète  
✅ Screen reader compatible

---

## Phase 4: Content & Media (Jour 4-5 - 6h)

### Task 4.1: Generate Content via LLM ⏱ 3h

**Goal:** Créer contenu réaliste professionnel

#### Steps
1. **Use Claude/GPT-4 to generate:**
   - Vision statement (500-800 words)
   - Pasteur Patrick biography (600-800 words)
   - Program descriptions (6 days)
   - FAQ entries (10-15 Q&As)
   - Testimonials (3-5)

2. **Prompts examples:**
   ```
   "Generate a 600-word biography for Pasteur Patrick, founder of the International Pastors Day in Cameroon. Include his spiritual journey, vision for pastors, and ministry accomplishments. Tone: Solemn, warm, professional. Context: Christian evangelical."
   ```

3. **Review content:**
   - Spiritual accuracy
   - Tone approprié (solemn, professional)
   - No obvious AI patterns
   - Culturally appropriate (African context)

4. **Translate to EN:**
   - Use DeepL or professional translator
   - Verify quality translations

5. **Insert into Markdown files:**
   - Update all `/fr/` and `/en/` pages
   - Add content to frontmatter if structured data

#### Deliverable
✅ All content pages populated  
✅ Qualité professionnelle validée  
✅ Traductions EN complètes

---

### Task 4.2: Prepare & Upload Media Assets ⏱ 2h

**Goal:** Optimiser et upload tous les assets

#### Steps
1. **Prepare images:**
   - Hero banner: 1920x600px, WebP + JPEG fallback, < 200KB
   - Pastor portrait: 1920x1200px, WebP + JPEG, < 300KB
   - Gallery photos: 1200x800px, WebP + JPEG, < 200KB each
   - Testimonial avatars: 300x300px, WebP + JPEG, < 100KB

2. **Create/prepare logos:**
   - JIP logo: SVG + PNG (512x512px)
   - Favicon: SVG (Starlight auto-generates sizes)

3. **Create icons:**
   - Use Lucide icons (pre-integrated Starlight)
   - Or custom SVG icons in `src/assets/icons/`

4. **Upload to Git:**
   ```bash
   # Images optimisées pour Content Collections
   src/assets/images/
   
   # Assets statiques servis tels quels
   public/files/
   ```

5. **Optimize images:**
   - Use tinypng.com or squoosh.app
   - Target < 200KB pour hero, < 100KB gallery

6. **Test:**
   - Images load correctly
   - Lazy loading works
   - Responsive srcset generates

#### Deliverable
✅ Tous les assets uploadés  
✅ Images optimisées < target sizes  
✅ Logos et icons en place

---

### Task 4.3: Create Downloadable Resources ⏱ 1h

**Goal:** Préparer kit média téléchargeable

#### Steps
1. **Create PDF brochure** (Canva recommended):
   - 8 pages A4 brochure
   - JIP branding
   - Program info, contact, sponsors
   - Export PDF < 5MB

2. **Create banners:**
   - Facebook cover: 1200x628px PNG
   - Instagram story: 1080x1920px PNG
   - Web banner: 1920x400px PNG

3. **Create print materials:**
   - Affiche A4: PDF 300 DPI
   - Logo package: SVG + PNG (various sizes)

4. **Upload to `public/files/`:**
   ```
   public/files/
   ├── logo-jip.svg
   ├── logo-jip-512.png
   ├── affiche-a4.pdf
   ├── banniere-web.png
   ├── facebook-cover.png
   └── kit-media-v1.pdf
   ```

5. **Link in Ressources page:**
   - Add download buttons
   - Descriptions for each file

#### Deliverable
✅ Kit média complet disponible  
✅ Fichiers téléchargeables < 10MB  
✅ Page Ressources listant tout

---

## Phase 5: Testing & Optimization (Jour 5-6 - 6h)

### Task 5.1: Performance Audit & Optimization ⏱ 2h

**Goal:** Atteindre Lighthouse ≥90

#### Steps
1. **Run Lighthouse audit:**
   - Chrome DevTools → Lighthouse
   - Test mobile + desktop
   - Target: ≥90 score both

2. **Optimize if below target:**
   - Images: Verify WebP used, lazy loading
   - JavaScript: Check bundle size < 100KB
   - CSS: Verify no unused CSS
   - Fonts: Check WOFF2, font-display: swap

3. **Check Core Web Vitals:**
   - LCP (Largest Contentful Paint): < 2.5s
   - FID (First Input Delay): < 100ms
   - CLS (Cumulative Layout Shift): < 0.1

4. **Run WebPageTest:**
   - https://webpagetest.org
   - Test from African location if possible
   - Target Speed Index < 3s on 3G

5. **Verify Netlify caching:**
   - Check headers: cache-control, etag
   - Verify CDN edge locations

#### Deliverable
✅ Lighthouse mobile ≥90  
✅ Lighthouse desktop ≥90  
✅ Core Web Vitals green

---

### Task 5.2: SEO Verification ⏱ 2h

**Goal:** Maximiser référencement Google

#### Steps
1. **Verify meta tags all pages:**
   - Unique titles (40-60 chars)
   - Unique descriptions (150-160 chars)
   - og:image/title/description for social
   - Check in `<head>` source code

2. **Check sitemap.xml:**
   - Navigate to `/sitemap-index.xml`
   - Verify all pages included
   - Verify lastmod dates

3. **Verify hreflang tags:**
   - Inspect FR page source → find `<link rel="alternate" hreflang="en">`
   - Verify points to correct EN page
   - Test both directions (FR↔EN)

4. **Check robots.txt:**
   - Navigate to `/robots.txt`
   - Verify allows crawling
   - Verify sitemap URL included

5. **Add JSON-LD structured data:**
   - Event schema for JIP
   - Organization schema
   - Add to homepage frontmatter:
     ```markdown
     ---
     head:
       - tag: script
         attrs:
           type: application/ld+json
         content: |
           {
             "@context": "https://schema.org",
             "@type": "Event",
             "name": "Journée Internationale des Pasteurs",
             "startDate": "2025-07-15",
             "endDate": "2025-07-20"
           }
     ---
     ```

6. **Submit to Google Search Console:**
   - Add property: https://journee-internationale-pasteurs.netlify.app
   - Verify ownership (DNS or HTML tag)
   - Submit sitemap
   - Monitor indexing

#### Deliverable
✅ SEO tags optimisés toutes pages  
✅ Sitemap.xml valide  
✅ hreflang correct  
✅ Structured data présent  
✅ Soumis à Google Search Console

---

### Task 5.3: Cross-Browser & Device Testing ⏱ 1h

**Goal:** Vérifier compatibilité

#### Steps
1. **Test browsers:**
   - Chrome 90+ (Windows, Mac, Android)
   - Firefox 88+ (Windows, Mac)
   - Safari 14+ (Mac, iOS)
   - Edge 90+ (Windows)

2. **Test devices:**
   - iOS 12+ (iPhone, iPad)
   - Android 8+ (various phones)
   - Desktop: Windows, macOS

3. **Check specific issues:**
   - Font loading (WOFF2 support)
   - CSS Grid/Flexbox rendering
   - Form input styling
   - Touch interactions
   - Mobile zoom/scale

4. **Use BrowserStack** (optional, trial gratuit):
   - Test real devices cloud
   - Screenshot comparison

5. **Document issues + fixes:**
   - Create GitHub issues for bugs
   - Fix critical issues immediately

#### Deliverable
✅ Works on all major browsers  
✅ Works on iOS + Android  
✅ No critical bugs

---

### Task 5.4: Security Checklist ⏱ 1h

**Goal:** Vérifier sécurité basique

#### Steps
1. **Verify HTTPS:**
   - Check padlock in browser
   - Netlify auto-provisions SSL

2. **Check XSS protection:**
   - Astro escapes HTML by default ✓
   - Verify no `set:html` with user input

3. **Check form security:**
   - CORS headers correct (FormSubmit.co)
   - No sensitive data in URLs
   - Validation server-side (if endpoints)

4. **Check environment variables:**
   - `.env` not committed to Git
   - Sensitive keys in Netlify dashboard only

5. **Run security headers check:**
   - https://securityheaders.com
   - Verify X-Content-Type-Options, X-Frame-Options
   - Netlify provides some by default

6. **Check dependencies:**
   ```bash
   npm audit
   npm audit fix  # If vulnerabilities found
   ```

#### Deliverable
✅ HTTPS enabled  
✅ No XSS vulnerabilities  
✅ Forms secure  
✅ No exposed secrets  
✅ npm audit clean

---

## Phase 6: Documentation & Handover (Jour 6-7 - 5h)

### Task 6.1: Create User Documentation ⏱ 2h

**Goal:** Documenter workflow équipe

#### Steps
1. **Create `MAINTENANCE.md`:**
   ```markdown
   # Guide de Maintenance JIP
   
   ## Comment éditer le contenu
   
   ### Prérequis
   - Compte GitHub avec accès au repo
   - Éditeur de texte (VSCode recommandé)
   - Git installé localement
   
   ### Workflow d'édition
   
   1. **Cloner le repository:**
      git clone https://github.com/org/jip_website
      cd jip_website
   
   2. **Éditer les fichiers Markdown:**
      Naviguer vers `src/content/docs/fr/` ou `/en/`
      Ouvrir fichier .md dans éditeur
      Modifier contenu (voir Syntaxe Markdown ci-dessous)
   
   3. **Prévisualiser localement (optionnel):**
      npm install
      npm run dev
      Ouvrir http://localhost:4321
   
   4. **Commiter et pusher:**
      git add .
      git commit -m "Update vision page"
      git push origin main
   
   5. **Déploiement automatique:**
      Netlify déploie automatiquement en 2-3 min
      Vérifier sur URL live
   
   ### Syntaxe Markdown de Base
   
   # Titre niveau 1
   ## Titre niveau 2
   ### Titre niveau 3
   
   **Texte gras**
   *Texte italique*
   
   - Liste item 1
   - Liste item 2
   
   [Lien](https://example.com)
   
   ![Image](chemin/vers/image.jpg)
   
   ### Pages Communes à Éditer
   
   - Vision: `src/content/docs/fr/vision.md`
   - Fondateur: `src/content/docs/fr/fondateur.md`
   - Programme: `src/content/docs/fr/programme.md`
   - FAQ: `src/content/docs/fr/faq.md`
   
   ### Ajouter une Nouvelle Page
   
   1. Créer fichier `src/content/docs/fr/nouvelle-page.md`
   2. Ajouter frontmatter:
      ---
      title: "Titre Page"
      description: "Description SEO"
      ---
   3. Écrire contenu Markdown
   4. Ajouter à sidebar dans `astro.config.mjs` (si nécessaire)
   
   ### Problèmes Courants
   
   **Site ne build pas:**
   - Vérifier syntaxe frontmatter (YAML valide)
   - Vérifier liens internes valides
   - Consulter logs Netlify
   
   **Images ne s'affichent pas:**
   - Vérifier chemin relatif correct
   - Images doivent être dans `src/assets/images/` ou `public/`
   
   ### Contacts Support
   
   - Dev: [email]
   - GitHub Issues: [repo]/issues
   ```

2. **Create `README.md`:**
   - Project overview
   - Tech stack
   - Local dev setup
   - Build/deploy commands
   - Folder structure
   - Contributing guidelines

3. **Create `DEPLOYMENT.md`:**
   - Netlify auto-deploy explanation
   - Manual deploy steps (if needed)
   - Rollback procedure
   - Environment variables list
   - Monitoring/alerts setup

#### Deliverable
✅ MAINTENANCE.md complet  
✅ README.md technique  
✅ DEPLOYMENT.md ops

---

### Task 6.2: Team Training Session ⏱ 2h

**Goal:** Former équipe sur workflow

#### Steps
1. **Schedule training:**
   - 2h session avec équipe
   - Google Meet ou présentiel

2. **Training agenda:**
   - **15min:** Overview architecture Starlight
   - **30min:** Demo édition Markdown
     - Cloner repo
     - Éditer fichier
     - Commit + push
     - Vérifier déploiement
   - **30min:** Syntaxe Markdown pratique
     - Titres, listes, liens, images
     - Frontmatter
   - **30min:** Hands-on exercice
     - Chaque personne édite une page
     - Practice workflow complet
   - **15min:** Q&A

3. **Record session:**
   - Enregistrer pour référence future
   - Upload vers Google Drive ou YouTube unlisted

4. **Provide handouts:**
   - PDF cheat sheet Markdown
   - Link vers MAINTENANCE.md
   - Contact info support

#### Deliverable
✅ Équipe formée workflow Git  
✅ Session enregistrée  
✅ Documentation distribuée

---

### Task 6.3: Setup Post-Launch Monitoring ⏱ 1h

**Goal:** Activer analytics et monitoring

#### Steps
1. **Setup Google Analytics 4:**
   - Create GA4 property: https://analytics.google.com
   - Get Measurement ID (G-XXXXXXXXXX)
   - Add to Netlify env vars: `PUBLIC_GA_ID`
   - Verify tracking active

2. **Configure custom events:**
   - pageview (automatic)
   - registration_submitted
   - donation_click
   - resource_download

3. **Setup Netlify Analytics (optional, paid):**
   - Enable in Netlify settings
   - Monitor traffic, errors

4. **Configure error logging (optional):**
   - Sentry free tier: https://sentry.io
   - Install @sentry/astro
   - Capture browser errors
   - Alert on critical errors

5. **Setup uptime monitoring (optional):**
   - UptimeRobot free: https://uptimerobot.com
   - Monitor URL every 5min
   - Email alert if down

#### Deliverable
✅ Google Analytics active  
✅ Custom events tracking  
✅ Error logging (optional)  
✅ Uptime monitoring (optional)

---

## Phase 7: Launch & Post-Launch (Jour 7 - 2h)

### Task 7.1: Pre-Launch Final Checklist ⏱ 1h

**Goal:** Vérification finale complète

#### Checklist
- [ ] All pages load without errors
- [ ] Forms submit successfully (test inscription + contact)
- [ ] Lighthouse score ≥ 90 (mobile + desktop)
- [ ] axe accessibility 0 violations
- [ ] Mobile responsive tested (375px, 768px, 1280px)
- [ ] SEO tags verified all pages
- [ ] All links work (no 404s)
- [ ] Images optimized and loading
- [ ] Fonts loading correctly
- [ ] Navigation sidebar functional
- [ ] Language switcher works (FR ↔ EN)
- [ ] Countdown timer updates real-time
- [ ] GitHub repo clean (no secrets exposed)
- [ ] Netlify auto-deploy verified
- [ ] Team trained on Git workflow
- [ ] Documentation complete (README, MAINTENANCE, DEPLOYMENT)
- [ ] Analytics configured and tracking
- [ ] Backups configured (Git = backup)

#### Deliverable
✅ All checks passed  
✅ Ready for production launch

---

### Task 7.2: Launch & Announcement ⏱ 1h

**Goal:** Go live et annoncer

#### Steps
1. **Verify production deploy:**
   - Final git push to main
   - Wait for Netlify deploy (2-3 min)
   - Test live URL end-to-end

2. **Configure custom domain (optional):**
   - If purchasing domain (ex: jip-cameroun.org)
   - Add in Netlify settings
   - Configure DNS records
   - Wait for SSL provisioning

3. **Social media launch:**
   - Facebook post avec lien
   - YouTube community post
   - WhatsApp groups announcement
   - Email newsletter (if mailing list)

4. **Monitor initial traffic:**
   - Watch Google Analytics real-time
   - Check for errors in console
   - Monitor Netlify analytics

5. **Be available for support:**
   - First 24h, be responsive
   - Fix any critical issues immediately

#### Deliverable
✅ Site live en production  
✅ Annonce publique faite  
✅ Trafic initial surveillé

---

## Summary & Timeline

### Total Effort Estimate

| Phase | Duration | Tasks | Critical Path |
|-------|----------|-------|---------------|
| **Phase 1:** Setup | 4h | 4 | ✓ Yes |
| **Phase 2:** Components & Content | 12h | 4 | ✓ Yes |
| **Phase 3:** Design & Styling | 6h | 3 | Parallel Phase 2 |
| **Phase 4:** Content & Media | 6h | 3 | Parallel Phase 2/3 |
| **Phase 5:** Testing & Optimization | 6h | 4 | After Phase 2-4 |
| **Phase 6:** Documentation & Handover | 5h | 3 | Parallel Phase 5 |
| **Phase 7:** Launch | 2h | 2 | Final |
| **TOTAL** | **41h** | **23 tasks** | **~7 jours** (1 dev) |

### Resource Requirements

**Developer Profile:**
- Expert Astro 5 & Starlight
- Experienced TypeScript
- Git workflow comfortable
- Netlify deployment familiar
- Design system implementation
- Performance optimization knowledge

**Tools & Services:**
- GitHub account (free)
- Netlify account (free tier sufficient)
- FormSubmit.co account (free, 500 submissions/mois)
- Google Analytics 4 (free)
- VSCode + extensions (free)
- Figma/Canva (pour assets design)

### Success Criteria

**Project is successful when:**
1. ✅ Site deployed live on Netlify
2. ✅ Lighthouse score ≥ 90 (mobile + desktop)
3. ✅ Zero accessibility violations (WCAG 2.1 AA)
4. ✅ All forms working (submissions received)
5. ✅ Multilingue (FR + EN) functional
6. ✅ SEO optimized (pages indexed by Google)
7. ✅ Team trained on Git + Markdown workflow
8. ✅ Documentation complete (README, MAINTENANCE, DEPLOYMENT)
9. ✅ Analytics tracking active
10. ✅ Content rich and professional quality

---

**Document validé:** 24 novembre 2025  
**Astro Version:** 5.0+  
**Starlight Version:** Latest  
**Estimated Timeline:** 7 jours (1 dev expert)

# JIP Implementation Tasks
## Journée Internationale des Pasteurs — Plan d'Action Détaillé

---

## Phase 1: Project Setup & Infrastructure (Jour 1)

### Task 1.1: Initialize Astro Project
- [ ] Create GitHub repo `journee-internationale-pasteurs`
- [ ] Clone locally and setup
- [ ] Run `npm create astro@latest` with:
  - Template: blank
  - Dependencies: Yes (TypeScript + Git)
  - Tailwind: Yes
  - git init: Yes
- [ ] Install additional packages:
  ```bash
  npm install astro-i18n decap-cms
  npm install -D tailwindcss autoprefixer
  ```
- [ ] Initialize Tailwind config
- [ ] Create folder structure (as per design.md)
- [ ] First commit: "Initial Astro setup"
- **Deliverable**: Working local dev environment (`npm run dev` → http://localhost:3000)

### Task 1.2: Configure Netlify Deployment
- [ ] Login/create Netlify account
- [ ] Connect GitHub repo to Netlify
- [ ] Setup build command: `npm run build`
- [ ] Set publish directory: `dist`
- [ ] Configure environment variables (if any)
- [ ] Deploy skeleton site
- [ ] Verify domain: `journee-internationale-pasteurs.netlify.app`
- [ ] Enable auto-deploy on git push
- [ ] Test: Push change → verify auto-deploy
- **Deliverable**: Skeleton site live on Netlify with auto-deploy working

### Task 1.3: Setup Decap CMS
- [ ] Create `/public/admin/index.html` (Decap entry point)
- [ ] Create `decap-config.yml` in root with:
  - GitHub backend config
  - Collections (pages, founder, social, faq, programme)
  - Media folder: `/src/assets/images/`
  - Publishing mode: editorial_workflow (Draft/Review/Publish)
- [ ] Generate GitHub Personal Access Token (scope: public_repo)
- [ ] Setup Netlify Identity (optional, for team management)
- [ ] Test: Access `/admin` → login with GitHub
- **Deliverable**: CMS accessible at `/admin` with login working

### Task 1.4: Configure i18n Routing
- [ ] Install `astro-i18n`
- [ ] Create `src/i18n/fr.json` with French strings
- [ ] Create `src/i18n/en.json` with English strings
- [ ] Configure `astro.config.mjs` for i18n:
  ```js
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: { prefixDefaultLocale: true }
  }
  ```
- [ ] Test: Navigate /fr/ and /en/ prefixes work
- [ ] Verify hreflang tags in HTML head
- **Deliverable**: i18n routing functional, pages respond to language prefixes

---

## Phase 2: Core Components & Pages (Jours 2-3)

### Task 2.1: Create Layout System
- [ ] Build `src/layouts/BaseLayout.astro`:
  - Header component with lang selector
  - Navigation bar with menu links
  - Footer with social/contact links
  - Responsive hamburger mobile menu
- [ ] Build `src/layouts/PageLayout.astro`:
  - Extends BaseLayout
  - Main content wrapper
  - Sidebar ready (optional future)
- [ ] Create `src/components/Header.astro`:
  - Logo + site title
  - Language selector (FR/EN toggle)
  - Navigation links
  - Mobile menu icon
- [ ] Create `src/components/Footer.astro`:
  - Copyright info
  - Social media links (placeholder URLs for now)
  - Contact email
  - Quick links
- [ ] Test: All layouts render without errors
- **Deliverable**: Base layouts and components ready

### Task 2.2: Build Homepage (index.astro)
- [ ] Create `src/pages/index.astro` with:
  - Hero section (image + slogan + CTA buttons)
  - Countdown timer component (JavaScript)
  - Program preview section
  - Testimonials carousel (3-5 testimonials)
  - Founder preview card with link
  - Newsletter signup (optional)
  - CTAs: S'inscrire, Faire un don, En savoir plus
- [ ] Build countdown logic:
  - Calculate days/hours/minutes until July 2nd 2025
  - Update every second
  - GMT+1 timezone
  - Format: "XX jours, XX heures, XX minutes"
- [ ] Create hero image placeholder (1920x600px)
- [ ] Style with Tailwind
- [ ] Test responsiveness (mobile/tablet/desktop)
- **Deliverable**: Homepage visually complete and responsive

### Task 2.3: Create Static Pages
- [ ] Create `/fr/vision.astro`:
  - Vision statement
  - Mission bullets
  - Values cards (4 cards)
  - Impact section
  - Content from CMS
- [ ] Create `/fr/fondateur.astro`:
  - Large portrait image
  - Biography section
  - Ministry timeline or highlights
  - Quote section (prominent)
  - Video embed placeholder (YouTube)
  - Content from CMS
- [ ] Create `/fr/programme.astro`:
  - Timeline/schedule grid
  - 6 days breakdown
  - Activity cards with descriptions
  - Speaker info (if applicable)
  - Download program button
- [ ] Create `/fr/participation.astro`:
  - Registration form (integrated from Task 2.5)
  - Participation type selector
  - Confirmation message placeholder
  - FAQ preview
- [ ] Create `/fr/ressources.astro`:
  - Media kit section
  - Download buttons for files
  - Descriptions
- [ ] Create `/fr/galerie.astro`:
  - Masonry grid layout
  - Lightbox component
  - YouTube video embeds
  - Photo captions
- [ ] Create `/fr/dons.astro`:
  - Donation appeal text
  - Mobile Money info display
  - Account numbers and names
  - Transparency section
- [ ] Create `/fr/contact.astro`:
  - Contact form (integrated from Task 2.5)
  - Contact info display
  - Social media links
  - Google Maps embed (placeholder)
- [ ] Create `/fr/faq.astro`:
  - Accordion component
  - FAQ items (from CMS)
  - Search functionality (JavaScript)
- [ ] Create `/en/*` duplicates:
  - Copy each FR page to `/en/` directory
  - Update with English content
- [ ] Test: All pages render, navigation works
- **Deliverable**: All page templates created with placeholder content

### Task 2.4: Build Reusable Components
- [ ] Create `src/components/HeroSection.astro`:
  - Background image
  - Title + subtitle
  - CTA buttons
  - Overlay transparency option
- [ ] Create `src/components/TestimonialCard.astro`:
  - Avatar/photo
  - Quote text
  - Attribution (name, role)
  - Styling with Tailwind
- [ ] Create `src/components/GalleryGrid.astro`:
  - Masonry layout CSS
  - Lazy loading images
  - Responsive breakpoints
- [ ] Create `src/components/Lightbox.astro`:
  - Modal overlay
  - Next/Prev navigation
  - Close button
  - Keyboard support (ESC)
- [ ] Create `src/components/CountdownTimer.astro`:
  - JavaScript for real-time countdown
  - GMT+1 timezone calculation
  - Fallback text
- [ ] Create `src/components/Accordion.astro`:
  - Collapsible sections
  - Animation on toggle
  - Keyboard accessible
- [ ] Test: Components render and function correctly
- **Deliverable**: Component library ready for use

### Task 2.5: Implement Forms & API Endpoints
- [ ] Create `src/pages/api/inscription.js`:
  - POST endpoint for registration form
  - Validate input (Zod schema):
    - name: string, non-empty
    - email: string, valid email
    - phone: optional string
    - church: optional string
    - participationType: enum (online, physical, volunteer)
    - message: optional text
  - Submit to FormSubmit.co API
  - Return JSON response {status: 'success' | 'error', message: '...'}
  - Handle errors gracefully
  - Log any errors to console for debugging
- [ ] Create `src/pages/api/contact.js`:
  - POST endpoint for contact form
  - Validate input:
    - name: string, non-empty
    - email: string, valid email
    - subject: string, non-empty
    - message: string, non-empty
  - Submit to FormSubmit.co API
  - Return JSON response
- [ ] Setup FormSubmit.co integration:
  - Create account at FormSubmit.co
  - Get form endpoint URL
  - Configure backend integration in code
- [ ] Create HTML forms in pages:
  - Registration form in `/participation.astro`
  - Contact form in `/contact.astro`
  - Form validation (HTML5 + JavaScript Zod)
  - Error messages display
  - Success messages
  - Loading states (spinner during submit)
- [ ] Test forms end-to-end:
  - Submit valid data → confirmation message
  - Submit invalid email → error message
  - Check email received at FormSubmit
  - Test retry after error
- **Deliverable**: Forms functional and connected to FormSubmit.co

---

## Phase 3: Design & Styling (Jours 3-4)

### Task 3.1: Implement Design System
- [ ] Create `src/assets/styles/variables.css`:
  ```css
  :root {
    --color-primary: #6B3FB5;
    --color-secondary: #D4AF37;
    --color-white: #FFFFFF;
    --color-text: #1F1F1F;
    --color-bg: #F5F5F0;
    --font-serif: 'Playfair Display', serif;
    --font-sans: 'Montserrat', sans-serif;
    --space-xs: 8px;
    --space-sm: 16px;
    --space-md: 24px;
    --space-lg: 32px;
    --shadow-sm: 0 2px 4px rgba(0,0,0,0.08);
    --shadow-md: 0 8px 16px rgba(0,0,0,0.12);
  }
  ```
- [ ] Download fonts (Playfair Display, Montserrat) → `/src/assets/fonts/`
- [ ] Configure Tailwind theme in `tailwind.config.js`:
  - Extend colors with brand palette
  - Add custom fonts
  - Define spacing scale
  - Add shadow values
- [ ] Create `src/assets/styles/globals.css`:
  - Base element styles (body, headings, buttons)
  - Typography scale
  - Responsive utilities
- [ ] Create `src/assets/styles/responsive.css`:
  - Mobile-first breakpoints
  - Utility classes for common responsive patterns
- [ ] Test: Colors and typography applied across site
- **Deliverable**: Design system fully implemented in code

### Task 3.2: Style Core Components
- [ ] Style `Header.astro`:
  - Fixed or sticky positioning
  - Logo + nav links horizontal
  - Language selector right-aligned
  - Mobile: hamburger menu with slide-down
  - Hover states on links
- [ ] Style `Footer.astro`:
  - Dark background
  - Links, copyright, social icons
  - Multi-column layout desktop, stacked mobile
- [ ] Style `HeroSection.astro`:
  - Full-width background image
  - Semi-transparent overlay
  - Centered text content
  - Large heading + subtitle
  - Button styling
- [ ] Style `TestimonialCard.astro`:
  - Card layout with shadow
  - Avatar image on left
  - Quote text center
  - Attribution bottom
  - Hover: shadow increase
- [ ] Style `FormInputs.astro`:
  - Consistent form styling
  - Labels above inputs
  - Focus state (blue border + ring)
  - Error state (red border)
  - Placeholder text styling
- [ ] Style `GalleryGrid.astro`:
  - CSS Grid masonry layout
  - Auto-fit responsive columns
  - Image aspect ratio consistent
  - Hover: zoom effect on image
- [ ] Test: All components styled and responsive
- **Deliverable**: All components visually polished

### Task 3.3: Responsive Design Testing
- [ ] Test on multiple viewport sizes:
  - Mobile: 375px (iPhone SE)
  - Tablet: 768px (iPad)
  - Desktop: 1920px (HD)
  - Desktop: 2560px (4K)
- [ ] Verify breakpoints work (Tailwind responsive):
  - `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- [ ] Test mobile menu hamburger
- [ ] Verify images scale properly
- [ ] Check form fields on mobile (input size, spacing)
- [ ] Use DevTools device emulation + real devices if available
- [ ] Fix any layout issues
- [ ] Document viewport breakpoints used
- **Deliverable**: Site fully responsive across all sizes

---

## Phase 4: Content & CMS Integration (Jours 4-5)

### Task 4.1: Generate Content via LLM
- [ ] Use Claude/GPT-4 to generate realistic content:
  - Vision statement (500-800 words)
  - Pasteur Patrick biography (600-800 words)
  - Program descriptions
  - FAQ entries (10-15 Q&As)
  - Testimonials (3-5)
- [ ] Review all generated content for:
  - Spiritual accuracy (christian values)
  - Tone (solemn, professional, warm)
  - No obvious AI patterns
  - Culturally appropriate (African context)
- [ ] Manually refine/edit if needed
- [ ] Translate EN versions
- [ ] Store in `/src/content/` markdown files
- **Deliverable**: All content files ready for CMS

### Task 4.2: Setup CMS Collections
- [ ] Update `decap-config.yml` with collections:
  - **pages**: Generic pages (vision, program, etc.)
  - **founder**: Pasteur Patrick specific
  - **social**: Social media links + contact email
  - **faq**: FAQ items
  - **testimonials**: Testimonials array
  - **resources**: Media kit files
- [ ] Configure each collection with fields:
  - Text inputs, text areas
  - Markdown editors
  - Image upload
  - List/array inputs for repeated fields
  - Selector inputs for enums
- [ ] Test CMS interface:
  - Can add/edit entries
  - Preview looks correct
  - Publish to branch works
- [ ] Create sample entries in each collection
- **Deliverable**: CMS fully configured and tested

### Task 4.3: Integrate Content into Pages
- [ ] Update all `.astro` pages to import from `content/`:
  ```astro
  import { getCollection } from 'astro:content';
  const visionData = await getCollection('vision');
  ```
- [ ] Map content fields to page sections:
  - Homepage: intro, program preview, testimonials
  - Vision: full text + mission/values
  - Founder: biography, photo, video link, quote
  - Program: schedule, activities
  - FAQ: items list
  - Resources: file listings
  - Dons: account numbers, descriptions
  - Social: links and email
- [ ] Add fallback content (if CMS entry missing)
- [ ] Test: Content displays correctly on all pages
- [ ] Verify: CMS edits propagate to site after redeploy
- **Deliverable**: Content fully integrated with CMS

### Task 4.4: Upload Media Assets
- [ ] Prepare hero image (1920x600px, optimized):
  - Create/find appropriate image
  - Export as WebP + JPEG
  - Compress to < 200KB
- [ ] Prepare Pasteur Patrick portrait (1920x1200px):
  - Placeholder or actual photo
  - WebP + JPEG formats
  - Compress < 300KB
- [ ] Create/prepare logos:
  - JIP logo (SVG + PNG)
  - Pasteur Patrick logo (if exists)
  - Church/organization logos
- [ ] Create icons (SVG):
  - Calendar icon
  - Map pin icon
  - Users icon
  - Heart icon (donation)
  - Download icon
  - Share icon
- [ ] Upload all to `/src/assets/images/` in Git
- [ ] Create kit media files in `/public/files/`:
  - Logo files (SVG + PNG)
  - Sample affiche (PDF)
  - Sample banner (PNG)
- [ ] Test: Images load correctly on all pages
- **Deliverable**: All media assets uploaded and optimized

---

## Phase 5: Testing & Optimization (Jour 5)

### Task 5.1: Performance Optimization
- [ ] Run Lighthouse audit (Chrome DevTools):
  - Target: ≥ 90 score on mobile and desktop
  - If below 90, identify issues
- [ ] Optimize images:
  - Already using WebP with JPEG fallback
  - Verify lazy loading on gallery
  - Check responsive srcsets
  - Measure image file sizes
- [ ] Audit JavaScript:
  - Measure bundle size (goal: < 50KB gzipped)
  - Remove unused dependencies
  - Code split if possible
- [ ] Audit CSS:
  - Remove unused CSS (PurgeCSS)
  - Minimize critical path CSS
  - Defer non-critical CSS
- [ ] Test Core Web Vitals:
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1
- [ ] Verify caching headers in Netlify
- [ ] Run WebPageTest for detailed analysis
- **Target**: Lighthouse 90+, LCP < 2s on 3G slow

### Task 5.2: Accessibility Audit
- [ ] Install axe DevTools browser extension
- [ ] Scan all pages for violations:
  - Contrast issues
  - Missing alt text
  - Form label issues
  - Keyboard navigation
- [ ] Fix all critical issues (WCAG AA level minimum)
- [ ] Test keyboard-only navigation:
  - Tab through all pages
  - Can access all links/buttons
  - Focus visible always
  - Forms fillable with keyboard
- [ ] Test with screen reader (NVDA on Windows, VoiceOver on Mac):
  - Page structure understandable
  - Form labels read correctly
  - Images have alt text
  - Links descriptive (not "click here")
- [ ] Run accessibility plugin checklist
- **Target**: Zero axe violations, fully keyboard accessible

### Task 5.3: SEO Verification
- [ ] Verify meta tags on all pages:
  - Unique titles (40-60 chars)
  - Unique descriptions (150-160 chars)
  - og:image/title/description for social
- [ ] Check sitemap.xml generation:
  - All pages included
  - Priority levels set
  - Last modified dates
  - Valid XML
- [ ] Verify hreflang tags for i18n:
  - FR pages link to EN equivalents
  - EN pages link to FR equivalents
  - Home page handles default language
- [ ] Check robots.txt:
  - Allows crawling
  - Sitemap URL included
- [ ] Run SEO audit (SEO auditor tool or manual):
  - Headings hierarchy correct (h1 → h2 → h3)
  - Internal links present
  - External links (if any) with rel="noopener"
  - Structured data (JSON-LD) present for event
- [ ] Test search engine preview:
  - Title/description display correctly
  - Image shows in preview
- [ ] Monitor search console (setup):
  - Submit sitemap to Google Search Console
  - Monitor for indexing
- **Target**: All pages indexed, high SEO score

### Task 5.4: Cross-Browser & Device Testing
- [ ] Test on browsers:
  - Chrome/Edge 90+
  - Firefox 88+
  - Safari 14+
- [ ] Test on devices:
  - iOS 12+ (iPhone, iPad)
  - Android 8+ (various phones)
  - Desktop Windows, macOS, Linux
- [ ] Check specific issues:
  - Font loading (WOFF2 support)
  - CSS Grid/Flexbox rendering
  - Form input styling
  - Mobile zoom/scale
  - Touch interactions (if any)
- [ ] Document any issues + fixes
- [ ] Verify site renders correctly everywhere
- **Target**: Works on all major browsers and devices

### Task 5.5: Security Checklist
- [ ] Verify HTTPS enabled (Netlify auto)
- [ ] Check for XSS vulnerabilities:
  - No inline scripts
  - No user input directly in HTML
  - Astro escapes by default ✓
- [ ] Verify form submission security:
  - CORS headers correct
  - No sensitive data in URL
  - FormSubmit sanitizes input
- [ ] Check environment variables:
  - API keys not exposed
  - .env.local not in Git
- [ ] Verify no console errors/warnings
- [ ] Run security header check:
  - X-Content-Type-Options: nosniff
  - X-Frame-Options: SAMEORIGIN
  - (Netlify provides some by default)
- **Target**: No security warnings

---

## Phase 6: Handover & Documentation (Jour 6)

### Task 6.1: Create Maintenance Documentation
- [ ] Create `MAINTENANCE.md` file with:
  - How to update content via CMS
  - Screenshots of CMS interface
  - Step-by-step: "How to update the homepage"
  - "How to add a new page"
  - "How to add testimonials"
  - Common CMS issues + solutions
  - Emergency contacts
- [ ] Create `README.md` with:
  - Project overview
  - Tech stack summary
  - Local dev setup instructions
  - Build/deploy commands
  - Folder structure explanation
  - Contributing guidelines
- [ ] Create `DEPLOYMENT.md` with:
  - How Netlify auto-deploy works
  - Manual deployment steps (if needed)
  - Rollback procedures
  - Environment variables to set
  - Monitoring/alerts setup
- [ ] Create `TEAM_ONBOARDING.md` with:
  - Team roles (who manages what)
  - CMS access instructions
  - GitHub access instructions
  - Weekly/monthly update schedule
- [ ] Add inline code comments:
  - Complex logic explained
  - Component props documented
  - API endpoints commented
- **Deliverable**: Complete documentation suite

### Task 6.2: Team Training Session
- [ ] Schedule 1-2 hour training with team members
- [ ] Cover during training:
  - Demo: Accessing CMS (/admin)
  - Demo: Editing content (vision, founder, FAQ)
  - Demo: Publishing changes
  - Demo: Checking live site updates
  - Hands-on: Each person edits something
  - Q&A: Address concerns
- [ ] Provide documentation handouts/links
- [ ] Share contact info for ongoing support
- [ ] Record training session (if possible) for reference
- **Deliverable**: Team trained and confident

### Task 6.3: Create Admin Dashboard (Optional)
- [ ] Add simple admin page at `/admin-info`:
  - Latest deployments
  - Traffic stats
  - Recent registrations count
  - Useful links (CMS, GitHub, Netlify)
  - Version info
- **Deliverable**: Admin dashboard for monitoring

### Task 6.4: Setup Post-Launch Monitoring
- [ ] Configure Google Analytics 4:
  - Add GA tracking ID to site
  - Create events: pageview, registration_submitted, donation_click
  - Setup alerts for high bounce rate
  - Create dashboard for KPIs
- [ ] Setup Netlify analytics:
  - Enable in Netlify settings
  - Monitor traffic, errors
- [ ] Configure error logging:
  - Use Sentry (free tier) or similar
  - Capture browser errors
  - Alert on critical errors
- [ ] Setup uptime monitoring (optional):
  - Use Pingdom or similar
  - Alert if site down
- **Deliverable**: Monitoring active and alerting configured

### Task 6.5: Final Checklist Before Launch
- [ ] [ ] All pages load without errors
- [ ] [ ] Forms submit successfully
- [ ] [ ] CMS accessible and functional
- [ ] [ ] Lighthouse score ≥ 90 (both mobile + desktop)
- [ ] [ ] Accessibility audit passed (axe 0 violations)
- [ ] [ ] Mobile responsiveness tested
- [ ] [ ] SEO tags verified on key pages
- [ ] [ ] All links work (no 404s)
- [ ] [ ] Images optimized and loading
- [ ] [ ] Fonts loading (no flash of unstyled text)
- [ ] [ ] Navigation menu works on all screens
- [ ] [ ] Contact/registration forms tested end-to-end
- [ ] [ ] GitHub repo clean (no secrets exposed)
- [ ] [ ] Netlify auto-deploy verified
- [ ] [ ] Team trained on CMS
- [ ] [ ] Documentation complete
- [ ] [ ] Launch email prepared
- **Deliverable**: Sign-off ready for launch

---

## Post-Launch Tasks (Week 1-2)

### Task 7.1: Monitor Initial Traffic
- [ ] Check Google Analytics daily
- [ ] Monitor error logs (Sentry)
- [ ] Respond to any contact form messages
- [ ] Fix any reported issues immediately
- [ ] Verify registrations being received

### Task 7.2: Social Media Launch
- [ ] Share launch announcement on social channels
- [ ] Share link in WhatsApp groups
- [ ] Email announcement to partners
- [ ] Monitor social reactions

### Task 7.3: Collect Initial Feedback
- [ ] Ask initial users for feedback
- [ ] Document any UX issues
- [ ] Document any technical issues
- [ ] Plan fixes for week 2

### Task 7.4: Optimize Based on Data
- [ ] Analyze user behavior (most visited pages)
- [ ] Identify drop-off points (form abandonment)
- [ ] Optimize based on data
- [ ] A/B test if significant traffic

---

## Estimated Timeline

| Phase | Tasks | Duration | Days |
|-------|-------|----------|------|
| 1 | Setup & Infrastructure | 4 tasks | 1 day |
| 2 | Components & Pages | 5 tasks | 2 days |
| 3 | Design & Styling | 3 tasks | 1.5 days |
| 4 | Content & CMS | 4 tasks | 1.5 days |
| 5 | Testing & Optimization | 5 tasks | 1 day |
| 6 | Handover & Docs | 5 tasks | 1 day |
| **Total** | **26 tasks** | **Full Development** | **~7 days** |
| Post-Launch | Monitoring | Ongoing | Week 1-2 |

---

## Success Criteria

**Project is successful when:**
1. ✅ Site deployed live on Netlify
2. ✅ Lighthouse score ≥ 90 (mobile + desktop)
3. ✅ Zero accessibility violations (WCAG AA)
4. ✅ All forms working (submissions received)
5. ✅ CMS operational and team trained
6. ✅ Multilingue (FR + EN) fully functional
7. ✅ SEO optimized (pages indexed by Google)
8. ✅ Team confident in maintenance
9. ✅ Documentation complete
10. ✅ No critical bugs at launch


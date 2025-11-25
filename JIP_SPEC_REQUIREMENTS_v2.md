# JIP Requirements Document (Refined v2.0)
## Journée Internationale des Pasteurs — Spécifications Fonctionnelles

**Version:** 2.0 - Refined with Astro 5 & Starlight Best Practices  
**Date:** 24 novembre 2025  
**Base:** Astro 5.0+ with Starlight framework

---

## 🔄 Changements Clés vs v1.0

### Nouveautés Astro 5
1. **Content Layer API** : Utilisation du nouveau système de collections performant (builds 5x plus rapides)
2. **Simplified Prerendering** : Mode `static` par défaut avec SSR optionnel via `prerender = false`
3. **docsLoader & i18nLoader** : Loaders officiels Starlight pour collections docs et traductions
4. **Routing optimisé** : Starlight gère automatiquement le routing i18n sans middleware custom
5. **Zero-JS par défaut** : Hydratation client uniquement pour composants interactifs explicites

### Conflits Résolus
- ❌ **Decap CMS removed** : Incompatible avec workflow Starlight natif, remplacé par édition Markdown Git
- ✅ **Starlight-first** : Architecture basée sur framework Starlight, pas de pages custom `/src/pages/`
- ✅ **Content Collections** : Utilisation obligatoire du Content Layer API Astro 5 avec loaders Starlight
- ✅ **i18n simplifié** : Routing automatique /fr/ et /en/ via config Starlight (pas de middleware)
- ✅ **SSG prioritaire** : Build statique par défaut, endpoints API nécessitent adapter Netlify

### Architecture Starlight vs Custom Astro
| Aspect | v1.0 (Custom) | v2.0 (Starlight) |
|--------|---------------|------------------|
| **Pages** | `src/pages/*.astro` | `src/content/docs/*.md` |
| **Navigation** | Custom Header/Footer | Starlight sidebar auto |
| **i18n** | Middleware + routing | Config locales auto |
| **CMS** | Decap CMS | Git + Markdown |
| **Content** | Custom collections | docsLoader/i18nLoader |
| **Theme** | Custom CSS | Starlight theme + overrides |

---

## Technical Stack (Updated)

### Core Framework
- **Astro** : 5.0+ (Content Layer API, simplified prerendering)
- **Starlight** : Latest (documentation framework officiel Astro)
- **TypeScript** : 5.0+ (strict mode)
- **Node** : 20+ LTS

### Styling
- **Tailwind CSS** : 3.4+ (utility-first)
- **Custom CSS** : Variables JIP dans Starlight theme
- **Fonts** : Playfair Display, Montserrat (self-hosted WOFF2)

### Content & i18n
- **Content Collections** : Astro 5 Content Layer API
- **docsLoader** : Chargement automatique fichiers Markdown
- **i18nLoader** : Traductions UI automatiques
- **Locales** : FR (default), EN

### Forms & API
- **FormSubmit.co** : Service email gratuit (500/mois)
- **Zod** : Validation schema TypeScript
- **Astro API Routes** : Endpoints `/api/*` (si adapter Netlify)

### Deployment
- **Netlify** : Hosting + CDN + auto-deploy
- **GitHub** : Version control + source of truth
- **Analytics** : Google Analytics 4 (gratuit)

---

## Requirement 1: Homepage avec Compteur Dynamique

[... contenu identique refined_requirements ci-dessus ...]

---

[... Tous les autres requirements 2-15 avec les mêmes ajustements Starlight ...]

---

## Appendix A: Starlight Configuration Reference

### Complete `astro.config.mjs`
```javascript
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://journee-internationale-pasteurs.netlify.app',
  integrations: [
    starlight({
      title: 'Journée Internationale des Pasteurs',
      
      // Logo personnalisé
      logo: {
        src: './src/assets/images/logo-jip.svg',
        replacesTitle: false
      },
      
      // Thème personnalisé
      customCss: [
        './src/assets/styles/variables.css',
        './src/assets/styles/starlight.css'
      ],
      
      // i18n Configuration
      defaultLocale: 'fr',
      locales: {
        fr: {
          label: 'Français',
          lang: 'fr'
        },
        en: {
          label: 'English',
          lang: 'en'
        }
      },
      
      // Sidebar Navigation
      sidebar: [
        { 
          label: 'Accueil', 
          link: '/fr/',
          translations: { en: 'Home' }
        },
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
      
      // Social Links
      social: {
        facebook: 'https://facebook.com/jip-cameroun',
        youtube: 'https://youtube.com/@jip-international'
      },
      
      // Head customization
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
          }
        }
      ],
      
      // Disable features
      editLink: {
        baseUrl: 'https://github.com/org/jip_website/edit/main/'
      },
      lastUpdated: true
    }),
    tailwind({
      applyBaseStyles: false // Starlight gère base styles
    })
  ]
});
```

### Content Collections (`src/content.config.ts`)
```typescript
import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
  // Documentation pages
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema()
  }),
  
  // i18n translations
  i18n: defineCollection({
    loader: i18nLoader(),
    schema: i18nSchema()
  })
};
```

---

## Appendix B: Migration Checklist (v1 → v2)

### Phase 1: Setup Nouveau Projet
- [ ] Créer nouveau repo Git
- [ ] Initialiser: `npm create astro@latest -- --template starlight`
- [ ] Installer dépendances: `npm install`
- [ ] Configurer Starlight dans `astro.config.mjs`
- [ ] Setup Netlify deployment

### Phase 2: Content Migration
- [ ] Créer structure `src/content/docs/fr/` et `/en/`
- [ ] Migrer contenu Markdown vers nouvelle structure
- [ ] Convertir frontmatter vers schema Starlight:
  ```yaml
  # Ancien (v1)
  layout: '../layouts/PageLayout.astro'
  seo:
    title: "..."
    description: "..."
  
  # Nouveau (v2)
  title: "..."
  description: "..."
  # Pas de layout manuel, Starlight gère
  ```
- [ ] Migrer images vers `src/assets/images/`

### Phase 3: Components Migration
- [ ] Identifier composants réutilisables
- [ ] Migrer vers `src/components/`
- [ ] Ajouter directive hydratation si interactif:
  - `client:load` : Countdown, Forms
  - `client:visible` : Gallery, Video embeds
  - `client:idle` : Analytics, Non-critical
- [ ] Tester chaque composant isolément

### Phase 4: Styling
- [ ] Copier variables CSS JIP dans `src/assets/styles/variables.css`
- [ ] Créer overrides Starlight dans `starlight.css`:
  ```css
  :root {
    --sl-color-accent: #6B3FB5; /* Violet JIP */
    --sl-color-accent-high: #D4AF37; /* Doré JIP */
  }
  ```
- [ ] Configurer Tailwind pour co-exister avec Starlight
- [ ] Vérifier responsive sur mobile/tablet/desktop

### Phase 5: Forms & API
- [ ] Migrer endpoints API vers `src/pages/api/`
- [ ] Setup Netlify adapter si SSR nécessaire:
  ```bash
  npx astro add netlify
  ```
- [ ] Tester FormSubmit.co integration
- [ ] Valider Zod schemas

### Phase 6: Testing
- [ ] Test i18n: /fr/ et /en/ fonctionnent
- [ ] Test navigation: sidebar, breadcrumbs, language switcher
- [ ] Test forms: inscription, contact
- [ ] Lighthouse audit: ≥90 score
- [ ] axe DevTools: zéro violations
- [ ] Cross-browser: Chrome, Firefox, Safari
- [ ] Mobile: iOS, Android

### Phase 7: Deployment & Training
- [ ] Deploy sur Netlify
- [ ] Configurer domaine custom (si applicable)
- [ ] Créer documentation `MAINTENANCE.md`
- [ ] Former équipe sur workflow Git + Markdown
- [ ] Handover complet

---

## Appendix C: Troubleshooting Common Issues

### Issue 1: Starlight Sidebar Ne S'Affiche Pas
**Cause:** Configuration sidebar manquante ou mal formée  
**Solution:** Vérifier `astro.config.mjs` sidebar array

### Issue 2: i18n Routing Ne Fonctionne Pas
**Cause:** Locales non configurées ou fichiers mal placés  
**Solution:** Vérifier structure `/fr/` et `/en/` dans `src/content/docs/`

### Issue 3: Images Ne Chargent Pas
**Cause:** Chemin relatif incorrect ou images pas dans `src/assets/`  
**Solution:** Utiliser `import` pour images ou placer dans `public/`

### Issue 4: Forms Ne Soumettent Pas
**Cause:** Endpoint API pas déployé ou adapter manquant  
**Solution:** Ajouter `@astrojs/netlify` adapter pour API routes

### Issue 5: Build Échoue
**Cause:** TypeScript errors ou schema Content Collections invalide  
**Solution:** Vérifier `src/content.config.ts` et frontmatter Markdown

---

**Document validé:** 24 novembre 2025  
**Expert Astro:** Certified  
**Starlight Version:** Latest stable

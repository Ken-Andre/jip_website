# Technology Stack

## Framework & Build System

- **Astro 5.x** - Static site generator (Hybrid: Custom Site + Starlight Docs)
- **Starlight** - Documentation theme (scoped to `/docs`)
- **Keystatic** - Git-based CMS for content management
- **Node.js** - Runtime environment

## Styling

- **Tailwind CSS 4.x** - Utility-first CSS framework

## Common Commands

```bash
# Development server (port 3000)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Run Astro CLI
npm run astro
```

## Deployment

- **Platform**: Netlify
- **Site URL**: https://journee-internationale-pasteurs.netlify.app
- **Build command**: `npm run build`
- **Output directory**: `dist/`

## Design System

### Brand Colors
- **Primary**: Vibrant Violet (#8b5cf6) - Leadership et excellence spirituelle
- **Secondary**: Rich Gold (#f59e0b) - Honneur et dignité
- **Accent**: White/Black variants - Élégance et sobriété
- **Palette**: Violet, blanc, noir (style solennel, ministériel, noble)

### Typography
- **Headings**: Playfair Display (serif) - Élégance et solennité
- **Body**: Montserrat (sans-serif) - Modernité et lisibilité

### Style Visuel
- Solennel, ministériel, noble, moderne
- Épuré et élégant
- Images haute résolution uniquement
- Icônes propres et minimalistes

### Animations
- Custom keyframes: fadeIn, slideUp, slideDown, float
- Tailwind utilities: fade-in, slide-up, pulse-slow

## Fonctionnalités Requises

### Formulaires
- Inscription sécurisée (participation physique/en ligne)
- Enregistrement des églises partenaires
- Inscription des volontaires
- Formulaire de contact
- Gestion des inscriptions via email

### Système de Dons
- Intégration Mobile Money (Orange Money, MTN Money)
- PayPal
- Carte bancaire

### Interactivité
- Compteur automatique avant la journée (countdown)
- Galerie dynamique
- Téléchargements (kit média, PDF)
- Intégration réseaux sociaux
- Vidéo courte ou slider sur la page d'accueil

### Optimisation
- Responsive design (mobile-first)
- SEO naturel optimisé
- Performance et accessibilité

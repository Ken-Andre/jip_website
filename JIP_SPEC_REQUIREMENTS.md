# JIP Requirements Document
## Journée Internationale des Pasteurs — Spécifications Fonctionnelles

---

## Introduction

Ce document présente les exigences complètes (fonctionnelles et non-fonctionnelles) pour le site vitrine JIP. Les exigences sont structurées par besoin utilisateur et accompagnées de critères d'acceptation précis.

---

## Requirement 1: Homepage avec Compteur Dynamique

**User Story:** En tant que visiteur, je veux voir une homepage accueillante avec un compteur automatique des jours restants avant la JIP, afin de créer de l'urgence et du dynamisme.

### Acceptance Criteria

1. WHEN la page d'accueil charge THEN elle affiche un slogan fort "Honorer ceux qui veillent sur nos âmes"
2. WHEN le compteur est affiché THEN il recalcule automatiquement en temps réel
3. WHEN le compteur atteint 0 THEN il affiche "C'est le jour ! Rejoignez-nous" au lieu de négatif
4. WHEN l'utilisateur visite de France ou d'Afrique THEN le fuseau horaire utilisé est GMT+1 (Cameroun)
5. WHEN la page charge THEN le hero affiche image inspirante + slogan + boutons CTA (S'inscrire, Faire un don, En savoir plus)
6. WHEN l'utilisateur scrolle vers le bas THEN il voit aperçu du programme, témoignages, présentation fondateur
7. WHEN l'utilisateur clique sur "S'inscrire" THEN il est redirigé vers /participation avec formulaire pré-focus

### Technical Requirements

- Compteur: JavaScript vanilla, calc (jour J - date actuelle) en GMT+1
- Format affichage: "XX jours, XX heures, XX minutes restants"
- Update: toutes les secondes
- Fallback: texte statique si JavaScript désactivé

---

## Requirement 2: Pages Multilingue (FR + EN)

**User Story:** En tant qu'utilisateur international, je veux pouvoir consulter le site en français ou anglais, afin de comprendre le contenu indépendamment de ma langue maternelle.

### Acceptance Criteria

1. WHEN le site charge THEN affiche sélecteur langue (FR/EN) en haut à droite
2. WHEN l'utilisateur clique sur "EN" THEN tout le contenu bascule en anglais
3. WHEN l'utilisateur change de langue THEN reste sur la même page (ex: /fr/vision → /en/vision)
4. WHEN l'utilisateur naviguer entre pages EN THEN reste automatiquement en EN
5. WHEN l'utilisateur first visit THEN détecte langue navigateur et set par défaut (fallback: FR)
6. WHEN le contenu est traduit THEN qualité traduction est vérifiée (professionnel, contexte religieux respecté)
7. WHEN SEO crawle le site THEN hreflang tags pointent correctement entre versions FR/EN

### Technical Requirements

- i18n: astro-i18n (routing: /fr/, /en/)
- Fichiers: src/i18n/fr.json, src/i18n/en.json
- Traduction: Google Translate ou prof (à valider)
- hreflang: auto-generated par Astro

---

## Requirement 3: Formulaire d'Inscription Fonctionnel

**User Story:** En tant que pasteur intéressé, je veux m'inscrire facilement à la JIP via un formulaire simple, afin de confirmer ma participation et recevoir des informations.

### Acceptance Criteria

1. WHEN le formulaire affiche THEN contient champs: Nom, Email, Téléphone, Église, Type participation, Message
2. WHEN l'utilisateur entre un email invalide THEN bouton "Envoyer" désactivé + message erreur
3. WHEN l'utilisateur clique "Envoyer" THEN soumission validée côté client ET serveur
4. WHEN le formulaire reçoit validation THEN envoie à email contact@jip-official.com
5. WHEN la soumission réussit THEN affiche message "Inscription confirmée - Vérifiez votre email"
6. WHEN la soumission échoue THEN affiche message erreur "Erreur réseau - Réessayez" + retry button
7. WHEN email reçu THEN contient résumé des données + lien confirmation
8. WHEN utilisateur fournit Église THEN enregistré comme partenaire potentiel

### Technical Requirements

- Endpoint: POST /api/inscription
- Service: FormSubmit.co (gratuit, 500/mois inclus)
- Validation: HTML5 + Zod/Valibot
- Response: JSON {status: 'success', message: '...'}
- Email notification: Brevo/SendGrid (freemium) ou FormSubmit

---

## Requirement 4: Section Fondateur — Pasteur Patrick

**User Story:** En tant que visiteur, je veux en apprendre davantage sur Pasteur Patrick et sa vision, afin de mieux comprendre l'initiative et le contexte spirituel.

### Acceptance Criteria

1. WHEN la page /fondateur charge THEN affiche portrait professionnel haute résolution (1920x1200+)
2. WHEN l'utilisateur scrolle THEN voit biographie complète (500-800 mots) bien formatée
3. WHEN le contenu mentionne vision JIP THEN présente comment la vision lui a été donnée
4. WHEN l'utilisateur atteint section "Impact" THEN voit ses principales œuvres et accomplissements
5. WHEN la page affiche citation THEN mise en avant visuelle (font large, couleur accentuée)
6. WHEN disponible THEN embed vidéo YouTube de présentation Pasteur Patrick
7. WHEN l'utilisateur clique photo THEN peut agrandir dans lightbox (si galerie)
8. WHEN contenu édité via CMS THEN mises à jour immédiate du site

### Technical Requirements

- Images: JPEG/WebP optimisées, lazy-loaded
- Vidéo: YouTube embed (iframe responsive)
- Texte: Markdown + formatage HTML
- CMS: Section dédiée dans Decap avec éditeur WYSIWYG
- SEO: Meta title/description optimisés

---

## Requirement 5: Formulaire Contact & Support

**User Story:** En tant que visiteur avec question, je veux pouvoir contacter les organisateurs facilement, afin de recevoir réponse rapide.

### Acceptance Criteria

1. WHEN le formulaire contact charge THEN affiche champs: Nom, Email, Sujet, Message
2. WHEN utilisateur remplit formulaire THEN tous champs sont obligatoires
3. WHEN utilisateur soumet THEN email reçu à contact@jip-official.com
4. WHEN email reçu THEN contient toutes infos + adresse expéditeur
5. WHEN soumission réussit THEN confirmation affichée à l'utilisateur
6. WHEN soumission échoue THEN message erreur avec retry

### Technical Requirements

- Endpoint: POST /api/contact
- Service: FormSubmit.co
- Validation: Zod schema
- Response: 200 {status: 'success'}

---

## Requirement 6: Page Programme Détaillée

**User Story:** En tant que pasteur intéressé, je veux connaître le déroulement exact de la JIP, afin de planifier ma participation et mes disponibilités.

### Acceptance Criteria

1. WHEN page /programme charge THEN affiche dates (15-20 Juin 2025) clairement
2. WHEN utilisateur scrolle THEN voit timeline ou grille des 6 jours
3. WHEN chaque jour cliqué THEN affiche détails horaire et activités
4. WHEN détails affichés THEN inclut titre activité, description, horaire, salle
5. WHEN disponible THEN mentionne intervenant/prédicateur avec bio courte
6. WHEN utilisateur cherche info spécifique THEN peut télécharger programme PDF
7. WHEN le programme affiche THEN incluant: Ouverture, Formation, Ateliers, Mission, Communion, Célébration
8. WHEN contenu édité THEN CMS permet modification facile sans refonte design

### Technical Requirements

- Data: structured in content/programme.yml ou .md
- Timeline: CSS-based ou JavaScript Astro component
- PDF: static file in /public/files/
- Editable: via CMS Decap

---

## Requirement 7: Section Ressources & Kit Média

**User Story:** En tant qu'organisateur local d'église, je veux télécharger des ressources officielles (logos, affiches), afin de promouvoir la JIP dans ma communauté.

### Acceptance Criteria

1. WHEN page /ressources charge THEN affiche catégories media: Logos, Affiches, Bannières, Brochures
2. WHEN utilisateur voit ressource THEN affiche thumbnail + description
3. WHEN utilisateur clique download THEN télécharge fichier depuis /public/files/
4. WHEN ressource disponible THEN formats: SVG (logos), PNG (images), PDF (brochures)
5. WHEN utilisateur visite THEN comprend droits d'utilisation (creative commons, usage libre)
6. WHEN admin ajoute ressource THEN CMS permet upload + description
7. WHEN fichier téléchargé THEN analytics track le téléchargement

### Technical Requirements

- Files: /public/files/ static directory
- Formats: SVG, PNG, PDF, XLSX
- Size: chaque fichier < 10MB
- Download: direct link (navigateur default download)
- CMS: listing with descriptions

---

## Requirement 8: Page Galerie Photos & Vidéos

**User Story:** En tant que visiteur, je veux voir des photos/vidéos d'événements JIP ou pasteurs africains, afin de visualiser l'ambiance et créer connexion émotionnelle.

### Acceptance Criteria

1. WHEN page /galerie charge THEN affiche grille masonry responsive
2. WHEN utilisateur clique photo THEN ouvre lightbox fullscreen
3. WHEN dans lightbox THEN peut naviguer (next/prev) ou fermer (ESC)
4. WHEN vidéo affichée THEN YouTube embed responsive
5. WHEN grille charge THEN images lazy-loaded pour performance
6. WHEN filter tabs présents THEN permet trier par catégorie (Photos / Vidéos)
7. WHEN photo inclus THEN caption/légende affichée en bas
8. WHEN utilisateur ajoute via CMS THEN URL image/vidéo + caption éditables

### Technical Requirements

- Layout: CSS Grid masonry
- Images: WebP + JPEG fallback, responsive srcset
- Lazy load: native <img loading="lazy">
- Lightbox: Astro component + CSS animations
- Videos: YouTube iframe (responsive container)
- CMS: array input for gallery items

---

## Requirement 9: Section Dons & Mobile Money

**User Story:** En tant que supporter, je veux contribuer aux frais de la JIP via Mobile Money (Orange/MTN Cameroun), afin de soutenir la vision spirituelle.

### Acceptance Criteria

1. WHEN page /dons charge THEN affiche message d'appel aux donations
2. WHEN utilisateur scrolle THEN voit numéros Mobile Money avec noms détenteurs
3. WHEN numéro affiché THEN format clair: "Orange Money: +237 6XX XXX XXX (Pasteur Patrick)"
4. WHEN utilisateur consulte THEN instructions simples pour envoi (pas d'intégration API)
5. WHEN page affiche THEN incluant infos où vont les fonds
6. WHEN donation texte inclus THEN transparent sur allocation budget
7. WHEN utilisateur contribue THEN peut s'enregistrer noms donateurs (recognition, optionnel)
8. WHEN contenu édité THEN CMS permet mise à jour numéros/noms facilement

### Technical Requirements

- Data: numéros stockés dans content/donations.yml
- Display: plain text (pas d'API paiement)
- QR codes: optionnel (généré offline ou image statique)
- CMS: editable contact fields
- No backend payment: texte uniquement

---

## Requirement 10: WCAG Accessibility Compliance

**User Story:** En tant que utilisateur malvoyant, je veux pouvoir naviguer le site via lecteur d'écran, afin d'accéder au contenu de manière équitable.

### Acceptance Criteria

1. WHEN page charge THEN heading hierarchy correct (h1 → h2 → h3)
2. WHEN formulaire affiché THEN tous inputs avec <label> ou aria-label
3. WHEN image présente THEN alt text descriptif (pas vide)
4. WHEN utilisateur utilise clavier THEN peut naviguer tous interactive elements (tabindex logic)
5. WHEN focus visible THEN outline clairement visible (2px, contraste 3:1 minimum)
6. WHEN couleur utilisée THEN information pas communiquée par couleur seule
7. WHEN vidéo présente THEN YouTube auto-captions disponibles (SR inclus)
8. WHEN audit axe-core run THEN zéro violations (WCAG 2.1 AA minimum)

### Technical Requirements

- Semantic HTML: <button>, <nav>, <main>, etc.
- ARIA: aria-label, aria-describedby, role="presentation" où needed
- Contrast: min 4.5:1 (text), 3:1 (large text/UI components)
- Testing: axe DevTools, NVDA (gratuit screen reader), keyboard-only nav

---

## Requirement 11: SEO Optimization

**User Story:** En tant que pasteur en recherche d'événements spirituels, je veux trouver le site JIP via Google, afin de découvrir naturellement l'initiative.

### Acceptance Criteria

1. WHEN page charge THEN meta title/description présents et pertinents
2. WHEN Google crawle THEN trouve sitemap.xml complet
3. WHEN utilisateur recherche "Journée Internationale Pasteurs" THEN site apparaît haut ranking
4. WHEN page charge THEN JSON-LD schema pour event type markup
5. WHEN utilisateur partage lien THEN og:image/title/description utilisés pour preview
6. WHEN liens internes présents THEN structure logique sitemap (pyramid structure)
7. WHEN mobile crawled THEN Lighthouse score ≥ 90 (mobile + desktop)
8. WHEN contenu édité THEN meta tags auto-mise à jour

### Technical Requirements

- Meta tags: Astro SEO component
- Sitemap: auto-generated /sitemap.xml
- Robots.txt: configured
- JSON-LD: Event, Organization schema
- og: Open Graph tags
- hreflang: automatic i18n
- Mobile: 100% responsive

---

## Requirement 12: Performance & Core Web Vitals

**User Story:** En tant qu'utilisateur mobile en Afrique avec connexion 3G, je veux que le site charge rapidement, afin de consulter infos sans frustration.

### Acceptance Criteria

1. WHEN page load THEN Lighthouse score ≥ 90 (mobile)
2. WHEN utilisateur visite THEN First Contentful Paint < 1.5s
3. WHEN images affichées THEN chargées progressivement (lazy-load)
4. WHEN JavaScript chargé THEN bundle < 100KB (gzipped)
5. WHEN interactive element cliqué THEN réponse < 100ms
6. WHEN page fully loaded THEN Cumulative Layout Shift < 0.1
7. WHEN audit WebPageTest run THEN Speed Index < 3s
8. WHEN assets servies THEN CDN Netlify utilisé (global edge caching)

### Technical Requirements

- Build: Astro SSG (zero JavaScript par défaut)
- Images: WebP, compression, responsive
- CSS: minimal critical path
- Fonts: WOFF2 subset Latin
- Bundle size: monitored via bundlesize
- CDN: Netlify edge (automatic)

---

## Requirement 13: Form Security & Validation

**User Story:** En tant que administrateur site, je veux m'assurer que les formulaires sont protégés contre abus et données invalides, afin de garantir qualité données.

### Acceptance Criteria

1. WHEN formulaire soumis THEN validation côté client (HTML5 + Zod/Valibot)
2. WHEN utilisateur soumet données invalides THEN message erreur clair, pas recharge
3. WHEN email non-valide THEN rejeté avant envoi server
4. WHEN données soumises server-side THEN re-validée côté backend (defence in depth)
5. WHEN spam bot détecté THEN requête ignorée silencieusement
6. WHEN FormSubmit reçoit THEN CORS headers corrects
7. WHEN email envoyé THEN pas d'adresse utilisateur exposée en CC/BCC
8. WHEN code analysé THEN pas de XSS vulnerabilities (Astro natif sécurisé)

### Technical Requirements

- Validation: Zod schema + HTML5
- CSRF: FormSubmit handles internally
- XSS: Astro escapes by default
- Rate limit: FormSubmit built-in 500/mois limit
- HTTPS: Netlify auto SSL

---

## Requirement 14: CMS Usability & Maintenance

**User Story:** En tant que community manager JIP, je veux pouvoir mettre à jour contenu via interface simple, afin de gérer le site sans connaissances techniques.

### Acceptance Criteria

1. WHEN utilisateur accède /admin THEN login GitHub OAuth (facile, gratuit)
2. WHEN dans CMS THEN interface intuitive (drag-drop, WYSIWYG)
3. WHEN éditeur modifie texte THEN changement live-preview avant publish
4. WHEN image uploadée THEN auto-resized, optimisée, versionnée dans Git
5. WHEN contenu publié THEN site deployed automatiquement (Netlify webhook)
6. WHEN workflow enabled THEN Draft → Review → Publish workflow
7. WHEN utilisateur inexpérimenté THEN documentation fournie avec screenshots
8. WHEN formation terminée THEN équipe autonome pour mises à jour mensuelles

### Technical Requirements

- CMS: Decap (open-source, GitHub backend)
- Config: decap-config.yml
- Collections: Pages, Fondateur, Social, FAQ, Programme, etc.
- Auth: GitHub OAuth
- Workflow: Editorial (Draft/Review/Publish)
- Deploy: Netlify webhook

---

## Requirement 15: Analytics & Monitoring

**User Story:** En tant qu'administrateur, je veux suivre les visites et inscriptions, afin de mesurer impact et audience de la JIP.

### Acceptance Criteria

1. WHEN utilisateur visite homepage THEN event 'pageview' enregistré
2. WHEN utilisateur s'inscrit THEN event 'registration_submitted' enregistré
3. WHEN formulaire soumis THEN metrics incluent source traffic (organic, direct, social)
4. WHEN analytics consulté THEN dashboard affiche: unique visitors, registrations, donations attempts
5. WHEN utilisateur arrive /ressources THEN track download files
6. WHEN admin configure \THEN utilise outil gratuit (Google Analytics, Plausible alternative)
7. WHEN données collectées THEN respect RGPD/privacy (anonymized, no tracking ID storage)

### Technical Requirements

- Analytics: Google Analytics 4 (free) ou Plausible (~€80/an optionnel)
- Events: page_view, registration_submitted, donation_click, download_file
- Tracking: script in header, respects DNT headers
- Privacy: GDPR-compliant

---

## Non-Functional Requirements

### Performance
- **Load time**: < 2 seconds (LCP)
- **Lighthouse**: ≥ 90 mobile + desktop
- **Bundle size**: < 50KB JS (gzipped), < 200KB CSS
- **Uptime**: 99.9% (Netlify SLA)

### Reliability
- **No single points of failure**: CDN global, auto-failover
- **Backup**: GitHub is source of truth (automatic versioning)
- **Recovery**: Rollback to previous deploy in 1 click

### Maintainability
- **Code**: Clean, commented, follows Astro conventions
- **Documentation**: README, MAINTENANCE.md for team
- **Testing**: Manual testing checklist provided

### Scalability
- **Future**: Can add 10,000+ simultaneous users without scaling issues (Netlify auto-scale)
- **Content**: Can add unlimited pages via CMS
- **Growth**: Upgrade to Supabase/PostgRES if database needed later


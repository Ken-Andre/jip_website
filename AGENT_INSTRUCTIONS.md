# Instructions pour IA Agentique - Projet JIP
## Guide d'exécution pour Claude Code, Cline, Google Agentic, etc.

---

## 📋 CONTEXTE DU PROJET

**Projet:** Journée Internationale des Pasteurs (JIP)  
**Type:** Site web événement spirituel panafricain  
**Stack:** Astro 5 + Starlight  
**Style:** Violet (#6B3FB5) / Doré (#D4AF37)  
**Public:** Pasteurs africains, leaders chrétiens, communautés internationales  
**Slogan:** "Honorer ceux qui veillent sur nos âmes"

---

## 📚 DOCUMENTS DE RÉFÉRENCE

### Fichiers de spécification (OBLIGATOIRES à lire):

1. **`.kiro/specs/jip-spec/requirements.md`**
   - 15 user stories avec critères d'acceptation EARS
   - Exigences fonctionnelles complètes
   - Glossaire des termes techniques

2. **`.kiro/specs/jip-spec/design.md`**
   - Architecture Astro 5 + Starlight
   - Design system (couleurs, typographies, composants)
   - Correctness properties pour tests
   - Stratégie de déploiement Netlify

3. **`.kiro/specs/jip-spec/tasks.md`**
   - 23 tâches détaillées sur 5 jours
   - Checklists complètes par tâche
   - Références aux requirements
   - Deliverables attendus

### Fichiers de contexte (RECOMMANDÉS):

4. **`.kiro/steering/product.md`** - Vision produit, mission, public cible
5. **`.kiro/steering/tech.md`** - Stack technique, commandes, design system
6. **`.kiro/steering/structure.md`** - Organisation des dossiers, conventions

---

## 🎨 ASSETS VISUELS (DÉJÀ EN PLACE!)

**✅ TOUS LES ASSETS SONT DÉJÀ GÉNÉRÉS - NE GÉNÈRE RIEN!**

### Inventaire complet:

**Icons (20 SVG):** `src/assets/icons/`
- calendar.svg, clock.svg, map-pin.svg, users.svg, cross.svg, dove.svg
- heart.svg, book.svg, prayer-hands.svg, globe.svg, microphone.svg
- phone.svg, email.svg, share.svg, download.svg, search.svg
- menu.svg, close.svg, arrow-next.svg, star.svg

**Images (37 fichiers):** `src/assets/images/`
- **JPG/PNG (photorealistic):** hero-banner.jpg, pastor-patrick.png, logo-jip (2).png
- **SVG (scalable):** logo-jip.svg, facebook-cover.svg, og-image.svg
- **Hero sliders:** hero-slider-1.svg → hero-slider-4.svg
- **Gallery:** gallery-placeholder-1.svg → gallery-placeholder-6.svg
- **Testimonials:** testimonial-avatar-1.svg → testimonial-avatar-5.svg
- **Infographics:** infographic-impact.svg, infographic-program.svg, infographic-values.svg
- **Patterns:** pattern-spiritual.svg, pattern-communion.svg, pattern-global.svg
- **Sections:** section-vision.svg, section-programme.svg, section-dons.svg
- **Social:** instagram-story-1.svg → instagram-story-3.svg
- **Flags:** flag-fr.svg, flag-en.svg

**Animations (2 SVG):** `src/assets/animations/`
- spinner-loading.svg, pulse-heartbeat.svg

**Favicon:** `public/favicon.svg`

### Stratégie d'utilisation:
1. **Priorité 1:** JPG/PNG (hero-banner.jpg, pastor-patrick.png) - qualité photorealistic
2. **Priorité 2:** SVG (tous les autres) - scalable, léger, performant
3. **Priorité 3:** Pas de génération - 100% couverture existante

---

## 🎯 TEMPLATE DE PROMPT POUR CLINE/CLAUDE CODE

```
# CONTEXTE: Projet JIP (Journée Internationale des Pasteurs)

Stack: Astro 5 + Starlight | Style: Violet/Doré | Public: Panafricain

# DOCUMENTS DE SPEC (3 fichiers)

@/.kiro/specs/jip-spec/tasks.md 
@/.kiro/specs/jip-spec/design.md 
@/.kiro/specs/jip-spec/requirements.md

# CONTEXTE ADDITIONNEL (optionnel)

@/.kiro/steering/product.md
@/.kiro/steering/tech.md
@/.kiro/steering/structure.md

# ASSETS: 50+ fichiers SVG/JPG/PNG déjà en place

Stratégie: JPG/PNG first → SVG fallback → Pas de génération

# TÂCHE: Task [NUMÉRO] - [NOM]

[Copier la section complète de la tâche depuis tasks.md]

Exemple pour Task 1.1:

**Goal:** Créer projet Astro avec Starlight intégré

**Checklist:**
- [ ] Create GitHub repo: `gh repo create journee-internationale-pasteurs --public`
- [ ] Initialize Starlight project: `npm create astro@latest . -- --template starlight --yes`
- [ ] Install additional dependencies: `npm install -D tailwindcss autoprefixer` and `npm install @astrojs/netlify`
- [ ] Configure Tailwind (optionnel): `npx tailwindcss init`
- [ ] First commit and push to GitHub

**Requirements:** 1.1, 1.2, 1.3

**Deliverable:** Working local dev (npm run dev → http://localhost:4321), Starlight theme active, Git repo created

# INSTRUCTIONS

1. Lis les specs (requirements, design, tasks)
2. Comprends le contexte JIP (événement religieux, palette violet/doré)
3. Exécute la checklist étape par étape
4. Teste le deliverable attendu
5. Documente les résultats
6. Attends confirmation avant de continuer

# RÈGLES STRICTES

✅ **À FAIRE:**
- Utilise assets existants (ne génère RIEN)
- Respecte palette JIP: Violet (#6B3FB5), Doré (#D4AF37)
- Suis les commandes exactes spécifiées
- Teste après chaque étape
- Vérifie si la tâche est déjà faite avant de continuer
- Implémente UNIQUEMENT ce qui n'a pas été fait

❌ **À NE PAS FAIRE:**
- Ne saute pas d'étapes de la checklist
- Ne modifie pas l'architecture sans demander
- Ne génère pas d'assets (tous déjà en place)
- Ne crée pas de fichiers non nécessaires
- Ne passe pas à la tâche suivante sans confirmation

# FORMAT DE RÉPONSE ATTENDU

Après exécution, fournis:

1. ✅ **Checklist complétée** (statut de chaque item)
2. 📸 **Screenshot/Output** (si applicable)
3. 🐛 **Problèmes rencontrés** (si applicable)
4. 📝 **Documentation** (ce qui a été fait)
5. ⏭️ **Prêt pour la tâche suivante?** (oui/non)

Prêt? Confirme ta compréhension avant de commencer.
```

---

## 📝 EXEMPLES DE PROMPTS PAR TÂCHE

### Task 1.1: Initialize Starlight Project

```
# CONTEXTE: Projet JIP
@/.kiro/specs/jip-spec/tasks.md @/.kiro/specs/jip-spec/design.md @/.kiro/specs/jip-spec/requirements.md

# TÂCHE: Task 1.1 - Initialize Starlight Project

Exécute la checklist complète de Task 1.1:
1. Create GitHub repo: journee-internationale-pasteurs
2. Initialize Starlight: npm create astro@latest . -- --template starlight --yes
3. Install dependencies: tailwindcss, autoprefixer, @astrojs/netlify
4. Configure Tailwind: npx tailwindcss init
5. First commit and push

Teste que npm run dev fonctionne sur localhost:4321.

Confirme ta compréhension avant de commencer.
```

### Task 1.3: Configure Starlight Theme & Navigation

```
# CONTEXTE: Projet JIP
@/.kiro/specs/jip-spec/tasks.md @/.kiro/specs/jip-spec/design.md

# ASSETS: Utilise logo-jip.svg existant dans src/assets/images/

# TÂCHE: Task 1.3 - Configure Starlight Theme & Navigation

Exécute:
1. Edit astro.config.mjs avec config Starlight (logo, sidebar, locales, social)
2. Create src/assets/styles/variables.css avec couleurs JIP
3. Create src/assets/styles/starlight.css avec overrides
4. Configure logo: { src: './src/assets/images/logo-jip.svg' }
5. Test navigation sidebar, colors, logo, language switcher

Palette JIP: Violet (#6B3FB5), Doré (#D4AF37), Blanc, Noir, Crème

Confirme ta compréhension avant de commencer.
```

### Task 2.1: Build Reusable Components

```
# CONTEXTE: Projet JIP
@/.kiro/specs/jip-spec/tasks.md @/.kiro/specs/jip-spec/design.md

# ASSETS: Utilise icons existants (clock.svg, email.svg, phone.svg, users.svg, close.svg, arrow-next.svg)
# ASSETS: Utilise gallery-placeholder-*.svg (6 files)
# ASSETS: Utilise testimonial-avatar-*.svg (5 files)

# TÂCHE: Task 2.1 - Build Reusable Components

Crée 9 composants Astro:
1. CountdownTimer.astro (client:load) - Use clock.svg
2. RegistrationForm.astro (client:load) - Use email.svg, phone.svg, users.svg
3. ContactForm.astro (client:load) - Use email.svg, phone.svg
4. GalleryGrid.astro (client:visible) - Use gallery-placeholder-*.svg
5. Lightbox.astro (client:idle) - Use close.svg
6. VideoEmbed.astro (static)
7. TestimonialCard.astro (static) - Use testimonial-avatar-*.svg
8. Accordion.astro (client:load) - Use arrow-next.svg
9. Quote.astro (static)

Teste chaque composant sur une page test.

Confirme ta compréhension avant de commencer.
```

### Task 2.2: Create Homepage Content

```
# CONTEXTE: Projet JIP
@/.kiro/specs/jip-spec/tasks.md @/.kiro/specs/jip-spec/design.md

# ASSETS: Utilise hero-banner.jpg (PRIMARY) ou hero-slider-1.svg (fallback)
# ASSETS: Utilise testimonial-avatar-*.svg (5 files)
# ASSETS: Utilise calendar.svg, map-pin.svg, users.svg

# TÂCHE: Task 2.2 - Create Homepage Content

Exécute:
1. Edit src/content/docs/fr/index.md avec hero, countdown, program preview, testimonials
2. Use hero-banner.jpg (primary) or hero-slider-1.svg (fallback)
3. Integrate testimonial cards avec testimonial-avatar-*.svg
4. Use icons: calendar.svg, map-pin.svg, users.svg
5. Create EN version: src/content/docs/en/index.md
6. Test homepage rendering, countdown, CTA buttons, hero image

Confirme ta compréhension avant de commencer.
```

---

## 🔍 CHECKLIST DE VALIDATION AVANT EXÉCUTION

Demande à l'IA de confirmer:

- [ ] J'ai lu les 3 documents de spec (requirements, design, tasks)
- [ ] Je comprends le contexte JIP (événement religieux panafricain, palette violet/doré)
- [ ] Je sais que les assets sont déjà en place (50+ fichiers, pas de génération)
- [ ] Je connais la stratégie: JPG/PNG first → SVG fallback
- [ ] J'ai compris la tâche spécifique à exécuter
- [ ] Je vais suivre la checklist étape par étape
- [ ] Je vais tester après chaque étape
- [ ] Je vais vérifier si la tâche est déjà faite avant de continuer
- [ ] Je vais documenter les résultats
- [ ] Je vais attendre confirmation avant de passer à la tâche suivante

---

## 🎨 DESIGN SYSTEM (RÉFÉRENCE RAPIDE)

### Couleurs
- **Primary:** Violet (#6B3FB5 / #8b5cf6)
- **Secondary:** Doré (#D4AF37 / #f59e0b)
- **Neutral:** Blanc (#FFFFFF), Noir (#1F1F1F), Crème (#F5F5F0)

### Typographies
- **Headings:** Playfair Display (serif) - Élégance et solennité
- **Body:** Montserrat (sans-serif) - Modernité et lisibilité

### Style Visuel
- Solennel, ministériel, noble, moderne
- Épuré et élégant
- Images haute résolution uniquement
- Icônes propres et minimalistes

---

## 🚀 COMMANDES UTILES

```bash
# Development server (port 4321)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Run Astro CLI
npm run astro

# Install dependencies
npm install

# Add Tailwind
npm install -D tailwindcss autoprefixer

# Add Netlify adapter
npm install @astrojs/netlify
```

---

## 📊 FORMAT DE RAPPORT APRÈS EXÉCUTION

```markdown
# Rapport d'exécution - Task [NUMÉRO]

## ✅ Checklist complétée

- [x] Étape 1: [Description] - ✅ Fait
- [x] Étape 2: [Description] - ✅ Fait
- [x] Étape 3: [Description] - ✅ Fait
- [ ] Étape 4: [Description] - ❌ Problème rencontré

## 📸 Résultats

[Screenshot ou output console]

## 🐛 Problèmes rencontrés

1. **Problème:** [Description]
   **Solution:** [Ce qui a été fait]

## 📝 Documentation

- Fichiers créés: [Liste]
- Fichiers modifiés: [Liste]
- Assets utilisés: [Liste]

## ✅ Deliverable validé

- [ ] Working local dev (npm run dev → http://localhost:4321)
- [ ] Starlight theme active
- [ ] Git repo created
- [ ] Tous les tests passent

## ⏭️ Prêt pour la tâche suivante?

[Oui/Non] - [Raison si non]
```

---

## 🎯 CONSEILS POUR MAXIMISER L'EFFICACITÉ

### 1. Toujours lire les specs en premier
- requirements.md → Comprendre QUOI faire
- design.md → Comprendre COMMENT faire
- tasks.md → Comprendre les ÉTAPES

### 2. Vérifier l'état actuel avant d'agir
- Est-ce que la tâche est déjà faite?
- Quels fichiers existent déjà?
- Quels assets sont disponibles?

### 3. Suivre la checklist à la lettre
- Ne saute pas d'étapes
- Teste après chaque étape
- Documente ce qui a été fait

### 4. Utiliser les assets existants
- Ne génère JAMAIS d'assets
- Utilise JPG/PNG en priorité
- Fallback sur SVG si nécessaire

### 5. Respecter le design system
- Palette: Violet (#6B3FB5), Doré (#D4AF37)
- Typographies: Playfair Display, Montserrat
- Style: Solennel, élégant, épuré

### 6. Tester systématiquement
- npm run dev après chaque modification
- Vérifier le rendu visuel
- Tester la navigation
- Vérifier les assets

### 7. Documenter les résultats
- Ce qui a été fait
- Ce qui a été modifié
- Les problèmes rencontrés
- Les solutions appliquées

---

## 🔗 LIENS UTILES

- **Astro Docs:** https://docs.astro.build
- **Starlight Docs:** https://starlight.astro.build
- **Tailwind CSS:** https://tailwindcss.com
- **Netlify Docs:** https://docs.netlify.com

---

## 📞 SUPPORT

Si tu rencontres un problème:
1. Documente le problème précisément
2. Indique les étapes pour le reproduire
3. Fournis les logs d'erreur
4. Demande confirmation avant de continuer

---

**Version:** 1.0  
**Date:** 24 novembre 2025  
**Projet:** Journée Internationale des Pasteurs (JIP)  
**Auteur:** Kiro AI Assistant

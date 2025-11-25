# Note de Mise à Jour - Spécifications JIP

## Fichiers Mis à Jour

Les fichiers de spécifications suivants ont été créés pour refléter l'utilisation des assets SVG générés :

### 1. JIP_SPEC_TASKS_UPDATED.md
- **Changements** : Références aux images mises à jour pour utiliser les versions SVG quand PNG/JPG n'existe pas
- **Exemples** :
  - `hero-banner.jpg` → Utiliser `hero-banner.jpg` (existe déjà)
  - `facebook-cover.png` → Utiliser `facebook-cover.svg` (SVG généré)
  - `instagram-story-1.png` → Utiliser `instagram-story-1.svg` (SVG généré)
  - `gallery-placeholder-*.jpg` → Utiliser `gallery-placeholder-*.svg` (SVG générés)
  - `testimonial-avatar-*.jpg` → Utiliser `testimonial-avatar-*.svg` (SVG générés)

### 2. JIP_SPEC_DESIGN_UPDATED.md
- **Changements** : Structure de dossiers mise à jour pour inclure les SVG
- **Exemples** :
  - Section images : Ajout de références aux SVG pour les placeholders
  - Bannières web : Utilisation des SVG générés

### 3. JIP_SPEC_REQUIREMENTS_UPDATED.md
- **Changements** : Critères d'acceptation mis à jour pour accepter SVG comme format valide
- **Exemples** :
  - Images peuvent être SVG, PNG, ou JPG selon disponibilité
  - Priorité : JPG/PNG pour photos réelles, SVG pour illustrations/placeholders

## Mapping des Assets

### Assets Existants (À Conserver)
- `logo-jip.svg` ✅
- `logo-jip.png` ✅
- `hero-banner.jpg` ✅
- `pastor-patrick.png` ✅

### Assets SVG Générés (Utilisables Immédiatement)
- Tous les **20 icônes** (calendar, map-pin, users, etc.)
- **Instagram Stories** : instagram-story-1/2/3.svg
- **Hero Sliders** : hero-slider-1/2/3/4.svg
- **Avatars Témoignages** : testimonial-avatar-1/2/3/4/5.svg
- **Photos Galerie** : gallery-placeholder-1/2/3/4/5/6.svg
- **Affiches** : affiche-a4/a3/a2.svg
- **Bannières** : facebook-cover.svg
- **Sections** : section-vision/programme/dons.svg
- **Infographies** : infographic-impact/program/values.svg
- **Patterns** : pattern-spiritual/communion/global.svg
- **Drapeaux** : flag-fr/en.svg
- **Animations** : spinner-loading.svg, pulse-heartbeat.svg
- **Favicon** : favicon.svg
- **OG Image** : og-image.svg

### À Remplacer Plus Tard (Optionnel)
Quand des photos/images réelles seront disponibles, remplacer les SVG par :
- Photos galerie → JPG réels d'événements
- Avatars témoignages → Photos réelles des personnes
- Sections headers → Illustrations professionnelles
- Bannières social → Designs marketing finaux

## Instructions d'Utilisation

1. **Pour le développement immédiat** : Utiliser les fichiers `*_UPDATED.md`
2. **Dans le code Astro** : Référencer les fichiers SVG comme suit :
   ```astro
   <img src="/src/assets/images/facebook-cover.svg" alt="..." />
   ```
3. **Pour remplacer un SVG par JPG/PNG** :
   - Ajouter le fichier JPG/PNG dans le même dossier
   - Mettre à jour la référence dans le code
   - Le SVG peut rester comme fallback

## Avantages des SVG

- ✅ **Légers** : Fichiers très petits (< 5KB vs 200KB+ pour JPG)
- ✅ **Scalables** : Parfaits à toutes résolutions
- ✅ **Modifiables** : Faciles à éditer (couleurs, texte)
- ✅ **Performants** : Chargement rapide
- ✅ **Accessibles** : Peuvent inclure du texte sélectionnable

## Date de Mise à Jour
24 novembre 2025

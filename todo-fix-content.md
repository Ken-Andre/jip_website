# Plan de Correction - Contenu Manquant

## Problème Identifié
- Configuration i18n ✅ fonctionne (serveur démarre sans erreur)
- Mais routes 404 pour `/programme`, `/fondateur` etc.
- **Cause** : Fichiers de contenu Markdown manquants dans `src/content/docs/`

## Fichiers Manquants à Créer

### Français (fr/)
- `fr/vision.md` 
- `fr/fondateur.md`
- `fr/programme.md`
- `fr/participation.md`
- `fr/ressources.md`
- `fr/galerie.md`
- `fr/dons.md`
- `fr/contact.md`

### Anglais (en/)
- `en/vision.md`
- `en/founder.md`
- `en/program.md`
- `en/participation.md`
- `en/resources.md`
- `en/gallery.md`
- `en/donations.md`
- `en/contact.md`

## Structure Frontmatter
```yaml
---
title: "Titre de la page"
description: "Description pour SEO"
---
```

## Étapes de Correction
1. Créer tous les fichiers .md avec frontmatter basique
2. Tester les routes 404
3. Vérifier la navigation i18n
4. Marquer la correction complète

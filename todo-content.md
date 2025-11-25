# TODO: Créer les fichiers de contenu manquants

## Problème
- Configuration i18n ✅ fonctionne
- Routes 404 pour `/programme`, `/fondateur` etc.
- **Cause** : Fichiers Markdown manquants dans `src/content/docs/`

## Fichiers à créer

### Français (fr/)
- [ ] `fr/vision.md` - Notre Vision
- [ ] `fr/fondateur.md` - Pasteur Patrick (Fondateur)
- [ ] `fr/programme.md` - Programme détaillé
- [ ] `fr/participation.md` - Participation/inscription
- [ ] `fr/ressources.md` - Ressources et kit média
- [ ] `fr/galerie.md` - Galerie photos/vidéos
- [ ] `fr/dons.md` - Dons et Mobile Money
- [ ] `fr/contact.md` - Contact

### Anglais (en/)
- [ ] `en/vision.md` - Our Vision
- [ ] `en/founder.md` - Pastor Patrick (Founder)
- [ ] `en/program.md` - Program
- [ ] `en/participation.md` - Participation
- [ ] `en/resources.md` - Resources
- [ ] `en/gallery.md` - Gallery
- [ ] `en/donations.md` - Donations
- [ ] `en/contact.md` - Contact

## Structure de chaque fichier
```yaml
---
title: "Titre de la page"
description: "Description pour SEO et navigation"
---

# Contenu principal
Contenu de la page...
```

## Étapes
1. Créer tous les fichiers avec frontmatter basique
2. Tester les routes 404
3. Vérifier la navigation i18n
4. Marquer terminé

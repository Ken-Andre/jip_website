# Index de la Documentation

Bienvenue dans la documentation du site web de la Journée Internationale des Pasteurs. Cette page vous aide à trouver rapidement le guide dont vous avez besoin, du moins, je l'espère.

## Pour commencer

Si c'est la première fois que vous utilisez cette documentation, commencez par lire le **Guide Principal** (`README_FR.md`) qui vous donne une vue d'ensemble.

## Guides principaux

### Guide Principal
**[README_FR.md](../README_FR.md)** - Introduction générale au projet et à la documentation. À lire en premier. Puis le reste vous pouvez telecharger et utiliser un LLM(chatgpt,gemini,...) pour lui poser des questions sur comment faire avec ces fichiers à l'appui(mais c'est mieux de les lire, ils ne sont pas long).

### Guide de Mise à Jour du Contenu
**[GUIDE_CONTENU.md](./GUIDE_CONTENU.md)** - Comment modifier les textes du site (dates, descriptions, programmes, etc.). C'est le guide le plus utilisé.

### Guide pour les Images
**[GUIDE_IMAGES.md](./GUIDE_IMAGES.md)** - Comment ajouter des photos, les remplacer, et les organiser dans la galerie.

### Guide de Publication
**[GUIDE_PUBLICATION.md](./GUIDE_PUBLICATION.md)** - Comment mettre en ligne vos modifications sur le site web. À lire après avoir fait vos modifications.

### Guide de Dépannage
**[GUIDE_DEPANNAGE.md](./GUIDE_DEPANNAGE.md)** - Solutions aux problèmes courants. Consultez-le si quelque chose ne fonctionne pas.

## Guides techniques (pour développeurs)

Ces guides sont destinés aux personnes qui développent le site. Si vous ne savez pas coder, vous n'en avez pas besoin.

- **[CONTENT_GUIDE.md](./CONTENT_GUIDE.md)** - Guide technique de mise à jour du contenu
- **[TRANSLATION_GUIDE.md](./TRANSLATION_GUIDE.md)** - Guide pour gérer les traductions
- **[IMAGE_GUIDE.md](./IMAGE_GUIDE.md)** - Guide technique pour les images
- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Guide technique de déploiement
- **[TROUBLESHOOTING.md](./TROUBLESHOOTING.md)** - Guide technique de dépannage

## Tâches courantes - Guide rapide

### Je veux changer la date de l'événement
→ Consultez **[GUIDE_CONTENU.md - Changer la date de l'événement](./GUIDE_CONTENU.md#changer-la-date-de-lévénement)**

### Je veux ajouter des photos dans la galerie
→ Consultez **[GUIDE_IMAGES.md - Ajouter des photos à la galerie](./GUIDE_IMAGES.md#ajouter-des-photos-à-la-galerie)**

### Je veux modifier le programme de la journée
→ Consultez **[GUIDE_CONTENU.md - Modifier le programme de la journée](./GUIDE_CONTENU.md#modifier-le-programme-de-la-journée)**

### J'ai fait mes modifications, comment les publier ?
→ Consultez **[GUIDE_PUBLICATION.md](./GUIDE_PUBLICATION.md)**

### Mes images ne s'affichent pas
→ Consultez **[GUIDE_DEPANNAGE.md - Problèmes avec les images](./GUIDE_DEPANNAGE.md#mes-images-ne-saffichent-pas-sur-le-site)**

### Le site ne fonctionne plus après mes modifications
→ Consultez **[GUIDE_DEPANNAGE.md - Problèmes avec les fichiers JSON](./GUIDE_DEPANNAGE.md#le-fichier-json-ne-fonctionne-plus-après-mes-modifications)**

## Parcours recommandé pour débutants

Si c'est votre première fois :

1. **Lisez le Guide Principal** (`README_FR.md`) - 5 minutes
2. **Lisez le Guide de Mise à Jour du Contenu** (`GUIDE_CONTENU.md`) - 15 minutes
3. **Faites une modification de test** (par exemple, changer une date) - 10 minutes
4. **Lisez le Guide de Publication** (`GUIDE_PUBLICATION.md`) - 15 minutes
5. **Publiez votre modification de test** - 10 minutes
6. **Vérifiez sur le site que ça a marché** - 5 minutes

Après cela, vous serez à l'aise pour gérer le site régulièrement.

## Structure des fichiers

Pour comprendre où se trouvent les fichiers du projet :

```
jip-next/
├── locales/              ← Les textes du site
│   ├── fr.json          ← Français
│   └── en.json          ← Anglais
├── public/
│   ├── images/          ← Toutes les images
│   │   └── gallery/     ← Photos de la galerie
│   └── files/           ← Documents à télécharger
└── docs/                ← Vous êtes ici !
    ├── GUIDE_CONTENU.md
    ├── GUIDE_IMAGES.md
    ├── GUIDE_PUBLICATION.md
    └── GUIDE_DEPANNAGE.md
```

## Besoin d'aide ?

Si vous ne trouvez pas ce que vous cherchez :
1. Relisez le guide principal
2. Consultez le guide de dépannage
3. Contactez la personne qui gère le projet

N'hésitez pas à poser des questions. Mieux vaut demander que de faire une erreur.
God bless you ;
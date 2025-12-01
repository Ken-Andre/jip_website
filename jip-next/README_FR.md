# Guide du Site Web - Journée Internationale des Pasteurs

Bienvenue dans le guide du site web de la Journée Internationale des Pasteurs. Ce document vous explique comment gérer et mettre à jour le site web sans avoir besoin de savoir coder.

## À qui s'adresse ce guide ?

Ce guide est écrit pour l'équipe qui gère le contenu du site. Vous n'avez pas besoin d'être informaticien pour utiliser ce guide. Si vous savez utiliser Word, ou PowerPoint, vous pourrez facilement suivre ces instructions.

## Que trouverez-vous dans ce guide ?

1. **Guide de mise à jour du contenu** - Comment modifier les textes du site (dates, descriptions, informations)
2. **Guide pour les images** - Comment ajouter ou remplacer des photos
3. **Guide pour publier les changements** - Comment mettre en ligne vos modifications
4. **Guide de dépannage** - Que faire si quelque chose ne fonctionne pas

## Comment utiliser ce guide

Commencez par lire le guide qui correspond à ce que vous voulez faire. Chaque guide est écrit étape par étape, comme si on vous expliquait en personne.

Si vous ne savez pas par où commencer, lisez d'abord le "Guide de mise à jour du contenu" qui couvre les tâches les plus courantes.

## Structure du projet

Le site web est organisé en plusieurs dossiers. Vous n'avez pas besoin de tout comprendre, mais voici les dossiers principaux que vous utiliserez :

```
jip-next/
├── locales/          ← Les textes du site sont ici
│   ├── fr.json      ← Textes en français
│   └── en.json      ← Textes en anglais
├── public/
│   ├── images/      ← Les photos et images
│   └── files/       ← Les documents à télécharger
└── docs/            ← Les guides comme celui-ci
```

## Accès rapide aux guides

Tous les guides détaillés se trouvent dans le dossier `docs/` :

- **Mise à jour du contenu** : `docs/GUIDE_CONTENU.md`
- **Gestion des images** : `docs/GUIDE_IMAGES.md`
- **Publication des changements** : `docs/GUIDE_PUBLICATION.md`
- **Dépannage** : `docs/GUIDE_DEPANNAGE.md`

## Où se trouve le site en ligne ?

Une fois publiés, vos changements apparaîtront sur le site web à cette adresse :
[https://journee-internationale-pasteurs.netlify.app](https://journee-internationale-pasteurs.netlify.app)

Le site est disponible en français et en anglais. Vous pouvez changer de langue en cliquant sur l'icône de globe en haut de la page.

## Besoin d'aide ?

Si vous rencontrez un problème :
1. Consultez d'abord le "Guide de dépannage"
2. Si le problème persiste, contactez la personne qui gère le projet
3. Ne vous inquiétez pas, on peut toujours revenir à une version précédente si quelque chose ne va pas

## Important à retenir

- Les changements ne sont pas instantanés : après avoir fait vos modifications, il faut les publier (voir le guide de publication)
- Toujours mettre à jour les deux langues : français ET anglais
- Faire attention aux virgules et aux guillemets dans les fichiers JSON (les guides vous expliquent comment faire)
- Tester sur le site en ligne après chaque publication pour vérifier que tout fonctionne

## Première fois ?

Si c'est la première fois que vous utilisez ce guide, nous vous recommandons de :

1. Lire le "Guide de mise à jour du contenu" en entier
2. Faire une petite modification de test (par exemple, changer une date)
3. Suivre le "Guide de publication" pour mettre en ligne votre changement
4. Vérifier sur le site web que votre changement est bien là

Après cela, vous serez à l'aise pour gérer le site régulièrement.

## Notes importantes

- Le site utilise un système de sauvegarde automatique via GitHub. Ne vous inquiétez pas si vous n'avez jamais utilisé GitHub, le guide de publication vous explique tout simplement.
- Si vous hésitez à faire quelque chose, n'hésitez pas à demander de l'aide plutôt que de risquer de casser quelque chose.
- Tous les fichiers importants sont sauvegardés, donc même si vous faites une erreur, on peut toujours revenir en arrière.

---

Bonne chance avec la gestion du site ! Si vous avez des questions, n'hésitez pas à me les poser.

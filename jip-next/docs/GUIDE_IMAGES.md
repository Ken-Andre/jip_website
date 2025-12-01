# Guide pour Ajouter et Gérer les Images

Ce guide vous explique comment ajouter des photos sur le site, les remplacer, et les organiser. C'est plus simple que vous ne le pensez.

## Où se trouvent les images ?

Toutes les images du site sont dans le dossier `public/images/`. C'est là que vous mettrez toutes vos photos.

```
public/
└── images/
    ├── gallery/      ← Photos de la galerie
    └── (autres photos)
```

## Formats d'images acceptés

Le site accepte ces types de fichiers :
- JPG ou JPEG - Pour les photos
- PNG - Pour les images avec fond transparent
- SVG - Pour les logos et icônes (généralement fait par un designer)

Pour la plupart de vos photos, utilisez JPG. C'est le format le plus simple et qui prend le moins de place.

## Taille des fichiers

Les images trop lourdes ralentissent le site. Voici des tailles recommandées :

- **Photos de galerie** : moins de 500 KB chacune
- **Grandes photos d'en-tête** : moins de 1 MB
- **Photos normales** : moins de 300 KB

Si votre photo est trop lourde, vous devrez la compresser (réduire sa taille). Nous expliquons comment faire plus bas.

## Ajouter des photos à la galerie

La galerie affiche les photos de l'événement sur la page Galerie du site.

### Étapes pour ajouter une photo

**Étape 1 : Préparer votre photo**

Avant d'ajouter la photo :
- Vérifiez qu'elle est en format JPG
- Si elle fait plus de 500 KB, compressez-la (voir section compression plus bas)
- Donnez-lui un nom simple et descriptif

**Exemples de bons noms :**
- `jip-2025-ouverture.jpg`
- `jip-2025-ceremonie.jpg`
- `jip-2025-groupe.jpg`

**Exemples de mauvais noms :**
- `IMG_12345.jpg` (trop générique)
- `photo finale (2).jpg` (contient des espaces et parenthèses)
- `JIP@2025!!!.jpg` (contient des caractères spéciaux)

**Conseil :** Utilisez des tirets au lieu d'espaces, et mettez tout en minuscules.

**Étape 2 : Copier la photo dans le bon dossier**

1. Ouvrez l'explorateur de fichiers Windows (ou Finder sur Mac)
2. Allez dans le dossier du projet : `jip-next/public/images/gallery/`
3. Copiez votre photo dans ce dossier

C'est tout ! La photo devrait automatiquement apparaître dans la galerie du site.

**Important :** Après avoir ajouté la photo, vous devez publier les changements (voir le guide de publication).

### Ajouter plusieurs photos en même temps

Vous pouvez ajouter plusieurs photos d'un coup :
1. Sélectionnez toutes les photos que vous voulez ajouter
2. Copiez-les toutes ensemble (Ctrl+C)
3. Collez-les dans le dossier `public/images/gallery/`
4. Vérifiez que tous les noms sont corrects

## Remplacer une photo existante

Si vous voulez remplacer une photo qui est déjà sur le site :

**Méthode la plus simple :**
1. Supprimez l'ancienne photo du dossier
2. Ajoutez la nouvelle photo avec le MÊME nom
3. Publiez les changements

Si vous gardez exactement le même nom, le site utilisera automatiquement la nouvelle photo sans qu'il y ait besoin de modifier le code.

**Exemple :**
- Ancienne photo : `public/images/gallery/jip-2025-ouverture.jpg`
- Nouvelle photo : `public/images/gallery/jip-2025-ouverture.jpg` (même nom)

Le site prendra automatiquement la nouvelle version.

## Compresser une image

Si votre photo est trop lourde (plus de 500 KB), vous devez la compresser pour réduire sa taille. Voici comment faire :

### Méthode 1 : Utiliser un site web (le plus simple)

1. Allez sur [TinyPNG.com](https://tinypng.com) (ou sur ilovejpg)
2. Glissez votre photo sur la page
3. Le site va la compresser automatiquement
4. Téléchargez la version compressée
5. Remplacez votre photo originale par cette version

TinyPNG peut réduire la taille de 50 à 70% sans que vous voyiez vraiment la différence de qualité.

### Méthode 2 : Utiliser Paint (sur Windows)

1. Ouvrez votre photo avec Paint
2. Cliquez sur "Redimensionner" (dans l'onglet Accueil)
3. Mettez par exemple 80% au lieu de 100%
4. Enregistrez la photo

Attention : cette méthode réduit aussi la qualité. Utilisez-la seulement si la photo est vraiment très grande.

### Méthode 3 : Utiliser un logiciel photo

Si vous avez Photoshop, GIMP ou un autre logiciel photo, vous pouvez exporter la photo en réduisant la qualité JPG à 80-85%. Mais pour la plupart des cas, TinyPNG est plus simple.

## Taille recommandée des images

Voici les dimensions recommandées selon le type d'image :

| Type d'image | Largeur | Hauteur | Format |
|--------------|---------|---------|--------|
| Photo de galerie | 1200 pixels | 800 pixels | JPG |
| Grande bannière | 1920 pixels | 1080 pixels | JPG |
| Photo carrée | 800 pixels | 800 pixels | JPG |
| Logo | 512 pixels | 512 pixels | PNG |

Vous n'avez pas besoin de respecter exactement ces dimensions, mais c'est mieux si vous êtes proche.

## Nommer vos images correctement

Un bon nom d'image aide à organiser et à retrouver vos photos plus tard.

**Règles à suivre :**
- Utilisez des lettres minuscules
- Utilisez des tirets `-` au lieu d'espaces
- Soyez descriptif mais pas trop long
- Incluez l'année si c'est important

**Exemples :**
- `jip-2025-ouverture-ceremonie.jpg` - Bon
- `ceremonie_ouverture_2025.jpg` - Acceptable (tirets bas au lieu de tirets)
- `Photo de la cérémonie d'ouverture.jpg` - Mauvais (espaces, caractères spéciaux)
- `IMG_001.jpg` - Mauvais (pas descriptif)

## Organiser les images

Vous pouvez créer des sous-dossiers pour mieux organiser vos photos.

Par exemple :
```
public/images/
├── gallery/
│   ├── 2024/
│   ├── 2025/
│   └── evenements-speciaux/
```

Mais ce n'est pas obligatoire. Toutes les photos dans `gallery/` apparaîtront dans la galerie.

## Vérifier qu'une image fonctionne

Après avoir ajouté une image :

1. **Vérifiez le nom du fichier** - Pas d'espaces, pas de caractères spéciaux bizarres
2. **Vérifiez la taille** - Le fichier ne doit pas être trop gros
3. **Vérifiez le format** - JPG, PNG ou SVG seulement
4. **Publiez les changements** (voir guide de publication)
5. **Visitez le site** après publication pour voir si l'image apparaît

## Problèmes courants

### L'image ne s'affiche pas sur le site

**Causes possibles :**
- L'image n'est pas dans le bon dossier
- Le nom du fichier contient des caractères spéciaux
- L'image n'a pas été publiée (changements pas encore en ligne)
- Le navigateur utilise une ancienne version (cache)

**Solutions :**
1. Vérifiez que l'image est bien dans `public/images/gallery/`
2. Vérifiez que le nom n'a pas d'espaces ou de caractères bizarres
3. Publiez les changements
4. Actualisez la page web plusieurs fois (Ctrl+F5 pour forcer l'actualisation)

### L'image s'affiche mais elle est floue

**Causes possibles :**
- L'image originale était de mauvaise qualité
- L'image a été trop compressée

**Solutions :**
1. Utilisez une photo originale de meilleure qualité
2. Ne compressez pas trop (gardez au moins 70-80% de qualité)

### L'image est trop grande et le site est lent

**Cause :** Le fichier image est trop lourd (plus de 500 KB)

**Solution :** Compressez l'image en utilisant TinyPNG ou un autre outil (voir section compression)

## Ajouter des documents (PDF, etc.)

Pour ajouter des documents à télécharger (comme des programmes PDF), mettez-les dans le dossier `public/files/`.

**Étapes :**
1. Préparez votre document (PDF, Word, etc.)
2. Donnez-lui un nom simple (exemple : `programme-2025.pdf`)
3. Copiez-le dans `public/files/`
4. Contactez la personne qui gère le site pour ajouter le lien de téléchargement sur la page Ressources

Les documents doivent généralement faire moins de 5 MB.

## Résumé

- Toutes les images vont dans `public/images/gallery/`
- Utilisez le format JPG pour les photos
- Gardez les fichiers sous 500 KB chacun
- Utilisez des noms simples avec des tirets (pas d'espaces)
- Compressez les images trop lourdes avec TinyPNG
- Publiez les changements après avoir ajouté des images
- Vérifiez sur le site que tout fonctionne

N'hésitez pas à demander de l'aide si vous n'êtes pas sûr de quelque chose. Mieux vaut poser une question que de faire une erreur.

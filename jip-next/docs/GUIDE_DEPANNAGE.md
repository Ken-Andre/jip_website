# Guide de Dépannage

Ce guide vous aide à résoudre les problèmes les plus courants que vous pourriez rencontrer en gérant le site web.

## Avant de commencer

Si quelque chose ne fonctionne pas :
1. Ne paniquez pas - la plupart des problèmes ont une solution simple
2. Relisez les étapes que vous avez suivies
3. Vérifiez que vous n'avez pas oublié une étape
4. Consultez ce guide

Et rappelez-vous : tous les fichiers sont sauvegardés, donc même si vous faites une erreur, on peut toujours revenir en arrière.

## Problèmes avec les fichiers JSON

### Le fichier JSON ne fonctionne plus après mes modifications

**Symptômes :**
- Erreur quand vous essayez de publier
- Le site ne se construit plus correctement
- Message d'erreur mentionnant "JSON" ou "syntax error"

**Causes possibles :**
- Vous avez supprimé un guillemet
- Vous avez supprimé une virgule
- Vous avez supprimé une accolade ou un crochet

**Solutions :**

1. **Utiliser un validateur en ligne :**
   - Allez sur [jsonlint.com](https://jsonlint.com)
   - Copiez tout le contenu de votre fichier (Ctrl+A, puis Ctrl+C)
   - Collez-le dans le validateur
   - Le site vous dira exactement où est l'erreur

2. **Vérifier manuellement :**
   - Chaque texte doit avoir un guillemet au début et un à la fin
   - Chaque ligne (sauf la dernière d'une section) doit finir par une virgule
   - Chaque `{` doit avoir un `}` correspondant
   - Chaque `[` doit avoir un `]` correspondant

3. **Revenir en arrière :**
   - Si vous ne trouvez pas l'erreur, fermez le fichier sans sauvegarder
   - Ou demandez de restaurer une version précédente du fichier

### J'ai supprimé quelque chose par erreur dans un fichier JSON

**Solution :**
1. Ne sauvegardez PAS le fichier si possible
2. Fermez le fichier
3. Rouvrez-le - il devrait être revenu à la version précédente
4. Si vous avez déjà sauvegardé, demandez à restaurer une version précédente

## Problèmes avec les images

### Mes images ne s'affichent pas sur le site

**Symptômes :**
- L'image apparaît comme une icône cassée
- L'image ne s'affiche pas du tout
- Un message d'erreur apparaît à la place de l'image

**Causes possibles :**
- L'image n'est pas dans le bon dossier
- Le nom du fichier contient des caractères spéciaux ou des espaces
- L'image n'a pas été publiée (pas encore en ligne)
- Le navigateur affiche une version en cache

**Solutions :**

1. **Vérifier le dossier :**
   - L'image doit être dans `public/images/gallery/` pour les photos de galerie
   - Vérifiez que vous avez bien mis l'image au bon endroit

2. **Vérifier le nom :**
   - Le nom ne doit pas contenir d'espaces
   - Pas de caractères spéciaux comme @, #, !, etc.
   - Utilisez des tirets à la place des espaces
   - Exemple bon : `jip-2025-ceremonie.jpg`
   - Exemple mauvais : `JIP 2025 Cérémonie!.jpg`

3. **Vérifier la publication :**
   - Avez-vous bien publié vos changements ? (voir guide de publication)
   - Attendez 2-5 minutes après la publication

4. **Vider le cache du navigateur :**
   - Appuyez sur Ctrl+F5 (ou Cmd+Shift+R sur Mac)
   - Ou fermez et rouvrez votre navigateur

### Mes images sont floues

**Cause :** L'image originale était de mauvaise qualité ou a été trop compressée

**Solutions :**
1. Utilisez une photo originale de meilleure qualité
2. Ne compressez pas trop (gardez au moins 70% de qualité)
3. Utilisez les bonnes dimensions (voir guide des images)

### Le site est lent à cause de mes images

**Cause :** Les images sont trop lourdes (plus de 500 KB chacune)

**Solution :**
1. Compressez vos images avec TinyPNG ou un autre outil
2. Réduisez les dimensions si nécessaire
3. Utilisez le format JPG au lieu de PNG pour les photos

## Problèmes avec la publication

### Je n'arrive pas à publier mes changements

**Symptômes :**
- Erreur quand vous essayez de "push"
- Message "rejected" ou "permission denied"
- Git demande constamment un mot de passe

**Solutions :**

1. **Vérifier votre connexion à GitHub :**
   - Êtes-vous connecté à internet ?
   - Votre compte GitHub est-il actif ?
   - Avez-vous les permissions pour ce projet ?

2. **Récupérer les dernières modifications :**
   ```
   git pull
   ```
   Parfois quelqu'un d'autre a fait des modifications entre-temps, il faut les récupérer d'abord.

3. **Vérifier vos identifiants :**
   - Si Git vous demande un nom d'utilisateur, entrez votre nom d'utilisateur GitHub
   - Pour le mot de passe, vous aurez peut-être besoin d'un "Personal Access Token" au lieu du mot de passe normal
   - Demandez de l'aide si vous n'avez pas de token

### Mes changements ne apparaissent pas sur le site après publication

**Symptômes :**
- Vous avez bien publié mais le site ne change pas
- Vous attendez mais rien ne se passe

**Causes possibles :**
- Le site est encore en train de se construire
- Votre navigateur affiche une ancienne version (cache)
- La publication a échoué

**Solutions :**

1. **Attendre :**
   - Le site met 2 à 5 minutes pour se reconstruire
   - Attendez au moins 5 minutes

2. **Vider le cache :**
   - Appuyez sur Ctrl+F5 plusieurs fois
   - Ou fermez complètement votre navigateur et rouvrez-le
   - Essayez un autre navigateur

3. **Vérifier sur Netlify :**
   - Allez sur [app.netlify.com](https://app.netlify.com)
   - Vérifiez que la dernière publication a réussi
   - Si elle a échoué, voyez les logs pour comprendre pourquoi

4. **Vérifier que vous avez bien publié :**
   - Retournez sur GitHub et vérifiez que vos changements sont bien là
   - Allez sur le site GitHub du projet et regardez les fichiers

### La publication a échoué sur Netlify

**Symptômes :**
- Statut "Failed" (échec) sur Netlify
- Message d'erreur dans les logs

**Solutions :**

1. **Voir les logs :**
   - Sur Netlify, cliquez sur la publication qui a échoué
   - Regardez les "Deploy logs" pour voir l'erreur exacte
   - L'erreur vous dira généralement ce qui ne va pas

2. **Erreurs courantes :**
   - **Erreur JSON :** Un fichier JSON a un problème de syntaxe
   - **Image manquante :** Le code fait référence à une image qui n'existe pas
   - **Erreur de code :** Il y a une erreur dans le code (contactez le développeur)

3. **Corriger et republier :**
   - Corrigez l'erreur
   - Publiez à nouveau

4. **Revenir à une version précédente :**
   - Si vous ne trouvez pas l'erreur, vous pouvez revenir à une version précédente qui fonctionnait
   - Sur Netlify, trouvez la dernière publication qui a réussi
   - Cliquez sur "..." puis "Publish deploy"

## Problèmes généraux

### Je ne trouve pas un fichier

**Solution :**
- Utilisez la fonction Rechercher de Windows (ou Finder sur Mac)
- Cherchez le nom du fichier
- Ou ouvrez le dossier `jip-next` et cherchez dedans
- Les fichiers de texte sont dans `locales/`
- Les images sont dans `public/images/`

### Je ne me souviens plus de ce que j'ai changé

**Solution :**
- Si vous avez utilisé GitHub Desktop, regardez l'historique
- Ou utilisez la commande `git log` pour voir l'historique des modifications
- Vous pouvez aussi comparer les fichiers avec une version précédente sur GitHub

### J'ai fait beaucoup de modifications et ça ne marche plus

**Solution :**
1. Ne paniquez pas
2. Identifiez quelle modification a causé le problème
3. Si vous ne trouvez pas, revenez à une version précédente
4. Recommencez les modifications une par une, en testant après chacune

### Je ne comprends pas un message d'erreur

**Solution :**
1. Copiez le message d'erreur exact
2. Cherchez-le sur Google
3. Ou demandez de l'aide à la personne qui gère le projet
4. Ne soyez pas timide, c'est normal de demander de l'aide

## Quand demander de l'aide

Vous devriez demander de l'aide si :

- Vous avez essayé plusieurs solutions et ça ne marche toujours pas
- L'erreur est trop compliquée pour vous
- Vous n'êtes pas sûr de ce qu'il faut faire
- Vous avez peur de casser quelque chose

Il vaut mieux demander de l'aide que de continuer et risquer de casser quelque chose d'important.

## Sauvegardes et sécurité

**Bonnes nouvelles :** Tous vos fichiers sont sauvegardés automatiquement sur GitHub. Même si vous faites une erreur :

- On peut toujours revenir à une version précédente
- Rien n'est perdu définitivement
- On peut voir l'historique de tous les changements

Donc n'ayez pas peur d'essayer. Si ça ne marche pas, on peut toujours revenir en arrière.

## Checklist de dépannage

Avant de demander de l'aide, vérifiez :

- [ ] Avez-vous suivi toutes les étapes du guide ?
- [ ] Avez-vous vérifié les règles de base (guillemets, virgules, etc.) ?
- [ ] Avez-vous attendu assez longtemps (2-5 minutes) ?
- [ ] Avez-vous essayé de vider le cache du navigateur ?
- [ ] Avez-vous vérifié sur Netlify si la publication a réussi ?
- [ ] Avez-vous lu le message d'erreur en entier ?

## Ressources utiles

- **Validateur JSON :** [jsonlint.com](https://jsonlint.com)
- **Compresseur d'images :** [tinypng.com](https://tinypng.com)
- **Site Netlify :** [app.netlify.com](https://app.netlify.com)
- **Site GitHub :** [github.com](https://github.com)

## Résumé

- La plupart des problèmes ont une solution simple
- Vérifiez toujours les règles de base (guillemets, virgules, noms de fichiers)
- Attendez 2-5 minutes après une publication
- Videz le cache du navigateur si quelque chose ne s'affiche pas
- Tous les fichiers sont sauvegardés, on peut toujours revenir en arrière
- N'hésitez pas à demander de l'aide

Gardez ce guide à portée de main, et n'oubliez pas : tout le monde fait des erreurs au début. L'important c'est d'apprendre et de ne pas abandonner.

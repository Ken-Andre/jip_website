# Guide pour Publier vos Modifications

Ce guide vous explique comment mettre en ligne vos changements sur le site web. C'est la dernière étape après avoir modifié le contenu ou ajouté des images.

## Comprendre le processus

Quand vous modifiez des fichiers sur votre ordinateur, ces changements ne sont pas automatiquement sur le site web. Il faut les "publier" pour qu'ils apparaissent en ligne.

Le processus ressemble à ça :
1. Vous modifiez les fichiers sur votre ordinateur
2. Vous "commitez" ces changements (c'est comme dire "je valide ces modifications")
3. Vous "poussez" vers GitHub (c'est comme envoyer vos modifications sur internet)
4. Netlify (le service qui héberge le site) voit les changements
5. Netlify reconstruit le site avec vos modifications
6. Vos changements apparaissent sur le site web (après 2 à 5 minutes)

## Ce dont vous avez besoin

Pour publier vos modifications, vous avez besoin de :

1. **Git** installé sur votre ordinateur (c'est un logiciel de gestion de versions)
2. **Un compte GitHub** avec accès au projet
3. **Les fichiers modifiés** sauvegardés sur votre ordinateur

Si vous n'avez pas encore Git installé ou un compte GitHub, demandez de l'aide à la personne qui gère le projet.

## Première fois : Configuration

Si c'est la première fois que vous publiez des changements, vous devez d'abord configurer Git.

### Étape 1 : Installer Git

1. Allez sur [git-scm.com/download/win](https://git-scm.com/download/win) (pour Windows)
2. Téléchargez et installez Git
3. Pendant l'installation, gardez les options par défaut
4. Redémarrez votre ordinateur après l'installation

### Étape 2 : Configurer Git

1. Ouvrez "Invite de commandes" (Command Prompt) ou PowerShell
2. Tapez ces deux commandes (remplacez avec vos vraies informations) :

```
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@exemple.com"
```

Par exemple :
```
git config --global user.name "Juan Eloundou"
git config --global user.email "juan.eloundou@email.com"
```

Appuyez sur Entrée après chaque commande.

### Étape 3 : Se connecter à GitHub

Vous aurez besoin de vous connecter à GitHub. La première fois, Git vous demandera vos identifiants GitHub.

## Méthode simple : Utiliser GitHub Desktop

Si les commandes vous font peur, vous pouvez utiliser GitHub Desktop à la place. C'est un programme avec une interface graphique, beaucoup plus simple.

### Installer GitHub Desktop

1. Allez sur [desktop.github.com](https://desktop.github.com)
2. Téléchargez GitHub Desktop
3. Installez-le
4. Ouvrez GitHub Desktop et connectez-vous avec votre compte GitHub

### Publier avec GitHub Desktop

**Étape 1 : Ouvrir le projet**
1. Dans GitHub Desktop, cliquez sur "File" > "Add local repository"
2. Naviguez vers le dossier `jip-next` sur votre ordinateur
3. Cliquez sur "Add repository"

**Étape 2 : Voir vos changements**
- Après avoir modifié des fichiers, revenez dans GitHub Desktop
- Vous verrez la liste de tous les fichiers que vous avez modifiés dans la colonne de gauche

**Étape 3 : Valider vos changements**
1. En bas à gauche, il y a une zone pour écrire un message
2. Écrivez un message qui décrit ce que vous avez changé
   - Exemple : "Mise à jour de la date de l'événement pour 2026"
   - Exemple : "Ajout de nouvelles photos dans la galerie"
3. Cliquez sur le bouton "Commit to main" (ou "Commit to master")

**Étape 4 : Publier**
1. En haut de la fenêtre, cliquez sur le bouton "Push origin"
2. Attendez quelques secondes
3. C'est fait ! Vos changements sont maintenant sur GitHub

**Étape 5 : Attendre la publication**
- Attendez 2 à 5 minutes
- Allez sur le site web pour vérifier que vos changements sont là

## Méthode avancée : Utiliser les commandes

Si vous préférez utiliser les commandes (ou si GitHub Desktop ne fonctionne pas), voici comment faire :

### Ouvrir l'invite de commandes

1. Appuyez sur la touche Windows
2. Tapez "cmd" ou "PowerShell"
3. Appuyez sur Entrée
4. Une fenêtre noire s'ouvre

### Aller dans le dossier du projet

Tapez cette commande (ajustez le chemin selon où se trouve votre projet) :

```
cd C:\Users\votre-nom\Documents\School\Xp-X5\jip_website\jip-next
```

Appuyez sur Entrée.

### Voir ce qui a changé

Tapez :
```
git status
```

Cette commande vous montre tous les fichiers que vous avez modifiés.

### Ajouter les fichiers modifiés

Tapez :
```
git add .
```

Cette commande prépare tous vos fichiers pour la publication.

### Valider les changements

Tapez (remplacez le message par une description de vos changements) :
```
git commit -m "Mise à jour de la date de l'événement"
```

Exemples de bons messages :
- "Mise à jour de la date pour janvier 2026"
- "Ajout de 5 nouvelles photos dans la galerie"
- "Modification des numéros de téléphone pour les dons"

### Publier sur GitHub

Tapez :
```
git push
```

Si c'est la première fois, Git vous demandera peut-être de vous identifier. Entrez votre nom d'utilisateur GitHub et votre mot de passe (ou un token d'accès si vous en avez un).

### Attendre la publication

Attendez 2 à 5 minutes, puis visitez le site web pour voir vos changements.

## Vérifier que ça a marché

Après avoir publié vos changements :

1. Attendez 2 à 5 minutes (le site a besoin de temps pour se reconstruire)
2. Allez sur [https://journee-internationale-pasteurs.netlify.app](https://journee-internationale-pasteurs.netlify.app)
3. Actualisez la page plusieurs fois (Ctrl+F5 pour forcer l'actualisation)
4. Vérifiez que vos modifications sont bien là

Si vos changements n'apparaissent pas après 5 minutes, voyez la section "Problèmes courants" ci-dessous.

## Voir l'état de la publication

Vous pouvez vérifier si votre publication est en cours sur Netlify :

1. Allez sur [app.netlify.com](https://app.netlify.com)
2. Connectez-vous (si vous avez un compte)
3. Cliquez sur "journee-internationale-pasteurs"
4. Vous verrez la liste des publications
5. Les statuts possibles :
   - **Building** (en construction) - En cours, attendez
   - **Published** (publié) - C'est fait, vos changements sont en ligne
   - **Failed** (échoué) - Il y a eu une erreur, voyez la section problèmes

## Problèmes courants

### Le "push" a été rejeté

**Message d'erreur :** "rejected" ou "non-fast-forward"

**Cause :** Quelqu'un d'autre a fait des modifications entre-temps.

**Solution :**
1. Récupérez d'abord les dernières modifications :
   ```
   git pull
   ```
2. Si Git vous demande de fusionner, acceptez
3. Ensuite, essayez de nouveau :
   ```
   git push
   ```

### Git me demande un nom d'utilisateur et un mot de passe

**Solution :** Entrez vos identifiants GitHub. Si vous avez activé l'authentification à deux facteurs sur GitHub, vous devrez utiliser un "Personal Access Token" au lieu du mot de passe. Demandez de l'aide si vous n'avez pas de token.

### Mes changements n'apparaissent pas sur le site

**Causes possibles :**
- Le site est encore en train de se construire (attendez 2-5 minutes)
- Votre navigateur affiche une version en cache (faites Ctrl+F5)
- La publication a échoué (vérifiez sur Netlify)

**Solutions :**
1. Attendez encore un peu
2. Fermez et rouvrez votre navigateur
3. Essayez un autre navigateur
4. Vérifiez sur Netlify si la publication a réussi

### J'ai fait une erreur, comment revenir en arrière ?

**Ne paniquez pas !** On peut toujours revenir en arrière.

**Solution rapide :**
1. Si vous n'avez pas encore publié (pas encore fait "push"), vous pouvez simplement modifier les fichiers et recommencer
2. Si vous avez déjà publié, contactez la personne qui gère le projet pour restaurer une version précédente

Tous les changements sont sauvegardés, donc on peut toujours revenir à une version précédente.

## Récupérer les dernières modifications

Avant de faire vos propres modifications, c'est une bonne idée de récupérer les dernières modifications que d'autres personnes ont faites.

**Avec GitHub Desktop :**
1. Ouvrez GitHub Desktop
2. Cliquez sur "Fetch origin" ou "Pull origin"

**Avec les commandes :**
```
git pull
```

Faites ça régulièrement, surtout si plusieurs personnes travaillent sur le site.

## Récapitulatif : Les étapes en résumé

1. **Modifiez les fichiers** (contenu ou images)
2. **Sauvegardez** vos fichiers
3. **Ouvrez GitHub Desktop** (ou l'invite de commandes)
4. **Voyez vos changements** dans la liste
5. **Écrivez un message** qui décrit vos changements
6. **Validez** (Commit)
7. **Publiez** (Push)
8. **Attendez** 2 à 5 minutes
9. **Vérifiez** sur le site web

## Astuces

- **Faites des messages clairs** : Un bon message vous aide à vous souvenir de ce que vous avez changé plus tard
- **Publiez régulièrement** : Ne gardez pas trop de changements en attente, publiez souvent
- **Vérifiez avant de publier** : Relisez vos modifications une dernière fois
- **Testez après publication** : Visitez toujours le site pour vérifier que tout fonctionne

## Besoin d'aide ?

Si vous rencontrez un problème :
1. Relisez cette section
2. Vérifiez que vous avez bien suivi toutes les étapes
3. Demandez de l'aide à la personne qui gère le projet

Ne vous inquiétez pas, tout le monde fait des erreurs au début. L'important c'est d'apprendre et de ne pas hésiter à demander de l'aide.

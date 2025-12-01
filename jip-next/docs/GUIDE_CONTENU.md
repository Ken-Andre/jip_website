# Guide de Mise à Jour du Contenu

Ce guide vous explique comment modifier TOUS les textes et informations du site web. Vous pouvez modifier absolument tout le contenu : dates, textes, coordonnées, numéros de téléphone, informations bancaires, etc. Tout est expliqué dans ce guide.

## Où se trouve le contenu ?

Le contenu du site est stocké à deux endroits principaux :

1. **Les fichiers JSON** (la plupart des textes) :
   - `locales/fr.json` - Textes en français
   - `locales/en.json` - Textes en anglais

2. **Les fichiers de code** (quelques informations spécifiques) :
   - Les fichiers dans le dossier `components/` qui se terminent par `.tsx`
   - Ce sont des fichiers texte normaux que vous pouvez ouvrir avec le Bloc-notes

Ne vous inquiétez pas si vous voyez des fichiers `.tsx` - ce sont juste des fichiers texte avec un nom bizarre. Vous pouvez les ouvrir et modifier le texte dedans exactement comme les fichiers JSON.

## Comment ouvrir ces fichiers ?

Pour les fichiers JSON (`locales/fr.json` et `locales/en.json`) :
- Bloc-notes (sur Windows) - déjà installé
- TextEdit (sur Mac - on ne sait jamais)
- WordPad (si vous avez besoin de voir le formatage)

Pour les fichiers de code (ceux qui se terminent par `.tsx`) :
- Utilisez le Bloc-notes aussi, ça fonctionne très bien
- Visual Studio Code (gratuit, téléchargeable) - c'est mieux car il montre les erreurs en couleur, mais le Bloc-notes marche aussi

**Important :** Quand vous ouvrez un fichier avec le Bloc-notes, si vous voyez du texte bizarre ou des caractères étranges, c'est normal. Cherchez juste le texte que vous voulez modifier (utilisez Ctrl+F pour rechercher) et modifiez-le.

## Les règles importantes

Avant de commencer, il y a quelques règles à respecter :

**À FAIRE :**
- Modifier seulement le texte entre les guillemets
- Garder les guillemets autour du texte
- Garder les virgules à la fin des lignes
- Mettre à jour les deux fichiers (français ET anglais)

**À NE PAS FAIRE :**
- Supprimer les guillemets
- Supprimer les virgules
- Supprimer les accolades { } ou les crochets [ ]
- Changer les mots qui sont avant les deux points (les "clés")

## Comment modifier les fichiers de code (.tsx) ?

Parfois, certaines informations ne sont pas dans les fichiers JSON mais directement dans les fichiers de code (les fichiers `.tsx` dans le dossier `components/`). C'est le cas pour certaines coordonnées de contact, informations bancaires, etc.

**Ne vous inquiétez pas, c'est très simple :**

1. **Ouvrez le fichier `.tsx` avec le Bloc-notes** (faites un clic droit sur le fichier, "Ouvrir avec", puis "Bloc-notes")
2. **Utilisez la fonction Rechercher (Ctrl+F)** pour trouver le texte que vous voulez modifier
3. **Modifiez seulement le texte entre les guillemets** - exactement comme pour les fichiers JSON
4. **Ne touchez pas au reste** - ne modifiez pas les lignes qui commencent par `import`, `export`, ou qui contiennent beaucoup de symboles bizarres
5. **Sauvegardez le fichier**

**Exemple :** Si vous voyez une ligne comme :
```
value: "contact@jip.org",
```
Vous pouvez changer `"contact@jip.org"` par `"nouveau@jip.org"`, mais gardez les guillemets et la virgule.

**Astuce :** Si vous n'êtes pas sûr de ce que vous pouvez modifier, cherchez le texte que vous voyez sur le site web dans le fichier. Si vous le trouvez, c'est que c'est ce texte-là qu'il faut modifier.

## Tâches courantes

### Changer la date de l'événement

**Où chercher :** Dans le fichier `locales/fr.json`, cherchez la section `"hero"` et la ligne `"date"`

**Exemple de ce que vous verrez :**

```json
"hero": {
  "title": "Journée Internationale des Pasteurs",
  "subtitle": "Honorer ceux qui veillent sur nos âmes",
  "date": "12 Décembre 2025",
  "location": "Yaoundé, Cameroun"
}
```

**Ce qu'il faut faire :**

1. Ouvrez le fichier `locales/fr.json` avec le Bloc-notes
2. Utilisez la fonction Rechercher (Ctrl+F) et tapez "date"(juste date)
3. Trouvez la ligne qui ressemble à : `"date": "12 Décembre 2025",`
4. Changez seulement la partie entre les guillemets après les deux points
   - Avant : `"date": "12 Décembre 2025",`
   - Après : `"date": "15 Janvier 2026",`
5. Sauvegardez le fichier (Ctrl+S)
6. Faites exactement la même chose dans `locales/en.json` mais en anglais(vous pouvez utiliser deepl translator au cas ou mais se rassurer en collant d'être dans les guillemets "")
   - Exemple : `"date": "January 15, 2026",`

**Astuce :** Gardez toujours les guillemets et la virgule à la fin.

### Changer le lieu de l'événement

C'est exactement la même chose que pour la date, mais vous cherchez la ligne `"location"` à la place.

Dans le même exemple que ci-dessus, vous trouverez :
```json
"location": "Yaoundé, Cameroun",
```

Changez seulement la partie entre les guillemets. N'oubliez pas de faire la même chose dans le fichier anglais.

### Modifier le programme de la journée

Le programme est organisé par heures. Chaque heure a un titre et une description.

**Où chercher :** Dans `locales/fr.json`, cherchez la section `"program"`

**Exemple de ce que vous verrez :**

```json
"program": {
  "08h00": {
    "title": "Accueil et Inscription",
    "desc": "Enregistrement des participants et petit-déjeuner"
  },
  "09h00": {
    "title": "Ouverture Officielle",
    "desc": "Mot de bienvenue et prière d'ouverture"
  }
}
```

**Ce qu'il faut faire :**

1. Ouvrez `locales/fr.json`
2. Cherchez la section `"program"`
3. Trouvez l'heure que vous voulez modifier (par exemple "08h00")
4. Modifiez le `"title"` (le titre) et/ou le `"desc"` (la description)
5. Sauvegardez
6. Faites la même chose dans `locales/en.json`

**Exemple de modification :**

Si vous voulez changer le titre de 08h00, vous changez :
- Avant : `"title": "Accueil et Inscription",`
- Après : `"title": "Accueil des Participants",`

Gardez toujours les guillemets et les virgules.

### Mettre à jour les informations de contact

Les informations de contact sont affichées sur la page Contact du site. Il y a deux endroits à modifier :

**Partie 1 : Les textes (dans les fichiers JSON)**

Les libellés comme "Email", "Téléphone", "Adresse" se trouvent dans `locales/fr.json` dans la section `"contact"`.

**Partie 2 : Les vraies coordonnées (dans un fichier de code)**

Les vraies coordonnées (l'adresse email réelle, le numéro de téléphone réel, l'adresse réelle) sont dans un fichier de code. Ne vous inquiétez pas, c'est très simple à modifier.

**Modifier l'adresse email de contact :**

1. Ouvrez le fichier `components/contact/contact-info.tsx` avec le Bloc-notes
2. Utilisez la fonction Rechercher (Ctrl+F) et cherchez "contact@jip.org"
3. Vous trouverez plusieurs lignes avec cette adresse. Changez toutes les occurrences pour votre nouvelle adresse
4. Par exemple, remplacez `"contact@jip.org"` par `"nouveau@jip.org"`
5. Gardez bien les guillemets autour de l'adresse
6. Sauvegardez le fichier

**Faites la même chose dans le fichier `components/contact/contact-content.tsx`** - cherchez "contact@jip.org" et remplacez par votre nouvelle adresse.

**Modifier le numéro de téléphone :**

1. Ouvrez `components/contact/contact-info.tsx`
2. Cherchez `"+237 600 000 000"` (le numéro affiché)
3. Remplacez par votre nouveau numéro, par exemple `"+237 677 123 456"`
4. Cherchez aussi `"tel:+237600000000"` (sans espaces, utilisé pour appeler depuis le site)
5. Remplacez par `"tel:+237677123456"` (le même numéro mais sans espaces, avec le +)
6. Faites la même chose dans `components/contact/contact-content.tsx`
7. Sauvegardez les deux fichiers

**Modifier l'adresse postale :**

1. Ouvrez `components/contact/contact-info.tsx`
2. Cherchez `"Yaoundé, Cameroun"`
3. Remplacez par votre nouvelle adresse, par exemple `"Douala, Cameroun"` ou `"123 Rue Exemple, Yaoundé"`
4. Faites la même chose dans `components/contact/contact-content.tsx`
5. Sauvegardez

**Modifier les horaires d'ouverture :**

Les horaires sont dans les fichiers JSON :

1. Ouvrez `locales/fr.json`
2. Cherchez la section `"contact"` puis `"info"` puis `"hours"`
3. Vous trouverez :
```json
"hours": {
  "label": "Horaires",
  "value": "Lun - Ven: 9h - 17h"
}
```
4. Changez seulement la ligne `"value"` pour mettre vos horaires
5. Faites la même chose dans `locales/en.json`
6. Sauvegardez

### Modifier les informations sur les dons

Toutes les informations de dons peuvent être modifiées. Voici comment faire pour chaque type de don :

**Modifier les numéros Mobile Money :**

Les numéros Mobile Money sont dans les fichiers JSON :

1. Ouvrez `locales/fr.json`
2. Cherchez la section `"donations"` puis `"mobile"`
3. Vous trouverez :
```json
"mobile": {
  "title": "Mobile Money",
  "name": "MTN Mobile Money",
  "number": "+237 6 00 00 00 00",
  "name2": "Orange Money",
  "number2": "+237 6 00 00 00 00"
}
```
4. Modifiez `"number"` pour le numéro MTN et `"number2"` pour Orange Money
5. Si vous voulez changer les noms, modifiez `"name"` et `"name2"`
6. Faites la même chose dans `locales/en.json`
7. Sauvegardez

**Modifier l'adresse PayPal :**

L'adresse email PayPal doit être modifiée à plusieurs endroits :

**Étape 1 : Dans les fichiers JSON**

1. Ouvrez `locales/fr.json`
2. Cherchez la section `"donations"` puis `"paypal"`
3. Vous trouverez :
```json
"paypal": {
  "title": "PayPal",
  "email": "dons@jip.org"
}
```
4. Changez `"email"` pour votre nouvelle adresse PayPal
5. Faites la même chose dans `locales/en.json`
6. Sauvegardez

**Étape 2 : Dans les fichiers de code**

L'adresse PayPal est aussi dans des fichiers de code qu'il faut modifier :

1. Ouvrez `components/donations/donations-content.tsx` avec le Bloc-notes
2. Cherchez `"dons@jip.org"` (utilisez Ctrl+F)
3. Remplacez par votre nouvelle adresse PayPal
4. Sauvegardez

**Si vous voulez modifier le texte du bouton PayPal :**

Le bouton PayPal affiche "Donate via PayPal". Pour changer ce texte :

1. Ouvrez `components/donations/donation-options.tsx`
2. Cherchez `"Donate via PayPal"`
3. Remplacez par le texte que vous voulez, par exemple `"Faire un don via PayPal"`
4. Gardez bien les guillemets autour du texte
5. Sauvegardez

**Modifier les informations bancaires :**

Les informations bancaires sont dans un fichier de code. Voici comment les modifier étape par étape :

1. Ouvrez le fichier `components/donations/donation-options.tsx` avec le Bloc-notes

2. **Modifier le nom de la banque :**
   - Utilisez Ctrl+F pour rechercher "UBA Cameroon"
   - Vous trouverez une ligne qui ressemble à :
     ```
     <span className="font-medium">UBA Cameroon</span>
     ```
   - Remplacez "UBA Cameroon" par le nom de votre banque
   - Gardez bien tout le reste autour (les <span>, className, etc.)
   - Exemple : `<span className="font-medium">Afriland First Bank</span>`

3. **Modifier le numéro de compte :**
   - Cherchez "123456789012345" (utilisez Ctrl+F)
   - Vous trouverez une ligne qui ressemble à :
     ```
     <span className="font-medium font-mono">123456789012345</span>
     ```
   - Remplacez "123456789012345" par votre vrai numéro de compte
   - Gardez bien tout le reste
   - Exemple : `<span className="font-medium font-mono">987654321098765</span>`

4. **Modifier l'IBAN :**
   - Cherchez "CM21" ou "CM21 10033"
   - Vous trouverez une ligne qui ressemble à :
     ```
     <span className="font-medium font-mono">CM21 10033 ...</span>
     ```
   - Remplacez "CM21 10033 ..." par votre vrai IBAN complet
   - Gardez bien tout le reste
   - Exemple : `<span className="font-medium font-mono">CM21 12345 67890 12345 67890</span>`

5. Sauvegardez le fichier

**Important :** 
- Vérifiez bien que tous les numéros sont corrects avant de sauvegarder
- Une erreur dans un numéro de compte ou IBAN empêcherait les dons d'arriver
- Ne modifiez que le texte entre les balises `<span>` et `</span>`, ne touchez pas aux autres parties

**Les titres et descriptions des dons :**

Si vous voulez changer les titres comme "Mobile Money", "PayPal", ou les descriptions, c'est dans les fichiers JSON :

1. Ouvrez `locales/fr.json`
2. Cherchez la section `"donations"`
3. Modifiez les `"title"` comme vous voulez
4. Faites la même chose dans `locales/en.json`
5. Sauvegardez

### Modifier les informations sur le fondateur

**Où chercher :** Section `"founder"` dans `locales/fr.json`

Vous y trouverez le nom, le titre, une citation, la biographie et une chronologie.

**Exemple :**

```json
"founder": {
  "name": "Pasteur Patrick",
  "title": "Fondateur de la JIP",
  "quote": "Honorer les pasteurs est un appel divin...",
  "bio": "Pasteur Patrick est né en..."
}
```

Modifiez seulement le texte entre les guillemets. Pour la chronologie (timeline), chaque année a sa propre entrée que vous pouvez modifier.

## Exemple complet : Modifier la date

Voici un exemple pas à pas pour changer la date de l'événement :

**Étape 1 :** Ouvrez `locales/fr.json` avec le Bloc-notes

**Étape 2 :** Appuyez sur Ctrl+F pour ouvrir la recherche

**Étape 3 :** Tapez "date" et cherchez dans le fichier

**Étape 4 :** Vous trouverez quelque chose comme :
```json
"date": "12 Décembre 2025",
```

**Étape 5 :** Changez pour :
```json
"date": "15 Janvier 2026",
```

**Important :** Gardez les guillemets et la virgule exactement comme ils étaient.

**Étape 6 :** Sauvegardez le fichier (Fichier > Enregistrer ou Ctrl+S)

**Étape 7 :** Ouvrez maintenant `locales/en.json`

**Étape 8 :** Faites la même chose mais en anglais :
```json
"date": "January 15, 2026",
```

**Étape 9 :** Sauvegardez

**Étape 10 :** Votre modification est prête ! Maintenant il faut la publier (voir le guide de publication).

## Vérifier que tout est correct

Après avoir fait vos modifications, vérifiez :

1. **Pas de guillemets manquants** - Chaque texte doit avoir un guillemet au début et un à la fin
2. **Pas de virgules oubliées** - Sauf à la toute fin d'une section, chaque ligne doit se terminer par une virgule
3. **Les accolades sont équilibrées** - Chaque `{` doit avoir un `}` correspondant
4. **Les deux langues sont à jour** - Français ET anglais doivent être modifiés

## Que faire en cas d'erreur ?

Si vous avez supprimé quelque chose par erreur et que le fichier ne fonctionne plus :

1. **Ne paniquez pas** - On peut toujours récupérer une version précédente
2. **Fermez le fichier sans sauvegarder** si possible (si vous n'avez pas encore sauvegardé, le fichier reviendra à son état précédent quand vous le rouvrirez)
3. **Si vous avez déjà sauvegardé**, pas de problème : tous les fichiers sont sauvegardés sur GitHub. Vous pouvez toujours récupérer une version précédente (voir le Guide de Publication pour savoir comment)
4. **Recommencez avec plus de prudence**

**Vérifier vos fichiers avant de publier :**

Il existe des outils en ligne pour vérifier que votre fichier JSON est correct. Vous pouvez copier tout le contenu de votre fichier (Ctrl+A, puis Ctrl+C) et le coller sur [jsonlint.com](https://jsonlint.com). Le site vous dira exactement où sont les erreurs si vous en avez faites.

**En cas de doute :**

- Si vous n'êtes pas sûr d'avoir bien fait quelque chose, relisez cette section du guide
- Si vous avez peur de casser quelque chose, faites une copie de sauvegarde du fichier avant de le modifier (faites un clic droit sur le fichier, puis "Copier", puis "Coller" dans le même dossier - ça créera une copie)
- Tous les changements sont sauvegardés, donc même si vous faites une erreur, on peut toujours revenir en arrière

## Outils recommandés

- **Bloc-notes** - Simple et déjà installé sur Windows
- **Visual Studio Code** - Plus moderne, montre les erreurs en couleur (téléchargement gratuit)
- **Notepad++** - Alternative au Bloc-notes avec plus de fonctionnalités

Si vous utilisez Visual Studio Code, il vous signalera automatiquement si vous faites une erreur dans le format du fichier, ce qui peut être très utile.

## Après avoir fait vos modifications

Une fois que vous avez modifié les fichiers :

1. Sauvegardez bien tous les fichiers modifiés
2. Suivez le guide de publication pour mettre en ligne vos changements
3. Attendez quelques minutes après la publication
4. Visitez le site web pour vérifier que vos changements sont bien là

## Modifier les autres pages du site

### Page Vision

**Où chercher :** Section `"vision"` dans `locales/fr.json`

Vous pouvez modifier :
- Le titre et sous-titre de la page (`"hero"`)
- La mission (`"mission"`)
- Les valeurs (`"values"`) - Excellence, Unité, Impact, Honneur
- Les statistiques d'impact (`"impact"`)

Tout se trouve dans les fichiers JSON, modifiez simplement le texte entre les guillemets.

### Page Témoignages

Les témoignages sont stockés dans les composants. Pour les modifier :

1. Ouvrez `components/testimonials/testimonials-grid.tsx`
2. Cherchez les témoignages qui sont dans le fichier
3. Modifiez les noms, les textes des témoignages, et les titres/églises
4. Sauvegardez

Si vous ne trouvez pas les témoignages dans ce fichier, ils sont peut-être dans `components/home/testimonials-section.tsx`. Ouvrez ce fichier et cherchez les témoignages de la même manière, en vous inspirant de ce qui y est déjà.

### Page Ressources

**Où chercher :** Section `"resources"` dans `locales/fr.json`

Vous pouvez modifier :
- Le titre et sous-titre (`"hero"`)
- Les titres des sections (Logos, Affiches, Bannières, Documents)
- Les descriptions de chaque section

Pour ajouter ou changer les fichiers téléchargeables eux-mêmes (PDF, images), voyez le Guide des Images dans la section sur les documents.

### Page Participation / Inscription

**Où chercher :** Section `"participation"` dans `locales/fr.json`

Vous pouvez modifier :
- Le titre et sous-titre de la page
- Les informations pratiques (date, lieu, langues)
- Les textes du formulaire (voir section `"form"` dans les JSON)

Les libellés des champs du formulaire (Nom, Email, Téléphone, etc.) sont dans la section `"form"` des fichiers JSON.

### Navigation et Footer

**Où chercher :** Sections `"nav"` et `"footer"` dans `locales/fr.json`

Vous pouvez modifier :
- Les noms des liens dans le menu (`"nav"`)
- Les textes du pied de page (`"footer"`)

Pour modifier les liens eux-mêmes (vers quelles pages ils pointent), c'est dans les fichiers de code, mais les textes visibles sont dans les JSON.

### Modifier les liens de réseaux sociaux

Les liens vers Facebook, Twitter, Instagram et YouTube sont affichés dans le Footer (pied de page) et dans la page Contact. Actuellement, ils pointent vers "#" (c'est-à-dire nulle part). Voici comment les modifier pour qu'ils pointent vers vos vraies pages de réseaux sociaux.

**Modifier les liens dans le Footer :**

1. Ouvrez le fichier `components/layout/footer.tsx` avec le Bloc-notes
2. Utilisez Ctrl+F pour chercher "href="#"
3. Vous trouverez plusieurs lignes avec des liens vers les réseaux sociaux
4. Pour Facebook, trouvez la ligne qui ressemble à :
   ```
   href="#"
   ```
   qui se trouve juste après `aria-label="Facebook"`
5. Remplacez `"#"` par l'URL de votre page Facebook, par exemple :
   ```
   href="https://www.facebook.com/votrepage"
   ```
6. Faites la même chose pour Twitter, Instagram et YouTube
7. Sauvegardez le fichier

**Modifier les liens dans la page Contact :**

Il y a deux fichiers pour la page Contact à modifier :

**Dans `components/contact/contact-content.tsx` :**

1. Ouvrez le fichier avec le Bloc-notes
2. Cherchez les lignes qui commencent par `{ icon: Facebook, href: "#",`
3. Vous verrez quelque chose comme :
   ```
   const socialLinks = [
       { icon: Facebook, href: "#", label: "Facebook" },
       { icon: Twitter, href: "#", label: "Twitter" },
       { icon: Instagram, href: "#", label: "Instagram" },
       { icon: Youtube, href: "#", label: "YouTube" },
   ]
   ```
4. Remplacez chaque `"#"` par l'URL de votre page respective
   - Exemple pour Facebook : `href: "https://www.facebook.com/votrepage"`
   - Exemple pour Instagram : `href: "https://www.instagram.com/votrecompte"`
   - Et ainsi de suite
5. Gardez bien les virgules et la structure
6. Sauvegardez le fichier

**Dans `components/contact/contact-info.tsx` :**

Ce fichier affiche aussi les liens de réseaux sociaux. Ils sont codés différemment :

1. Ouvrez le fichier avec le Bloc-notes(ou l'editeur de votre choix)
2. Cherchez la section qui contient les icônes Facebook, Instagram, Twitter, Youtube
3. Vous trouverez des lignes avec `href="#"` dans cette section
4. Remplacez chaque `"#"` par l'URL correspondante de votre page de réseau social
5. Il y a 4 liens à modifier (un pour chaque réseau)
6. Sauvegardez le fichier

**Note :** Les liens dans contact-info.tsx sont dans un format légèrement différent, mais le principe est le même : remplacez `"#"` par votre URL.

**Note :** Si vous n'avez pas encore de page sur un réseau social, vous pouvez laisser le `"#"` ou simplement ne pas mettre le lien (mais il faut garder la structure du code). Ou vous pouvez créer la page plus tard et mettre à jour le lien.

**Format des URLs :**
- Facebook : `https://www.facebook.com/nomdelapage`
- Twitter/X : `https://twitter.com/nomducompte` ou `https://x.com/nomducompte`
- Instagram : `https://www.instagram.com/nomducompte`
- YouTube : `https://www.youtube.com/@nomducompte` ou `https://www.youtube.com/channel/ID`

**Conseil :** Testez les liens après avoir publié pour vérifier qu'ils fonctionnent bien.

### Messages de formulaire

**Où chercher :** Section `"form"` dans `locales/fr.json`

Vous pouvez modifier tous les messages qui apparaissent dans les formulaires :
- Les messages de succès après l'envoi
- Les messages d'erreur
- Les libellés des champs
- Les textes des boutons

Tout est dans les fichiers JSON dans la section `"form"`.

## Modifier tous les textes du site

Pour modifier n'importe quel texte du site :

1. **Commencez par les fichiers JSON** - La grande majorité des textes sont là
2. **Ouvrez `locales/fr.json`** - Tous les textes en français y sont
3. **Utilisez la fonction Rechercher (Ctrl+F)** pour trouver le texte que vous voulez modifier
4. **Modifiez seulement le texte entre les guillemets**
5. **Faites la même chose dans `locales/en.json`** pour la version anglaise
6. **Sauvegardez les deux fichiers**

Si vous ne trouvez pas un texte dans les fichiers JSON, il est peut-être dans un fichier de code (fichiers `.tsx` dans le dossier `components/`). Dans ce cas :

1. Ouvrez le fichier `.tsx` avec le Bloc-notes
2. Utilisez la fonction Rechercher pour trouver le texte
3. Modifiez seulement le texte entre les guillemets
4. Sauvegardez

**Important :** Ne modifiez jamais les parties techniques du code (les lignes qui commencent par `import`, `export`, ou qui contiennent des accolades et des points-virgules). Modifiez seulement les textes qui sont entre guillemets.

## Configuration des formulaires et envoi d'emails

Le site contient deux formulaires qui envoient des emails :
1. Le formulaire de contact (page Contact)
2. Le formulaire d'inscription (page Participation)

Ces formulaires utilisent un service appelé **FormSubmit** pour envoyer les emails. Voici comment tout configurer.

### Comment fonctionne FormSubmit ?

FormSubmit est un service gratuit qui permet aux formulaires de site web d'envoyer des emails. Voici comment ça marche :

1. Quand quelqu'un remplit un formulaire et clique sur "Envoyer"
2. Le formulaire envoie les informations à FormSubmit
3. FormSubmit reçoit les informations et les envoie par email à l'adresse que vous avez configurée
4. Vous recevez l'email dans votre boîte mail normale

C'est simple et gratuit, et ça fonctionne sans avoir besoin de serveur spécial.

### Changer l'adresse email de réception

Actuellement, les formulaires envoient les emails à une adresse temporaire. Vous devez la changer pour votre propre adresse email.

**Il y a deux formulaires à modifier :**

1. **Formulaire de contact** - dans `components/contact/contact-form.tsx`
2. **Formulaire d'inscription** - dans `components/participation/registration-form.tsx`

**Étape 1 : Modifier le formulaire de contact**

1. Ouvrez le fichier `components/contact/contact-form.tsx` avec le Bloc-notes
2. Utilisez Ctrl+F pour chercher `"https://formsubmit.co/thekyan@hi2.in"`
3. Vous trouverez une ligne qui ressemble à :
   ```
   action="https://formsubmit.co/thekyan@hi2.in"
   ```
4. Remplacez `thekyan@hi2.in` par votre adresse email
   - Par exemple, si votre email est `contact@jip.org`, la ligne devient :
     ```
     action="https://formsubmit.co/contact@jip.org"
     ```
5. Gardez bien le reste de la ligne exactement comme il est
6. Sauvegardez le fichier

**Étape 2 : Modifier le formulaire d'inscription**

1. Ouvrez le fichier `components/participation/registration-form.tsx` avec le Bloc-notes
2. Utilisez Ctrl+F pour chercher `"https://formsubmit.co/thekyan@hi2.in"`
3. Remplacez `thekyan@hi2.in` par votre adresse email (la même que pour le formulaire de contact, ou une autre si vous préférez)
4. Sauvegardez le fichier

**Important :** Vous pouvez utiliser la même adresse email pour les deux formulaires, ou des adresses différentes. C'est comme vous préférez.

### Première configuration avec FormSubmit

La première fois que vous changez l'adresse email, FormSubmit va vous envoyer un email de confirmation pour vérifier que c'est bien votre adresse.

**Voici ce qui va se passer :**

1. Vous modifiez l'adresse email dans les formulaires
2. Vous publiez les changements sur le site (voir Guide de Publication)
3. Quelqu'un remplit un formulaire et l'envoie (ou vous le testez vous-même)
4. FormSubmit vous envoie un email à votre nouvelle adresse qui dit quelque chose comme "Confirmez votre adresse email"
5. Vous cliquez sur le lien de confirmation dans cet email
6. Après ça, tous les formulaires envoyés vous arriveront normalement par email

**Conseil :** Testez le formulaire vous-même la première fois pour recevoir l'email de confirmation rapidement.

### Modifier le sujet des emails reçus

Vous pouvez personnaliser le sujet (le titre) des emails que vous recevez quand quelqu'un remplit un formulaire.

**Pour le formulaire de contact :**

1. Ouvrez `components/contact/contact-form.tsx`
2. Cherchez la ligne qui contient :
   ```
   name="_subject" value="Nouveau message de contact - JIP Website"
   ```
3. Remplacez `"Nouveau message de contact - JIP Website"` par le sujet que vous voulez
   - Par exemple : `"Message du site JIP"`
   - Gardez bien les guillemets
4. Sauvegardez

**Pour le formulaire d'inscription :**

1. Ouvrez `components/participation/registration-form.tsx`
2. Cherchez la ligne qui contient :
   ```
   name="_subject" value="Nouvelle inscription - JIP 2025"
   ```
3. Remplacez `"Nouvelle inscription - JIP 2025"` par le sujet que vous voulez
4. Sauvegardez

### Modifier la page de redirection après l'envoi

Quand quelqu'un envoie un formulaire, il est redirigé vers une page de confirmation. Actuellement, c'est configuré pour `localhost:3000` (pour le développement). Vous devez le changer pour votre site en ligne.

**Pour le formulaire de contact :**

1. Ouvrez `components/contact/contact-form.tsx`
2. Cherchez la ligne qui contient :
   ```
   name="_next" value="http://localhost:3000/contact?success=true"
   ```
3. Remplacez par l'adresse de votre site :
   ```
   name="_next" value="https://journee-internationale-pasteurs.netlify.app/contact?success=true"
   ```
   - Remplacez `journee-internationale-pasteurs.netlify.app` par votre vraie adresse si elle est différente
4. Gardez bien le `?success=true` à la fin
5. Sauvegardez

**Pour le formulaire d'inscription :**

1. Ouvrez `components/participation/registration-form.tsx`
2. Cherchez la ligne qui contient :
   ```
   name="_next" value="http://localhost:3000/participation?success=true"
   ```
3. Remplacez par :
   ```
   name="_next" value="https://journee-internationale-pasteurs.netlify.app/participation?success=true"
   ```
4. Sauvegardez

**Note :** Si vous changez l'adresse de votre site plus tard, n'oubliez pas de mettre à jour ces lignes aussi.

### Utiliser des adresses email différentes pour chaque formulaire

Si vous voulez que le formulaire de contact aille à une adresse et le formulaire d'inscription à une autre :

1. Modifiez chaque fichier séparément avec l'adresse email que vous voulez
2. Par exemple :
   - Formulaire de contact → `contact@jip.org`
   - Formulaire d'inscription → `inscriptions@jip.org`
3. Sauvegardez les deux fichiers

C'est tout ! Chaque formulaire enverra les emails à l'adresse que vous avez mise dans son fichier.

### Comment les emails arrivent

Quand quelqu'un remplit un formulaire, l'email que vous recevez contient :
- Le nom de la personne
- Son email
- Son téléphone (pour l'inscription)
- Son église/organisation (pour l'inscription)
- Son message (pour le contact)
- Son type de participation (pour l'inscription)

Tout est organisé dans un tableau clair et facile à lire.

### Vérifier que les formulaires fonctionnent

Pour tester un formulaire :

1. Allez sur votre site web en ligne (pas en local)
2. Remplissez le formulaire de contact ou d'inscription
3. Cliquez sur "Envoyer"
4. Vous devriez être redirigé vers une page de confirmation
5. Vérifiez votre boîte email pour voir si vous avez reçu le message

**Si vous ne recevez pas l'email :**
- Vérifiez vos spams/courrier indésirable
- Vérifiez que vous avez bien confirmé votre adresse email avec FormSubmit (voir section "Première configuration" ci-dessus)
- Attendez quelques minutes, parfois il y a un petit délai
- Vérifiez que l'adresse email dans le code est correcte

### Si vous voulez changer le format des emails

Les emails arrivent actuellement sous forme de tableau (format "table"). Si vous voulez changer le format :

1. Ouvrez le fichier du formulaire (`contact-form.tsx` ou `registration-form.tsx`)
2. Cherchez la ligne :
   ```
   name="_template" value="table"
   ```
3. Vous pouvez changer `"table"` par :
   - `"box"` - Format en boîtes
   - `"basic"` - Format basique simple
   - Ou enlever cette ligne complètement pour le format par défaut
4. Sauvegardez

Mais en général, le format "table" est le plus lisible et pratique.

### Désactiver le captcha (si besoin)

Les formulaires ont actuellement le captcha désactivé (pour éviter les complications). Si vous voulez l'activer plus tard :

1. Ouvrez le fichier du formulaire
2. Cherchez la ligne :
   ```
   name="_captcha" value="false"
   ```
3. Changez `"false"` en `"true"`
4. Sauvegardez

Mais attention, avec le captcha activé, les utilisateurs devront résoudre un puzzle avant d'envoyer, ce qui peut décourager certaines personnes.

### Résumé de la configuration des formulaires

**Pour changer l'adresse email de réception :**
1. Ouvrez `components/contact/contact-form.tsx`
2. Changez `thekyan@hi2.in` par votre email dans la ligne `action=`
3. Faites la même chose dans `components/participation/registration-form.tsx`
4. Publiez les changements
5. Confirmez votre email quand FormSubmit vous l'envoie

**Pour changer le sujet des emails :**
- Modifiez la ligne avec `name="_subject"` dans chaque fichier de formulaire

**Pour changer la page de redirection :**
- Modifiez la ligne avec `name="_next"` et mettez l'adresse de votre site en ligne

**Important :** Après chaque modification, n'oubliez pas de publier les changements (voir Guide de Publication) pour que les modifications soient actives sur le site en ligne.

## Résumé

- Tout le contenu texte est dans `locales/fr.json` et `locales/en.json`
- Modifiez seulement le texte entre les guillemets
- Gardez les guillemets, virgules et accolades
- Toujours mettre à jour les deux langues
- Sauvegardez avant de fermer
- Vérifiez sur le site après publication

N'hésitez pas à relire ce guide si vous avez un doute. Mieux vaut prendre son temps que de faire une erreur.

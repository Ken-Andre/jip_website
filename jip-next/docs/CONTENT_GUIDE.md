# 📝 Content Update Guide

This guide will help you update text content on the JIP website **without writing any code**. All content is stored in easy-to-edit JSON files.

## 📍 Where is Content Stored?

All website text is stored in two translation files:

- **French**: `locales/fr.json`
- **English**: `locales/en.json`

These files contain all the text you see on the website, organized by page and section.

---

## 🎯 Common Content Updates

### Event Information

**What to update**: Event date, location, time

**File**: `locales/fr.json` and `locales/en.json`

**Location in file**: Look for the `"hero"` section

```json
"hero": {
  "title": "Journée Internationale des Pasteurs",
  "subtitle": "Honorer ceux qui veillent sur nos âmes",
  "date": "12 Décembre 2025",          ← Update this
  "location": "Yaoundé, Cameroun",     ← Update this
  "cta": {
    "register": "S'inscrire",
    "program": "Voir le Programme"
  }
}
```

**Steps**:
1. Open `locales/fr.json` in a text editor (Notepad, VS Code, etc.)
2. Find the line with `"date":`
3. Change the date between the quotes
4. Find the line with `"location":`
5. Change the location between the quotes
6. Save the file
7. Repeat for `locales/en.json` (English version)

---

### Program Schedule

**What to update**: Event schedule times and descriptions

**File**: `locales/fr.json` and `locales/en.json`

**Location in file**: Look for the `"program"` section

```json
"program": {
  "08h00": {
    "title": "Accueil et Inscription",                    ← Update this
    "desc": "Enregistrement des participants..."         ← Update this
  },
  "09h00": {
    "title": "Ouverture Officielle",
    "desc": "Mot de bienvenue et prière d'ouverture"
  }
}
```

**Steps**:
1. Open `locales/fr.json`
2. Scroll to the `"program"` section
3. Find the time slot you want to update (e.g., `"08h00"`)
4. Update the `"title"` and `"desc"` (description)
5. Save the file
6. Repeat for `locales/en.json`

---

### Contact Information

**What to update**: Email, phone, address

**File**: `locales/fr.json` and `locales/en.json`

**Location in file**: Look for the `"contact"` section

```json
"contact": {
  "info": {
    "title": "Coordonnées",
    "email": "Email",
    "phone": "Téléphone",
    "address": "Adresse",
    "hours": {
      "label": "Horaires",
      "value": "Lun - Ven: 9h - 17h"    ← Update this
    }
  }
}
```

> **Note**: The actual contact details (email address, phone number) are displayed in the contact page component. To update those, see the [Advanced Updates](#advanced-updates) section.

---

### Donation Information

**What to update**: Mobile money numbers, bank details

**File**: `locales/fr.json` and `locales/en.json`

**Location in file**: Look for the `"donations"` section

```json
"donations": {
  "mobile": {
    "title": "Mobile Money",
    "name": "MTN Mobile Money",
    "number": "+237 6 00 00 00 00",     ← Update this
    "name2": "Orange Money",
    "number2": "+237 6 00 00 00 00"    ← Update this
  },
  "bank": {
    "title": "Virement Bancaire",
    "name": "Nom de la Banque",         ← Update this
    "account": "XXXXXXXXXX",            ← Update this
    "iban": "CM XX XXXX XXXX..."        ← Update this
  }
}
```

**Steps**:
1. Open `locales/fr.json`
2. Find the `"donations"` section
3. Update the phone numbers, bank name, account numbers
4. Save the file
5. Repeat for `locales/en.json`

---

### Founder Information

**What to update**: Founder's bio, quote, timeline

**File**: `locales/fr.json` and `locales/en.json`

**Location in file**: Look for the `"founder"` section

```json
"founder": {
  "name": "Pasteur Patrick",
  "title": "Fondateur de la JIP",
  "quote": "Honorer les pasteurs...",     ← Update this
  "bio": "Pasteur Patrick est...",        ← Update this
  "timeline": {
    "2008": "Réception de la vision...",  ← Update these
    "2015": "Première édition...",
    "2020": "Expansion du mouvement...",
    "2025": "Célébration de la 10ème..."
  }
}
```

---

## ⚠️ Important Rules

### DO:
✅ Update text between quotes: `"text": "Your new text here"`
✅ Keep the same structure (don't remove commas or brackets)
✅ Update BOTH `fr.json` (French) AND `en.json` (English)
✅ Save the file after making changes

### DON'T:
❌ Remove quotes `"` around text
❌ Remove commas `,` at the end of lines
❌ Remove curly brackets `{}` or square brackets `[]`
❌ Change the keys (the words before the colon `:`)

---

## 🔍 Example: Updating Event Date

**Before**:
```json
"date": "12 Décembre 2025"
```

**After**:
```json
"date": "15 Janvier 2026"
```

✅ **Correct** - Only changed the text between quotes

---

## 🛠 Tools You Can Use

You can edit JSON files with:

- **Notepad** (Windows)
- **TextEdit** (Mac)
- **Visual Studio Code** (recommended - free download)
- **Notepad++** (Windows)
- **Any text editor**

> **Tip**: Visual Studio Code will highlight errors if you accidentally break the JSON structure!

---

## 🚀 After Making Changes

1. Save the file
2. Test locally (if you have the development environment)
3. Commit and push changes (see [Deployment Guide](./DEPLOYMENT_GUIDE.md))
4. Wait for Netlify to rebuild (2-5 minutes)
5. Check the live website

---

## 🆘 Need Help?

- **JSON syntax error**: Use a JSON validator like [jsonlint.com](https://jsonlint.com)
- **Text not updating**: Make sure you updated BOTH `fr.json` and `en.json`
- **Website broken**: Check the [Troubleshooting Guide](./TROUBLESHOOTING.md)

---

## Advanced Updates

Some content is stored directly in component files (`.tsx` files). These require basic coding knowledge:

### Contact Page Details
**File**: `app/contact/page.tsx`

### Participation Form
**File**: `components/participation/participation-form.tsx`

If you need to update these, contact your developer or see the technical documentation.

# 🌐 Translation Management Guide

This guide explains how to manage French and English translations for the JIP website.

## 📚 Overview

The website supports two languages:
- **French (Français)** - Primary language
- **English** - Secondary language

All translations are stored in JSON files in the `locales/` folder.

---

## 📁 Translation Files

| File | Language | Purpose |
|------|----------|---------|
| `locales/fr.json` | French | All French text |
| `locales/en.json` | English | All English text |

---

## 🔄 How Translations Work

The website uses a **key-value** system:

```json
{
  "nav": {
    "home": "Accueil"     ← French version
  }
}
```

```json
{
  "nav": {
    "home": "Home"        ← English version
  }
}
```

The **key** (`"home"`) stays the same in both files.
The **value** (`"Accueil"` or `"Home"`) changes based on the language.

---

## ✏️ Adding New Translations

### Step 1: Add to French File

Open `locales/fr.json` and add your new text:

```json
{
  "nav": {
    "home": "Accueil",
    "vision": "Vision",
    "newpage": "Nouvelle Page"    ← Add this line
  }
}
```

### Step 2: Add to English File

Open `locales/en.json` and add the English translation with the **same key**:

```json
{
  "nav": {
    "home": "Home",
    "vision": "Vision",
    "newpage": "New Page"         ← Add this line
  }
}
```

### Step 3: Use in Code

The developer will use this key in the code:

```tsx
{t('nav.newpage')}
```

---

## 📝 Translation Best Practices

### DO:
✅ Keep the same keys in both files
✅ Maintain the same structure in both files
✅ Use natural language for each culture
✅ Keep translations concise
✅ Test both languages after updates

### DON'T:
❌ Translate keys (the words before `:`)
❌ Use Google Translate blindly - adapt to context
❌ Add text to only one language file
❌ Remove commas or brackets

---

## 🗂 Translation File Structure

The translation files are organized by page/section:

```json
{
  "nav": { ... },           // Navigation menu
  "hero": { ... },          // Homepage hero section
  "program": { ... },       // Program page
  "founder": { ... },       // Founder page
  "vision": { ... },        // Vision page
  "participation": { ... }, // Participation page
  "gallery": { ... },       // Gallery page
  "donations": { ... },     // Donations page
  "contact": { ... },       // Contact page
  "resources": { ... },     // Resources page
  "form": { ... },          // Forms
  "common": { ... },        // Common phrases
  "footer": { ... }         // Footer
}
```

---

## 🎯 Common Translation Tasks

### Update Navigation Menu

**Files**: `fr.json` and `en.json`
**Section**: `"nav"`

```json
"nav": {
  "home": "Accueil",
  "vision": "Vision",
  "founder": "Fondateur",
  "program": "Programme",
  "participation": "Participation",
  "gallery": "Galerie",
  "donations": "Dons",
  "contact": "Contact",
  "resources": "Ressources",
  "testimonials": "Témoignages"
}
```

### Update Button Text

**Files**: `fr.json` and `en.json`
**Section**: `"hero"` → `"cta"` or `"common"`

```json
"hero": {
  "cta": {
    "register": "S'inscrire",
    "program": "Voir le Programme"
  }
}
```

### Update Form Labels

**Files**: `fr.json` and `en.json`
**Section**: `"form"`

```json
"form": {
  "name": "Nom Complet",
  "email": "Email",
  "phone": "Téléphone",
  "submit": "Envoyer"
}
```

---

## 🔍 Finding the Right Key

If you need to update text but don't know which key to change:

1. **Look at the website** - Note the exact text you want to change
2. **Search in fr.json** - Use Ctrl+F (Windows) or Cmd+F (Mac) to search for that text
3. **Note the key** - The word before the `:` is the key
4. **Update both files** - Change the value in both `fr.json` and `en.json`

### Example:

You want to change "S'inscrire" (Register button):

1. Open `fr.json`
2. Search for "S'inscrire"
3. You find: `"register": "S'inscrire"`
4. The key is `"register"`
5. Update in both files:
   - `fr.json`: `"register": "Inscription"`
   - `en.json`: `"register": "Sign Up"`

---

## ⚠️ Common Mistakes

### ❌ Wrong: Different Keys

```json
// fr.json
"button": "Cliquez ici"

// en.json
"btn": "Click here"    ← Different key!
```

### ✅ Correct: Same Keys

```json
// fr.json
"button": "Cliquez ici"

// en.json
"button": "Click here"  ← Same key!
```

---

### ❌ Wrong: Missing Comma

```json
{
  "home": "Accueil"
  "vision": "Vision"    ← Missing comma above!
}
```

### ✅ Correct: With Comma

```json
{
  "home": "Accueil",    ← Comma here
  "vision": "Vision"
}
```

---

## 🧪 Testing Translations

After updating translations:

1. **Save both files** (`fr.json` and `en.json`)
2. **Refresh the website** (if running locally)
3. **Switch languages** using the language toggle
4. **Check all pages** where you made changes

---

## 🛠 Tools for Translation

### JSON Validators
- [JSONLint](https://jsonlint.com) - Check for syntax errors
- Visual Studio Code - Highlights errors automatically

### Translation Tools
- Professional translator (recommended)
- [DeepL](https://www.deepl.com) - Better than Google Translate
- Native speakers for review

---

## 📋 Translation Checklist

When adding new content:

- [ ] Add key to `fr.json` with French text
- [ ] Add same key to `en.json` with English text
- [ ] Check JSON syntax (no errors)
- [ ] Test on the website
- [ ] Verify both languages display correctly
- [ ] Commit and push changes

---

## 🌍 Language Switcher

The website has a language switcher in the navigation menu. Users can toggle between French and English.

The current language is stored in the URL:
- French: `https://yoursite.com/` (default)
- English: `https://yoursite.com/en/`

---

## 🆘 Need Help?

**Syntax error in JSON**:
- Use [JSONLint](https://jsonlint.com) to find the error
- Check for missing commas, quotes, or brackets

**Translation not showing**:
- Clear browser cache
- Check that the key exists in both files
- Verify the key is used correctly in the code

**Text appears in wrong language**:
- Check that you updated the correct file
- Verify the language switcher is working

---

## 📞 Contact

For translation questions or assistance, contact the website administrator or development team.

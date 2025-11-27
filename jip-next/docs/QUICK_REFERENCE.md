# ⚡ Quick Reference Guide

Essential commands and file locations for maintaining the JIP website.

## 🗂️ File Locations

| What to Update | File Path |
|----------------|-----------|
| French text | `locales/fr.json` |
| English text | `locales/en.json` |
| Gallery images | `public/images/gallery/` |
| Hero banner | `public/images/hero/` |
| Documents/PDFs | `public/files/` |
| Favicon | `public/favicon.ico` |

## 💻 Essential Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Check what changed
git status

# Commit changes
git add .
git commit -m "Your message here"

# Push to GitHub (triggers deployment)
git push

# Pull latest changes
git pull
```

## 📝 Common Updates

### Update Event Date
**Files**: `locales/fr.json`, `locales/en.json`
```json
"hero": {
  "date": "12 Décembre 2025"  ← Change this
}
```

### Update Contact Phone
**Files**: `locales/fr.json`, `locales/en.json`
```json
"donations": {
  "mobile": {
    "number": "+237 6 00 00 00 00"  ← Change this
  }
}
```

### Add Gallery Photo
1. Place image in `public/images/gallery/`
2. Name: `jip-2025-description.jpg`
3. Optimize: < 500KB
4. Commit and push

## 🚀 Deployment Workflow

```
Edit Files → Save → git add . → git commit -m "msg" → git push → Wait 2-5 min
```

## 🔧 Troubleshooting Quick Fixes

| Problem | Solution |
|---------|----------|
| Changes not showing | Hard refresh: Ctrl+F5 |
| JSON error | Check on jsonlint.com |
| Can't push | Run `git pull` first |
| Image not loading | Check filename (case-sensitive) |
| Build failed | Check Netlify logs |

## 🔗 Quick Links

- **Live Site**: https://journee-internationale-pasteurs.netlify.app
- **Netlify Dashboard**: https://app.netlify.com
- **GitHub Repo**: https://github.com/Ken-Andre/jip_website
- **JSON Validator**: https://jsonlint.com
- **Image Compressor**: https://tinypng.com

## 📞 Support

- Content questions → Administrator
- Technical issues → Developer
- Build failures → Check Netlify logs + [Troubleshooting Guide](./TROUBLESHOOTING.md)

## 📚 Full Guides

- [Content Update Guide](./CONTENT_GUIDE.md) - Detailed text editing
- [Translation Guide](./TRANSLATION_GUIDE.md) - Managing FR/EN
- [Image Guide](./IMAGE_GUIDE.md) - Photos and media
- [Deployment Guide](./DEPLOYMENT_GUIDE.md) - Publishing changes
- [Troubleshooting](./TROUBLESHOOTING.md) - Fix common issues

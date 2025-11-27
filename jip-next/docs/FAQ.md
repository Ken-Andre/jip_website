# ❓ Frequently Asked Questions (FAQ)

Common questions about maintaining the JIP website.

## 🌐 General Questions

### Q: Do I need to know coding to update the website?

**A:** No! Most content updates only require editing text in JSON files. You can use any text editor. However, understanding basic JSON syntax is helpful.

### Q: What's the difference between `fr.json` and `en.json`?

**A:** 
- `fr.json` contains all French translations
- `en.json` contains all English translations
- They must have the same structure (same keys)
- Only the values (text) differ

### Q: How long does it take for changes to appear on the live site?

**A:** 
- After pushing to GitHub: 2-5 minutes
- Netlify builds the site automatically
- You can check progress in the Netlify dashboard

### Q: Can I break the website by editing files?

**A:** It's unlikely, but possible:
- JSON syntax errors can break the build
- Use a JSON validator to check before committing
- You can always rollback to a previous version
- Test locally first if possible

---

## 📝 Content Management

### Q: Where do I update the event date and location?

**A:** In both `locales/fr.json` and `locales/en.json`:
```json
"hero": {
  "date": "12 Décembre 2025",
  "location": "Yaoundé, Cameroun"
}
```

### Q: How do I add a new section to the website?

**A:** This requires developer assistance. Adding new pages or sections involves:
- Creating new React components
- Adding new routes
- Updating navigation
Contact the development team.

### Q: Can I use HTML in the translation files?

**A:** Generally no. The JSON files contain plain text. Some fields may support basic formatting, but avoid adding HTML directly.

### Q: What if I want to add a new language?

**A:** This requires developer work:
1. Create new translation file (e.g., `es.json` for Spanish)
2. Update i18n configuration
3. Add language switcher support
4. Translate all content

---

## 🖼️ Images

### Q: What image formats are supported?

**A:** 
- **Photos**: JPG (recommended), PNG, WebP
- **Logos/Icons**: PNG (with transparency), SVG
- **Documents**: PDF

### Q: How big should images be?

**A:** 
- **Hero banner**: 1920×1080px, <1MB
- **Gallery photos**: 1200×800px, <500KB
- **Thumbnails**: 400×300px, <100KB
- Always compress before uploading!

### Q: Why is my image not showing?

**A:** Check:
1. Image is in `public/` folder
2. Filename is correct (case-sensitive!)
3. File extension matches (`.jpg` vs `.JPG`)
4. Image was committed and pushed
5. Browser cache cleared (Ctrl+F5)

### Q: Can I upload photos directly from my phone?

**A:** Not directly. You need to:
1. Transfer photos to computer
2. Optimize/resize them
3. Add to project folder
4. Commit and push via Git

---

## 🚀 Deployment

### Q: What is Git and why do I need it?

**A:** Git is a version control system that:
- Tracks changes to files
- Allows collaboration
- Enables rollback to previous versions
- Triggers automatic deployment

### Q: What's the difference between commit and push?

**A:**
- **Commit**: Saves changes locally (on your computer)
- **Push**: Sends commits to GitHub (triggers deployment)
- You need both: `git commit` then `git push`

### Q: Can I deploy without using Git?

**A:** No, the current setup requires Git. However, you can use:
- **GitHub Desktop** (easier than command line)
- **VS Code** (has Git integration)
- Ask developer about alternative workflows

### Q: What if I push the wrong changes?

**A:** You can:
1. **Rollback** in Netlify dashboard (quick)
2. **Revert** the commit with Git
3. **Fix and push** a new commit
See [Deployment Guide - Rollback](./DEPLOYMENT_GUIDE.md#rollback-to-previous-version)

### Q: How do I know if deployment succeeded?

**A:** 
1. Check Netlify dashboard for green "Published" status
2. Visit the live site and verify changes
3. You'll receive email notification (if configured)

---

## 🔧 Technical Questions

### Q: What is Next.js?

**A:** Next.js is a React framework used to build the website. You don't need to know React or Next.js to update content, but it's helpful to understand that it's a modern web framework.

### Q: What is Netlify?

**A:** Netlify is a hosting platform that:
- Hosts the website
- Automatically builds and deploys changes
- Provides the live URL
- Free for basic use

### Q: Why did the build fail?

**A:** Common reasons:
- JSON syntax error in translation files
- Missing file referenced in code
- TypeScript/JavaScript error (needs developer)
Check Netlify build logs for details.

### Q: What's the difference between `npm run dev` and `npm run build`?

**A:**
- `npm run dev`: Development server (live reload, debugging)
- `npm run build`: Production build (optimized, ready for deployment)
- Netlify uses `npm run build` automatically

---

## 🌍 Internationalization

### Q: How does the language switcher work?

**A:** The website detects the URL path:
- Default (French): `yoursite.com/`
- English: `yoursite.com/en/`
Users can toggle between languages.

### Q: Do I need to translate everything?

**A:** Yes! Every key in `fr.json` should have a corresponding entry in `en.json`. Missing translations will show the key name instead of text.

### Q: Can I have different content for different languages?

**A:** Yes, that's the point! The values can be completely different:
```json
// fr.json
"welcome": "Bienvenue à la Journée Internationale des Pasteurs"

// en.json  
"welcome": "Welcome to International Pastors' Day"
```

### Q: What if I don't speak English well?

**A:** 
- Use professional translation services
- Ask a bilingual team member
- Use DeepL (better than Google Translate)
- Have a native speaker review

---

## 🔐 Access & Permissions

### Q: How do I get access to edit the website?

**A:** Contact the repository administrator to:
1. Be added as GitHub collaborator
2. Receive Netlify dashboard access (optional)
3. Get training on the documentation

### Q: Can multiple people edit at the same time?

**A:** Yes, but coordinate to avoid conflicts:
- Pull latest changes before starting (`git pull`)
- Work on different files if possible
- Communicate with team about what you're editing

### Q: What if someone else pushed changes while I was working?

**A:** 
1. Commit your changes locally
2. Pull their changes: `git pull`
3. Resolve any conflicts (if needed)
4. Push your changes: `git push`

---

## 🆘 Help & Support

### Q: Where can I find help?

**A:** 
1. Check the documentation guides in `docs/` folder
2. Search error messages online
3. Check Netlify build logs
4. Contact the development team

### Q: I broke something, what do I do?

**A:** Don't panic!
1. Check what changed: `git status`
2. Revert local changes: `git checkout -- <file>`
3. Or rollback in Netlify dashboard
4. Contact developer if unsure

### Q: Can I test changes without affecting the live site?

**A:** Yes!
1. Run `npm run dev` locally
2. View at `http://localhost:3000`
3. Make changes and test
4. Only push when satisfied

### Q: Who should I contact for different issues?

**A:**
- **Content questions**: Website administrator
- **Translation help**: Bilingual team member
- **Technical errors**: Development team
- **Access issues**: Repository owner
- **Netlify issues**: Site administrator

---

## 📚 Learning Resources

### Q: Where can I learn more about Git?

**A:**
- [Git Basics Guide](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [GitHub Desktop](https://desktop.github.com) - Easier than command line
- [Interactive Git Tutorial](https://learngitbranching.js.org)

### Q: Where can I learn about JSON?

**A:**
- [JSON Introduction](https://www.json.org)
- [JSON Tutorial](https://www.w3schools.com/js/js_json_intro.asp)
- Use a JSON validator to practice

### Q: I want to learn web development to help more. Where do I start?

**A:**
- [MDN Web Docs](https://developer.mozilla.org) - Comprehensive resource
- [freeCodeCamp](https://www.freecodecamp.org) - Free courses
- [Next.js Tutorial](https://nextjs.org/learn) - Learn the framework used

---

## 🔄 Still Have Questions?

If your question isn't answered here:
1. Check the specific guide for your topic
2. Search this documentation
3. Contact the website administrator
4. Reach out to the development team

**Documentation Guides**:
- [Content Guide](./CONTENT_GUIDE.md)
- [Translation Guide](./TRANSLATION_GUIDE.md)
- [Image Guide](./IMAGE_GUIDE.md)
- [Deployment Guide](./DEPLOYMENT_GUIDE.md)
- [Troubleshooting Guide](./TROUBLESHOOTING.md)
- [Quick Reference](./QUICK_REFERENCE.md)

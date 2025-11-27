# 🔧 Troubleshooting Guide

This guide helps you solve common problems with the JIP website.

## 📋 Quick Diagnosis

| Problem | Likely Cause | Quick Fix |
|---------|--------------|-----------|
| Changes not showing | Browser cache | Hard refresh (Ctrl+F5) |
| Build failed | JSON syntax error | Check JSONLint |
| Image not loading | Wrong file path | Verify filename/location |
| Translation missing | Key not in both files | Add to fr.json and en.json |
| Can't push to Git | Need to pull first | Run `git pull` |

---

## 🌐 Website Issues

### Problem: Website Not Loading

**Symptoms**:
- Blank page
- "Site not found" error
- Timeout error

**Solutions**:

1. **Check Netlify status**:
   - Visit [status.netlify.com](https://status.netlify.com)
   - Look for service outages

2. **Check your internet connection**:
   - Try other websites
   - Restart router if needed

3. **Check deployment status**:
   - Go to Netlify dashboard
   - Look for failed deployments
   - Rollback if necessary

4. **Clear browser cache**:
   - Chrome: Ctrl+Shift+Delete
   - Firefox: Ctrl+Shift+Delete
   - Safari: Cmd+Option+E

---

### Problem: Changes Not Appearing

**Symptoms**:
- Made changes but website looks the same
- Old content still showing

**Solutions**:

1. **Hard refresh browser**:
   - Windows: Ctrl+F5 or Ctrl+Shift+R
   - Mac: Cmd+Shift+R

2. **Check if changes were committed**:
   ```bash
   git status
   git log --oneline -5
   ```

3. **Check if changes were pushed**:
   ```bash
   git status
   # Should say "Your branch is up to date"
   ```

4. **Check Netlify build**:
   - Go to Netlify dashboard
   - Verify latest deployment succeeded
   - Check build time matches your push time

5. **Wait longer**:
   - Deployments take 2-5 minutes
   - Check back after 5 minutes

---

### Problem: Images Not Displaying

**Symptoms**:
- Broken image icon
- Alt text showing instead of image
- Blank space where image should be

**Solutions**:

1. **Check file location**:
   - Verify image is in `public/` folder
   - Check subfolder path is correct

2. **Check filename**:
   - Filenames are case-sensitive
   - `Image.jpg` ≠ `image.jpg`
   - Check for typos

3. **Check file extension**:
   - `.jpg` vs `.JPG` vs `.jpeg`
   - `.png` vs `.PNG`
   - Use lowercase extensions

4. **Check file size**:
   - Very large files (>5MB) may not load
   - Compress image if needed

5. **Check browser console**:
   - Press F12
   - Look for 404 errors
   - Shows exact file path it's looking for

---

## 📝 Content Issues

### Problem: JSON Syntax Error

**Symptoms**:
- Build fails with "Unexpected token" error
- Website breaks after editing translation files

**Common mistakes**:

```json
// ❌ Missing comma
{
  "home": "Accueil"
  "vision": "Vision"
}

// ✅ Correct
{
  "home": "Accueil",
  "vision": "Vision"
}
```

```json
// ❌ Extra comma
{
  "home": "Accueil",
  "vision": "Vision",
}

// ✅ Correct
{
  "home": "Accueil",
  "vision": "Vision"
}
```

```json
// ❌ Missing quote
{
  "home": Accueil"
}

// ✅ Correct
{
  "home": "Accueil"
}
```

**Solutions**:

1. **Use JSON validator**:
   - Go to [jsonlint.com](https://jsonlint.com)
   - Paste your JSON
   - Click "Validate JSON"
   - Fix errors shown

2. **Use VS Code**:
   - Opens JSON files with syntax highlighting
   - Shows errors in real-time
   - Suggests fixes

3. **Compare with working version**:
   - Check Git history for last working version
   - Use `git diff` to see what changed

---

### Problem: Translation Not Showing

**Symptoms**:
- Text appears in wrong language
- Translation key showing instead of text (e.g., "nav.home")

**Solutions**:

1. **Check both language files**:
   - Verify key exists in `fr.json`
   - Verify key exists in `en.json`
   - Keys must match exactly

2. **Check key path**:
   ```json
   // If code uses: t('nav.home')
   // JSON must have:
   {
     "nav": {
       "home": "Accueil"
     }
   }
   ```

3. **Clear browser cache**:
   - Translations may be cached
   - Hard refresh (Ctrl+F5)

4. **Check for typos**:
   - `"home"` vs `"Home"` (case-sensitive)
   - Extra spaces
   - Special characters

---

## 🚀 Deployment Issues

### Problem: Build Failed on Netlify

**Symptoms**:
- Red "Failed" status in Netlify
- Email notification about failed build

**Solutions**:

1. **Check build logs**:
   - Go to Netlify dashboard
   - Click on failed deployment
   - Read error message

2. **Common errors**:

   **"JSON parse error"**:
   - Fix JSON syntax in translation files
   - Use JSONLint to validate

   **"Module not found"**:
   - Missing file or wrong import path
   - Check file names and locations

   **"Type error"**:
   - Code error (requires developer)

3. **Test locally**:
   ```bash
   npm run build
   ```
   - If it fails locally, fix before pushing
   - If it succeeds locally but fails on Netlify, contact developer

4. **Rollback**:
   - If can't fix quickly, rollback to previous version
   - See [Deployment Guide - Rollback](./DEPLOYMENT_GUIDE.md#rollback-to-previous-version)

---

### Problem: Can't Push to GitHub

**Symptoms**:
- `git push` fails
- "Permission denied" error
- "rejected" error

**Solutions**:

1. **Pull first**:
   ```bash
   git pull
   git push
   ```

2. **Check credentials**:
   - Verify GitHub username/password
   - May need personal access token instead of password
   - See [GitHub token guide](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

3. **Check permissions**:
   - Verify you're a collaborator on the repository
   - Contact repository admin for access

4. **Check branch**:
   ```bash
   git branch
   # Should show * main
   ```

---

## 🖼️ Image Issues

### Problem: Image Too Large / Slow Loading

**Symptoms**:
- Page loads slowly
- Images take long to appear

**Solutions**:

1. **Compress images**:
   - Use [TinyPNG](https://tinypng.com)
   - Use [Squoosh](https://squoosh.app)
   - Target: <500KB for gallery, <1MB for hero

2. **Resize images**:
   - Don't upload 4000px images for 800px display
   - Resize to appropriate dimensions
   - See [Image Guide - Specifications](./IMAGE_GUIDE.md#image-specifications)

3. **Convert format**:
   - Convert PNG to JPG (if no transparency needed)
   - Use WebP for better compression

---

### Problem: Image Quality Poor

**Symptoms**:
- Blurry or pixelated images
- Low quality appearance

**Solutions**:

1. **Use higher resolution source**:
   - Don't upscale small images
   - Get original high-quality version

2. **Don't over-compress**:
   - Balance file size vs quality
   - Aim for 70-80% quality in compression tools

3. **Use correct format**:
   - JPG for photos
   - PNG for graphics/logos
   - SVG for icons (scalable)

---

## 💻 Local Development Issues

### Problem: `npm run dev` Fails

**Symptoms**:
- Error when starting development server
- Port already in use

**Solutions**:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Check Node.js version**:
   ```bash
   node --version
   # Should be 18.0.0 or higher
   ```

3. **Port in use**:
   ```bash
   # Kill process on port 3000
   # Windows:
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F

   # Mac/Linux:
   lsof -ti:3000 | xargs kill
   ```

4. **Clear cache**:
   ```bash
   rm -rf .next
   npm run dev
   ```

---

### Problem: Changes Not Reflecting Locally

**Symptoms**:
- Made changes but dev server shows old content

**Solutions**:

1. **Hard refresh browser**:
   - Ctrl+F5 or Cmd+Shift+R

2. **Restart dev server**:
   - Stop server (Ctrl+C)
   - Run `npm run dev` again

3. **Clear Next.js cache**:
   ```bash
   rm -rf .next
   npm run dev
   ```

4. **Check file saved**:
   - Verify file was actually saved
   - Check for unsaved indicator in editor

---

## 🔐 Access Issues

### Problem: Can't Access Netlify Dashboard

**Solutions**:

1. **Check login credentials**:
   - Use correct email/password
   - Try password reset

2. **Request access**:
   - Contact site administrator
   - Need to be added as team member

3. **Check URL**:
   - Use [app.netlify.com](https://app.netlify.com)
   - Not netlify.com

---

### Problem: Can't Access GitHub Repository

**Solutions**:

1. **Check if you're a collaborator**:
   - Contact repository owner
   - Request collaborator access

2. **Check GitHub account**:
   - Verify logged into correct account
   - Check email verification

3. **Use correct repository URL**:
   - `https://github.com/Ken-Andre/jip_website`

---

## 🆘 Emergency Contacts

### When to Contact Developer

- ❌ Code errors (TypeScript, React errors)
- ❌ Build system issues
- ❌ Complex functionality broken
- ❌ Database or backend issues
- ❌ Security concerns

### When You Can Fix It Yourself

- ✅ Content updates (text, translations)
- ✅ Image uploads/replacements
- ✅ Simple JSON edits
- ✅ Git commit/push
- ✅ Browser cache issues

---

## 🛠️ Useful Tools

### Validators
- **JSON**: [jsonlint.com](https://jsonlint.com)
- **HTML**: [validator.w3.org](https://validator.w3.org)

### Image Tools
- **Compression**: [tinypng.com](https://tinypng.com)
- **Resize**: [squoosh.app](https://squoosh.app)
- **Editor**: [photopea.com](https://www.photopea.com)

### Git Tools
- **GitHub Desktop**: [desktop.github.com](https://desktop.github.com)
- **Git Documentation**: [git-scm.com](https://git-scm.com)

### Browser Tools
- **Developer Console**: Press F12
- **Network Tab**: Check file loading
- **Console Tab**: Check JavaScript errors

---

## 📞 Getting Help

1. **Check this guide** - Most common issues covered
2. **Check other docs** - See specific guides
3. **Search error message** - Google the exact error
4. **Check Netlify logs** - Detailed error information
5. **Contact developer** - For code-related issues

---

## 📚 Related Guides

- [Content Update Guide](./CONTENT_GUIDE.md)
- [Translation Guide](./TRANSLATION_GUIDE.md)
- [Image Management Guide](./IMAGE_GUIDE.md)
- [Deployment Guide](./DEPLOYMENT_GUIDE.md)

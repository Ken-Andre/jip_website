# 🚀 Deployment Guide

This guide explains how to publish changes to the live JIP website.

## 📋 Overview

The website is hosted on **Netlify** and automatically deploys when you push changes to GitHub.

**Deployment Flow**:
```
Make Changes → Commit → Push to GitHub → Netlify Builds → Live Website
```

**Time**: Typically 2-5 minutes from push to live

---

## 🎯 Prerequisites

Before you can deploy:

- ✅ Git installed on your computer
- ✅ Access to the GitHub repository
- ✅ Changes tested locally (optional but recommended)

---

## 📝 Step-by-Step Deployment

### Step 1: Make Your Changes

Edit the files you need to update:
- Content: `locales/fr.json`, `locales/en.json`
- Images: `public/images/`
- Documents: `public/files/`

### Step 2: Check Your Changes

**If you have the development environment**:

```bash
# Start local server
npm run dev

# Open browser to http://localhost:3000
# Verify your changes look correct
```

**If you don't have dev environment**:
- Double-check file names
- Verify JSON syntax (use [JSONLint](https://jsonlint.com))
- Review changes carefully

### Step 3: Commit Changes

Open terminal/command prompt in the project folder:

```bash
# Check what files changed
git status

# Add all changes
git add .

# Commit with a descriptive message
git commit -m "Update event date to January 2026"
```

**Good commit messages**:
- ✅ "Update event date and location for 2026"
- ✅ "Add new gallery photos from 2025 event"
- ✅ "Fix typo in founder bio"
- ✅ "Update donation phone numbers"

**Bad commit messages**:
- ❌ "Update"
- ❌ "Changes"
- ❌ "Fix"

### Step 4: Push to GitHub

```bash
git push origin main
```

**If prompted for credentials**:
- Enter your GitHub username
- Enter your GitHub password or personal access token

### Step 5: Wait for Deployment

1. **Go to Netlify**: [https://app.netlify.com](https://app.netlify.com)
2. **Find your site**: "journee-internationale-pasteurs"
3. **Check deployment status**:
   - 🟡 **Building** - In progress (wait)
   - 🟢 **Published** - Success! (live)
   - 🔴 **Failed** - Error (see troubleshooting)

### Step 6: Verify Live Site

Visit: [https://journee-internationale-pasteurs.netlify.app](https://journee-internationale-pasteurs.netlify.app)

**Check**:
- ✅ Your changes appear
- ✅ No broken images
- ✅ Both languages work (FR/EN)
- ✅ All pages load correctly

---

## 🖥️ Using Git - Quick Reference

### First Time Setup

```bash
# Configure your name and email
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Clone the repository (if not already done)
git clone https://github.com/Ken-Andre/jip_website.git
cd jip_website/jip-next
```

### Daily Workflow

```bash
# 1. Get latest changes from GitHub
git pull

# 2. Make your changes (edit files)

# 3. Check what changed
git status

# 4. Add changes
git add .

# 5. Commit changes
git commit -m "Describe what you changed"

# 6. Push to GitHub
git push
```

---

## 🔧 Git GUI Tools (Easier than Command Line)

If you're not comfortable with the command line, use a Git GUI:

### Windows
- **GitHub Desktop** (recommended) - [Download](https://desktop.github.com)
- **SourceTree** - [Download](https://www.sourcetreeapp.com)
- **GitKraken** - [Download](https://www.gitkraken.com)

### Mac
- **GitHub Desktop** (recommended) - [Download](https://desktop.github.com)
- **SourceTree** - [Download](https://www.sourcetreeapp.com)
- **Tower** - [Download](https://www.git-tower.com)

### Using GitHub Desktop

1. **Open GitHub Desktop**
2. **Select repository**: jip_website
3. **Make changes** to files
4. **Review changes** in left sidebar
5. **Write commit message** in bottom left
6. **Click "Commit to main"**
7. **Click "Push origin"** at top
8. **Done!** Netlify will deploy automatically

---

## 🌐 Netlify Dashboard

### Accessing Netlify

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Log in with your account
3. Select "journee-internationale-pasteurs" site

### What You Can Do

- **View deployments**: See history of all deployments
- **Check build logs**: See what happened during build
- **Rollback**: Revert to a previous version if needed
- **Environment variables**: Configure settings (admin only)

### Understanding Build Status

| Status | Meaning | Action |
|--------|---------|--------|
| 🟡 Building | In progress | Wait 2-5 minutes |
| 🟢 Published | Success | Check live site |
| 🔴 Failed | Error | Check logs, see troubleshooting |

---

## 🔄 Rollback to Previous Version

If something goes wrong after deployment:

### Option 1: Via Netlify Dashboard

1. Go to Netlify dashboard
2. Click "Deploys" tab
3. Find the last working deployment
4. Click "..." menu → "Publish deploy"
5. Confirm

### Option 2: Via Git

```bash
# See commit history
git log --oneline

# Revert to previous commit
git revert HEAD

# Push the revert
git push
```

---

## ⚠️ Common Deployment Issues

### Build Failed

**Symptom**: Red "Failed" status in Netlify

**Common causes**:
- ❌ JSON syntax error in translation files
- ❌ Missing image file referenced in code
- ❌ TypeScript/JavaScript error

**Solution**:
1. Check Netlify build logs
2. Look for error message
3. Fix the error
4. Commit and push again

### Changes Not Appearing

**Symptom**: Pushed changes but website looks the same

**Possible causes**:
- Browser cache
- Build still in progress
- Changes not committed/pushed

**Solutions**:
1. **Hard refresh browser**: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
2. **Check Netlify**: Verify build completed successfully
3. **Verify Git**: Run `git status` to ensure changes were committed

### Push Rejected

**Symptom**: `git push` fails with "rejected" error

**Solution**:
```bash
# Pull latest changes first
git pull

# Resolve any conflicts if needed

# Push again
git push
```

---

## 📊 Deployment Checklist

Before deploying:

- [ ] Changes tested locally (if possible)
- [ ] JSON files validated (no syntax errors)
- [ ] Images optimized and in correct folder
- [ ] Both languages updated (FR and EN)
- [ ] Commit message is descriptive
- [ ] No sensitive information in files

After deploying:

- [ ] Build completed successfully on Netlify
- [ ] Live site checked (hard refresh)
- [ ] All pages load correctly
- [ ] Both languages work
- [ ] Images display properly
- [ ] Forms still work (if applicable)

---

## 🔐 Access & Permissions

### Who Can Deploy?

Anyone with:
- GitHub repository access (push permission)
- Git configured on their computer

### Getting Access

Contact the repository administrator to:
- Be added as a collaborator on GitHub
- Receive Netlify dashboard access (optional)

---

## 🆘 Emergency Procedures

### Website is Down

1. **Check Netlify status**: [status.netlify.com](https://status.netlify.com)
2. **Check last deployment**: Look for failed builds
3. **Rollback**: Use previous working deployment
4. **Contact**: Notify technical team immediately

### Accidentally Deleted Important File

```bash
# Restore file from last commit
git checkout HEAD -- path/to/file

# Or revert entire commit
git revert <commit-hash>
```

---

## 📞 Need Help?

**Build errors**:
- Check [Troubleshooting Guide](./TROUBLESHOOTING.md)
- Review Netlify build logs
- Contact developer

**Git issues**:
- See [Git documentation](https://git-scm.com/doc)
- Use GitHub Desktop (easier)
- Contact technical team

**Netlify access**:
- Contact site administrator
- Request collaborator access

---

## 📚 Additional Resources

- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [GitHub Desktop Guide](https://docs.github.com/en/desktop)
- [Netlify Documentation](https://docs.netlify.com)

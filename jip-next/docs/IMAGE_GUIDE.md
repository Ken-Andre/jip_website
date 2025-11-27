# 🖼️ Image Management Guide

This guide explains how to add, replace, and manage images on the JIP website.

## 📁 Where Images Are Stored

All images are stored in the `public/` folder:

```
public/
├── images/              ← Main images folder
│   ├── gallery/        ← Gallery photos
│   ├── hero/           ← Homepage hero images
│   └── ...
├── favicon.ico         ← Website icon
├── apple-touch-icon.png
└── *.jpg, *.png        ← Other images
```

---

## 🎯 Common Image Tasks

### Adding Gallery Photos

Gallery photos appear on the **Gallery** page (`/galerie`).

**Steps**:

1. **Prepare your image**:
   - Format: JPG or PNG
   - Recommended size: 1200px × 800px
   - File size: Less than 500KB (compress if needed)
   - Name: Use descriptive names (e.g., `jip-2025-ceremony.jpg`)

2. **Add to folder**:
   - Place image in `public/images/gallery/`

3. **Update gallery data** (requires developer):
   - The gallery images are loaded from the `public/images/gallery/` folder
   - New images will automatically appear

**Image Naming Convention**:
```
jip-[year]-[description].jpg

Examples:
- jip-2024-opening-ceremony.jpg
- jip-2024-worship-session.jpg
- jip-2024-group-photo.jpg
```

---

### Replacing the Hero Banner

The hero banner is the large background image on the homepage.

**Current file**: `public/images/hero/hero-banner.jpg`

**Steps**:

1. **Prepare new image**:
   - Format: JPG
   - Size: 1920px × 1080px (minimum)
   - Aspect ratio: 16:9
   - File size: Less than 1MB

2. **Replace the file**:
   - Option A: Replace `hero-banner.jpg` with your new image (keep same name)
   - Option B: Add new image and update code (requires developer)

3. **Test**:
   - Refresh homepage
   - Check image loads correctly
   - Verify text is readable over the image

---

### Updating Founder Photo

**Current file**: Location depends on implementation

**Steps**:

1. **Prepare photo**:
   - Format: JPG or PNG
   - Size: 800px × 800px (square)
   - Professional quality
   - Clear face visibility

2. **Add to public folder**:
   - Place in `public/images/`
   - Name: `founder-photo.jpg`

3. **Update reference** (requires developer):
   - The developer will update the founder page component

---

### Adding Resource Files

Resource files (PDFs, documents) for the **Resources** page.

**Steps**:

1. **Prepare file**:
   - Format: PDF, DOC, DOCX, or image
   - File size: Less than 5MB
   - Clear, descriptive name

2. **Add to folder**:
   - Place in `public/files/`

3. **Update resources list** (requires developer):
   - Developer will add download link to resources page

**File Naming**:
```
jip-[type]-[year]-[language].pdf

Examples:
- jip-program-2025-fr.pdf
- jip-brochure-2025-en.pdf
- jip-poster-2025.pdf
```

---

## 📐 Image Specifications

### Recommended Sizes

| Image Type | Dimensions | Format | Max Size |
|------------|------------|--------|----------|
| Hero Banner | 1920×1080px | JPG | 1MB |
| Gallery Photo | 1200×800px | JPG | 500KB |
| Founder Photo | 800×800px | JPG/PNG | 300KB |
| Logo | 512×512px | PNG/SVG | 100KB |
| Thumbnail | 400×300px | JPG | 100KB |

---

## 🛠 Image Optimization

Before uploading images, optimize them to improve website speed:

### Online Tools (Free)

1. **[TinyPNG](https://tinypng.com)** - Compress PNG and JPG
2. **[Squoosh](https://squoosh.app)** - Advanced compression
3. **[Compressor.io](https://compressor.io)** - Quick compression

### Desktop Tools

- **Windows**: Paint, GIMP, IrfanView
- **Mac**: Preview, GIMP
- **Cross-platform**: GIMP, Photoshop

### Compression Tips

✅ Reduce file size by 50-70% without visible quality loss
✅ Use JPG for photos (smaller file size)
✅ Use PNG for logos/graphics with transparency
✅ Convert large PNGs to JPG if transparency not needed

---

## 📝 Image File Naming Best Practices

### DO:
✅ Use lowercase letters
✅ Use hyphens `-` instead of spaces
✅ Be descriptive: `jip-2025-worship.jpg`
✅ Include year if relevant
✅ Keep names short but clear

### DON'T:
❌ Use spaces: `my photo.jpg`
❌ Use special characters: `photo@2025!.jpg`
❌ Use generic names: `image1.jpg`, `photo.jpg`
❌ Use very long names

---

## 🎨 Image Formats Guide

| Format | Best For | Pros | Cons |
|--------|----------|------|------|
| **JPG** | Photos, backgrounds | Small file size | No transparency |
| **PNG** | Logos, icons | Transparency support | Larger file size |
| **SVG** | Icons, logos | Scalable, tiny size | Not for photos |
| **WebP** | Modern browsers | Best compression | Limited old browser support |

---

## 🔄 Replacing Existing Images

### Method 1: Same Filename (Easiest)

1. Delete old image
2. Add new image with **exact same filename**
3. No code changes needed!

**Example**:
- Old: `public/hero-banner.jpg`
- New: `public/hero-banner.jpg` (same name)

### Method 2: New Filename (Requires Code Update)

1. Add new image with new filename
2. Developer updates code to reference new filename
3. Delete old image (optional)

---

## 📸 Gallery Management

### Adding Multiple Photos

1. **Organize photos**:
   - Create folders by event/year if needed
   - Name consistently

2. **Batch upload**:
   - Copy all photos to `public/images/gallery/`

3. **Verify**:
   - Check gallery page
   - Ensure all images load

### Gallery Categories

The gallery supports categories:
- Ceremonies
- Worship
- Fellowship
- Speakers

Images can be tagged with categories (requires developer).

---

## 🚀 After Adding Images

### Checklist

- [ ] Image is optimized (compressed)
- [ ] Image is in correct folder
- [ ] Filename follows naming convention
- [ ] Image displays correctly on website
- [ ] Image loads quickly (check file size)
- [ ] Commit and push changes

### Testing

1. **Local test** (if running dev server):
   ```bash
   npm run dev
   ```
   Visit the page and verify image appears

2. **After deployment**:
   - Wait for Netlify build (2-5 minutes)
   - Check live website
   - Test on mobile and desktop

---

## 🆘 Troubleshooting

### Image Not Showing

**Possible causes**:
- ❌ Image not in `public/` folder
- ❌ Incorrect filename in code
- ❌ File extension wrong (`.JPG` vs `.jpg`)
- ❌ Browser cache (try hard refresh: Ctrl+F5)

**Solutions**:
✅ Verify image is in correct folder
✅ Check filename matches exactly (case-sensitive)
✅ Clear browser cache
✅ Check browser console for errors (F12)

---

### Image Too Large / Slow Loading

**Problem**: Image file size is too big

**Solutions**:
1. Compress image using TinyPNG or Squoosh
2. Reduce dimensions (resize image)
3. Convert PNG to JPG (if no transparency needed)
4. Use WebP format (modern browsers)

**Target file sizes**:
- Hero images: < 1MB
- Gallery photos: < 500KB
- Thumbnails: < 100KB

---

### Image Quality Poor

**Problem**: Image looks pixelated or blurry

**Solutions**:
1. Use higher resolution source image
2. Don't compress too aggressively
3. Ensure image dimensions match display size
4. Use appropriate format (JPG for photos)

---

## 📱 Responsive Images

The website automatically optimizes images for different screen sizes:

- **Desktop**: Full resolution
- **Tablet**: Medium resolution
- **Mobile**: Smaller resolution

No action needed - Next.js handles this automatically!

---

## 🔒 Image Copyright

### Important Reminders

- ✅ Only use images you own or have permission to use
- ✅ Credit photographers if required
- ✅ Respect privacy (get consent for people's photos)
- ✅ Use royalty-free images if needed

### Free Stock Photo Resources

- [Unsplash](https://unsplash.com)
- [Pexels](https://pexels.com)
- [Pixabay](https://pixabay.com)

---

## 📞 Need Help?

**Can't add image**:
- Check file permissions
- Verify folder path
- Contact developer

**Image not displaying**:
- See [Troubleshooting Guide](./TROUBLESHOOTING.md)
- Check browser console (F12)

**Need to edit image**:
- Use GIMP (free) or Photoshop
- Online editor: [Photopea](https://www.photopea.com)

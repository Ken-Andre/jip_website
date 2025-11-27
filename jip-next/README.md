# 🌍 Journée Internationale des Pasteurs (JIP) - Website

Welcome to the official website for the International Pastors' Day (Journée Internationale des Pasteurs). This Next.js application provides information about the annual event celebrating and honoring pastors worldwide.

## 📋 Table of Contents

- [Quick Start for Developers](#quick-start-for-developers)
- [For Non-Technical Teams](#for-non-technical-teams)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Support](#support)

---

## 🚀 Quick Start for Developers

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Ken-Andre/jip_website.git
cd jip_website/jip-next

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Available Scripts

- `npm run dev` - Start development server with live reload
- `npm run build` - Build production-ready application
- `npm run build:with-tina` - Build with TinaCMS (requires credentials)
- `npm start` - Start production server
- `npm run lint` - Run code quality checks

---

## 👥 For Non-Technical Teams

**This website is designed to be easy to maintain!** You don't need to be a developer to update content.

### 📚 Documentation Guides

We've created detailed guides for common tasks:

1. **[Content Update Guide](./docs/CONTENT_GUIDE.md)** - Update text, dates, and information
2. **[Translation Guide](./docs/TRANSLATION_GUIDE.md)** - Manage French and English translations
3. **[Image Management Guide](./docs/IMAGE_GUIDE.md)** - Add, replace, or update images
4. **[Deployment Guide](./docs/DEPLOYMENT_GUIDE.md)** - Publish changes to the live website
5. **[Troubleshooting Guide](./docs/TROUBLESHOOTING.md)** - Fix common issues

### Quick Links for Common Tasks

- **Update event date/location**: See [Content Guide - Event Information](./docs/CONTENT_GUIDE.md#event-information)
- **Add new photos to gallery**: See [Image Guide - Gallery](./docs/IMAGE_GUIDE.md#adding-gallery-photos)
- **Change contact information**: See [Content Guide - Contact Details](./docs/CONTENT_GUIDE.md#contact-information)
- **Translate new content**: See [Translation Guide](./docs/TRANSLATION_GUIDE.md)

---

## 📁 Project Structure

```
jip-next/
├── app/                    # Website pages
│   ├── page.tsx           # Home page
│   ├── contact/           # Contact page
│   ├── dons/              # Donations page
│   ├── fondateur/         # Founder page
│   ├── galerie/           # Gallery page
│   ├── participation/     # Participation/Registration page
│   ├── programme/         # Program schedule page
│   ├── ressources/        # Resources/Media kit page
│   ├── temoignages/       # Testimonials page
│   └── vision/            # Vision page
├── components/            # Reusable UI components
├── locales/              # Translation files
│   ├── fr.json           # French translations
│   └── en.json           # English translations
├── public/               # Static files (images, documents)
│   ├── images/           # Website images
│   └── files/            # Downloadable files
├── docs/                 # Documentation (you are here!)
└── package.json          # Project configuration
```

---

## 🌐 Deployment

The website is automatically deployed to Netlify when changes are pushed to the main branch.

### Deployment Process

1. Make your changes locally
2. Commit changes: `git add . && git commit -m "Description of changes"`
3. Push to GitHub: `git push`
4. Netlify automatically builds and deploys (takes 2-5 minutes)
5. Visit [https://journee-internationale-pasteurs.netlify.app](https://journee-internationale-pasteurs.netlify.app)

For detailed deployment instructions, see [Deployment Guide](./docs/DEPLOYMENT_GUIDE.md).

---

## 🛠 Technology Stack

- **Framework**: Next.js 16 (React)
- **Styling**: Tailwind CSS
- **Internationalization**: Custom i18n with JSON files
- **Hosting**: Netlify
- **Version Control**: Git/GitHub

---

## 📞 Support

### For Content Updates
Contact the website administrator or refer to the documentation guides in the `docs/` folder.

### For Technical Issues
- Check the [Troubleshooting Guide](./docs/TROUBLESHOOTING.md)
- Create an issue on GitHub
- Contact the development team

---

## 📄 License

© 2025 Journée Internationale des Pasteurs. All rights reserved.

---

## 🙏 Acknowledgments

Built with ❤️ for the International Pastors' Day community.

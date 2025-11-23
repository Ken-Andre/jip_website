import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://journee-internationale-pasteurs.netlify.app',

  integrations: [
    starlight({
      title: 'Journée Internationale des Pasteurs',

      // Configuration JIP - Branding
      logo: {
        src: '/src/assets/images/logo-jip.svg',
        replacesTitle: true
      },

      // Personnalisation du thème
      customCss: [
        './src/assets/styles/variables.css',
        './src/assets/styles/starlight.css'
      ],

      // Internationalization
      defaultLocale: 'fr',
      locales: {
        fr: { label: 'Français' },
        en: { label: 'English' }
      },

      // Navigation et sidebar
      sidebar: [
        {
          label: 'Accueil',
          link: '/',
          translations: {
            en: 'Home'
          }
        },
        {
          label: 'À propos',
          items: [
            {
              label: 'Notre Vision',
              link: '/vision',
              translations: {
                en: 'Our Vision'
              }
            },
            {
              label: 'Fondateur',
              link: '/fondateur',
              translations: {
                en: 'Founder'
              }
            }
          ]
        },
        {
          label: 'Programme',
          link: '/programme',
          translations: {
            en: 'Program'
          }
        },
        {
          label: 'Participation',
          link: '/participation',
          translations: {
            en: 'Participation'
          }
        },
        {
          label: 'Ressources',
          link: '/ressources',
          translations: {
            en: 'Resources'
          }
        },
        {
          label: 'Galerie',
          link: '/galerie',
          translations: {
            en: 'Gallery'
          }
        },
        {
          label: 'Dons',
          link: '/dons',
          translations: {
            en: 'Donations'
          }
        },
        {
          label: 'Contact',
          link: '/contact',
          translations: {
            en: 'Contact'
          }
        }
      ],

      // Configuration sociale et métadonnées
      social: [
        {
          label: 'GitHub',
          href: 'https://github.com/journee-internationale-pasteurs',
          icon: 'github'
        },
        {
          label: 'Twitter',
          href: 'https://twitter.com/JIP_official',
          icon: 'twitter'
        }
      ],

      // Configuration SEO
    })
  ],

  build: {
    inlineStylesheets: 'auto',
  },

  server: {
    port: 3000,
    host: true,
  },
});

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server',
  // adapter: netlify(), // Uncomment for production build
  site: 'https://journee-internationale-pasteurs.netlify.app',

  integrations: [
    react(),
    keystatic(),
    starlight({
      title: 'Journée Internationale des Pasteurs',

      // Configuration JIP - Branding
      logo: {
        src: './src/assets/images/logo-jip.svg',
        replacesTitle: true,
      },

      // Personnalisation du thème JIP
      customCss: [
        './src/assets/styles/variables.css',
        './src/assets/styles/starlight.css'
      ],

      // Internationalization Starlight native
      defaultLocale: 'fr',
      locales: {
        fr: { label: 'Français', lang: 'fr' },
        en: { label: 'English', lang: 'en' }
      },

      // Navigation et sidebar Starlight
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
            },
            {
              label: 'Programme',
              link: '/programme',
              translations: {
                en: 'Program'
              }
            }
          ]
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
          label: 'Faire un don',
          link: '/dons',
          translations: {
            en: 'Make a Donation'
          }
        },
        {
          label: 'Contact',
          link: '/contact',
          translations: {
            en: 'Contact'
          }
        },
        {
          label: 'FAQ',
          link: '/faq',
          translations: {
            en: 'FAQ'
          }
        }
      ],

      // Configuration sociale JIP
      social: [
        {
          label: 'Facebook',
          icon: 'facebook',
          href: 'https://facebook.com/JIP_official',
        },
        {
          label: 'YouTube',
          icon: 'youtube',
          href: 'https://youtube.com/JIP_official',
        }
      ]
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

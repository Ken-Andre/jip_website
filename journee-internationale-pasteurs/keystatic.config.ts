import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    collections: {
        pages: collection({
            label: 'Pages (Site Vitrine)',
            slugField: 'title',
            path: 'src/content/pages/**/index',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Titre' } }),
                description: fields.text({ label: 'Description SEO' }),
                lang: fields.select({
                    label: 'Langue',
                    options: [
                        { label: 'Français', value: 'fr' },
                        { label: 'English', value: 'en' },
                    ],
                    defaultValue: 'fr',
                }),
                heroImage: fields.image({
                    label: 'Image Hero',
                    directory: 'src/assets/images',
                    publicPath: '@/assets/images/',
                }),
                content: fields.document({
                    label: 'Contenu',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: {
                        directory: 'src/assets/images',
                        publicPath: '@/assets/images/',
                    },
                }),
            },
        }),
        docs: collection({
            label: 'Documentation',
            slugField: 'title',
            path: 'src/content/docs/**/index',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Titre' } }),
                description: fields.text({ label: 'Description' }),
                content: fields.document({
                    label: 'Contenu',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: true,
                }),
            },
        }),
    },
});

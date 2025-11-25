import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

// Define content collections
export const collections = {
  pages: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
    schema: ({ image }) => z.object({
      title: z.string(),
      description: z.string().optional(),
      heroImage: image().optional(),
    }),
  }),
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema()
  }),
  i18n: defineCollection({
    loader: i18nLoader(),
    schema: i18nSchema()
  })
};

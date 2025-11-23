import { defineCollection } from 'astro:content';

// Define content collections
const docs = defineCollection({
  type: 'content',
});

export const collections = {
  docs,
};

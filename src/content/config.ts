import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    thumbnail: z.string(),
    tags: z.array(z.string())
  })
});

export const collections = {
  blog
};
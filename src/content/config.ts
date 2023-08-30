import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    author: z.enum(['David', 'Monica']),
    isDraft: z.boolean().default(false),
    pubDate: z.string().transform((str) => new Date(str)),
    image: z.string().optional(),
  }),
});

const authors = defineCollection({
  schema: z.object({
    name: z.string(),
    email: z.string().email(),
    Twitter: z.string().optional(),
    GitHub: z.string().optional(),
  }),
});

export const collections = { blog, authors };

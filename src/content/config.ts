import { defineCollection, z } from 'astro:content';

const tools = defineCollection({
  schema: z.object({
    name: z.string(),
    url: z.string().url(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    icon: z.string().default('🔧'),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { tools };

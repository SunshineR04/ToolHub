import { defineCollection, z } from 'astro:content';

const tools = defineCollection({
  schema: z.object({
    name: z.string(),
    url: z.string().url().optional(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    icon: z.string().default('🔧'),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    downloads: z.array(z.object({
      name: z.string(),
      file: z.string().optional(),
      url: z.string().optional(),
    })).default([]),
  }),
});

export const collections = { tools };

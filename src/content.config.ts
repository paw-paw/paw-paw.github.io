import { defineCollection, z } from 'astro:content';
import { blogCategories } from './utils/blog';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      publish_date: z.coerce.date(),
      category: z.enum(blogCategories),
      locale: z.enum(['en', 'es']),
      status: z.enum(['draft', 'published']),
      reading_time: z.string(),
      featured: z.boolean().default(false),
      header_image: image(),
    }),
});

export const collections = {
  blog,
};

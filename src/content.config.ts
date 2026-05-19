import { defineCollection, z } from 'astro:content';
import { blogAngles, blogCategories, blogDomains } from './utils/blog';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      publish_date: z.coerce.date(),
      category: z.enum(blogCategories),
      angle: z.enum(blogAngles),
      domain: z.enum(blogDomains),
      locale: z.enum(['en', 'es']),
      i18n_key: z.string().optional(),
      status: z.enum(['draft', 'published']),
      reading_time: z.string(),
      featured: z.boolean().default(false),
      header_image: image(),
    }),
});

export const collections = {
  blog,
};

import { getCollection, type CollectionEntry } from 'astro:content';
import type { SupportedLocale } from './i18n';

export const blogCategories = [
  'project-delivery',
  'bd-and-partnerships',
  'operations',
  'career-and-industry-lessons',
] as const;

export type BlogCategory = (typeof blogCategories)[number];
export type BlogPostEntry = CollectionEntry<'blog'>;

export const blogCategoryLabelKey: Record<BlogCategory, string> = {
  'project-delivery': 'blog.categories.projectDelivery',
  'bd-and-partnerships': 'blog.categories.bdAndPartnerships',
  operations: 'blog.categories.operations',
  'career-and-industry-lessons': 'blog.categories.careerAndIndustryLessons',
};

export const getBlogIndexPath = (locale: SupportedLocale) => `/${locale}/blog/`;

export const getBlogPostPath = (locale: SupportedLocale, slug: string) => `/${locale}/blog/${slug}/`;

export const getBlogCategoryPath = (locale: SupportedLocale, category: BlogCategory) =>
  `/${locale}/blog/category/${category}/`;

export const formatBlogDate = (date: Date, locale: SupportedLocale) =>
  new Intl.DateTimeFormat(locale === 'es' ? 'es-PE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);

const sortByPublishDate = (posts: BlogPostEntry[]) =>
  posts.sort((a, b) => b.data.publish_date.getTime() - a.data.publish_date.getTime());

export async function getPublishedBlogPosts(): Promise<BlogPostEntry[]> {
  const posts = await getCollection('blog', ({ data }) => data.status === 'published');
  return sortByPublishDate(posts);
}

export async function getBlogPostsByLocale(locale: SupportedLocale): Promise<BlogPostEntry[]> {
  const posts = await getCollection('blog', ({ data }) => data.status === 'published' && data.locale === locale);
  return sortByPublishDate(posts);
}

export async function getFeaturedBlogPostsByLocale(locale: SupportedLocale): Promise<BlogPostEntry[]> {
  const posts = await getCollection(
    'blog',
    ({ data }) => data.status === 'published' && data.locale === locale && data.featured,
  );
  return sortByPublishDate(posts);
}

export async function getBlogPostsByLocaleAndCategory(
  locale: SupportedLocale,
  category: BlogCategory,
): Promise<BlogPostEntry[]> {
  const posts = await getCollection(
    'blog',
    ({ data }) => data.status === 'published' && data.locale === locale && data.category === category,
  );
  return sortByPublishDate(posts);
}

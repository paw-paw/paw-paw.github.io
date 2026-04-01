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

const getExactLocaleEquivalentPost = (
  posts: BlogPostEntry[],
  locale: SupportedLocale,
  slug: string,
): BlogPostEntry | undefined =>
  posts.find((post) => post.data.locale === locale && post.slug === slug);

const sortByPublishDate = (posts: BlogPostEntry[]) =>
  posts.sort((a, b) => b.data.publish_date.getTime() - a.data.publish_date.getTime());

const ensureSingleFeaturedPost = (posts: BlogPostEntry[], locale: SupportedLocale): BlogPostEntry[] => {
  const featuredPosts = posts.filter((post) => post.data.featured);

  if (featuredPosts.length > 1) {
    const featuredSlugs = featuredPosts.map((post) => post.slug).join(', ');
    throw new Error(`Only one featured blog post is allowed for locale "${locale}". Found: ${featuredSlugs}`);
  }

  return posts;
};

export async function getPublishedBlogPosts(): Promise<BlogPostEntry[]> {
  const posts = await getCollection('blog', ({ data }) => data.status === 'published');
  return sortByPublishDate(posts);
}

export async function getBlogPostsByLocale(locale: SupportedLocale): Promise<BlogPostEntry[]> {
  const posts = await getCollection('blog', ({ data }) => data.status === 'published' && data.locale === locale);
  return sortByPublishDate(ensureSingleFeaturedPost(posts, locale));
}

export async function getFeaturedBlogPostByLocale(locale: SupportedLocale): Promise<BlogPostEntry | undefined> {
  const posts = await getBlogPostsByLocale(locale);
  return posts.find((post) => post.data.featured);
}

export async function getBlogPostLocaleUrls(post: BlogPostEntry): Promise<Record<SupportedLocale, string>> {
  const posts = await getPublishedBlogPosts();
  const locales: SupportedLocale[] = ['en', 'es'];

  return locales.reduce(
    (acc, locale) => {
      const equivalentPost = getExactLocaleEquivalentPost(posts, locale, post.slug);
      acc[locale] = equivalentPost ? getBlogPostPath(locale, equivalentPost.slug) : getBlogIndexPath(locale);
      return acc;
    },
    {} as Record<SupportedLocale, string>,
  );
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

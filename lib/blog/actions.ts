import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { siteInfo } from '@/lib/site-config';

interface Post {
  slug: string;
  title: string;
  date: string;
  formattedDate: string;
  category: string;
  author: PostAuthor;
  coverImage?: string;
  description: string;
  content: string;
}

interface PostAuthor {
  name: string;
  role: string;
  picture: string;
}

interface DateOptions {
  year: 'numeric';
  month: 'long';
  day: 'numeric';
}

interface TimeOptions {
  hour: 'numeric';
  minute: 'numeric';
  second: 'numeric';
  hour12: boolean;
}

const postsDirectory = join(process.cwd(), "posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {

  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return { 
      ...data, 
      formattedDate: formatDate(data.date, siteInfo.dateFormat), 
      slug: realSlug, 
      content 
    } as Post;

  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') {
      // File not found
      return null;
    }
    throw err; // Rethrow if it's a different error
  }
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function formatDate(isoString: string, dateFormat: string): string {
  const dateOptions: DateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const timeOptions: TimeOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  };

  const date = new Date(isoString);
  const formattedDate = date.toLocaleDateString(dateFormat, dateOptions);
  const formattedTime = date.toLocaleTimeString(dateFormat, timeOptions);

  return formattedDate;
}

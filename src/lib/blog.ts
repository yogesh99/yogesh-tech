import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Assuming posts are stored in src/content/blog
const contentDirectory = path.join(process.cwd(), 'src/content/blog');

export type BlogPostMetadata = {
  title: string;
  description: string;
  date: string;
  slug: string;
};

export type BlogPost = BlogPostMetadata & {
  content: string;
};

export function getAllPosts(): BlogPostMetadata[] {
  // Gracefully handle if directory doesn't exist yet
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the metadata section
      const matterResult = matter(fileContents);

      return {
        slug,
        ...(matterResult.data as Omit<BlogPostMetadata, 'slug'>),
      };
    });

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPathMDX = path.join(contentDirectory, `${slug}.mdx`);
    const fullPathMD = path.join(contentDirectory, `${slug}.md`);
    
    const finalPath = fs.existsSync(fullPathMDX) ? fullPathMDX : (fs.existsSync(fullPathMD) ? fullPathMD : null);
    
    if (!finalPath) return null;

    const fileContents = fs.readFileSync(finalPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      content: matterResult.content,
      ...(matterResult.data as Omit<BlogPostMetadata, 'slug'>),
    };
  } catch (error) {
    console.error("Error reading post:", error);
    return null;
  }
}

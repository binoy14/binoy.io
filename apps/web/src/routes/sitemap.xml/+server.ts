import { sanityClient } from '$lib/sanityClient';
import { getBlogSlugs } from '$lib/groq/getBlogSlugs';
import { getProjectSlugs } from '$lib/groq/getProjectsSlugs';
import { SITE_URL } from '$lib/seo';

interface BlogSlug {
  slug: string;
  publishedAt?: string;
}

interface ProjectSlug {
  slug: { current: string };
}

function urlEntry(path: string, lastmod?: string): string {
  const loc = new URL(path, SITE_URL).href;
  return `  <url>
    <loc>${loc}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}
  </url>`;
}

export async function GET() {
  const [blogs, projects] = await Promise.all([
    sanityClient.fetch<BlogSlug[]>(getBlogSlugs),
    sanityClient.fetch<ProjectSlug[]>(getProjectSlugs),
  ]);

  const staticPaths = ['/', '/blogs', '/contact'];

  const entries = [
    ...staticPaths.map((path) => urlEntry(path)),
    ...blogs.map((blog) => urlEntry(`/blogs/${blog.slug}`, blog.publishedAt?.slice(0, 10))),
    ...projects
      .filter((project) => project?.slug?.current)
      .map((project) => urlEntry(`/project/${project.slug.current}`)),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=0, s-maxage=3600',
    },
  });
}

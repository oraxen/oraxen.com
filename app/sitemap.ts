import { MetadataRoute } from "next";
import { siteConfig } from "./siteConfig";
import { getAllPosts } from "./lib/blog";
import authorsData from "./blog/authors/authors.json";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  // Static routes you want indexed
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Blog posts
  const posts = await getAllPosts();
  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(
      post.frontmatter.modifiedDate || post.frontmatter.date
    ),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Author pages from JSON
  const authorIds = Object.keys(authorsData as Record<string, unknown>);
  const authorEntries: MetadataRoute.Sitemap = authorIds.map((id) => ({
    url: `${baseUrl}/blog/author/${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.4,
  }));

  return [...staticRoutes, ...postEntries, ...authorEntries];
}

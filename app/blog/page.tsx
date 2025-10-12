import { Metadata } from "next";
import { Badge } from "../components/Badge";
import { BlogPostCard } from "../components/blog/BlogPostCard";
import { FeaturedPost } from "../components/blog/FeaturedPost";
import { getBlogPosts } from "../lib/blog";
import { siteConfig } from "../siteConfig";

export const metadata: Metadata = {
  title: "Blog - ReLens",
  description:
    "Discover insights on AI, generative search, content strategy, and the future of digital marketing. Stay ahead with expert analysis and practical guides.",
  keywords: [
    "AI",
    "Generative Search",
    "Artificial Intelligence",
    "ReLens",
    "AI visibility",
    "AI tracking",
    "brand monitoring",
    "AI SEO",
    "AEO",
    "GEO",
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    type: "website",
    title: `Blog | ${siteConfig.name}`,
    description:
      "Discover insights on AI, generative search, content strategy, and the future of digital marketing.",
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/preview.png`,
        width: 1200,
        height: 630,
        alt: "ReLens AI - Get Your Product Mentioned by LLMs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${siteConfig.name}`,
    description:
      "Discover insights on AI, generative search, content strategy, and the future of digital marketing.",
    images: [`${siteConfig.url}/images/preview.png`],
  },
};

const blogPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: `${siteConfig.name} Blog`,
  description:
    "Discover insights on AI, generative search, content strategy, and the future of digital marketing.",
  url: `${siteConfig.url}/blog`,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/relens/logo-relens.png`,
    },
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const featuredPost = posts.find((post) => post.featured) || posts[0]; // Use first post as featured if none marked
  const regularPosts = posts.filter((post) => post.slug !== featuredPost?.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPageJsonLd) }}
      />
      <div id="main-content" className="mx-auto max-w-7xl px-4 py-8">
        {/* Page Header - Similar to Pricing */}
        <header
          aria-labelledby="blog-title"
          className="mb-16 animate-slide-up-fade"
          style={{
            animationDuration: "600ms",
            animationFillMode: "backwards",
          }}
        >
          <Badge>Blog</Badge>
          <h1
            id="blog-title"
            className="mt-2 inline-block bg-gradient-to-br from-[var(--foreground)] to-[var(--foreground-secondary)] bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
          >
            {siteConfig.blogTitle}
          </h1>
          <p className="text-secondary-dark dark:text-secondary-light mt-6 max-w-2xl text-lg">
            {siteConfig.blogDescription}
          </p>
        </header>

        {/* Featured Article */}
        <FeaturedPost post={featuredPost} />

        {/* Articles Grid */}
        <section>
          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {regularPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : null}
        </section>
      </div>
    </>
  );
}

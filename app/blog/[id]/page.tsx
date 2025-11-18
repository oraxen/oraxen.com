import { AuthorBio } from "../../components/AuthorBio";
import { Badge } from "../../components/Badge";
import { getAuthorByName } from "../../lib/authors";
import { getAllPosts, getPostBySlug } from "../../lib/blog";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "../../siteConfig";

interface ArticlePageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { id } = await params;
  const post = await getPostBySlug(id);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.frontmatter.title} - HackedServer Blog`,
    description: post.frontmatter.description,
    alternates: {
      canonical: `${siteConfig.url}/blog/${id}`,
    },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      publishedTime: post.frontmatter.date,
      modifiedTime: post.frontmatter.modifiedDate,
      authors: [post.frontmatter.author],
      images: [
        {
          url: post.frontmatter.image,
          width: 1200,
          height: 630,
          alt: post.frontmatter.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: [post.frontmatter.image],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params;
  const post = await getPostBySlug(id);

  if (!post) {
    notFound();
  }

  const author = getAuthorByName(post.frontmatter.author);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    image: `${siteConfig.url}${post.frontmatter.image}`,
    keywords:
      "GEO, Generative Engine Optimization, AI visibility, brand monitoring, AI SEO",
    author: {
      "@type": "Person",
      name: author?.name || post.frontmatter.author,
      url: `${siteConfig.url}/blog/author/${post.frontmatter.author}`,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.svg`,
      },
    },
    about: [
      { "@type": "Thing", name: "Generative Engine Optimization" },
      { "@type": "Thing", name: "AI SEO" },
    ],
    sameAs: [siteConfig.url],
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.modifiedDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${id}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <header className="mb-8 text-center">
          <div className="flex flex-col items-center justify-center">
            <Badge>Article</Badge>
            <h1 className="mb-4 inline-block bg-gradient-to-br from-[var(--foreground)] to-[var(--foreground-secondary)] bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl">
              {post.frontmatter.title}
            </h1>
          </div>
          <div className="mb-6 flex items-center justify-center gap-4 text-sm text-[var(--foreground-secondary)]">
            <time dateTime={post.frontmatter.date}>
              {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>•</span>
            <span>{post.frontmatter.readingTime}</span>
            <span>•</span>
            <Link
              href={`/blog/author/${post.frontmatter.author.toLowerCase().replaceAll(" ", "-")}`}
              className="text-primary hover:underline"
            >
              {author?.name || post.frontmatter.author}
            </Link>
          </div>

          {post.frontmatter.image && !post.frontmatter.relens && (
            <figure className="mb-10 mt-10">
              <Image
                src={post.frontmatter.image}
                alt={post.frontmatter.title}
                width={1200}
                height={630}
                className="rounded-lg"
                priority
                unoptimized={
                  post.frontmatter.image.includes("/assets/demo.png") ||
                  post.frontmatter.image.includes("/assets/beautiful_items.png")
                }
              />
              <figcaption className="mt-2 text-center text-[var(--foreground-secondary)]">
                {post.frontmatter.title}
              </figcaption>
            </figure>
          )}
        </header>

        {/* Article body */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          {post.content}
        </div>

        <footer className="mt-12 border-t border-[var(--border-subtle)] pt-8">
          <div className="mb-6 flex flex-wrap justify-between gap-2">
            <div className="flex flex-wrap gap-2">
              {post.frontmatter.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3 py-1 text-sm text-[var(--foreground-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {post.frontmatter.modifiedDate && (
              <div className="text-sm text-[var(--foreground-secondary)]">
                Last updated:{" "}
                {new Date(post.frontmatter.modifiedDate).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </div>
            )}
          </div>

          {author && (
            <AuthorBio
              name={author.name}
              bio={author.bio}
              image={author.profilePicture}
              twitter={author.twitter}
              linkedin={author.linkedin}
            />
          )}
        </footer>
      </article>
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    id: post.slug,
  }));
}

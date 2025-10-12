import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { siteConfig } from "../../siteConfig"

// Author data interface
interface Author {
  id: string
  name: string
  bio: string
  jobTitle?: string
  image?: string
  twitter?: string
  linkedin?: string
  website?: string
  articles: Article[]
}

// Article interface
interface Article {
  id: string
  title: string
  excerpt: string
  slug: string
  publishedAt: string
  readingTime: string
}

// Mock author data - replace with actual data fetching
const getAuthorData = async (authorId: string): Promise<Author | null> => {
  // This would typically fetch from your CMS or database
  const authors: Record<string, Author> = {
    "john-doe": {
      id: "john-doe",
      name: "John Doe",
      bio: "John is a seasoned content strategist and AI enthusiast with over 8 years of experience in digital marketing. He specializes in helping brands navigate the evolving landscape of generative search and AI-powered content discovery.",
      jobTitle: "Content Strategist",
      image: "/images/authors/john-doe.jpg",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      website: "https://johndoe.com",
      articles: [
        {
          id: "1",
          title: "The Future of Search: How AI is Reshaping Content Discovery",
          excerpt:
            "Explore how generative AI is transforming the way users discover content and what this means for content creators and marketers.",
          slug: "future-of-search-ai-content-discovery",
          publishedAt: "2024-01-15",
          readingTime: "8 min read",
        },
        {
          id: "2",
          title: "Optimizing Content for Answer Engines: A Complete Guide",
          excerpt:
            "Learn practical strategies to ensure your content ranks well in ChatGPT, Perplexity, and other AI-powered search tools.",
          slug: "optimizing-content-answer-engines-guide",
          publishedAt: "2024-01-10",
          readingTime: "12 min read",
        },
      ],
    },
  }

  return authors[authorId] || null
}

// Generate metadata for SEO
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>
}): Promise<Metadata> {
  const { id } = await searchParams
  const authorId = id || "john-doe"
  const author = await getAuthorData(authorId)

  if (!author) {
    return {
      title: "Author Not Found",
      description: "The requested author profile could not be found.",
    }
  }

  const canonicalUrl = `${siteConfig.url}/blog/author?id=${authorId}`
  const authorImageUrl = author.image
    ? `${siteConfig.url}${author.image}`
    : `${siteConfig.url}/images/default-avatar.jpg`

  return {
    title: `${author.name} - Author Profile | ${siteConfig.name}`,
    description: `${author.bio.substring(0, 160)}...`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "profile",
      title: author.name,
      description: author.bio,
      url: canonicalUrl,
      images: [
        {
          url: authorImageUrl,
          width: 400,
          height: 400,
          alt: `${author.name} - Author Photo`,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: author.name,
      description: author.bio,
      images: [authorImageUrl],
    },
  }
}

export default async function AuthorPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>
}) {
  const { id } = await searchParams
  const authorId = id || "john-doe"
  const author = await getAuthorData(authorId)

  if (!author) {
    notFound()
  }

  const canonicalUrl = `${siteConfig.url}/blog/author?id=${authorId}`
  const authorImageUrl = author.image
    ? `${siteConfig.url}${author.image}`
    : `${siteConfig.url}/images/default-avatar.jpg`

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.jobTitle,
    description: author.bio,
    url: canonicalUrl,
    image: authorImageUrl,
    sameAs: [author.twitter, author.linkedin, author.website].filter(Boolean),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Author Header Section */}
        <header className="mb-12 text-center">
          {author.image && (
            <div className="mb-6">
              <Image
                src={author.image}
                alt={`${author.name} - Author Photo`}
                width={200}
                height={200}
                className="mx-auto rounded-full object-cover shadow-lg"
                priority
              />
            </div>
          )}

          <h1 className="mb-4 text-4xl font-bold text-text-secondary-dark">
            {author.name}
          </h1>

          {author.jobTitle && (
            <p className="mb-4 text-xl font-medium text-text-secondary">
              {author.jobTitle}
            </p>
          )}

          <p className="text-secondary-dark mx-auto max-w-3xl text-lg leading-relaxed">
            {author.bio}
          </p>
        </header>

        {/* Social Media Links */}
        {(author.twitter || author.linkedin || author.website) && (
          <div className="mb-12 flex justify-center gap-6">
            {author.twitter && (
              <Link
                href={author.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-extra-light px-4 py-2 transition-colors hover:bg-light"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Twitter
              </Link>
            )}

            {author.linkedin && (
              <Link
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-extra-light px-4 py-2 transition-colors hover:bg-light"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </Link>
            )}

            {author.website && (
              <Link
                href={author.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-extra-light px-4 py-2 transition-colors hover:bg-light"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                Website
              </Link>
            )}
          </div>
        )}

        {/* Articles Section */}
        <section className="mb-12">
          <h3 className="mb-8 text-center text-2xl font-bold text-text-secondary-dark">
            Articles by {author.name}
          </h3>

          <div className="grid gap-6">
            {author.articles.map((article) => (
              <article
                key={article.id}
                className="rounded-lg border border-light p-6 transition-shadow hover:shadow-md"
              >
                <h4 className="mb-3 text-xl font-semibold text-text-secondary-dark">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="transition-colors hover:text-blue-600"
                  >
                    {article.title}
                  </Link>
                </h4>

                <p className="text-secondary-dark mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-4 text-sm text-text-secondary-semi-light">
                  <time dateTime={article.publishedAt}>
                    {new Date(article.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>{article.readingTime}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

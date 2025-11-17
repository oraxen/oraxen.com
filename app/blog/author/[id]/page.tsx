import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SocialLinks } from "../../../components/SocialLinks";
import { siteConfig } from "../../../siteConfig";
import authorsData from "../../authors/authors.json";

// Author data interface matching the JSON structure
interface Author {
  id: string;
  name: string;
  bio: string;
  jobTitle: string;
  profilePicture: string;
  website?: string;
  email?: string;
  twitter?: string;
  linkedin?: string;
}

// Fetch author data from JSON file
const getAuthorData = async (authorId: string): Promise<Author | null> => {
  const authors = authorsData as Record<string, Author>;
  return authors[authorId] || null;
};

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const author = await getAuthorData(id);

  if (!author) {
    return {
      title: "Author Not Found",
      description: "The requested author profile could not be found.",
    };
  }

  const canonicalUrl = `${siteConfig.url}/blog/author/${id}`;
  const authorImageUrl = `${siteConfig.url}${author.profilePicture}`;

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
  };
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const author = await getAuthorData(id);

  if (!author) {
    notFound();
  }

  const canonicalUrl = `${siteConfig.url}/blog/author/${id}`;
  const authorImageUrl = `${siteConfig.url}${author.profilePicture}`;

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.jobTitle,
    description: author.bio,
    url: canonicalUrl,
    image: authorImageUrl,
    email: author.email,
    sameAs: [author.website, author.twitter, author.linkedin].filter(Boolean),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Author Header Section */}
        <header className="mb-12 text-center rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-8">
          <div className="mb-6 flex justify-center">
            <Image
              src={author.profilePicture}
              alt={`${author.name} - Author Photo`}
              width={200}
              height={200}
              className="mx-auto rounded-full object-cover shadow-lg"
              priority
            />
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[var(--foreground)]">
            {author.name}
          </h1>

          <p className="mb-2 text-xl font-medium text-[var(--foreground-secondary)]">
            {author.jobTitle}
          </p>

          {author.website && (
            <p className="mb-4 text-sm text-[var(--foreground-secondary)]">
              <Link
                href={author.website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                {author.website}
              </Link>
            </p>
          )}

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[var(--foreground-secondary)]">
            {author.bio}
          </p>
        </header>

        {/* Social Media Links */}
        <div className="mb-12 flex justify-center">
          <SocialLinks
            twitter={author.twitter}
            linkedin={author.linkedin}
            size="large"
          />
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "../../lib/blog";
import { Badge } from "../Badge";

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="group cursor-pointer overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] shadow-lg transition-colors transition-shadow hover:border-[var(--border-strong)] hover:shadow-xl">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="aspect-video">
          <Image
            src={post.image || "/assets/demo.png"}
            alt={`Cover image for ${post.title}`}
            width={400}
            height={250}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-6">
          {post.tags.length > 0 && <Badge size="sm">{post.tags[0]}</Badge>}

          <h3 className="mb-3 mt-2 text-xl font-bold leading-tight text-[var(--foreground)] transition-colors group-hover:text-primary">
            {post.title}
          </h3>

          <p className="mb-4 leading-relaxed text-[var(--foreground-secondary)]">
            {post.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {post.author.profilePicture ? (
                <Image
                  src={post.author.profilePicture}
                  alt={post.author.name}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300">
                  <span className="text-xs font-medium text-[var(--foreground)]">
                    {post.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              )}
              <div>
                <span className="text-sm font-medium text-[var(--foreground)] transition-colors group-hover:text-primary">
                  {post.author.name}
                </span>
                <p className="text-xs text-[var(--foreground-secondary)]">
                  {post.readingTime}
                </p>
              </div>
            </div>

            <div className="text-[var(--foreground-secondary)] transition-colors group-hover:text-[var(--foreground)]">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

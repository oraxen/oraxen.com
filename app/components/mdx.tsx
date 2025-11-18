import clsx from "clsx";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import React from "react";

export default function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function CustomHeading(props: any) {
  let slug = slugify(props.children);
  return React.createElement(
    `h${props.level}`,
    {
      id: slug,
      className: clsx(
        "scroll-mt-36 md:scroll-mt-24 inline-flex",
        props.className
      ),
    },
    [
      React.createElement("a", {
        href: `#${slug}`,
        key: `link-${slug}`,
        className: "anchor-link",
      }),
    ],
    props.children
  );
}

export const H1 = ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
  <CustomHeading
    className="text-3xl font-bold normal-case tracking-tight text-[var(--foreground)] sm:text-4xl"
    level={1}
  >
    {children}
  </CustomHeading>
);

export const H2 = ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
  <CustomHeading
    className="mb-4 text-lg font-semibold normal-case tracking-tight text-[var(--foreground)]"
    level={2}
  >
    {children}
  </CustomHeading>
);

export const H3 = ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
  <CustomHeading
    className="mb-2 font-semibold normal-case tracking-tight text-[var(--foreground)]"
    level={3}
  >
    {children}
  </CustomHeading>
);

export const P = (props: React.HTMLProps<HTMLParagraphElement>) => {
  const { children, className, ...rest } = props;
  const childArray = React.Children.toArray(children);
  const significant = childArray.filter(
    (c) => !(typeof c === "string" && c.trim() === "")
  );

  const isImgEl = (el: any) => React.isValidElement(el) && el.type === "img";
  const isEmEl = (el: any) => React.isValidElement(el) && el.type === "em";

  const hasOnlyImgAndEm =
    significant.length >= 2 &&
    significant.every((el) => isImgEl(el) || isEmEl(el)) &&
    significant.some(isImgEl) &&
    significant.some(isEmEl);

  if (hasOnlyImgAndEm) {
    const imgEl = significant.find(isImgEl) as React.ReactElement<any>;
    const emEl = significant.find(isEmEl) as React.ReactElement<any>;

    return (
      <figure className="mb-8">
        {React.cloneElement(imgEl, {
          className: clsx(
            imgEl.props?.className,
            "mx-auto text-[var(--foreground)]"
          ),
        })}
        <figcaption className="mt-2 text-center italic text-[var(--text-muted)]">
          {emEl.props.children}
        </figcaption>
      </figure>
    );
  }

  return (
    <p
      {...rest}
      className={clsx("mb-8 leading-7 text-[var(--foreground)]", className)}
    >
      {children}
    </p>
  );
};

export const Ul = (props: React.HTMLAttributes<HTMLUListElement>) => (
  <ul
    className="mb-10 ml-[30px] list-['–__'] space-y-1 leading-8 text-[var(--foreground-secondary)]"
    {...props}
  />
);

export const Bold = (props: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className="font-semibold text-[var(--foreground)]" {...props} />
);

export function CustomLink(props: any) {
  let href = props.href;
  const style = "text-primary font-medium hover:text-primary";
  if (href.startsWith("/")) {
    return (
      <Link className={style} href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} className={style} />;
  }

  return (
    <a className={style} target="_blank" rel="noopener noreferrer" {...props} />
  );
}

export const BlogEntry = ({
  date,
  children,
  title,
  description,
  author = "ReLens AI",
}: {
  date: string;
  children: any;
  title: string;
  description?: string;
  author?: string;
}) => {
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    author: {
      "@type": "Organization",
      name: author,
    },
    datePublished: date,
    dateModified: date,
    publisher: {
      "@type": "Organization",
      name: "ReLens AI",
      logo: {
        "@type": "ImageObject",
        url: "https://relens.ai/relens/logo-relens.png",
      },
    },
  };

  return (
    <article className="relative my-20 flex flex-col justify-center gap-x-14 border-b border-[var(--border-subtle)] md:flex-row">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
      <header className="mb-4 md:mb-10 md:w-1/3">
        <div className="sticky top-24 flex items-center space-x-2 md:block md:space-x-0 md:space-y-1.5">
          <time
            dateTime={date}
            className="inline-flex items-center rounded-lg bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 dark:bg-indigo-500/20 dark:text-indigo-400 dark:ring-indigo-400/10"
          >
            {date}
          </time>
          <span className="dark:text-secondary-light block whitespace-nowrap text-sm text-text-secondary">
            {date}
          </span>
        </div>
      </header>
      <div className="prose mb-12 dark:prose-invert">{children}</div>
    </article>
  );
};

export const ArticleImage = ({
  alt,
  width = 1200,
  height = 675,
  src,
  ...props
}: ImageProps) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className="mb-10 overflow-hidden rounded-xl shadow-md shadow-black/15 ring-1 ring-light/50 dark:ring-gray-800"
    {...props}
  />
);

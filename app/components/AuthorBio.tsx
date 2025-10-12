import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "./SocialLinks";

interface AuthorBioProps {
  name: string;
  bio: string;
  image?: string;
  twitter?: string;
  linkedin?: string;
}

export function AuthorBio({
  name,
  bio,
  image,
  twitter,
  linkedin,
}: AuthorBioProps) {
  return (
    <div className="mt-10 flex items-start gap-4 rounded-lg p-6">
      {image && (
        <div className="flex-shrink-0 cursor-pointer">
          <Link
            href={`/blog/author/${name.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <Image
              src={image}
              alt={name}
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
          </Link>
        </div>
      )}
      <div className="flex-1">
        <h3 className="mb-2 cursor-pointer text-lg font-bold uppercase tracking-wide text-text-secondary-dark">
          <Link
            href={`/blog/author/${name.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {name}
          </Link>
        </h3>
        <p className="text-secondary-dark mb-3 leading-relaxed">{bio}</p>

        <SocialLinks twitter={twitter} linkedin={linkedin} size="small" />
      </div>
    </div>
  );
}

import { siteConfig } from "../siteConfig";
import { BrandLogoSmall } from "./BrandLogoSmall";

export function BrandLogo({
  size = 48,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      <BrandLogoSmall size={size} className="h-8 w-8 sm:h-10 sm:w-10" />
      <span className="font-satoshi text-text text-xl font-bold tracking-tight sm:text-4xl">
        {siteConfig.name}
      </span>
    </span>
  );
}

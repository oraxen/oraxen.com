import { siteConfig } from "../siteConfig";
import { BrandLogoSmall } from "./BrandLogoSmall";

export function BrandLogo({
  size = 48,
  className = "",
  compact = false,
}: {
  size?: number;
  className?: string;
  compact?: boolean;
}) {
  return (
    <span
      className={`flex items-center gap-2 sm:gap-3 ${className}`}
      style={{ opacity: "90%" }}
    >
      <BrandLogoSmall
        size={size}
        className={`h-8 w-8 sm:h-10 sm:w-10 transition-all duration-300 ${
          compact ? "scale-90" : "scale-100"
        }`}
      />
      <span
        className={`font-bold tracking-tight sm:text-3xl transition-all duration-300`}
      >
        {compact ? "H.S." : siteConfig.name}
      </span>
    </span>
  );
}

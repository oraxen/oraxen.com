interface BrandLogoSmallProps {
  size?: number;
  className?: string;
}

export function BrandLogoSmall({
  size = 48,
  className = "",
}: BrandLogoSmallProps) {
  return (
    <img
      src="/logo.svg"
      alt="Brand Logo"
      className={className}
      width={size}
      height={size}
    />
  );
}

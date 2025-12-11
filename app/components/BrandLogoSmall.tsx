interface BrandLogoSmallProps {
  size?: number;
  className?: string;
}

export function BrandLogoSmall({
  size = 48,
  className = "",
}: BrandLogoSmallProps) {
  // Original aspect ratio is 27:24
  const width = Math.round(size * (27 / 24));
  
  return (
    <img
      src="/logo_lowres.png"
      alt="HackedServer logo"
      className={className}
      width={width}
      height={size}
      style={{ imageRendering: "pixelated" }}
    />
  );
}

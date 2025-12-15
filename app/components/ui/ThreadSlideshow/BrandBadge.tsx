interface BrandBadgeProps {
  visible: boolean;
}

export default function BrandBadge({ visible }: BrandBadgeProps) {
  return (
    <div
      className="absolute bottom-6 left-1/2 z-[100] flex -translate-x-1/2 items-center gap-3 rounded-md border px-5 py-2.5 backdrop-blur-[10px] transition-opacity duration-300"
      style={{
        background: "rgba(12, 28, 18, 0.92)",
        borderColor: "rgba(46, 255, 138, 0.5)",
        opacity: visible ? 1 : 0,
      }}
    >
      {/* Diamond */}
      <div
        className="h-3 w-3"
        style={{
          background: "#2eff8a",
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          boxShadow: "0 0 10px rgba(46, 255, 138, 0.6)",
        }}
      />
      <span
        className="font-[family-name:var(--font-cinzel)] text-[0.7rem] font-semibold tracking-[3px] text-white/90"
      >
        ORAXEN
      </span>
      {/* Diamond */}
      <div
        className="h-3 w-3"
        style={{
          background: "#2eff8a",
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          boxShadow: "0 0 10px rgba(46, 255, 138, 0.6)",
        }}
      />
    </div>
  );
}

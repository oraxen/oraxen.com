interface SlideCounterProps {
  current: number;
  total: number;
  visible: boolean;
}

export default function SlideCounter({ current, total, visible }: SlideCounterProps) {
  return (
    <div
      className="absolute left-1/2 top-6 z-[100] flex -translate-x-1/2 items-center gap-2 rounded border px-5 py-2 backdrop-blur-[10px] transition-opacity duration-300"
      style={{
        background: "var(--slide-panel-b)",
        borderColor: "var(--slide-accent-border)",
        opacity: visible ? 1 : 0,
      }}
    >
      <span
        className="font-[family-name:var(--font-cinzel)] text-[0.75rem] tracking-[2px]"
        style={{
          color: "var(--slide-accent)",
          textShadow: "0 0 10px var(--slide-accent-glow)",
        }}
      >
        {current}
      </span>
      <span
        className="font-[family-name:var(--font-cinzel)] text-[0.75rem] tracking-[2px]"
        style={{ color: "var(--slide-accent-border)" }}
      >
        /
      </span>
      <span
        className="font-[family-name:var(--font-cinzel)] text-[0.75rem] font-bold tracking-[3px]"
        style={{
          color: "#ffd700",
          textShadow: "0 0 10px var(--slide-accent-glow), 0 0 12px rgba(255, 215, 0, 0.35)",
        }}
      >
        {total}
      </span>
    </div>
  );
}

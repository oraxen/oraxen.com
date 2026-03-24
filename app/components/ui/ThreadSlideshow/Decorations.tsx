/** Corner accent decorations */
export function CornerAccents() {
  return (
    <>
      <div className="corner-accent pointer-events-none absolute left-[15px] top-[15px] z-[60] h-20 w-20">
        <div
          className="absolute left-0 top-0 h-[3px] w-[60px]"
          style={{ background: "linear-gradient(90deg, var(--slide-accent), transparent)" }}
        />
        <div
          className="absolute left-0 top-0 h-[60px] w-[3px]"
          style={{ background: "linear-gradient(180deg, var(--slide-accent), transparent)" }}
        />
      </div>
      <div className="corner-accent pointer-events-none absolute right-[15px] top-[15px] z-[60] h-20 w-20">
        <div
          className="absolute right-0 top-0 h-[3px] w-[60px]"
          style={{ background: "linear-gradient(-90deg, var(--slide-accent), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 h-[60px] w-[3px]"
          style={{ background: "linear-gradient(180deg, var(--slide-accent), transparent)" }}
        />
      </div>
      <div className="corner-accent pointer-events-none absolute bottom-[15px] left-[15px] z-[60] h-20 w-20">
        <div
          className="absolute bottom-0 left-0 h-[3px] w-[60px]"
          style={{ background: "linear-gradient(90deg, var(--slide-accent), transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 h-[60px] w-[3px]"
          style={{ background: "linear-gradient(0deg, var(--slide-accent), transparent)" }}
        />
      </div>
      <div className="corner-accent pointer-events-none absolute bottom-[15px] right-[15px] z-[60] h-20 w-20">
        <div
          className="absolute bottom-0 right-0 h-[3px] w-[60px]"
          style={{ background: "linear-gradient(-90deg, var(--slide-accent), transparent)" }}
        />
        <div
          className="absolute bottom-0 right-0 h-[60px] w-[3px]"
          style={{ background: "linear-gradient(0deg, var(--slide-accent), transparent)" }}
        />
      </div>
    </>
  );
}

/** Glowing orb decorations */
export function GlowOrbs() {
  return (
    <>
      <div
        className="pointer-events-none absolute -top-[100px] right-[30%] z-[5] h-[300px] w-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(46, 255, 138, 0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[10%] left-[10%] z-[5] h-[200px] w-[200px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255, 215, 0, 0.06) 0%, transparent 70%)",
        }}
      />
    </>
  );
}

/** Subtle grain texture overlay */
export function GrainOverlay() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[6] opacity-[0.035]"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.6) 0 0.7px, transparent 0.9px),
          radial-gradient(circle at 80% 30%, rgba(255, 255, 255, 0.45) 0 0.6px, transparent 0.85px),
          radial-gradient(circle at 35% 75%, rgba(255, 255, 255, 0.5) 0 0.7px, transparent 0.9px),
          radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.35) 0 0.6px, transparent 0.8px)
        `,
        backgroundSize: "140px 140px, 180px 180px, 160px 160px, 220px 220px",
        backgroundPosition: "0 0, 40px 30px, 20px 70px, 90px 120px",
      }}
    />
  );
}

import Image from "next/image";
import type { SlideData } from "@/app/data/slides";

interface SlideContentProps {
  slide: SlideData;
  isActive: boolean;
}

export default function SlideContent({ slide, isActive }: SlideContentProps) {
  const { chapter, title, bullets, contentPosition = "right", extraContent } = slide;

  // No content panel for title slides
  if (!chapter && !title && !bullets) {
    return null;
  }

  const isLeft = contentPosition === "left";

  return (
    <div
      className={`
        absolute top-0 h-full w-[42%] min-w-[480px] max-w-[560px]
        flex flex-col justify-center
        px-10 py-12
        backdrop-blur-[16px]
        ${isLeft ? "left-0 border-r-[3px]" : "right-0 border-l-[3px]"}
      `}
      style={{
        background: isLeft
          ? "linear-gradient(225deg, var(--slide-panel-a) 0%, var(--slide-panel-b) 50%, var(--slide-panel-c) 100%)"
          : "linear-gradient(135deg, var(--slide-panel-a) 0%, var(--slide-panel-b) 50%, var(--slide-panel-c) 100%)",
        borderColor: "var(--slide-accent-border)",
        boxShadow: isLeft
          ? "20px 0 60px var(--slide-panel-shadow), inset -1px 0 0 rgba(255, 255, 255, 0.05)"
          : "-20px 0 60px var(--slide-panel-shadow), inset 1px 0 0 rgba(255, 255, 255, 0.05)",
        color: "var(--slide-text-color)",
      }}
    >
      {/* Decorative line above */}
      <div
        className="absolute left-8 right-8 top-8 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, var(--slide-accent-line), transparent)",
        }}
      />

      {/* Decorative line below */}
      <div
        className="absolute bottom-8 left-8 right-8 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, var(--slide-accent-line), transparent)",
        }}
      />

      {/* Chapter number */}
      {chapter && (
        <div
          className="mb-3 flex items-center gap-3 font-[family-name:var(--font-cinzel)] text-xs font-semibold uppercase tracking-[4px]"
          style={{
            color: "var(--gold, #ffd700)",
          }}
        >
          <span
            className="text-[0.6rem]"
            style={{ color: "var(--slide-accent)" }}
          >
            ✦
          </span>
          {chapter}
        </div>
      )}

      {/* Title */}
      {title && (
        <h2
          className={`mb-8 font-[family-name:var(--font-cinzel)] text-[1.6rem] font-semibold leading-[1.6] tracking-[2px] ${isActive ? "animate-slide-title" : "opacity-0"}`}
          style={{
            color: "var(--slide-accent)",
            textShadow: "0 0 30px var(--slide-accent-glow), 0 0 60px var(--slide-accent-glow-outer)",
          }}
        >
          {title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h2>
      )}

      {/* Bullet points */}
      {bullets && bullets.length > 0 && (
        <ul className="list-none space-y-6 font-[family-name:var(--font-cormorant)]">
          {bullets.map((bullet, index) => (
            <li
              key={index}
              className={`relative pl-7 text-[1.2rem] font-medium leading-[1.75] ${isActive ? "animate-slide-bullet" : "opacity-0"}`}
              style={{
                color: "var(--slide-text-color)",
                animationDelay: `${0.3 + index * 0.15}s`,
              }}
            >
              {/* Diamond bullet */}
              <span
                className="absolute left-0 top-[0.65rem] h-2.5 w-2.5"
                style={{
                  background: "var(--slide-accent)",
                  boxShadow: "0 0 10px var(--slide-accent-glow), 0 0 20px var(--slide-accent-glow-outer)",
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              />
              <span
                dangerouslySetInnerHTML={{ __html: bullet }}
                className="[&_strong]:font-bold [&_strong]:text-[var(--slide-accent)]"
              />
            </li>
          ))}
        </ul>
      )}

      {/* Extra content (e.g., Studio hero image) */}
      {extraContent?.type === "studio-hero" && (
        <div
          className="relative mt-4 overflow-visible rounded-t-[10px] border"
          style={{
            borderColor: "var(--slide-accent-border)",
            background: "rgba(0, 0, 0, 0.2)",
            boxShadow: "0 10px 24px rgba(0, 0, 0, 0.35), 0 0 14px var(--slide-accent-glow-outer)",
          }}
        >
          {/* Top glow line */}
          <div
            className="absolute left-0 right-0 top-0 z-10 h-0.5"
            style={{
              background: "linear-gradient(90deg, transparent 0%, var(--slide-accent) 10%, var(--slide-accent) 90%, transparent 100%)",
              boxShadow: "0 0 10px var(--slide-accent-glow)",
            }}
          />
          <Image
            src={extraContent.src}
            alt={extraContent.alt}
            width={500}
            height={300}
            className="block h-auto w-full"
          />
        </div>
      )}
    </div>
  );
}

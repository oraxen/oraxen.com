"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type SyntheticEvent,
} from "react";

export default function ThreadSlideshow() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(5);
  const [pressedKey, setPressedKey] = useState<"left" | "right" | null>(null);
  const [isHeroInView, setIsHeroInView] = useState(true);
  const [fullscreenInitSlide, setFullscreenInitSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const fullscreenIframeRef = useRef<HTMLIFrameElement>(null);
  const slideRef = useRef(0);
  const totalRef = useRef(5);

  type ThreadCommand = "next" | "prev" | "goTo" | "getState";
  type ThreadTarget = "active" | "embedded" | "fullscreen";

  const sendCommand = useCallback(
    (target: ThreadTarget, command: ThreadCommand, index?: number) => {
      const iframe =
        target === "embedded"
          ? iframeRef.current
          : target === "fullscreen"
            ? fullscreenIframeRef.current
            : isFullscreen
              ? fullscreenIframeRef.current
              : iframeRef.current;

      iframe?.contentWindow?.postMessage({ type: command, index }, "*");
    },
    [isFullscreen]
  );

  const goNext = useCallback(() => {
    sendCommand("active", "next");
  }, [sendCommand]);

  const goPrev = useCallback(() => {
    sendCommand("active", "prev");
  }, [sendCommand]);

  // Listen for messages from the *active* iframe (embedded vs fullscreen)
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (!e.data || typeof e.data !== "object") return;
      if (e.data.type !== "slideChange") return;
      if (e.data.mode !== "embedded" && e.data.mode !== "fullscreen") return;
      if (
        isFullscreen ? e.data.mode !== "fullscreen" : e.data.mode !== "embedded"
      ) {
        return;
      }
      if (typeof e.data.currentSlide !== "number") return;
      if (typeof e.data.totalSlides !== "number") return;
      slideRef.current = e.data.currentSlide;
      totalRef.current = e.data.totalSlides;
      setCurrentSlide(e.data.currentSlide);
      setTotalSlides(e.data.totalSlides);
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [isFullscreen]);

  const requestEmbeddedState = useCallback(() => {
    const win = iframeRef.current?.contentWindow ?? null;
    if (!win) {
      return Promise.resolve({
        slide: slideRef.current,
        total: totalRef.current,
      });
    }

    return new Promise<{ slide: number; total: number }>((resolve) => {
      let timeoutId: number | null = null;
      const onMessage = (event: MessageEvent) => {
        if (!event.data || typeof event.data !== "object") return;
        if (event.data.type !== "slideChange") return;
        if (event.data.mode !== "embedded") return;
        if (typeof event.data.currentSlide !== "number") return;
        if (typeof event.data.totalSlides !== "number") return;

        cleanup();
        resolve({
          slide: event.data.currentSlide,
          total: event.data.totalSlides,
        });
      };

      const cleanup = () => {
        window.removeEventListener("message", onMessage);
        if (timeoutId != null) window.clearTimeout(timeoutId);
      };

      window.addEventListener("message", onMessage);
      win.postMessage({ type: "getState" }, "*");
      timeoutId = window.setTimeout(() => {
        cleanup();
        resolve({ slide: slideRef.current, total: totalRef.current });
      }, 150);
    });
  }, []);

  const openFullscreen = useCallback(async () => {
    // Make sure we have the latest embedded slide before we start listening to fullscreen events
    const { slide, total } = await requestEmbeddedState();
    slideRef.current = slide;
    totalRef.current = total;
    setCurrentSlide(slide);
    setTotalSlides(total);
    setFullscreenInitSlide(slide); // Pass to iframe URL so it starts at correct slide
    setIsFullscreen(true);
  }, [requestEmbeddedState]);

  const closeFullscreen = useCallback(() => {
    setIsFullscreen(false);
    const slide = slideRef.current;
    requestAnimationFrame(() => {
      sendCommand("embedded", "goTo", slide);
    });
  }, [sendCommand]);

  // When entering fullscreen, force-sync the fullscreen iframe to the current slide.
  // (Some browsers can be flaky about iframe `onLoad` timing with cached resources.)
  useEffect(() => {
    if (!isFullscreen) return;

    let cancelled = false;
    let attempts = 0;

    const trySync = () => {
      if (cancelled) return;
      const win = fullscreenIframeRef.current?.contentWindow ?? null;
      if (!win) {
        attempts += 1;
        if (attempts < 12) window.setTimeout(trySync, 50);
        return;
      }

      win.postMessage({ type: "goTo", index: slideRef.current }, "*");
      win.postMessage({ type: "getState" }, "*");
    };

    trySync();
    return () => {
      cancelled = true;
    };
  }, [isFullscreen]);

  // Track whether the hero is in view (so arrow keys don't hijack the page)
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroInView(
          entry.isIntersecting && entry.intersectionRatio >= 0.35
        );
      },
      { threshold: [0, 0.35, 1] }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isTypingTarget =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable === true;
      if (isTypingTarget) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (!isFullscreen && !isHeroInView) return;

      if (e.key === "Escape" && isFullscreen) {
        closeFullscreen();
        return;
      }

      if (e.key === "ArrowRight") {
        setPressedKey("right");
        goNext();
      } else if (e.key === "ArrowLeft") {
        setPressedKey("left");
        goPrev();
      }
    };
    const handleKeyUp = () => {
      setPressedKey(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [currentSlide, goNext, goPrev, isFullscreen, isHeroInView, sendCommand]);

  const handleEmbeddedLoad = useCallback(
    (event: SyntheticEvent<HTMLIFrameElement>) => {
      event.currentTarget.contentWindow?.postMessage({ type: "getState" }, "*");
    },
    []
  );

  const handleFullscreenLoad = useCallback(
    (event: SyntheticEvent<HTMLIFrameElement>) => {
      const win = event.currentTarget.contentWindow;
      if (!win) return;
      // Start fullscreen at the same slide as the embedded hero
      win.postMessage({ type: "goTo", index: slideRef.current }, "*");
      win.postMessage({ type: "getState" }, "*");
    },
    []
  );

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === totalSlides - 1;

  const NavButton = ({
    direction,
    onClick,
    visible,
    pressed,
  }: {
    direction: "left" | "right";
    onClick: () => void;
    visible: boolean;
    pressed: boolean;
  }) => (
    <button
      onClick={onClick}
      className={`
        group absolute top-1/2 -translate-y-1/2 z-10
        ${direction === "left" ? "left-2 sm:left-3" : "right-2 sm:right-3"}
        rounded-full p-2 sm:p-2.5
        bg-black/40 backdrop-blur-md
        border border-white/10
        text-white/70
        transition-all duration-200 ease-out
        hover:bg-black/60 hover:text-white hover:scale-110 hover:border-cyan-400/30
        active:scale-95
        ${pressed ? "scale-95 bg-cyan-500/30 text-white border-cyan-400/50" : ""}
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      aria-label={direction === "left" ? "Previous slide" : "Next slide"}
    >
      <svg
        className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 ${
          pressed
            ? direction === "left"
              ? "-translate-x-0.5"
              : "translate-x-0.5"
            : ""
        } group-hover:${direction === "left" ? "-translate-x-0.5" : "translate-x-0.5"}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {direction === "left" ? (
          <path d="M15 18l-6-6 6-6" />
        ) : (
          <path d="M9 18l6-6-6-6" />
        )}
      </svg>
      {/* Glow effect on hover */}
      <span
        className={`
          absolute inset-0 rounded-full opacity-0 transition-opacity duration-300
          group-hover:opacity-100
          ${direction === "left" ? "bg-gradient-to-r" : "bg-gradient-to-l"}
          from-cyan-400/20 to-transparent
        `}
      />
    </button>
  );

  const FullscreenButton = ({ onClick }: { onClick: () => void }) => (
    <button
      onClick={onClick}
      className="
        group absolute bottom-3 right-3 z-10
        rounded-lg p-1.5 sm:p-2
        bg-black/40 backdrop-blur-md
        border border-white/10
        text-white/70
        transition-all duration-200 ease-out
        hover:bg-black/60 hover:text-white hover:scale-105 hover:border-cyan-400/30
        active:scale-95
      "
      aria-label="View fullscreen"
    >
      <svg
        className="h-4 w-4 sm:h-5 sm:w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
      </svg>
      {/* Subtle glow */}
      <span className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-cyan-400/20 to-transparent" />
    </button>
  );

  const CloseButton = ({ onClick }: { onClick: () => void }) => (
    <button
      onClick={onClick}
      className="
        group absolute right-4 top-4 z-10
        rounded-full p-2.5
        bg-black/50 backdrop-blur-md
        border border-white/10
        text-white/80
        transition-all duration-200 ease-out
        hover:bg-black/70 hover:text-white hover:scale-110 hover:border-cyan-400/30
        active:scale-95
      "
      aria-label="Close fullscreen"
    >
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </button>
  );

  // Slide indicator dots
  const SlideIndicator = () => (
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 sm:gap-2">
      {Array.from({ length: totalSlides }).map((_, i) => (
        <button
          key={i}
          onClick={() => sendCommand("active", "goTo", i)}
          className={`
            h-1.5 rounded-full transition-all duration-300 ease-out
            ${
              i === currentSlide
                ? "w-6 bg-cyan-400 shadow-[0_0_10px_rgba(0,230,255,0.5)]"
                : "w-1.5 bg-white/30 hover:bg-white/50"
            }
          `}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );

  return (
    <>
      {/* Normal embedded view */}
      <div
        ref={containerRef}
        className="relative aspect-video w-full overflow-hidden rounded-xl"
      >
        <iframe
          ref={iframeRef}
          src="/thread/index.html?mode=embedded"
          className="h-full w-full border-0"
          title="HackedServer Thread Showcase"
          loading="eager"
          allow="autoplay"
          onLoad={handleEmbeddedLoad}
        />

        {/* Navigation buttons */}
        <NavButton
          direction="left"
          onClick={goPrev}
          visible={!isFirstSlide}
          pressed={pressedKey === "left"}
        />
        <NavButton
          direction="right"
          onClick={goNext}
          visible={!isLastSlide}
          pressed={pressedKey === "right"}
        />

        {/* Slide indicator (hide on header slide to match thread vibe) */}
        {!isFirstSlide && <SlideIndicator />}

        {/* Fullscreen button */}
        <FullscreenButton onClick={openFullscreen} />
      </div>

      {/* Fullscreen overlay */}
      {isFullscreen && (
        <div className="fixed inset-0 z-[9999] bg-black">
          <iframe
            ref={fullscreenIframeRef}
            src={`/thread/index.html?mode=fullscreen&slide=${fullscreenInitSlide + 1}`}
            className="h-full w-full border-0"
            title="HackedServer Thread Showcase"
            loading="eager"
            allow="autoplay"
            onLoad={handleFullscreenLoad}
          />

          {/* Navigation buttons in fullscreen */}
          <NavButton
            direction="left"
            onClick={goPrev}
            visible={!isFirstSlide}
            pressed={pressedKey === "left"}
          />
          <NavButton
            direction="right"
            onClick={goNext}
            visible={!isLastSlide}
            pressed={pressedKey === "right"}
          />

          <CloseButton onClick={closeFullscreen} />
        </div>
      )}
    </>
  );
}

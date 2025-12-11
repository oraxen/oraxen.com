"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export default function ThreadSlideshow() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(6);
  const [pressedKey, setPressedKey] = useState<"left" | "right" | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const fullscreenIframeRef = useRef<HTMLIFrameElement>(null);

  const sendCommand = useCallback(
    (command: string, index?: number) => {
      const iframe = isFullscreen
        ? fullscreenIframeRef.current
        : iframeRef.current;
      if (iframe?.contentWindow) {
        iframe.contentWindow.postMessage(
          { type: command, index },
          "*"
        );
      }
    },
    [isFullscreen]
  );

  const goNext = useCallback(() => {
    sendCommand("next");
  }, [sendCommand]);

  const goPrev = useCallback(() => {
    sendCommand("prev");
  }, [sendCommand]);

  // Listen for messages from iframe
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data.type === "slideChange") {
        setCurrentSlide(e.data.currentSlide);
        setTotalSlides(e.data.totalSlides);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // Request initial state when iframe loads
  useEffect(() => {
    const timer = setTimeout(() => {
      sendCommand("getState");
    }, 500);
    return () => clearTimeout(timer);
  }, [sendCommand]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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
  }, [goNext, goPrev]);

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
        hover:bg-black/60 hover:text-white hover:scale-110 hover:border-emerald-400/30
        active:scale-95
        ${pressed ? "scale-95 bg-emerald-500/30 text-white border-emerald-400/50" : ""}
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      aria-label={direction === "left" ? "Previous slide" : "Next slide"}
    >
      <svg
        className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 ${
          pressed ? (direction === "left" ? "-translate-x-0.5" : "translate-x-0.5") : ""
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
          from-emerald-400/20 to-transparent
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
        hover:bg-black/60 hover:text-white hover:scale-105 hover:border-emerald-400/30
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
      <span className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-emerald-400/20 to-transparent" />
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
        hover:bg-black/70 hover:text-white hover:scale-110 hover:border-emerald-400/30
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
          onClick={() => sendCommand("goTo", i)}
          className={`
            h-1.5 rounded-full transition-all duration-300 ease-out
            ${
              i === currentSlide
                ? "w-6 bg-emerald-400 shadow-[0_0_10px_rgba(46,255,138,0.5)]"
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
      <div className="relative aspect-video w-full overflow-hidden rounded-xl">
        <iframe
          ref={iframeRef}
          src="/thread/index.html"
          className="h-full w-full border-0"
          title="Oraxen Thread Showcase"
          loading="eager"
          allow="autoplay"
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

        {/* Slide indicator */}
        <SlideIndicator />

        {/* Fullscreen button */}
        <FullscreenButton onClick={() => setIsFullscreen(true)} />
      </div>

      {/* Fullscreen overlay */}
      {isFullscreen && (
        <div className="fixed inset-0 z-[9999] bg-black">
          <iframe
            ref={fullscreenIframeRef}
            src="/thread/index.html"
            className="h-full w-full border-0"
            title="Oraxen Thread Showcase"
            loading="eager"
            allow="autoplay"
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

          <CloseButton onClick={() => setIsFullscreen(false)} />
        </div>
      )}
    </>
  );
}

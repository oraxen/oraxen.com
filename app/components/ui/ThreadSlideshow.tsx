"use client";

import { useState } from "react";

export default function ThreadSlideshow() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <>
      {/* Normal embedded view */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl">
        <iframe
          src="/thread/index.html"
          className="h-full w-full border-0"
          title="HackedServer Thread Showcase"
          loading="eager"
          allow="autoplay"
        />
        {/* Fullscreen button */}
        <button
          onClick={() => setIsFullscreen(true)}
          className="absolute bottom-3 right-3 rounded bg-black/50 p-1.5 text-white/70 backdrop-blur-sm transition-all hover:bg-black/70 hover:text-white sm:p-2"
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
        </button>
      </div>

      {/* Fullscreen overlay */}
      {isFullscreen && (
        <div className="fixed inset-0 z-[9999] bg-black">
          <iframe
            src="/thread/index.html"
            className="h-full w-full border-0"
            title="HackedServer Thread Showcase"
            loading="eager"
            allow="autoplay"
          />
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white/80 backdrop-blur-sm transition-all hover:bg-black/70 hover:text-white"
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
        </div>
      )}
    </>
  );
}

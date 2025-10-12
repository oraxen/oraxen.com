"use client";

import { ReactNode } from "react";

interface HeroProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export default function Hero({ title, description, children }: HeroProps) {
  return (
    <section
      aria-labelledby="hero-title"
      className="mt-32 flex flex-col items-center justify-center text-center sm:mt-56"
    >
      <h1
        id="hero-title"
        className="mb-10 text-4xl font-bold tracking-tighter text-text sm:text-6xl md:text-6xl"
        style={{
          animationDuration: "700ms",
        }}
      >
        {title}
      </h1>

      <p
        className="mt-6 max-w-xl animate-slide-up-fade text-lg text-text-secondary px-6 sm:px-0"
        style={{ animationDuration: "900ms" }}
      >
        {description}
      </p>
      {children}
    </section>
  );
}

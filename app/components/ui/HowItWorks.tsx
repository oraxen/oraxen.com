"use client";
import * as motion from "motion/react-client";
import Image from "next/image";
import { Badge } from "../Badge";
import { Button } from "../Button";

interface StepItem {
  title: string;
  description: string;
  imagePath?: string;
  ctaText?: string;
  ctaLink?: string;
}

interface HowItWorksProps {
  badgeText?: string;
  title?: string;
  steps: StepItem[];
}

export default function HowItWorks({
  badgeText,
  title,
  steps,
}: HowItWorksProps) {
  return (
    <section className="mx-auto mt-44 w-full max-w-6xl px-3" id="how-it-works">
      {(badgeText || title) && (
        <header className="mb-10 flex flex-col items-center justify-center">
          {badgeText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Badge>{badgeText}</Badge>
            </motion.div>
          )}
          {title && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-2 inline-block bg-gradient-to-br from-[var(--foreground)] to-[var(--foreground-secondary)] bg-clip-text py-2 text-3xl font-bold tracking-tighter text-transparent sm:text-5xl dark:from-gray-50 dark:to-gray-300"
            >
              {title}
            </motion.h2>
          )}
        </header>
      )}

      <div className="flex flex-col gap-16">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            viewport={{ once: true }}
            className="grid grid-cols-1 items-center gap-8 md:grid-cols-2"
          >
            <div className="order-1">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-light bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
                <Image
                  src={step.imagePath || "/images/preview.png"}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="order-2">
              <h3 className="text-2xl font-semibold text-[var(--foreground-secondary)] sm:text-3xl dark:text-gray-50">
                {step.title}
              </h3>
              <p className="mt-4 max-w-md text-justify leading-7 text-[var(--foreground-secondary)]">
                {step.description}
              </p>
              {(step.ctaText || step.ctaLink) && (
                <div className="mt-6">
                  <Button
                    asChild
                    className="group bg-primary text-white hover:bg-primary/90"
                  >
                    <a
                      href={step.ctaLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {step.ctaText || "Learn more"}
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

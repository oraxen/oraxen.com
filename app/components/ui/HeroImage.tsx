"use client";

import * as motion from "motion/react-client";
import ThreadSlideshow from "./ThreadSlideshow";

export default function HeroImage() {
  return (
    <section
      aria-label="Oraxen Thread Showcase"
      className="flow-root mx-auto w-full max-w-5xl"
    >
      <motion.div
        className="inline-block w-full rounded-2xl bg-slate-50/20 px-2 pt-2 pb-1 ring-1 ring-inset ring-slate-200/25 dark:bg-transparent dark:ring-white/5"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2,
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="inline-block w-full rounded-xl bg-white ring-1 ring-slate-900/5 dark:bg-transparent dark:ring-white/10">
          <motion.div
            className="block overflow-hidden rounded-xl shadow-2xl dark:shadow-none"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.4,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ThreadSlideshow />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

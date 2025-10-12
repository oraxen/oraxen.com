"use client";

import * as motion from "motion/react-client";

export default function HeroImage() {
  return (
    <section
      aria-label="Hero video of the website"
      className="flow-root max-w-[calc(100vw-1.5rem)]"
    >
      <motion.div
        className="max-w-full rounded-2xl bg-slate-50/40 p-2 ring-1 ring-inset ring-slate-200/50 dark:bg-gray-900/70 dark:ring-white/10"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2,
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-full rounded-xl bg-white ring-1 ring-slate-900/5 dark:bg-slate-950 dark:ring-white/15">
          <motion.video
            src="/demo.webm"
            className="max-w-full rounded-xl shadow-2xl sepia-[0.05] dark:shadow-indigo-600/10"
            autoPlay
            muted
            loop
            playsInline
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.4,
            }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>
      </motion.div>
    </section>
  );
}

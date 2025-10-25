"use client";

import * as motion from "motion/react-client";

export default function HeroImage() {
  return (
    <section
      aria-label="Hero image of the website"
      className="flow-root max-w-[calc(100vw-1.5rem)]"
    >
      <motion.div
        className="inline-block rounded-2xl bg-slate-50/20 px-2 pt-2 pb-1 ring-1 ring-inset ring-slate-200/25 dark:bg-gray-900/40 dark:ring-white/5"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2,
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="inline-block rounded-xl bg-white ring-1 ring-slate-900/5 dark:bg-slate-950 dark:ring-white/15">
          <motion.img
            src="/assets/demo.png"
            alt="Oraxen custom items showcase"
            className="block rounded-xl shadow-2xl sepia-[0.05] dark:shadow-indigo-600/10"
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

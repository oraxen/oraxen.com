"use client";
import * as motion from "motion/react-client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Accordion";

export type FaqItem = { question: string; answer: string };
type FaqsProps = { items: FaqItem[]; jsonLd: unknown };

export function Faqs({ items, jsonLd }: FaqsProps) {
  return (
    <section
      className="mx-auto mt-20 w-full max-w-6xl px-3 sm:mt-36"
      aria-labelledby="faq-title"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="col-span-full sm:col-span-5"
        >
          <h2
            id="faq-title"
            className="inline-block w-full scroll-my-24 bg-gradient-to-br from-[var(--foreground)] to-[var(--foreground-secondary)] bg-clip-text py-2 pr-2 text-left text-2xl font-bold tracking-tighter text-transparent lg:text-3xl dark:from-gray-50 dark:to-gray-300"
          >
            Frequently Asked Questions
          </h2>
          <p className="dark:text-secondary-light mt-4 text-base leading-7 text-[var(--foreground-secondary)]">
            Can&rsquo;t find the answer you&rsquo;re looking for? Don&rsquo;t
            hesitate to get in touch with our{" "}
            <a
              href="mailto:contact@lfglabs.dev"
              className="font-medium text-primary hover:text-primary/90"
            >
              customer support
            </a>{" "}
            team.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="col-span-full mt-6 lg:col-span-7 lg:mt-0"
        >
          <Accordion type="multiple" className="mx-auto">
            {items.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={item.question}
                  className="py-3 first:pb-3 first:pt-0"
                >
                  <AccordionTrigger>
                    <span className="w-full text-center sm:text-left bg-gradient-to-br from-[var(--foreground)] to-[var(--foreground-secondary)] bg-clip-text text-transparent dark:from-gray-50 dark:to-gray-300">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[var(--foreground-secondary)]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

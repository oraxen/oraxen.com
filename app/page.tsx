import { Button } from "./components/Button";
import Link from "next/link";
import { siteConfig } from "./siteConfig";
import Hero from "./components/ui/Hero";
import HeroImage from "./components/ui/HeroImage";
import HowItWorks from "./components/ui/HowItWorks";
import { Faqs } from "./components/ui/Faqs";
import { buildFaqJsonLd } from "./lib/utils";

export default function Home() {
  const faqItems = [
    {
      question: "What is GraphGPT?",
      answer:
        "GraphGPT lets you visualize and interact with structured data as charts directly inside ChatGPT. It renders fast, responsive charts without leaving the conversation.",
    },
    {
      question: "How do I add GraphGPT to ChatGPT?",
      answer:
        "In ChatGPT, go to Settings → Connectors → Create. Set the name to GraphGPT, the URL to https://graphgpt.app/mcp, and authentication to No authentication. Then ask ChatGPT to render a chart.",
    },
    {
      question: "Which chart types are supported?",
      answer: "Line, bar, area, and pie.",
    },
    {
      question: "How do I provide data to a chart?",
      answer:
        "Pass an array of objects and specify xKey and yKey for line/bar/area charts. For pie charts, use nameKey and valueKey.",
    },
    {
      question: "Can I plot multiple series?",
      answer:
        "Yes. For line charts, provide yKeys with an array of field names to render multiple lines.",
    },
    {
      question: "Can I customize the title, size, and colors?",
      answer:
        "Yes. You can set title, height, width, and colors (hex values) in your request.",
    },
    {
      question: "Does GraphGPT store my data?",
      answer:
        "No. Data is passed from the conversation to the widget at render time; GraphGPT does not persist it on our servers.",
    },
    {
      question: "What happens if I omit some options?",
      answer:
        "GraphGPT chooses sensible defaults: chartType defaults to 'line', xKey to 'name', yKey to 'value', and sample data is used if none is provided.",
    },
    {
      question: "Does GraphGPT work on mobile?",
      answer: "Yes. Charts are responsive and adapt to the available space.",
    },
    {
      question: "Can ChatGPT convert my text or table into chart data?",
      answer:
        "Often yes. Describe your data or paste a small table and ask ChatGPT to render a chart—GraphGPT will visualize the structured output.",
    },
  ];
  return (
    <>
      <main className="flex flex-col overflow-hidden">
        <Hero title={siteConfig.heroTitle} description={siteConfig.description}>
          <div
            className="mt-8 flex animate-slide-up-fade flex-col justify-center gap-3 px-3 sm:flex-row"
            style={{ animationDuration: "1100ms" }}
          >
            <Button className="h-10 font-semibold">
              <Link
                href={siteConfig.mainCta}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                try for free{" "}
              </Link>
            </Button>
          </div>

          <div
            className="relative mx-auto ml-3 mt-20 h-fit max-w-6xl animate-slide-up-fade sm:ml-auto sm:w-full sm:px-2"
            style={{ animationDuration: "1400ms" }}
          >
            <div
              className="absolute inset-x-0 -bottom-20 -mx-10 h-2/4 bg-gradient-to-t from-[var(--background)] via-[var(--background)] to-transparent lg:h-1/4 dark:from-gray-950 dark:via-gray-950"
              aria-hidden="true"
            />
            <HeroImage />
          </div>
        </Hero>
        <HowItWorks
          badgeText="how to install"
          title={"How to install " + siteConfig.name}
          steps={[
            {
              title: "Enable dev mode",
              description:
                "In the connectors settings, scroll down to advanced settings and enable developer mode.",
              ctaText: "Access connectors",
              ctaLink: "https://chatgpt.com/#settings/Connectors",
              imagePath: "/tutorial/dev-mode.png",
            },
            {
              title: "Create a new connector",
              description:
                "Return to the connectors settings and click the create button.",
              imagePath: "/tutorial/create-connector.png",
            },
            {
              title: "Configure the connector",
              description:
                "Set the name to " +
                siteConfig.name +
                ", set the url to " +
                siteConfig.url +
                "/mcp and set authentication to no authentication.",
              imagePath: "/tutorial/configure-connector.png",
            },
          ]}
        />
        <Faqs items={faqItems} jsonLd={buildFaqJsonLd(faqItems)} />
      </main>
    </>
  );
}

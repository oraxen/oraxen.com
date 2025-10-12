import { Button } from "./components/Button";
import Link from "next/link";
import { siteConfig } from "./siteConfig";
import Hero from "./components/ui/Hero";
import HeroImage from "./components/ui/HeroImage";
import HowItWorks from "./components/ui/HowItWorks";

export default function Home() {
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
      </main>
    </>
  );
}

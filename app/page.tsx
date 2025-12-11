import { Button } from "./components/Button";
import Link from "next/link";
import { siteConfig } from "./siteConfig";
import HeroImage from "./components/ui/HeroImage";
import HowItWorks from "./components/ui/HowItWorks";
import { Faqs } from "./components/ui/Faqs";
import { buildFaqJsonLd } from "./lib/utils";

export default function Home() {
  const faqItems = [
    {
      question: "What is Oraxen?",
      answer:
        "Oraxen is a Minecraft plugin that allows the creation of custom items & blocks using custom textures and models. It handles resourcepack generation, upload and storage automatically, and is entirely open source with an extensible API.",
    },
    {
      question: "What servers are supported?",
      answer:
        "Oraxen works with Spigot and Paper servers running Minecraft 1.18 through 1.21.4. For Minecraft 1.21.2+, using the latest version of Oraxen is advised.",
    },
    {
      question: "What dependencies are required?",
      answer:
        "CommandAPI is required. ProtocolLib is recommended but optional. Simply drop the Oraxen and CommandAPI .jar files into your /plugins/ folder and restart your server.",
    },
    {
      question: "What features does Oraxen support?",
      answer:
        "Oraxen supports custom items, custom blocks, custom armor, custom furniture, glyphs, emoji, custom GUI, custom HUD, and various mechanics like farming, note blocks, string blocks, and more.",
    },
    {
      question: "Does Oraxen support resource packs?",
      answer:
        "Yes! Oraxen automatically generates resource packs using your custom textures and models, then uploads them to a Polymath instance (or your own) and distributes them to players automatically.",
    },
    {
      question: "Is Oraxen free?",
      answer:
        "Oraxen is open source and available for free. You can download it from Spigot or Polymart. The default Polymath instance is free, or you can host your own.",
    },
    {
      question: "Can I customize furniture and items?",
      answer:
        "Absolutely! Oraxen allows you to create custom furniture with custom models, position them precisely, and even create display-entity furniture. You can also customize item appearance, make dyeable items, and more.",
    },
    {
      question: "Does Oraxen work with other plugins?",
      answer:
        "Yes! Oraxen integrates with many popular plugins including BossShopPro, CrateReloaded, MythicMobs, ModelEngine, TrMenu, HappyHUD, MMoItems, and various world generators.",
    },
    {
      question: "How do I get started?",
      answer:
        "Install CommandAPI and Oraxen in your /plugins/ folder, restart your server, then configure your items in the /plugins/oraxen/items/ directory. Check the documentation for detailed guides!",
    },
    {
      question: "Is there an API for developers?",
      answer:
        "Yes! Oraxen has a comprehensive API for developers. You can create custom mechanics, add compatibility with other plugins, and even create custom hosting services. See the developer documentation for details.",
    },
  ];
  return (
    <>
      <main className="flex flex-col overflow-hidden">
        {/* Hero Section - Thread first, then CTA buttons */}
        <section className="mt-24 flex flex-col items-center justify-center sm:mt-32">
          {/* Thread Slideshow */}
          <div
            className="relative mx-auto w-full max-w-6xl animate-slide-up-fade px-3 sm:px-6"
            style={{ animationDuration: "700ms" }}
          >
            <div
              className="absolute inset-x-0 -bottom-12 -mx-10 h-1/3 bg-gradient-to-t from-[var(--background)] via-[var(--background)] to-transparent opacity-80 lg:h-1/5 dark:from-gray-950 dark:via-gray-950"
              aria-hidden="true"
            />
            <HeroImage />
          </div>

          {/* CTA Buttons - Below the thread */}
          <div
            className="mt-10 flex animate-slide-up-fade flex-col justify-center gap-3 px-3 sm:flex-row"
            style={{ animationDuration: "900ms" }}
          >
            <Button className="h-10 font-semibold bg-primary hover:bg-primary/90">
              <Link
                href="https://www.spigotmc.org/resources/oraxen.72448/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white no-underline"
              >
                Get on Spigot
              </Link>
            </Button>
            <Button className="h-10 font-semibold border-2 border-primary bg-transparent text-primary hover:bg-primary/10">
              <Link
                href="https://polymart.org/resource/oraxen.629"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
              >
                Get on Polymart
              </Link>
            </Button>
          </div>
        </section>

        <HowItWorks
          badgeText="features"
          title={"Why choose " + siteConfig.name}
          steps={[
            {
              title: "Premium Artist-Made Textures",
              description:
                "Access hundreds of dollars worth of beautiful, professionally crafted textures created by talented artists. Transform your server with high-quality custom items that stand out from the crowd.",
              imagePath: "/assets/beautiful_items.png",
            },
            {
              title: "Custom Menus & GUI",
              description:
                "Create stunning custom menus and user interfaces for your server. Build immersive experiences with fully customizable GUIs that guide and engage your players.",
              imagePath: "/assets/custom_menu.jpg",
            },
            {
              title: "Furniture & Custom Blocks",
              description:
                "Enhance your server world with custom furniture and decorative blocks. Place interactive items, create immersive environments, and bring your server's aesthetic to life.",
              imagePath: "/assets/furnitures.png",
            },
            {
              title: "Easy, Modular & Open Source",
              description:
                "Oraxen is designed to be easy to configure with simple YAML files. It's fully modular, allowing you to enable only what you need. Best of all, it's completely open source, giving you full control and transparency.",
              ctaText: "View Documentation",
              ctaLink: "https://docs.oraxen.com/",
              imagePath: "/assets/demo.png",
            },
          ]}
        />
        <Faqs items={faqItems} jsonLd={buildFaqJsonLd(faqItems)} />
      </main>
    </>
  );
}

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
      question: "What is HackedServer?",
      answer:
        "HackedServer is a Spigot and Bungeecord plugin that detects hacked clients, cheats, and unwanted mods right when players connect to your server using advanced packet-based checks.",
    },
    {
      question: "What servers are supported?",
      answer:
        "HackedServer works with Spigot, CraftBukkit, Paper, TacoSpigot, and Akarin across a wide range of Minecraft versions. It also supports Bungeecord-style proxies when installed on both the backend servers and the proxy.",
    },
    {
      question: "What dependencies are required?",
      answer:
        "HackedServer depends on HackedCore and, for modern versions, ProtocolLib. Simply drop HackedServer.jar, HackedCore.jar (and ProtocolLib if applicable) into your /plugins/ folder and restart your server.",
    },
    {
      question: "What clients and mods can HackedServer detect?",
      answer:
        "Depending on your server version, HackedServer can detect Forge, Fabric, Rift, Labymod, PX Mod, 5ZigMod, WorldDownloader, Vape Cracked, Liteloader, BetterSprintingMod, many Forge mods, and more. It can also tell you which Minecraft version players are using.",
    },
    {
      question: "Does HackedServer automatically punish cheaters?",
      answer:
        "Yes. HackedServer can automatically alert your staff, block connections, or run custom punishments when a suspicious client or mod is detected, helping your team focus on legitimate players instead of chasing cheaters.",
    },
    {
      question: "Is HackedServer premium?",
      answer:
        "HackedServer is a premium plugin available on Spigot and Polymart. Once purchased, you can use it on your network according to the license terms and receive updates and support.",
    },
    {
      question: "Can I add my own checks?",
      answer:
        "Yes. HackedServer allows you to add your own client checks so you can extend detection for custom use cases or new hacked clients as they appear.",
    },
    {
      question: "Does HackedServer impact server performance?",
      answer:
        "HackedServer is designed to be extremely light on resources. It focuses on checks at connection time, so it runs smoothly on most servers without noticeable performance impact.",
    },
    {
      question: "How do I get started?",
      answer:
        "Drop HackedServer.jar, HackedCore.jar, and ProtocolLib (for 1.17+) into your /plugins/ folder, restart your server, and follow the configuration guide. For Bungeecord setups, install HackedServer on every Spigot server and on the proxy as described in the docs.",
    },
    {
      question: "Where can I find documentation and support?",
      answer:
        "You can read the full documentation at docs.hackedserver.org, and join the community Discord to ask questions, share feedback, and get help with your setup.",
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
                href="https://www.spigotmc.org/resources/%E2%98%A0%EF%B8%8F-hackedserver-mods-clients-detector-1-16-1-21-8.46485/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white no-underline"
              >
                Buy on Spigot
              </Link>
            </Button>
            <Button className="h-10 font-semibold border-2 border-primary bg-transparent text-primary hover:bg-primary/10">
              <Link
                href="https://polymart.org/product/630/hackedserver"
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
          badgeText="Features"
          title={"Why choose " + siteConfig.name + "?"}
          steps={[
            {
              title: "Detect cheats before they strike",
              description:
                "HackedServer runs lightweight checks when players connect, detecting hacked clients and suspicious mods before they even have a chance to cheat on your server.",
              imagePath: "/thread/screenshots/check.png",
            },
            {
              title: "Wide client & mod coverage",
              description:
                "From Forge and Fabric to Labymod, WorldDownloader, Vape Cracked and more, HackedServer covers a large set of popular hacked clients and mods across many Minecraft versions.",
              imagePath: "/thread/screenshots/classify.png",
            },
            {
              title: "Alerts and automatic punishments",
              description:
                "Automatically alert your staff, log suspicious activity, or run custom punishments when a bad client is detected, so your team can focus on your community instead of chasing cheaters.",
              imagePath: "/thread/screenshots/alerts.png",
            },
            {
              title: "Proven in real servers over years",
              description:
                "HackedServer has been battle-tested for years on real servers, evolving through community feedback to stay effective even as new hacked clients appear.",
              ctaText: "Read the documentation",
              ctaLink: "https://docs.hackedserver.org/",
              imagePath: "/thread/screenshots/forge_check.png",
            },
          ]}
        />
        <Faqs items={faqItems} jsonLd={buildFaqJsonLd(faqItems)} />
      </main>
    </>
  );
}

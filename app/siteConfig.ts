export const siteConfig = {
  name: "HackedServer",
  url: "https://hackedserver.org",
  description:
    "A cutting-edge Minecraft plugin that detects cheats and mods as players connect using advanced packet analysis.",
  heroTitle: "Cheaters' Nightmare for Minecraft Servers",
  metaTitle: "HackedServer — Mods & Cheats Detector for Minecraft Servers",
  metaDescription:
    "HackedServer is a lightweight yet powerful Spigot/Paper plugin that detects hacked clients, mods, and cheats at connection time, helping your staff focus on real players instead of chasing cheaters.",
  baseLinks: {
    home: "/",
    blog: "/blog",
  },
  mainCta: "https://docs.hackedserver.org/",
  chatgptPages: ["/chart", "/index.html"],
  blogTitle: "HackedServer Blog",
  blogDescription:
    "Guides, tips, and stories about detecting hacked clients and keeping your Minecraft server fair.",
};

export type siteConfig = typeof siteConfig;

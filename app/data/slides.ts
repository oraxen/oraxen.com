export type SlideTheme =
  | "emerald"
  | "gray"
  | "brown"
  | "lightblue"
  | "indigo"
  | "gold";

export type ContentPosition = "left" | "right";

export interface SlideData {
  id: number;
  theme: SlideTheme;
  background: string;
  /** Chapter label (e.g., "Chapter I") */
  chapter?: string;
  /** Title with \n for line breaks */
  title?: string;
  /** Bullet points - supports HTML for <strong>, <code> */
  bullets?: string[];
  /** Position of the content panel */
  contentPosition?: ContentPosition;
  /** Optional: extra content like images */
  extraContent?: {
    type: "studio-hero";
    src: string;
    alt: string;
  };
}

export const slides: SlideData[] = [
  {
    id: 1,
    theme: "emerald",
    background: "/thread/header.webp",
    // Title slide - no content panel
  },
  {
    id: 2,
    theme: "gray",
    background: "/thread/background1.jpg",
    chapter: "Chapter I",
    title: "Stop Looking Like\nEvery Other Server",
    bullets: [
      "Most servers look the same, and you have seconds to stand out.",
      "Oraxen gives you custom items, blocks, armors, GUIs and chat glyphs in one plugin.",
      "Players join and instantly see a world that reflects your vision.",
    ],
    contentPosition: "left",
  },
  {
    id: 3,
    theme: "brown",
    background: "/thread/background2.jpg",
    chapter: "Chapter II",
    title: "Turn Visuals into\nRetention & Revenue",
    bullets: [
      "<strong>Seamless resource-pack UX:</strong> players join once, accept, and everything just works.",
      "Unique cosmetics and GUIs make ranks, crates, and passes feel <strong>premium, not pay-to-win</strong>.",
      "A better first impression leads to more returning players and more people <strong>buying from your store</strong>.",
    ],
    contentPosition: "right",
  },
  {
    id: 4,
    theme: "lightblue",
    background: "/thread/background4.jpg",
    chapter: "Chapter III",
    title: "Professional Tooling\nfor Serious Networks",
    bullets: [
      "<strong>Automatic pack generation,</strong> optimization and delivery. No zips, merges, or broken textures.",
      "Lightweight, production-proven core running on real servers for <strong>5+ years</strong>.",
      "Fully <strong>open source</strong> with clean APIs: no lock-in and a workflow your developers can trust.",
    ],
    contentPosition: "left",
  },
  {
    id: 5,
    theme: "indigo",
    background: "/thread/background3.jpg",
    chapter: "Chapter IV",
    title: "Express Your Vision\nWithout Writing Code",
    bullets: [
      "No coding needed. Create items, blocks, and armors in your browser with <strong>Oraxen Studio</strong>.",
      "Private beta. Request access on our Discord.",
    ],
    contentPosition: "right",
    extraContent: {
      type: "studio-hero",
      src: "/thread/generation.png",
      alt: "Oraxen Studio – AI texture generation",
    },
  },
  {
    id: 6,
    theme: "gold",
    background: "/thread/background5.jpg",
    chapter: "Chapter V",
    title: "Build a Server\nPlayers Remember",
    bullets: [
      "Install Oraxen, open <strong>Oraxen Studio</strong>, create content, reload. That's your pipeline.",
      "Give your team a single tool that makes the server feel like a <strong>custom game</strong>, not a preset.",
      "If you want a server that grows, earns money, and showcases your creativity, <strong>build it on Oraxen</strong>.",
    ],
    contentPosition: "left",
  },
];

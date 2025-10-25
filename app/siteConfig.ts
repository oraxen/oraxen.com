export const siteConfig = {
  name: "GraphGPT",
  url: "https://graphgpt.app",
  description:
    "Create charts and visualize data in ChatGPT. GraphGPT turns your prompts into line, bar, area, and pie charts.",
  heroTitle: "Create charts in ChatGPT",
  metaTitle: "GraphGPT — Create Charts in ChatGPT (Line, Bar, Pie, Area)",
  metaDescription:
    "Visualize data and generate beautiful charts directly inside ChatGPT using GraphGPT. Supports line, bar, area, and pie charts.",
  baseLinks: {
    home: "/",
    blog: "/blog",
  },
  mainCta: "/#how-it-works",
  relensUrl: "https://relens.ai/",
  chatgptPages: ["/chart", "/index.html"],
  blogTitle: "GraphGPT Blog",
  blogDescription: "Discover insights on GraphGPT and how to use it.",
};

export type siteConfig = typeof siteConfig;

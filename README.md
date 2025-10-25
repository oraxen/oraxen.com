# Oraxen — Custom Items & Blocks for Minecraft

**Create unlimited custom items, blocks, furniture, and more for your Minecraft server.** Oraxen is the most powerful and flexible plugin for adding custom content to Spigot and Paper servers. Generate resource packs automatically, create custom textures and models, and enhance your server with unique content.

**[Download Oraxen Now →](https://oraxen.com)** | **[View Documentation →](https://docs.oraxen.com)**

![Oraxen custom items showcase](https://oraxen.com/assets/demo.png)

---

## Features

- **Custom Items & Blocks**: Create unlimited custom items and blocks with custom textures and models using simple YAML configuration files.
- **Automatic Resourcepack**: Oraxen generates resource packs automatically and uploads them to Polymath (or your own hosting) for seamless player distribution.
- **Custom Furniture**: Build custom furniture with precise positioning, custom models, and display-entity support for immersive server experiences.
- **Custom Armor**: Create custom armor sets with component-based (1.21.2+) or trim-based (1.20-1.21.1) systems.
- **Glyphs & Emoji**: Add custom glyphs and emoji to enhance server communication and player engagement.
- **Extensible API**: Full API support for developers to create custom mechanics, add plugin compatibility, and build custom integrations.

---

## How to Use Oraxen

Oraxen makes adding custom content to your Minecraft server simple. Configure items using YAML files:

1. Create item files in `/plugins/oraxen/items/`
2. Define textures, models, and properties
3. Use Oraxen mechanics for furniture, farming, note blocks, and more
4. Players automatically receive the resource pack when joining

**Learn more:** [Browse documentation →](https://docs.oraxen.com)

---

## How to Install Oraxen

Get Oraxen set up on your server in minutes:

1.  Download **CommandAPI** (required dependency) from [CommandAPI releases](https://commandapi.jorel.dev/downloads)
2.  Download **Oraxen** from [Spigot](https://www.spigotmc.org/resources/oraxen.72448/) or [Polymart](https://polymart.org/resource/oraxen.629)
3.  Place both `.jar` files in your server's `/plugins/` folder
4.  Restart your server
5.  Configure items in `/plugins/oraxen/items/`

> **Server Compatibility:**  
> Works with Spigot and Paper servers running Minecraft 1.18 through 1.21.4. ProtocolLib is recommended but optional.

**📖 Full installation guide:** [Documentation →](https://docs.oraxen.com)

---

## Frequently Asked Questions

### What is Oraxen?
Oraxen is a Minecraft plugin that allows server owners to create custom items, blocks, furniture, armor, and more using custom textures and models. It's open source and includes automatic resourcepack generation.

### What features does Oraxen support?
Oraxen supports custom items, custom blocks, custom armor, custom furniture, glyphs, emoji, custom GUI, custom HUD, and various mechanics like farming, note blocks, string blocks, and more.

### What dependencies are required?
CommandAPI is required. ProtocolLib is recommended but optional. Simply drop the Oraxen and CommandAPI .jar files into your /plugins/ folder and restart your server.

### Does Oraxen work with other plugins?
Yes! Oraxen integrates with many popular plugins including BossShopPro, CrateReloaded, MythicMobs, ModelEngine, TrMenu, HappyHUD, MMoItems, and various world generators.

### Is Oraxen free?
Yes, Oraxen is open source and completely free. You can download it from Spigot or Polymart. The default Polymath instance is free, or you can host your own.

### What Minecraft versions are supported?
Oraxen works with Spigot and Paper servers running Minecraft 1.18 through 1.21.4. For Minecraft 1.21.2+, using the latest version of Oraxen is advised.

**More questions?** [Visit our FAQ page →](https://oraxen.com)

---

## Technical Overview

This repository contains the official Oraxen website built with Next.js.

-   **Framework**: Next.js 15 with App Router
-   **Styling**: Tailwind CSS
-   **Components**: Radix UI for accessible components
-   **Content**: MDX for blog posts
-   **Deployment**: Optimized for Vercel

The website showcases Oraxen's features, provides installation guides, FAQs, and links to the documentation and download pages.

### Example Item Configuration

```yaml
items:
  my_custom_item:
    displayname: "<i:bold>Awesome Sword</i>"
    material: GOLDEN_SWORD
    texture: items/my_sword
    generate_model: GENERATE_ITEM
    Pack:
      generate_model: GENERATE_ITEM
    mechanics:
      click_action:
        left: player_command "give %player% minecraft:diamond 1"
        right: player_command "tell %player% You clicked right!"
```

---

## Local Development

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    pnpm install
    ```
3.  Run the development server:
    ```bash
    pnpm run dev
    ```

The application will be available at `http://localhost:3000`.

---

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com). The production deployment at **oraxen.com** showcases Oraxen's features and provides access to downloads and documentation.

The repository includes:
-   `baseUrl.ts` and `next.config.ts` for correct asset origins.
-   `middleware.ts` for handling routing.
-   `app/sitemap.ts` and `public/robots.txt` configured for SEO.

Live example: [Oraxen Website →](https://oraxen.com)

---

## Project Structure

```
app/
  blog/              # Blog pages and MDX posts
  components/        # React components (UI and blog-specific)
  lib/               # Utility functions (blog helpers, hooks)
  layout.tsx         # Root layout with metadata
  page.tsx           # Landing page with features and FAQs
public/              # Static assets (images, fonts)
middleware.ts        # Routing middleware
next.config.ts       # Next.js configuration
```

---

## Why Oraxen?

**Oraxen** is the **most powerful plugin for custom Minecraft content**. Unlike other plugins that require manual resource pack creation and distribution, Oraxen handles everything automatically with a simple YAML configuration.

**Perfect for:**
- 🎮 **Server owners** who want unique custom content without complexity
- 🏗️ **Server builders** creating immersive experiences with custom furniture and blocks
- 💼 **Developers** building custom plugins and integrations
- 🎨 **Creators** designing custom items, armor, and glyphs

**[Get started with Oraxen →](https://oraxen.com)**

---

## Related Resources

- [Oraxen Documentation](https://docs.oraxen.com)
- [Oraxen on Spigot](https://www.spigotmc.org/resources/oraxen.72448/)
- [Oraxen on Polymart](https://polymart.org/resource/oraxen.629)
- [Next.js Documentation](https://nextjs.org/docs)

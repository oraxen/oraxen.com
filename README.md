# Oraxen | Minecraft Custom Items Plugin

**Oraxen** is a free, open-source Minecraft plugin for Spigot and Paper servers. Create unlimited custom items, blocks, furniture, and armor with automatic resource pack generation. No manual resource pack creation required.

**[Download Free →](https://oraxen.com)** | **[Documentation →](https://docs.oraxen.com)**

![Oraxen showcase](https://oraxen.com/assets/demo.png)

## Features

- ✅ **Custom Items & Blocks** — Create items with custom textures and models via YAML
- ✅ **Automatic Resource Packs** — Auto-generated and hosted for players
- ✅ **Custom Furniture** — Build furniture with precise positioning and models
- ✅ **Custom Armor** — Component-based (1.21.2+) or trim-based (1.20-1.21.1)
- ✅ **Glyphs & Emoji** — Custom communication tools
- ✅ **Open Source** — Free with full API for developers

## Quick Start

### Installation

1. Download [CommandAPI](https://commandapi.jorel.dev/downloads) (required)
2. Download [Oraxen](https://www.spigotmc.org/resources/oraxen.72448/) from Spigot or [Polymart](https://polymart.org/resource/oraxen.629)
3. Place both `.jar` files in `/plugins/`
4. Restart server
5. Configure items in `/plugins/oraxen/items/`

**Compatibility:** Minecraft 1.18 - 1.21.4 | Spigot & Paper | ProtocolLib optional

### Usage

Create YAML files in `/plugins/oraxen/items/`:

```yaml
items:
  custom_sword:
    displayname: "<i:bold>Custom Sword</i>"
    material: GOLDEN_SWORD
    texture: items/my_sword
    generate_model: GENERATE_ITEM
```

Players automatically receive the resource pack when joining.

## FAQ

**What is Oraxen?**  
A Minecraft plugin for creating custom items, blocks, furniture, and armor with automatic resource pack generation.

**Is it free?**  
Yes, Oraxen is completely free and open source.

**What versions are supported?**  
Minecraft 1.18 through 1.21.4 on Spigot and Paper servers.

**What's required?**  
CommandAPI (required) and ProtocolLib (recommended).

**Does it work with other plugins?**  
Yes, integrates with BossShopPro, MythicMobs, ModelEngine, MMoItems, and more.

## Development

This is the Oraxen website built with Next.js 15, Tailwind CSS, and TypeScript.

### Setup

```bash
pnpm install
pnpm run dev
```

Visit `http://localhost:3000`

### Deploy

Optimized for Vercel. Configured with SEO, sitemap, and robots.txt.

## Links

- 🌐 **Website:** [oraxen.com](https://oraxen.com)
- 📚 **Docs:** [docs.oraxen.com](https://docs.oraxen.com)
- 📦 **Spigot:** [Download](https://www.spigotmc.org/resources/oraxen.72448/)
- 🛒 **Polymart:** [Download](https://polymart.org/resource/oraxen.629)
- 💻 **GitHub:** [Source Code](https://git.io/oraxen)

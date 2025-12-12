"use client";

import { siteConfig } from "@/app/siteConfig";
import useScroll from "../../lib/use-scroll";
import { anyRouteStartsWith, cx } from "../../lib/utils";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { BrandLogo } from "../BrandLogo";
import { Button } from "../Button";
import { usePathname } from "next/navigation";

interface NavigationProps {
  sticky?: boolean;
}

// Icon mapping for dynamic icon rendering - unused, commented out
// const iconMap = {
//   RiCodeSSlashLine,
//   RiSearchLine,
// }

export const Navigation: FC<NavigationProps> = ({ sticky = true }) => {
  const scrolled = useScroll(15);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // const [solutionsOpen, setSolutionsOpen] = useState(false)

  if (anyRouteStartsWith(siteConfig.chatgptPages, pathname)) {
    return null;
  }

  useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia("(min-width: 768px)");
    const handleMediaQueryChange = () => {
      setOpen(false);
      // setSolutionsOpen(false)
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange();

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <header
      className={cx(
        "mx-auto mt-3 flex max-w-6xl transform-gpu justify-center overflow-visible rounded-xl border border-transparent px-3 py-3 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform",
        sticky
          ? "fixed inset-x-3 top-4 z-50 animate-slide-down-fade"
          : "relative",
        open === true ? "h-auto" : "h-18",
        (scrolled || open) && sticky === true
          ? "backdrop-blur-nav max-w-3xl border-black/10 bg-background/75 shadow-xl shadow-black/10 dark:border-white/10 dark:shadow-black/30"
          : "bg-white/0"
      )}
    >
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          <Link
            href={siteConfig.baseLinks.home}
            aria-label="Home"
            className="flex items-center gap-4"
          >
            <BrandLogo size={40} />
            <span className="sr-only">{siteConfig.name} logo</span>
          </Link>
          <nav className="hidden md:absolute md:left-1/2 md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <div className="flex items-center gap-10 font-medium">
              <Link
                href="https://www.spigotmc.org/resources/oraxen.72448/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 dark:text-gray-50"
              >
                Spigot
              </Link>
              <Link
                href="https://polymart.org/resource/oraxen.629"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 dark:text-gray-50"
              >
                Polymart
              </Link>
              <Link
                href="https://github.com/oraxen/oraxen"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 dark:text-gray-50"
              >
                GitHub
              </Link>
            </div>
          </nav>
          <div className="flex items-center gap-x-2">
            <Button
              asChild
              className="hidden h-10 bg-primary font-semibold text-white transition-colors hover:bg-primary/90 md:flex"
            >
              <Link
                href={siteConfig.mainCta}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
              >
                View Docs
              </Link>
            </Button>
            <Button
              onClick={() => setOpen(!open)}
              variant="light"
              className="z-10 aspect-square p-2 md:hidden"
            >
              {open ? (
                <RiCloseLine aria-hidden="true" className="size-5" />
              ) : (
                <RiMenuLine aria-hidden="true" className="size-5" />
              )}
            </Button>
          </div>
        </div>
        <nav
          className={cx(
            "mt-6 flex flex-col p-4 text-lg ease-in-out will-change-transform md:hidden",
            open ? "block" : "hidden"
          )}
        >
          <li onClick={() => setOpen(false)}>
            <Link
              className="block py-2 font-medium dark:text-gray-50"
              href={siteConfig.baseLinks.blog}
            >
              Blog
            </Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link
              className="px-2 py-1 dark:text-gray-50"
              href="https://www.spigotmc.org/resources/oraxen.72448/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spigot
            </Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link
              className="px-2 py-1 dark:text-gray-50"
              href="https://polymart.org/resource/oraxen.629"
              target="_blank"
              rel="noopener noreferrer"
            >
              Polymart
            </Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link
              className="px-2 py-1 dark:text-gray-50"
              href="https://git.io/oraxen"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </li>
          <ul className="space-y-4 font-medium">
            <li onClick={() => setOpen(false)}>
              <Button
                asChild
                className="mt-4 w-full bg-primary text-white transition-colors hover:bg-primary/90"
              >
                <Link
                  href={siteConfig.mainCta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  View Docs
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

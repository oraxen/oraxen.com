"use client";

import { siteConfig } from "@/app/siteConfig";
import { usePathname } from "next/navigation";
import { anyRouteStartsWith } from "@/app/lib/utils";

export default function Footer() {
  const pathname = usePathname();

  if (anyRouteStartsWith(siteConfig.chatgptPages, pathname)) {
    return null;
  }
  return (
    <footer id="footer">
      <div className="mx-auto max-w-6xl px-3 pb-8 ">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-light pt-8  sm:flex-row dark:border-gray-800">
          <a
            href={siteConfig.relensUrl}
            className="dark:text-secondary-light text-sm leading-5 text-text-secondary-semi-light"
          >
            &copy; {new Date().getFullYear()} ReLens, LLC. All rights reserved.
          </a>
        </div>
      </div>
    </footer>
  );
}

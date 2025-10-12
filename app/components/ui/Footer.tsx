import { RiArrowRightUpLine } from "@remixicon/react";
import Link from "next/link";
import { BrandLogo } from "../BrandLogo";
import { siteConfig } from "@/app/siteConfig";

const navigation = {
  // product: [
  //   { name: "Changelog", href: "/changelog", external: false },
  //   { name: "Pricing", href: "/pricing", external: false },
  // ],
  tools: [
    {
      name: "SEO Value Checker",
      href: siteConfig.relensUrl + "/seo-value-checker",
      external: false,
    },
    {
      name: "Bing SERP Checker",
      href: siteConfig.relensUrl + "/bing-serp-checker",
      external: false,
    },
  ],
  company: [
    { name: "Blog", href: "/blog", external: false },
    { name: "x.com", href: "https://x.com/fricoben", external: true },
  ],
  legal: [
    { name: "Privacy", href: "/privacy", external: false },
    { name: "Terms", href: "/terms", external: false },
  ],
};

export default function Footer() {
  return (
    <footer id="footer">
      <div className="mx-auto max-w-6xl px-3 pb-8 pt-16 sm:pt-24 lg:pt-32">
        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between">
          <div className="space-y-8 xl:max-w-sm">
            <BrandLogo size={20} />
            <p className="dark:text-secondary-light text-sm leading-6 text-text-secondary px-6 sm:px-0">
              A full-stack SEO agency made of AI agents: they strategize, write,
              and publish while you stay in control. Built in Lisbon, made for
              the world.
            </p>
          </div>
          <div className="mt-16 xl:mt-0">
            <div className="grid grid-cols-3 gap-20">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-text-secondary-dark dark:text-gray-50">
                  SEO tools
                </h3>
                <ul
                  className="mt-6 space-y-4"
                  aria-label="Quick links SEO tools"
                >
                  {navigation.tools.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="dark:text-secondary-light flex rounded-md text-sm text-text-secondary-semi-light transition hover:text-text-secondary-dark dark:hover:text-gray-50"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-1 aspect-square size-4 rounded-full bg-light p-1 dark:bg-gray-500/20">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full shrink-0 text-text-secondary-dark dark:text-gray-300"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-text-secondary-dark dark:text-gray-50">
                  Company
                </h3>
                <ul className="mt-6 space-y-4" aria-label="Quick links Company">
                  {navigation.company.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="dark:text-secondary-light flex rounded-md text-sm text-text-secondary-semi-light transition hover:text-text-secondary-dark dark:hover:text-gray-50"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-1 aspect-square size-4 rounded-full bg-light p-1 dark:bg-gray-500/20">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full shrink-0 text-text-secondary-dark dark:text-gray-300"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-text-secondary-dark dark:text-gray-50">
                  Legal
                </h3>
                <ul className="mt-6 space-y-4" aria-label="Quick links Legal">
                  {navigation.legal.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="dark:text-secondary-light flex rounded-md text-sm text-text-secondary-semi-light transition hover:text-text-secondary-dark dark:hover:text-gray-50"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-1 aspect-square size-4 rounded-full bg-light p-1 dark:bg-gray-500/20">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full shrink-0 text-text-secondary-dark dark:text-gray-300"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-light pt-8 sm:mt-20 sm:flex-row lg:mt-24 dark:border-gray-800">
          <p className="dark:text-secondary-light text-sm leading-5 text-text-secondary-semi-light">
            &copy; {new Date().getFullYear()} ReLens, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
